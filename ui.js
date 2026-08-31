/* =========================================================
   UI — toasts, modais, formulários, navegação
   ========================================================= */
function toast(msg,kind='ok'){
  const ico=kind==='ok'?'check':kind==='err'?'warn':'bolt';
  const el=document.createElement('div');
  el.className='toast '+kind; el.innerHTML=ic(ico)+`<span>${esc(msg)}</span>`;
  $('#toasts').appendChild(el);
  setTimeout(()=>{el.style.transition='.3s';el.style.opacity=0;el.style.transform='translateX(40px)';setTimeout(()=>el.remove(),320)},2900);
}
function closeModal(){ const v=$('#veil'); v.classList.remove('on'); v.innerHTML=''; }
function modal({title,body,footer,wide,onOpen}){
  const v=$('#veil');
  v.innerHTML=`<div class="modal ${wide?'wide':''}" role="dialog" aria-modal="true">
    <div class="mh"><h3>${esc(title)}</h3><div class="sp"></div><div class="x" onclick="closeModal()" aria-label="Fechar">${ic('x')}</div></div>
    <div class="mb">${body}</div>${footer?`<div class="mf">${footer}</div>`:''}</div>`;
  v.classList.add('on');
  v.onclick=e=>{if(e.target===v)closeModal()};
  onOpen&&onOpen(v);
  const fi=v.querySelector('input,select,textarea'); if(fi&&innerWidth>880)setTimeout(()=>fi.focus(),120);
}
function confirmDel(txt,fn){
  modal({title:'Confirmar exclusão',body:`<p class="mut" style="margin:0">${esc(txt)} Esta ação não pode ser desfeita.</p>`,
    footer:`<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn d" id="okdel">${ic('trash')}Excluir</button>`,
    onOpen:v=>{v.querySelector('#okdel').onclick=()=>{fn();closeModal()}}});
}
console.log('ui.js partial - full module loading...');
