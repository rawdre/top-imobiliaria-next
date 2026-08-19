export function GET() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return Response.json(
    { gtmId: gtmId?.startsWith("GTM-") ? gtmId : null },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    },
  );
}
