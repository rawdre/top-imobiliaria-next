(function () {
  if (document.getElementById("topinhoLauncher")) return;

  var MASCOT_SVG =
    '<svg class="topinho-static-mascot" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<circle cx="60" cy="8" r="5" fill="#D32F2F"/><path d="M58 13 L62 13 L64 18 L56 18 Z" fill="#1B2A4A" opacity=".9"/>' +
    '<path d="M24 38 C24 20,40 12,60 12 C80 12,96 20,96 38 L96 44 L24 44 Z" fill="#E0302F"/>' +
    '<path d="M35 26 L58 16 C60 15,62 15,64 16 L85 27" stroke="#FFF7F3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
    '<path d="M28 40 C30 31,40 25,60 25 C80 25,90 31,92 40" fill="#C81F26"/>' +
    '<circle cx="20" cy="56" r="10" fill="#D32F2F"/><circle cx="100" cy="56" r="10" fill="#D32F2F"/><circle cx="20" cy="56" r="6.5" fill="#202838"/><circle cx="100" cy="56" r="6.5" fill="#202838"/>' +
    '<rect x="26" y="28" width="68" height="56" rx="20" fill="#F5F1EA"/><rect x="34" y="38" width="52" height="34" rx="16" fill="#142130"/>' +
    '<circle cx="50" cy="55" r="9.5" fill="#FFFDF8"/><circle cx="70" cy="55" r="9.5" fill="#FFFDF8"/><circle cx="52" cy="57" r="5.5" fill="#0E5CA8"/><circle cx="72" cy="57" r="5.5" fill="#0E5CA8"/>' +
    '<circle cx="53.5" cy="56" r="2.4" fill="#05070B"/><circle cx="73.5" cy="56" r="2.4" fill="#05070B"/><circle cx="56" cy="52" r="1.6" fill="#FFF"/><circle cx="76" cy="52" r="1.6" fill="#FFF"/>' +
    '<path d="M46 48 C48 45,52 45,55 47" stroke="#314258" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M65 47 C68 45,72 45,74 48" stroke="#314258" stroke-width="2.2" stroke-linecap="round" fill="none"/>' +
    '<path d="M51 67 C56 73,64 73,69 67" stroke="#FFFDF8" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M59 69 C61 69,63 70,64 72" stroke="#F87171" stroke-width="3" stroke-linecap="round" fill="none"/>' +
    '<rect x="43" y="84" width="34" height="26" rx="10" fill="#F5F1EA"/><rect x="48" y="89" width="24" height="18" rx="6" fill="#1B2231"/><path d="M52 99 L60 92 L68 99" stroke="#E0302F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
    '<text x="60" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#FFFDF8">Top</text>' +
    '<path d="M42 86 L30 96" stroke="#1B2231" stroke-width="6" stroke-linecap="round"/><path d="M78 86 L90 74" stroke="#1B2231" stroke-width="6" stroke-linecap="round"/><path d="M90 74 C97 72,101 76,102 82" stroke="#1B2231" stroke-width="6" stroke-linecap="round" fill="none"/>' +
    '<path d="M43 109 L37 118" stroke="#1B2231" stroke-width="6" stroke-linecap="round"/><path d="M77 109 L83 118" stroke="#1B2231" stroke-width="6" stroke-linecap="round"/><path d="M33 118 H48" stroke="#1B2231" stroke-width="6" stroke-linecap="round"/><path d="M72 118 H87" stroke="#1B2231" stroke-width="6" stroke-linecap="round"/>' +
    '<path d="M35 35 C39 30,47 29,54 30" stroke="#A71E24" stroke-width="2" stroke-linecap="round" fill="none"/>' +
    '</svg>';

  var style = document.createElement("style");
  style.textContent = [
    ".topinho-static-launcher{position:fixed;left:24px;bottom:24px;width:74px;height:74px;border-radius:24px;border:1px solid rgba(255,255,255,.84);background:radial-gradient(circle at 30% 25%,#fff 0%,#f8f9fc 60%,#e8edf5 100%);box-shadow:0 18px 46px rgba(27,42,74,.28),0 6px 16px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1100}",
    ".topinho-static-launcher::before{content:\"\";position:absolute;inset:7px;border-radius:inherit;background:radial-gradient(circle,rgba(211,47,47,.18),transparent 66%);animation:topinhoHalo 3.6s ease-in-out infinite;pointer-events:none}",
    ".topinho-static-face{position:relative;z-index:1;width:60px;height:60px;display:grid;place-items:center;animation:topinhoFloat 4.8s ease-in-out infinite}",
    ".topinho-static-mascot{display:block;width:100%;height:100%;filter:drop-shadow(0 6px 10px rgba(27,42,74,.18))}",
    ".topinho-static-panel{position:fixed;left:24px;bottom:108px;width:min(360px,calc(100vw - 48px));background:#fff;border:1px solid #eef1f6;border-radius:20px;overflow:hidden;box-shadow:0 24px 60px rgba(27,42,74,.25),0 8px 20px rgba(0,0,0,.08);z-index:1100;display:none;font-family:inherit}",
    ".topinho-static-panel.open{display:block;animation:topinhoPanelIn .22s cubic-bezier(.4,0,.2,1)}",
    ".topinho-static-header{background:linear-gradient(135deg,rgba(27,42,74,.98),rgba(36,54,86,.98));color:#fff;padding:16px 20px;display:flex;align-items:center;gap:12px}",
    ".topinho-static-title{flex:1}.topinho-static-title strong{display:block;font-size:15px}.topinho-static-title span{color:rgba(255,255,255,.75);font-size:11px}",
    ".topinho-static-close{width:30px;height:30px;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;cursor:pointer;font-size:18px}",
    ".topinho-static-body{padding:16px 20px 20px;background:#f8f9fc}.topinho-static-bubble{background:#fff;border:1px solid #eef1f6;border-radius:16px 16px 16px 4px;padding:12px 14px;margin-bottom:16px;color:#2c3345;font-size:14px;line-height:1.45}",
    ".topinho-static-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.topinho-static-grid a{min-height:52px;border:1px solid #d8dde8;border-radius:12px;background:#fff;color:#1B2A4A;text-decoration:none;font-size:13px;font-weight:700;line-height:1.2;display:flex;align-items:center;gap:7px;padding:10px 12px;transition:transform .15s ease,border-color .15s ease,box-shadow .15s ease}",
    ".topinho-static-grid a:hover{border-color:#1B2A4A;transform:translateY(-2px);box-shadow:0 10px 24px rgba(27,42,74,.1)}.topinho-static-foot{padding:10px 16px;border-top:1px solid #eef1f6;color:#5a6478;background:#fff;text-align:center;font-size:11px}",
    "@keyframes topinhoFloat{0%,100%{transform:translate3d(0,0,0) rotate(0)}48%{transform:translate3d(0,-2px,0) rotate(-1.2deg)}72%{transform:translate3d(0,-1px,0) rotate(.8deg)}}@keyframes topinhoHalo{0%,100%{opacity:.28;transform:scale(.88)}50%{opacity:.52;transform:scale(1.04)}}@keyframes topinhoPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.22);opacity:.72}}@keyframes topinhoPanelIn{from{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}",
    "@media(max-width:640px){.topinho-static-launcher{left:18px;bottom:18px;width:66px;height:66px;border-radius:22px}.topinho-static-panel{left:18px;bottom:96px;width:min(360px,calc(100vw - 36px))}}"
  ].join("");
  document.head.appendChild(style);

  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<button class="topinho-static-launcher" id="topinhoLauncher" type="button" aria-label="Abrir assistente Topinho" aria-expanded="false"><span class="topinho-static-face" aria-hidden="true">' + MASCOT_SVG + '</span></button>' +
    '<div class="topinho-static-panel" id="topinhoPanel" role="dialog" aria-label="Assistente Top Imobiliária">' +
    '<div class="topinho-static-header"><span class="topinho-static-face" aria-hidden="true" style="width:48px;height:48px;">' + MASCOT_SVG + '</span><div class="topinho-static-title"><strong>Topinho</strong><span>● Top Imobiliária • online</span></div><button class="topinho-static-close" id="topinhoClose" type="button" aria-label="Fechar">×</button></div>' +
    '<div class="topinho-static-body"><div class="topinho-static-bubble">Oi! Sou o <strong>Topinho</strong>. Posso te ajudar a navegar pelos imóveis, prédios e contato da Top.</div><div class="topinho-static-grid">' +
    '<a href="/#imoveis">🔑 Quero alugar</a><a href="/#imoveis">🏛️ Quero comprar</a><a href="/#simulador">⭐ Avaliar meu imóvel</a><a href="https://wa.me/556130424344?text=Ol%C3%A1!%20Estava%20no%20site%20da%20Top%20Imobili%C3%A1ria%20e%20gostaria%20de%20uma%20ajuda." target="_blank" rel="noopener noreferrer">💬 Falar no WhatsApp</a><a href="/#consorcio">📄 Consórcio x Financiamento</a><a href="/#proprietarios">🏠 Sou proprietário</a><a href="/#programa-indicacao">🎁 Indique e Ganhe</a><a href="/#localizacao">📍 Nossa localização</a><a href="/buildings.html">🏢 Conhecer prédios</a><a href="/#blog">📖 Ler conteúdo</a>' +
    '</div></div><div class="topinho-static-foot">Atendimento humano disponível em horário comercial</div></div>';
  document.body.appendChild(wrapper);

  var launcher = document.getElementById("topinhoLauncher");
  var panel = document.getElementById("topinhoPanel");
  var close = document.getElementById("topinhoClose");
  function setOpen(open) {
    panel.classList.toggle("open", open);
    launcher.setAttribute("aria-expanded", open ? "true" : "false");
  }
  launcher.addEventListener("click", function () {
    setOpen(!panel.classList.contains("open"));
  });
  close.addEventListener("click", function () {
    setOpen(false);
  });
  panel.addEventListener("click", function (event) {
    if (event.target.tagName === "A") setOpen(false);
  });
})();
