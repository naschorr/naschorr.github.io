import{a as A,b as E}from"./chunk-Y2N53OAD.js";import{$ as h,A as O,D as o,G as w,H as s,I as l,J as c,N as g,O as y,Q as f,R as b,U as d,V as p,W as M,aa as F,ca as S,da as v,ga as T,ka as P,m as u,y as r,z as N}from"./chunk-M5AQ46ZS.js";import"./chunk-JMZ7DUBM.js";var U=(i,e)=>({active:i,inactive:e});function H(i,e){if(i&1&&(s(0,"span",2),f(1),l()),i&2){let _=e.$implicit,t=y();o("ngClass",M(2,U,_==t.activeOption,_!=t.activeOption)),r(1),b(_)}}var L=i=>({width:i}),k=(()=>{let e=class e{constructor(t){this.swapOptions=[],this.activeOption="",this._widthPixels=75,this._changeDetectorRef=t}ngAfterViewInit(){let t=document.querySelector(".swap-option");this._widthPixels=t?.offsetWidth??this._widthPixels,this._changeDetectorRef.detectChanges()}get widthPixels(){return this._widthPixels}};e.\u0275fac=function(a){return new(a||e)(N(O))},e.\u0275cmp=u({type:e,selectors:[["text-swapper"]],inputs:{swapOptions:"swapOptions",activeOption:"activeOption"},standalone:!0,features:[d],decls:2,vars:4,consts:[[1,"swap-option-container",3,"ngStyle"],["class","swap-option",3,"ngClass",4,"ngFor","ngForOf"],[1,"swap-option",3,"ngClass"]],template:function(a,n){a&1&&(s(0,"div",0),w(1,H,2,5,"span",1),l()),a&2&&(o("ngStyle",p(2,L,n.widthPixels+"px")),r(1),o("ngForOf",n.swapOptions))},dependencies:[v,h,F,S],styles:["[_nghost-%COMP%]{display:inline-block;height:100%;vertical-align:bottom}.swap-option-container[_ngcontent-%COMP%]{position:relative;display:inline-block;height:100%}.swap-option[_ngcontent-%COMP%]{position:absolute;left:0;top:0}.swap-option.active[_ngcontent-%COMP%]{opacity:1;transition:opacity .1s ease-in}.swap-option.inactive[_ngcontent-%COMP%]{opacity:0;transition:opacity .1s ease-out}"]});let i=e;return i})();var C=i=>({active:i}),x=(()=>{let e=class e{constructor(){this.DEFAULT_NOUN="stuff",this.NOUN_CYCLE_TIME_MS=1500,this._actionNouns=[this.DEFAULT_NOUN,"code","projects","prints"],this._actionNoun=this.DEFAULT_NOUN}ngOnInit(){let t=1;this._actionNounCycleInterval=setInterval(()=>{this.actionNoun=this.actionNouns[t],t=(t+1)%this.actionNouns.length},this.NOUN_CYCLE_TIME_MS)}get actionNouns(){return this._actionNouns}get actionNoun(){return this._actionNoun}set actionNoun(t){this.actionNouns.includes(t)&&(this._actionNoun=t)}resetActionNoun(){this.actionNoun=this.DEFAULT_NOUN}stopActionNounCycling(){clearInterval(this._actionNounCycleInterval)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=u({type:e,selectors:[["home"]],standalone:!0,features:[d],decls:19,vars:12,consts:[[1,"bg-gradient-dark","h-screen","w-screen"],[1,"flex","flex-col","justify-center","items-center","w-full","h-full"],["size","8rem","containerClasses","m-2"],[1,"m-2"],[1,"tagline"],[1,"noun"],[3,"swapOptions","activeOption"],[1,"flex","justify-between"],["href","https://github.com/naschorr","target","_blank",1,"nav-container","m-2",3,"mouseover","mouseleave"],["src","assets/images/icons/github.png","alt","GitHub logo outlines",1,"icon","nav-item"],["src","assets/images/icons/github-filled.png","alt","GitHub logo filled in",1,"icon","nav-item","hoverable",3,"ngClass"],["routerLink","/projects",1,"nav-container","m-2",3,"mouseover","mouseleave"],["src","assets/images/icons/flask.png","alt","Outlined image of a flask used in scientific experiments",1,"icon","nav-item"],["src","assets/images/icons/flask-filled.png","alt","Filled in image of a flask used in scientific experiments",1,"icon","nav-item","hoverable",3,"ngClass"],["href","https://www.printables.com/@naschorr_134538","target","_blank",1,"nav-container","m-2",3,"mouseover","mouseleave"],["src","assets/images/icons/3d-printer.png","alt","Outlined image of a 3d printer",1,"icon","nav-item"],["src","assets/images/icons/3d-printer-filled.png","alt","Filled in image of a 3d printer",1,"icon","nav-item","hoverable",3,"ngClass"],["containerClasses","color-light m-1 px-3",3,"isAbsolute"]],template:function(a,n){a&1&&(s(0,"div",0)(1,"div",1),c(2,"logo",2),s(3,"div",3)(4,"span",4),f(5,"Nick makes "),s(6,"span",5),c(7,"text-swapper",6),l()()(),s(8,"div",7)(9,"a",8),g("mouseover",function(){return n.actionNoun="code",n.stopActionNounCycling()})("mouseleave",function(){return n.resetActionNoun()}),c(10,"img",9)(11,"img",10),l(),s(12,"a",11),g("mouseover",function(){return n.actionNoun="projects",n.stopActionNounCycling()})("mouseleave",function(){return n.resetActionNoun()}),c(13,"img",12)(14,"img",13),l(),s(15,"a",14),g("mouseover",function(){return n.actionNoun="prints",n.stopActionNounCycling()})("mouseleave",function(){return n.resetActionNoun()}),c(16,"img",15)(17,"img",16),l()()(),c(18,"footer",17),l()),a&2&&(r(7),o("swapOptions",n.actionNouns)("activeOption",n.actionNoun),r(4),o("ngClass",p(6,C,n.actionNoun=="code")),r(3),o("ngClass",p(8,C,n.actionNoun=="projects")),r(3),o("ngClass",p(10,C,n.actionNoun=="prints")),r(1),o("isAbsolute",!0))},dependencies:[k,A,v,h,P,T,E],styles:[".icon[_ngcontent-%COMP%]{filter:brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(41%) hue-rotate(137deg) brightness(114%) contrast(95%)}.logo[_ngcontent-%COMP%]{height:8rem}.tagline[_ngcontent-%COMP%]{color:#f8f8f8;font: 1.5rem Urbanist,sans-serif}.tagline[_ngcontent-%COMP%]   .noun[_ngcontent-%COMP%]{font-weight:bolder;font-style:italic}"]});let i=e;return i})();var J=[{path:"",component:x}];export{J as default};