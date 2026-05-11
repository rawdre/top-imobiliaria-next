import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/legacy/")) {
    return NextResponse.next();
  }

  const fetchDestination = request.headers.get("sec-fetch-dest");
  const isInternalSectionsRequest =
    request.nextUrl.searchParams.get("top_internal_sections") === "1";
  const isInternalLegacyHomeFetch =
    pathname === "/legacy/index.html" &&
    isInternalSectionsRequest &&
    fetchDestination !== "document";

  if (isInternalLegacyHomeFetch) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname.replace(/^\/legacy/, "") || "/";

  if (redirectUrl.pathname === "/index.html") {
    redirectUrl.pathname = "/";
  }

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/legacy/:path*"],
};
