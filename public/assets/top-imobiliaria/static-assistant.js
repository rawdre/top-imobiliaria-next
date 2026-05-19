(function () {
  if (document.getElementById("topinhoLauncher")) return;

  var style = document.createElement("style");
  style.textContent = [
    ".topinho-static-launcher{position:fixed;left:24px;bottom:24px;width:74px;height:74px;border-radius:24px;border:1px solid rgba(255,255,255,.84);background:radial-gradient(circle at 30% 25%,#fff 0%,#f8f9fc 60%,#e8edf5 100%);box-shadow:0 18px 46px rgba(27,42,74,.28),0 6px 16px rgba(0,0,0,.08),inset 0 1px 0 rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1100}",
    ".topinho-static-launcher::before{content:\"\";position:absolute;inset:7px;border-radius:inherit;background:radial-gradient(circle,rgba(211,47,47,.18),transparent 66%);animation:topinhoHalo 3.6s ease-in-out infinite;pointer-events:none}",
    ".topinho-static-face{position:relative;z-index:1;width:54px;height:54px;border-radius:18px;background:#f5f1ea;display:grid;place-items:center;color:#1B2A4A;font-size:30px;box-shadow:inset 0 -7px 0 rgba(27,42,74,.08);animation:topinhoFloat 4.8s ease-in-out infinite}",
    ".topinho-static-face::before{content:\"\";position:absolute;top:-10px;width:10px;height:10px;border-radius:50%;background:#D32F2F;box-shadow:0 0 0 4px rgba(211,47,47,.12);animation:topinhoPulse 2.8s ease-in-out infinite}",
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
    '<button class="topinho-static-launcher" id="topinhoLauncher" type="button" aria-label="Abrir assistente Topinho" aria-expanded="false"><span class="topinho-static-face" aria-hidden="true">🤖</span></button>' +
    '<div class="topinho-static-panel" id="topinhoPanel" role="dialog" aria-label="Assistente Top Imobiliária">' +
    '<div class="topinho-static-header"><span class="topinho-static-face" aria-hidden="true" style="width:48px;height:48px;font-size:25px;">🤖</span><div class="topinho-static-title"><strong>Topinho</strong><span>● Top Imobiliária • online</span></div><button class="topinho-static-close" id="topinhoClose" type="button" aria-label="Fechar">×</button></div>' +
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
