(function(){
"use strict";
const BANK=window.QUESTOES;
const LETTERS=["A","B","C","D"];
const KEY="simDevOps:ultimasPosicoes";
const $=id=>document.getElementById(id);

let order=[], answers=[], cur=0, lastPos={};

try{const s=localStorage.getItem(KEY); if(s) lastPos=JSON.parse(s)||{};}catch(e){lastPos={};}

function rnd(n){
  if(window.crypto&&crypto.getRandomValues){const a=new Uint32Array(1);crypto.getRandomValues(a);return a[0]%n;}
  return Math.floor(Math.random()*n);
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}

/* Gabarito equilibrado: cada letra é correta em 5 questões, a posição da correta
   nunca repete a da tentativa anterior e não há 3 respostas iguais seguidas. */
function assignPositions(ids){
  const base=[];for(let p=0;p<4;p++)for(let k=0;k<5;k++)base.push(p);
  for(let t=0;t<20000;t++){
    shuffle(base);
    let ok=true;
    for(let i=0;i<ids.length&&ok;i++){
      if(lastPos[ids[i]]===base[i]) ok=false;
      if(i>=2&&base[i]===base[i-1]&&base[i]===base[i-2]) ok=false;
    }
    if(ok) return base.slice();
  }
  return ids.map(id=>{let p;do{p=rnd(4);}while(p===lastPos[id]);return p;});
}

function build(){
  const qs=shuffle(BANK.slice());
  const pos=assignPositions(qs.map(q=>q.id));
  order=qs.map((q,i)=>{
    const opts=new Array(4);
    const wrong=shuffle(q.no.slice());
    opts[pos[i]]={t:q.ok,c:true};
    let w=0;for(let k=0;k<4;k++){if(!opts[k])opts[k]={t:wrong[w++],c:false};}
    return {q,opts,correct:pos[i]};
  });
  const save={};order.forEach(o=>save[o.q.id]=o.correct);
  lastPos=save;
  try{localStorage.setItem(KEY,JSON.stringify(save));}catch(e){}
  answers=new Array(order.length).fill(null);
  cur=0;
}

function show(id){["s-intro","s-quiz","s-id","s-res"].forEach(s=>$(s).classList.toggle("hidden",s!==id));window.scrollTo(0,0);}

function renderPipe(){
  const p=$("pipe");p.innerHTML="";
  order.forEach((o,i)=>{
    const b=document.createElement("button");
    b.textContent=i+1;
    b.className=(answers[i]!==null?"done ":"")+(i===cur?"cur":"");
    b.setAttribute("aria-label","Questão "+(i+1)+(answers[i]!==null?", respondida":", sem resposta"));
    if(i===cur)b.setAttribute("aria-current","step");
    b.onclick=()=>{cur=i;renderQ();};
    p.appendChild(b);
  });
  const n=answers.filter(a=>a!==null).length;
  $("pi-count").textContent=n+" de "+order.length+" respondidas";
  $("pi-pos").textContent="Questão "+(cur+1);
}

function esc(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

function renderQ(){
  const o=order[cur], c=$("qcard");
  c.classList.remove("enter");void c.offsetWidth;c.classList.add("enter");
  let h='<div class="qnum">Questão '+(cur+1)+'</div><div class="qtema">'+esc(o.q.tema)+'</div>';
  h+='<div class="ctx">'+esc(o.q.ctx)+'</div><p class="qtext" id="qt">'+esc(o.q.q)+'</p><div class="opts" role="radiogroup" aria-labelledby="qt">';
  o.opts.forEach((op,k)=>{
    const sel=answers[cur]===k;
    h+='<label class="opt'+(sel?' sel':'')+'"><input type="radio" name="op" value="'+k+'"'+(sel?' checked':'')+'><span class="let">'+LETTERS[k]+'</span><span>'+esc(op.t)+'</span></label>';
  });
  h+='</div>';
  c.innerHTML=h;
  c.querySelectorAll("input").forEach(inp=>inp.addEventListener("change",()=>{
    answers[cur]=+inp.value;
    c.querySelectorAll(".opt").forEach((l,k)=>l.classList.toggle("sel",k===answers[cur]));
    renderPipe();updateNav();
  }));
  renderPipe();updateNav();
}

function updateNav(){
  $("b-prev").disabled=cur===0;
  const last=cur===order.length-1;
  const all=answers.every(a=>a!==null);
  $("b-next").classList.toggle("hidden",last);
  $("b-finish").classList.toggle("hidden",!(last||all));
  $("b-finish").disabled=!all;
  $("b-finish").textContent=all?"Finalizar e ver resultado":"Faltam "+answers.filter(a=>a===null).length+" questões";
}

/* validação de nome */
const NAME_RE=/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '\-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const LOWER=new Set(["da","de","do","das","dos","e"]);
function clean(s){return s.replace(/\s+/g," ").trim();}
function titleCase(s){return s.toLowerCase().split(" ").map((w,i)=>(i>0&&LOWER.has(w))?w:w.charAt(0).toUpperCase()+w.slice(1)).join(" ");}
function checkPart(v,label){
  if(!v) return "Informe o "+label+".";
  if(!NAME_RE.test(v)) return "Use apenas letras no "+label+", sem números ou símbolos.";
  const letters=v.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g,"");
  if(letters.length<2) return "O "+label+" precisa ter pelo menos 2 letras.";
  if(/(.)\1\1/i.test(letters)) return "Confira o "+label+": há letras repetidas em sequência.";
  return "";
}
function validate(){
  const n=clean($("f-nome").value), s=clean($("f-sob").value);
  let en=checkPart(n,"nome"), es=checkPart(s,"sobrenome");
  if(!en&&!es&&n.toLowerCase()===s.toLowerCase()) es="O sobrenome não pode ser igual ao nome.";
  $("e-nome").textContent=en;$("e-sob").textContent=es;
  $("f-nome").setAttribute("aria-invalid",en?"true":"false");
  $("f-sob").setAttribute("aria-invalid",es?"true":"false");
  if(en){$("f-nome").focus();return null;}
  if(es){$("f-sob").focus();return null;}
  return titleCase(n)+" "+titleCase(s);
}

function hash(str){let h=0x811c9dc5;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}return h.toString(16).toUpperCase().padStart(8,"0");}

function result(name){
  let hits=0;
  order.forEach((o,i)=>{if(answers[i]===o.correct)hits++;});
  const pct=Math.round(hits/order.length*100);
  const now=new Date();
  const when=now.toLocaleDateString("pt-BR")+" às "+now.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
  const sig=order.map((o,i)=>o.q.id+":"+answers[i]+":"+o.correct).join("|");
  const code=hash(name.toLowerCase()+"#"+hits+"#"+now.toISOString()+"#"+sig);
  $("r-name").textContent=name;
  $("r-score").innerHTML=hits+'<small> / '+order.length+'</small>';
  $("r-pct").textContent=pct+"% de acertos";
  $("r-verdict").textContent=pct>=90?"Excelente domínio do conteúdo":pct>=70?"Bom desempenho":pct>=50?"No caminho, revise os pontos errados":"Vale revisar as apostilas e refazer";
  $("r-meta").innerHTML='Concluído em <b>'+when+'</b>. Código de verificação: <span class="code">'+code.slice(0,4)+'-'+code.slice(4)+'</span>';
  const rv=$("review");rv.innerHTML="";
  order.forEach((o,i)=>{
    const right=answers[i]===o.correct;
    const d=document.createElement("div");
    d.className="rv "+(right?"right":"wrong");
    let h='<h3>Questão '+(i+1)+' <span class="tag '+(right?'right':'wrong')+'">'+(right?'Acertou':'Errou')+'</span></h3><p>'+esc(o.q.q)+'</p>';
    if(!right) h+='<p>Sua resposta: <b>'+LETTERS[answers[i]]+')</b> '+esc(o.opts[answers[i]].t)+'</p>';
    h+='<p>Resposta correta: <b>'+LETTERS[o.correct]+')</b> '+esc(o.opts[o.correct].t)+'</p><p class="exp">'+esc(o.q.exp)+'</p>';
    d.innerHTML=h;rv.appendChild(d);
  });
  show("s-res");
}

$("b-start").onclick=()=>{build();show("s-quiz");renderQ();};
$("b-prev").onclick=()=>{if(cur>0){cur--;renderQ();}};
$("b-next").onclick=()=>{if(cur<order.length-1){cur++;renderQ();}};
$("b-finish").onclick=()=>{if(answers.every(a=>a!==null)){show("s-id");$("f-nome").focus();}};
$("b-back").onclick=()=>{show("s-quiz");renderQ();};
$("b-validate").onclick=()=>{const n=validate();if(n)result(n);};
["f-nome","f-sob"].forEach(id=>$(id).addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();$("b-validate").click();}}));
$("b-redo").onclick=()=>{$("f-nome").value="";$("f-sob").value="";$("e-nome").textContent="";$("e-sob").textContent="";build();show("s-quiz");renderQ();};
$("b-print").onclick=()=>window.print();
})();
