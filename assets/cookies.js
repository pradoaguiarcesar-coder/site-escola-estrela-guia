/* Banner de cookies (LGPD) + Google Consent Mode v2 — Escola Estrela Guia */
(function(){
  var GA4_ID = ''; // preencher com o ID do Google Analytics 4 (ex.: 'G-XXXXXXXXXX')
  var KEY='eg_cookies';
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function aplicar(v){
    if(typeof gtag!=='function')return;
    var g=v==='sim'?'granted':'denied';
    gtag('consent','update',{ad_storage:g,ad_user_data:g,ad_personalization:g,analytics_storage:g});
  }
  if(GA4_ID && typeof gtag==='function'){
    var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+GA4_ID;document.head.appendChild(s);
    gtag('config',GA4_ID);
  }
  function banner(){
    if(document.getElementById('eg-cookies'))return;
    var d=document.createElement('div');d.id='eg-cookies';d.setAttribute('role','dialog');d.setAttribute('aria-label','Aviso de cookies');
    d.innerHTML='<p>Usamos cookies para medir as visitas e melhorar nossos anúncios. Você pode aceitar ou recusar. Saiba mais na <a href="/politica-de-privacidade/">Política de privacidade</a>.</p><div class="eg-ck-bt"><button type="button" data-v="nao">Recusar</button><button type="button" data-v="sim" class="eg-ck-ok">Aceitar</button></div>';
    d.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;set(b.dataset.v);aplicar(b.dataset.v);d.remove();});
    document.body.appendChild(d);
  }
  if(!get())banner();
  document.addEventListener('click',function(e){var a=e.target.closest('[data-cookies]');if(a){e.preventDefault();banner();}});
})();
