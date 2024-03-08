import{a as le,b as se}from"./chunk-Y2N53OAD.js";import{$ as D,A as H,B as te,D as l,F as ie,G as g,H as o,I as s,J as d,K as v,L as x,M as L,N as f,O as p,P as ne,Q as h,R as S,S as V,U as M,V as A,W as F,X as Q,Y as q,Z as B,_ as ae,aa as C,ba as E,ca as U,d as I,da as j,ga as re,i as P,j as J,ka as oe,l as G,m as u,n as Y,q as k,r as R,s as K,t as X,u as y,w as Z,x as ee,y as m,z as _}from"./chunk-M5AQ46ZS.js";import"./chunk-JMZ7DUBM.js";var me=(()=>{let e=class e{constructor(){this.title=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["header"]],inputs:{title:"title"},standalone:!0,features:[M],decls:17,vars:1,consts:[[1,"color-medium","header-blurred","w-full","pointer-events-none"],[1,"container","mx-auto","flex","justify-between"],[1,"flex","items-center","pl-0","md:pl-3","py-1","mx-3","md:mx-4","pointer-events-auto"],["routerLink","",1,"logo-container","hoverable-feature","mr-3"],["size","1.5rem","logoClasses","bg-gradient-feature","title","Home"],[1,"bg-gradient-feature-short","clip-text","select-none"],[1,"flex","items-center","pr-0","md:pr-3","py-1","mx-2","md:mx-3","pointer-events-auto"],["href","https://github.com/naschorr","target","_blank","title","My GitHub",1,"nav-container","inline-block","m-2"],[1,"bg-gradient-medium","github-mask","maskable","nav-item"],[1,"bg-gradient-light","github-filled-mask","maskable","nav-item","hoverable"],["routerLink","/projects","title","Projects",1,"nav-container","inline-block","m-2"],[1,"bg-gradient-medium","flask-mask","maskable","nav-item"],[1,"bg-gradient-light","flask-filled-mask","maskable","nav-item","hoverable"],["href","https://www.printables.com/@naschorr_134538","target","_blank","title","3D Printing",1,"nav-container","inline-block","m-2"],[1,"bg-gradient-medium","printer-mask","maskable","nav-item"],[1,"bg-gradient-light","printer-filled-mask","maskable","nav-item","hoverable"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),d(4,"logo",4),s(),o(5,"h1",5),h(6),s()(),o(7,"div",6)(8,"a",7),d(9,"div",8)(10,"div",9),s(),o(11,"a",10),d(12,"div",11)(13,"div",12),s(),o(14,"a",13),d(15,"div",14)(16,"div",15),s()()()()),n&2&&(m(6),S(r.title))},dependencies:[j,oe,re,se],styles:["[_nghost-%COMP%]{position:sticky;top:0;z-index:100}.header-blurred[_ngcontent-%COMP%]{background:rgb(29,34,42);background:linear-gradient(45deg,rgb(29,34,42) 0%,rgb(15,38,63) 100%);border-image-source:linear-gradient(90deg,rgb(247,148,30),rgb(242,86,33));border-left:0;border-right:0;border-top:0;border-width:2px;border-image-slice:1}@supports (backdrop-filter: blur()){.header-blurred[_ngcontent-%COMP%]{background:rgba(29,34,42,.5);background:linear-gradient(45deg,rgba(29,34,42,.5) 0%,rgba(15,38,63,.2) 100%);-webkit-backdrop-filter:blur(.5rem);backdrop-filter:blur(.5rem)}}.logo-container[_ngcontent-%COMP%]{border-radius:50%;transition:box-shadow .25s ease-in-out}.logo-container.hoverable-feature[_ngcontent-%COMP%]:hover{box-shadow:0 0 1rem #f7941e}.logo-container.hoverable-dark[_ngcontent-%COMP%]:hover{box-shadow:0 0 1rem #1d222a}.logo-container.hoverable-medium[_ngcontent-%COMP%]:hover{box-shadow:0 0 1rem #d4c5b7}.logo-container.hoverable-light[_ngcontent-%COMP%]:hover{box-shadow:0 0 1rem #f8f8f8}.icon[_ngcontent-%COMP%]{filter:brightness(0) saturate(100%) invert(83%) sepia(9%) saturate(394%) hue-rotate(348deg) brightness(96%) contrast(90%)}"]});let t=e;return t})();var xe=["thumbnailImage"],be=["fullResImage"],Ie=t=>({opacity:t});function ye(t,e){if(t&1){let a=L();o(0,"img",4,5),f("load",function(){k(a);let n=p();return R(n.onFullResImageLoaded())}),s()}if(t&2){let a=p();l("ngStyle",A(3,Ie,a.isFullResImageLoaded?1:0))("src",a.image.fullResUrl,y)("alt",a.image.altText)}}var Ce=(t,e)=>({height:t,width:e}),ce=(()=>{let e=class e{constructor(i){this._changeDetectorRef=i,this._isFullResImageLoaded=!1,this._imageWidth=0,this._imageHeight=0,this.canLoadFullResImage=!1,this.fullResImageLoadedEvent=new te}ngAfterViewInit(){this.recalculateImageHeight()}set image(i){this._image=i,this._isFullResImageLoaded=!1}get image(){return this._image}get isFullResImageLoaded(){return this._isFullResImageLoaded}get imageWidth(){return this._imageWidth}get imageHeight(){return this._imageHeight}getActualHeightOfImagePixels(){let i=this.thumbnailImageView.nativeElement.offsetHeight,n=this.fullResImageView?.nativeElement?.offsetHeight??0;return Math.max(i,n)}recalculateImageHeight(){this._imageHeight=this.getActualHeightOfImagePixels(),this._imageWidth=this._imageHeight*this.image.aspectRatio,this._changeDetectorRef.detectChanges()}onWindowResize(){this.recalculateImageHeight()}onFullResImageLoaded(){this._isFullResImageLoaded=!0,this.fullResImageLoadedEvent.emit(),this.recalculateImageHeight()}};e.\u0275fac=function(n){return new(n||e)(_(H))},e.\u0275cmp=u({type:e,selectors:[["image-display"]],viewQuery:function(n,r){if(n&1&&(q(xe,5),q(be,5)),n&2){let c;Q(c=B())&&(r.thumbnailImageView=c.first),Q(c=B())&&(r.fullResImageView=c.first)}},inputs:{canLoadFullResImage:"canLoadFullResImage",image:"image"},outputs:{fullResImageLoadedEvent:"fullResImageLoadedEvent"},decls:4,vars:7,consts:[[1,"image-display-container","relative",3,"ngStyle","resize"],[1,"absolute","top-0","bottom-0","my-auto",3,"src","alt"],["thumbnailImage",""],["class","absolute top-0 bottom-0 my-auto",3,"ngStyle","src","alt","load",4,"ngIf"],[1,"absolute","top-0","bottom-0","my-auto",3,"ngStyle","src","alt","load"],["fullResImage",""]],template:function(n,r){n&1&&(o(0,"div",0),f("resize",function(){return r.onWindowResize()},!1,K),d(1,"img",1,2),g(3,ye,2,5,"img",3),s()),n&2&&(l("ngStyle",F(4,Ce,r.imageHeight+"px",r.imageWidth>0?r.imageWidth+"px":"auto")),m(1),l("src",r.image.thumbnailUrl,y)("alt",r.image.altText),m(2),l("ngIf",r.canLoadFullResImage))},dependencies:[E,U],styles:["img[_ngcontent-%COMP%]{transition:all .1s ease-in-out,opacity .5s ease-in-out}.image-display-container[_ngcontent-%COMP%]{width:100%}.image-display-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:auto;object-fit:contain}"]});let t=e;return t})();function Se(t,e){if(t&1&&d(0,"image-display",20),t&2){let a=p();l("image",a.prevImage)("canLoadFullResImage",a.isActiveImageLoaded)}}function we(t,e){if(t&1){let a=L();o(0,"image-display",21),f("fullResImageLoadedEvent",function(){k(a);let n=p();return R(n.onActiveImageLoaded())}),s()}if(t&2){let a=p();l("image",a.activeImage)("canLoadFullResImage",!0)}}function Pe(t,e){if(t&1&&(v(0),o(1,"p",22),h(2),s(),x()),t&2){let a=e.$implicit;m(2),S(a)}}function ke(t,e){if(t&1&&d(0,"image-display",20),t&2){let a=p();l("image",a.nextImage)("canLoadFullResImage",a.isActiveImageLoaded)}}function Re(t,e){if(t&1&&d(0,"image-display",20),t&2){let a=p();l("image",a.prevImage)("canLoadFullResImage",a.isActiveImageLoaded)}}function Le(t,e){if(t&1&&d(0,"image-display",20),t&2){let a=p();l("image",a.nextImage)("canLoadFullResImage",a.isActiveImageLoaded)}}var ge=(()=>{let e=class e{constructor(i){this._galleryManagerService=i,this._isActiveImageLoaded=!1}ngOnInit(){this._galleryManagerService.activeImage$.subscribe(i=>{this._activeImage=i,this._isActiveImageLoaded=!1}),this._galleryManagerService.nextImage$.subscribe(i=>{this._nextImage=i}),this._galleryManagerService.prevImage$.subscribe(i=>{this._prevImage=i})}get activeImage(){return this._activeImage}get prevImage(){return this._prevImage}get nextImage(){return this._nextImage}get isActiveImageLoaded(){return this._isActiveImageLoaded}onCloseClick(){this._galleryManagerService.closeLightbox()}onNextImageClick(){this._galleryManagerService.nextImage()}onPrevImageClick(){this._galleryManagerService.prevImage()}onActiveImageLoaded(){this._isActiveImageLoaded=!0}};e.\u0275fac=function(n){return new(n||e)(_(O))},e.\u0275cmp=u({type:e,selectors:[["gallery-lightbox"]],decls:29,vars:6,consts:[[1,"lighbox-container","flex","flex-col"],[1,"close","grow-0","self-end","cursor-pointer",3,"click"],[1,"gallery-container","grow","flex","items-center"],["title","Previous Image",1,"prev-image","side-nav-image","cursor-pointer","relative","mr-3","hidden","lg:block",3,"click"],[3,"image","canLoadFullResImage",4,"ngIf"],[1,"text-panel","text-end","absolute","color-light","bottom-0","right-0","m-2","p-2"],[1,"hidden","xl:block"],[1,"block","xl:hidden"],[1,"active-image","flex","flex-col","grow","justify-center","mx-3"],[3,"image","canLoadFullResImage","fullResImageLoadedEvent",4,"ngIf"],[1,"description-container","color-light","container","mx-auto","mt-3","lg:mt-6"],[4,"ngFor","ngForOf"],["title","Next Image",1,"next-image","side-nav-image","cursor-pointer","relative","ml-3","hidden","lg:block",3,"click"],[1,"text-panel","absolute","color-light","bottom-0","left-0","m-2","p-2"],[1,"footer","grow-0","hidden","lg:block"],[1,"grow-0","flex","justify-between","lg:hidden","mt-6","mb-3","mx-3"],["title","Previous Image",1,"prev-image","relative","lower-nav-image","cursor-pointer","mr-3",3,"click"],[1,"text-panel","text-end","absolute","color-light","bottom-0","left-0","m-2","p-2"],["title","Next Image",1,"next-image","relative","lower-nav-image","float-right","cursor-pointer","ml-3",3,"click"],[1,"text-panel","absolute","color-light","bottom-0","right-0","m-2","p-2"],[3,"image","canLoadFullResImage"],[3,"image","canLoadFullResImage","fullResImageLoadedEvent"],[1,"text-center","mb-2"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"div",1),f("click",function(){return r.onCloseClick()}),h(2,"\xD7"),s(),o(3,"div",2)(4,"div",3),f("click",function(){return r.onPrevImageClick()}),g(5,Se,1,2,"image-display",4),o(6,"div",5)(7,"span",6),h(8,"Previous"),s(),o(9,"span",7),h(10,"Prev"),s()()(),o(11,"div",8),g(12,we,1,2,"image-display",9),o(13,"div",10),g(14,Pe,3,1,"ng-container",11),s()(),o(15,"div",12),f("click",function(){return r.onNextImageClick()}),g(16,ke,1,2,"image-display",4),o(17,"div",13),h(18," Next "),s()()(),d(19,"div",14),o(20,"div",15)(21,"div",16),f("click",function(){return r.onPrevImageClick()}),g(22,Re,1,2,"image-display",4),o(23,"div",17),h(24," Previous "),s()(),o(25,"div",18),f("click",function(){return r.onNextImageClick()}),g(26,Le,1,2,"image-display",4),o(27,"div",19),h(28," Next "),s()()()()),n&2&&(m(5),l("ngIf",!!r.prevImage),m(7),l("ngIf",!!r.activeImage),m(2),l("ngForOf",r.activeImage==null?null:r.activeImage.description),m(2),l("ngIf",!!r.nextImage),m(6),l("ngIf",!!r.prevImage),m(4),l("ngIf",!!r.nextImage))},dependencies:[C,E,ce],styles:["[_nghost-%COMP%]{pointer-events:none}.lighbox-container[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100dvh;width:100vw;z-index:1000;pointer-events:all;background-color:#0009}@supports (backdrop-filter: blur()){.lighbox-container[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(.5rem);backdrop-filter:blur(.5rem)}}.close[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;margin:2rem;font-size:2.4rem;line-height:1.5rem;color:#d4c5b7;transition:all .1s ease-in-out}.close[_ngcontent-%COMP%]:hover{color:#f8f8f8}.gallery-container[_ngcontent-%COMP%]{height:calc(100% - 11rem)}.side-nav-image[_ngcontent-%COMP%]{width:6rem;height:500px}.lower-nav-image[_ngcontent-%COMP%]{height:100px}  .active-image .image-display-container{width:100%!important}  .active-image .image-display-container img{max-height:800px!important;width:100%}  .side-nav-image .image-display-container{height:500px!important;width:100%!important}  .side-nav-image img{object-fit:cover!important}  .prev-image.side-nav-image img{object-position:right;border-top-left-radius:0;border-bottom-left-radius:0}  .next-image.side-nav-image img{object-position:left;border-top-right-radius:0;border-bottom-right-radius:0}.text-panel[_ngcontent-%COMP%]{background-color:#0009;border-radius:.2rem}  .lower-nav-image .image-display-container{height:100px!important}  .prev-image.lower-nav-image img{object-position:left}  .next-image.lower-nav-image img{object-position:right}  .side-nav-image img,   .lower-nav-image img{height:100%}@media (pointer: fine){  .side-nav-image,   .lower-nav-image{transition:all .1s ease-in-out}  .side-nav-image:hover,   .lower-nav-image:hover{transform:scale(1.1)}}  .side-nav-image .image-display-container,   .lower-nav-image .image-display-container{box-shadow:0 0 10px 2px #0003}.footer[_ngcontent-%COMP%]{height:1.5rem;margin:2rem}"]});let t=e;return t})();var O=(()=>{let e=class e{constructor(i){this._rendererFactory=i,this._activeImageSubject=new I(null),this._nextImageSubject=new I(null),this._prevImageSubject=new I(null),this.activeImage$=this._activeImageSubject.asObservable(),this.nextImage$=this._nextImageSubject.asObservable(),this.prevImage$=this._prevImageSubject.asObservable(),this._renderer=this._rendererFactory.createRenderer(null,null),this._activeGallery=null,this._activeImageIndex=null,this._activeImage=null}get activeGallery(){return this._activeGallery}get activeImageIndex(){return this._activeImageIndex}get activeImage(){return this._activeImage}_setActiveImage(i){if(i===null){this._activeImage=null,this._activeImageSubject.next(null),this._nextImageSubject.next(null),this._prevImageSubject.next(null);return}let n=this.calculateSafeGalleryindex(i),r=this.calculateSafeGalleryindex(i-1),c=this.calculateSafeGalleryindex(i+1);this._activeImage=this.activeGallery?.[n]??null,this._activeImageSubject.next(this._activeImage);let w=this.activeGallery?.[r]??null;this._prevImageSubject.next(w);let ve=this.activeGallery?.[c]??null;this._nextImageSubject.next(ve)}calculateSafeGalleryindex(i){for(;i<0;)i+=this.activeGallery.length;return i%this.activeGallery.length}openLightbox(i,n,r,c){this._activeGallery=r,this._activeImageIndex=n,this._setActiveImage(this.activeImageIndex??n),this._galleryComponent=c.createComponent(ge),this._renderer.addClass(document.querySelector("html"),"overflow-y-hidden")}closeLightbox(){this._activeGallery=null,this._activeImageIndex=null,this._setActiveImage(null),this._galleryComponent?.destroy(),this._galleryComponent=null,this._renderer.removeClass(document.querySelector("html"),"overflow-y-hidden")}nextImage(){this._stepImage(1)}prevImage(){this._stepImage(-1)}_stepImage(i){if(!this.activeGallery||this.activeImageIndex===null)throw new Error("No active gallery or image index");this._activeImageIndex=this.calculateSafeGalleryindex(this.activeImageIndex+i),this._setActiveImage(this.activeImageIndex)}};e.\u0275fac=function(n){return new(n||e)(G(Z))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:$});let t=e;return t})();var Me=t=>({"mr-2":t}),Fe=(t,e)=>({width:"auto",height:t,"aspect-ratio":e});function Ee(t,e){if(t&1){let a=L();v(0),o(1,"div",2)(2,"img",3),f("click",function(){let n=k(a),r=n.$implicit,c=n.index,w=p();return R(w.onImageClick(r,c))}),s()(),x()}if(t&2){let a=e.$implicit,i=e.index,n=p();m(1),l("ngClass",A(4,Me,i<n.images.length-1))("ngStyle",F(6,Fe,a.thumbnailHeightPx+" px",a.aspectRatio-.001)),m(1),l("src",a.thumbnailUrl,y)("alt",a.altText)}}var pe=(()=>{let e=class e{constructor(i,n){this._galleryManagerService=i,this._viewContainerRef=n,this.images=[]}ngOnInit(){}onImageClick(i,n){this._galleryManagerService.openLightbox(i,n,this.images,this._viewContainerRef)}};e.\u0275fac=function(n){return new(n||e)(_(O),_(ie))},e.\u0275cmp=u({type:e,selectors:[["gallery-inline"]],inputs:{images:"images"},decls:2,vars:1,consts:[[1,"gallery-container","flex"],[4,"ngFor","ngForOf"],[1,"gallery-item","skeleton",3,"ngClass","ngStyle"],[1,"cursor-pointer",3,"src","alt","click"]],template:function(n,r){n&1&&(o(0,"div",0),g(1,Ee,3,9,"ng-container",1),s()),n&2&&(m(1),l("ngForOf",r.images))},dependencies:[D,C,U],styles:["[_nghost-%COMP%]{height:100%;width:100%}@media (min-width: 640px){.gallery-item[_ngcontent-%COMP%]{height:96px}}@media (min-width: 768px){.gallery-item[_ngcontent-%COMP%]{height:108px}}@media (min-width: 1024px){.gallery-item[_ngcontent-%COMP%]{height:120px}}@media (min-width: 1280px){.gallery-item[_ngcontent-%COMP%]{height:132px}}@media (min-width: 1536px){.gallery-item[_ngcontent-%COMP%]{height:144px}}.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:cover;box-shadow:0 0 10px 2px #0003;transition:all .1s ease-in-out}.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Y({type:e}),e.\u0275inj=J({providers:[O],imports:[j]});let t=e;return t})();function Te(t,e){if(t&1&&(o(0,"a",11),h(1),s()),t&2){let a=p(2);l("href",a.project.url,y),m(1),V(" ",a.project.name," ")}}function Ge(t,e){if(t&1&&(o(0,"span",12),h(1),s()),t&2){let a=p(2);m(1),V(" ",a.project.name," ")}}function He(t,e){if(t&1&&(v(0),o(1,"a",13),d(2,"div",14)(3,"div",15),s(),x()),t&2){let a=p(2);m(1),l("href",a.project.url,y)}}function Ae(t,e){if(t&1&&(o(0,"div",16),d(1,"gallery-inline",17),s()),t&2){let a=p(2);m(1),l("images",a.project.images)}}function De(t,e){if(t&1&&(v(0),d(1,"p",18),x()),t&2){let a=e.$implicit;m(1),l("innerHTML",a,X)}}function Ue(t,e){if(t&1&&(o(0,"ul",21)(1,"li"),h(2),s()()),t&2){let a=e.$implicit;m(2),S(a)}}function Ne(t,e){if(t&1&&(o(0,"div",19)(1,"div"),h(2,"Fun Stats:"),s(),g(3,Ue,3,1,"ul",20),s()),t&2){let a=p(2);m(3),l("ngForOf",a.project.funFacts)}}var $e=(t,e)=>({"mr-0":t,"mr-1":e});function We(t,e){if(t&1&&(v(0),o(1,"div",22),h(2),s(),x()),t&2){let a=e.$implicit,i=e.index,n=p(2);m(1),l("ngClass",F(2,$e,i==n.project.technologies.length-1,i<n.project.technologies.length-1)),m(1),S(a)}}function ze(t,e){if(t&1&&(o(0,"div",1)(1,"div",2)(2,"h2"),g(3,Te,2,2,"a",3)(4,Ge,2,1,"ng-template",null,4,ae),s(),g(6,He,4,1,"ng-container",5),s(),g(7,Ae,2,1,"div",6),o(8,"div",7),g(9,De,2,1,"ng-container",8),s(),g(10,Ne,4,1,"div",9),o(11,"div",10)(12,"div"),h(13,"Tech Used:"),s(),g(14,We,3,5,"ng-container",8),s()()),t&2){let a=ne(5),i=p();m(3),l("ngIf",!!i.project.url)("ngIfElse",a),m(3),l("ngIf",!!i.project.url&&i.project.url.hostname.toLowerCase().includes("github")),m(1),l("ngIf",!!i.project.images),m(2),l("ngForOf",i.project.description),m(1),l("ngIf",i.project.funFacts&&i.project.funFacts.length>0),m(4),l("ngForOf",i.project.technologies)}}var he=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["project"]],inputs:{project:"project"},standalone:!0,features:[M],decls:1,vars:1,consts:[["class","panel color-medium mt-3",4,"ngIf"],[1,"panel","color-medium","mt-3"],[1,"flex","justify-between","mb-2","items-center"],["target","_blank","class","bg-gradient-feature-short clip-text underline-feature-gradient",3,"href",4,"ngIf","ngIfElse"],["projectUrlExists",""],[4,"ngIf"],["class","gallery-container mb-2",4,"ngIf"],[1,"description-container","mb-2"],[4,"ngFor","ngForOf"],["class","mb-2",4,"ngIf"],[1,""],["target","_blank",1,"bg-gradient-feature-short","clip-text","underline-feature-gradient",3,"href"],[1,"bg-gradient-feature-short","clip-text"],["target","_blank","title","See it on GitHub!",1,"nav-container","shrink-0","relative","bottom-0.5",3,"href"],[1,"bg-gradient-feature-short","github-mask","maskable","nav-item"],[1,"bg-gradient-feature-short","github-filled-mask","maskable","nav-item","hoverable"],[1,"gallery-container","mb-2"],[3,"images"],[1,"mb-2",3,"innerHTML"],[1,"mb-2"],["class","list-inside",4,"ngFor","ngForOf"],[1,"list-inside"],[1,"badge","technology","bg-gradient-medium","inline-block","select-none",3,"ngClass"]],template:function(n,r){n&1&&g(0,ze,15,7,"div",0),n&2&&l("ngIf",!!r.project)},dependencies:[j,D,C,E,$,pe],styles:[".panel[_ngcontent-%COMP%]{background-color:#f8f8f81a;border-radius:.2rem;padding:1rem;margin:initial 1rem;transition:background-color .1s ease-in-out}.panel[_ngcontent-%COMP%]:hover{background-color:#f8f8f826}.badge[_ngcontent-%COMP%]{margin-top:.2rem;margin-bottom:.2rem;margin-left:0;padding:.2rem .4rem;border-radius:.25rem;font-size:.85rem}.technology[_ngcontent-%COMP%]{background-color:#d4c5b7;color:#1d222a}"]});let t=e;return t})();var W=class{constructor(e,a,i,n,r,c){this._name=e,this._description=a,this._url=i??null,this._funFacts=n??null,this._images=r??null,this._technologies=c??[]}get name(){return this._name}get url(){return this._url}get description(){return this._description}get funFacts(){return this._funFacts}get images(){return this._images}get technologies(){return this._technologies}};var T=class{constructor(e,a,i,n,r,c){this._fullResUrl=e,this._fullResWidthPx=a,this._fullResHeightPx=i,this._thumbnailUrl=n,this._thumbnailWidthPx=r,this._thumbnailHeightPx=c}get fullResUrl(){return this._fullResUrl}get fullResWidthPx(){return this._fullResWidthPx}get fullResHeightPx(){return this._fullResHeightPx}get thumbnailUrl(){return this._thumbnailUrl}get thumbnailWidthPx(){return this._thumbnailWidthPx}get thumbnailHeightPx(){return this._thumbnailHeightPx}get aspectRatio(){return this._fullResWidthPx/this._fullResHeightPx}};var z=class extends T{constructor(e,a,i){super(e.fullResUrl,e.fullResWidthPx,e.fullResHeightPx,e.thumbnailUrl,e.thumbnailWidthPx,e.thumbnailHeightPx),this._description=a,this._altText=i}get description(){return this._description}get altText(){return this._altText}};var ue=(()=>{let e=class e{constructor(){this.IMAGES_DIRECTORY="assets/images/",this.METADATA_JSON_FILENAME="metadata.json",this._images={},this._imagesSubject=new I({}),this.images$=this._imagesSubject.asObservable(),this.loadImages()}get images(){return this._images}set images(i){this._images=i,this._imagesSubject.next(i)}_buildUrl(i){try{return new URL(i)}catch(n){if(n instanceof TypeError)return new URL(`${location.origin}/${i}`);throw n}}loadImages(){fetch(this.IMAGES_DIRECTORY+this.METADATA_JSON_FILENAME).then(i=>i.json()).then(i=>{let n={};for(let r in i){let c=i[r];n[r]=new T(this._buildUrl(c.fullRes.url),c.fullRes.widthPx,c.fullRes.heightPx,this._buildUrl(c.thumbnail.url),c.thumbnail.widthPx,c.thumbnail.heightPx)}this.images=n})}getImageByPath(i){return this.images[i]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var fe=(()=>{let e=class e{constructor(i){this._imageLoaderService=i,this.PROJECTS_URL="assets/data/projects.json",this._projectsSubject=new I([]),this.projects$=this._projectsSubject.asObservable(),this.loadProjects(),this._imageLoaderService.images$.subscribe(n=>{this.loadProjects()})}loadProjects(){fetch(this.PROJECTS_URL.toString()).then(i=>i.json()).then(i=>{let n=i.map(r=>new W(r.name,r.description,r?.url?new URL(r?.url):null,r?.funFacts,r?.images?.map(c=>{let w=this._imageLoaderService.getImageByPath(c.url);return w?new z(w,c.description,c.altText):null}).filter(c=>c!==null),r?.technologies));this._projectsSubject.next(n)})}};e.\u0275fac=function(n){return new(n||e)(G(ue))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function qe(t,e){if(t&1&&(v(0),d(1,"project",5),x()),t&2){let a=e.$implicit;m(1),l("project",a)}}var _e=(()=>{let e=class e{constructor(i,n,r){this._projectLoaderService=i,this._renderer=n,this._changeDetectorRef=r,this._projectsChanged=!1}ngOnInit(){this._projectLoaderService.projects$.subscribe(i=>{this.projects=i})}ngAfterContentChecked(){this.handleProjectsChangeUpdate()}get projects(){return this._projects}set projects(i){this._projects=i,this._projectsChanged=!0,this._changeDetectorRef.detectChanges()}handleProjectsChangeUpdate(){if(this._projectsChanged){let i=document.querySelectorAll(".description-container > p > a");Array.from(i).forEach(n=>{this._renderer.addClass(n,"bg-gradient-feature-short"),this._renderer.addClass(n,"clip-text"),this._renderer.addClass(n,"font-semibold"),this._renderer.addClass(n,"underline-feature-gradient")}),this._projectsChanged=!1}}};e.\u0275fac=function(n){return new(n||e)(_(fe),_(ee),_(H))},e.\u0275cmp=u({type:e,selectors:[["projects"]],standalone:!0,features:[M],decls:5,vars:1,consts:[[1,"bg-gradient-dark","flex","flex-col","min-h-screen","w-screen","pb-1"],["title","Projects"],[1,"container","mx-auto","min-h-full","px-3","flex","flex-col","grow"],[4,"ngFor","ngForOf"],["containerClasses","color-light mt-3"],[3,"project"]],template:function(n,r){n&1&&(o(0,"div",0),d(1,"header",1),o(2,"div",2),g(3,qe,2,1,"ng-container",3),d(4,"footer",4),s()()),n&2&&(m(3),l("ngForOf",r.projects))},dependencies:[me,le,j,C,he]});let t=e;return t})();var Ht=[{path:"",component:_e}];export{Ht as default};