(() => {
const supported = ['ca','es']; let dict = {}; let current = 'ca';
const params = new URLSearchParams(location.search);
try { current = params.get('lang') || localStorage.getItem('shogi-language') || 'ca'; } catch (_) { current = params.get('lang') || 'ca'; }
if (!supported.includes(current)) current = 'ca';
function apply(lang) {
 current=lang; document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=> {const v=dict[lang]?.[el.dataset.i18n];if(v!==undefined)el.textContent=v;});
 ['aria-label','content','alt'].forEach(attr=>document.querySelectorAll('[data-i18n-'+attr+']').forEach(el=>{const v=dict[lang]?.[el.getAttribute('data-i18n-'+attr)];if(v!==undefined)el.setAttribute(attr,v);}));
 document.querySelectorAll('[data-language]').forEach(el=>{const active=el.dataset.language===lang;el.setAttribute('aria-pressed',active);el.toggleAttribute('data-active',active);});
 document.querySelectorAll('a[href]').forEach(el=>{const raw=el.getAttribute('href');if(!raw||raw.startsWith('#'))return;const url=new URL(raw,location.href);if(url.origin===location.origin&&url.pathname.endsWith('.html')){url.searchParams.set('lang',lang);el.setAttribute('href',url.pathname.split('/').pop()+url.search+url.hash);}});
 try{localStorage.setItem('shogi-language',lang);}catch(_){}
 const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);
 document.dispatchEvent(new CustomEvent('shogi:language',{detail:lang}));
}
window.ShogiI18n={get language(){return current;}};
window.shogiLanguageReady=fetch('assets/data/traduccions.json').then(r=>{if(!r.ok)throw Error('translations');return r.json();}).then(data=>{dict=data;apply(current);}).catch(()=>{current='ca';document.documentElement.lang='ca';});
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>window.shogiLanguageReady.then(()=>apply(button.dataset.language))));
})();