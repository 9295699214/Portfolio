(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4341:function(e,t,r){Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.t.bind(r,7402,23)),Promise.resolve().then(r.t.bind(r,7977,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(9268);r(6006);var i=r(8121),n=r(3838),o=r(5846),s=r.n(o),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(i&&(i+=" "),i+=a);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:n.Ok.map(n=>(0,a.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===n.name}),href:n.hash,onClick:()=>{t(n.name),r(Date.now())},children:[n.name,n.name===e&&(0,a.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},n.hash))})})]})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return n},default:function(){return o},useActiveSectionContext:function(){return s}});var a=r(9268),i=r(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[r,o]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,a.jsx)(n.Provider,{value:{activeSection:r,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o},useTheme:function(){return s}});var a=r(9268),i=r(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[r,o]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(o(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(o("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(n.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(o("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(o("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},3838:function(e,t,r){"use strict";r.d(t,{$c:function(){return s},Ok:function(){return o},nD:function(){return l},ZU:function(){return c}});var a=r(6006),i=r(2801),n=r(7782);let o=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],s=[{title:"Intern",location:"Panchkula, India",company:"DigiSpice Pvt. Ltd",description:"After I graduated and Interned as a frontend developer, specializing in Angular and JavaScript, responsible for creating dynamic pages and enhancing UI experiences.",icon:a.createElement(n.qWM),date:"May 2018 - Feb 2019"},{title:"Front-End Developer",location:"Pune, India",company:"Tata Consultancy Services",description:"Skilled frontend developer proficient in Angular, creating cross-platform applications for seamless user experiences through reusable modules and comprehensive testing.",icon:a.createElement(i.huN),date:"March 2019 - Oct 2020"},{title:"Software Developer",location:"Panchkula, India",company:"Grazitti Interative",description:"Experienced software developer proficient in custom solutions and data analysis, leveraging tools like IntelliJ and Visual Studio to deliver tailored applications for improved business performance.",icon:a.createElement(n.qWM),date:"Nov 2020 - Aug 2022"}],l=[{title:"Search Unify",description:"SearchUnify is a robust AI-driven enterprise search platform designed to optimize knowledge management and support workflows, facilitating efficient information retrieval and enhancing user experiences",tags:["Javascript","React","Node JS","Salesforce Permissions","customized software solutions"],imageUrl:{src:"/Portfolio//_next/static/media/searchunifyImg.a6b3996f.png",height:940,width:1560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEUEECwCCCAKHjkuQFYfKkRbTzSer9yeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nB2KsQ0AIACDoNX/XzaViRBQhghJJqe37VpWwD/pAwQtADAvRdESAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},{title:"JetBlue Airlines",description:"Igor Operations at JetBlue Airlines streamline flight operations and improve efficiency through advanced technology solutions, ensuring smoother and more reliable air travel experiences for passengers.",tags:["Angular","Javascript","Git","Validating Inputs","Responsive Design"],imageUrl:{src:"/Portfolio//_next/static/media/jetblueImg.bb4eb40c.png",height:746,width:888,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAS1BMVEVJjM1SgrpYaH9VltV0o9ltnNVhmth/quJQj85nk8xJg8Lb4Ox2o90iTIMuZZ5Ieq9ykLa6x9g5hsc5RleZrMuevuNye4zb19qboa0/czMOAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAOklEQVR4nB3BCRaAIAhAwY+CgVa21/1P2qsZ3PlsgGdkdU4tVaaeuVs7ZK6FlK4n7UvBIiJMjeE36gsypgG/bfQy/gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},{title:"Gear Tracking",description:"Developed a vehicle tracking website with robust permissions, secure authentication, QR scanner integration for gear tracking, and PostgreSQL database management.",tags:["Javacript","React JS","Node JS","Prisma"],imageUrl:{src:"/Portfolio//_next/static/media/geartrack.ec3ffc8d.png",height:340,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUQFyYVHi4cJzowY8wgAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAG0lEQVR4nGNgQAFMIIKRiREEGBiYGBkgNFQAAAGgABr1gs2KAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},{title:"CUWIP CUNY",description:"Explore CUNY CUWiP 2024, the official hub for the Conference for Undergraduate Women in Physics, featuring schedules, speakers, workshops, and registration.",tags:["Custom Templates","Google Sites","Responsive Design"],imageUrl:{src:"/Portfolio//_next/static/media/cuwip.5c6aa7ea.png",height:1492,width:2858,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEX7/Pzb5e6UlJPj4d/q6efH1uulpKPQ3vDMy8uUnqbe8feNoK/a2diTprRseM4aAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nGPg5WRiYmJj42ZgZGHm4GFmYWRAAC52VlZ2RgYACk8Ae18LVIkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}}],c=["HTML","JavaScript","TypeScript","React","Angular","Next.js","Node.js","Git","Tailwind","Prisma","MongoDB","Express","PostgreSQL","Python"]},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_0f7c84', '__Inter_Fallback_0f7c84'",fontStyle:"normal"},className:"__className_0f7c84"}},8919:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return G},ErrorIcon:function(){return F},LoaderIcon:function(){return Q},ToastBar:function(){return ee},ToastIcon:function(){return H},Toaster:function(){return ei},default:function(){return en},resolveValue:function(){return E},toast:function(){return D},useToaster:function(){return z},useToasterStore:function(){return T}});var n,o=r(6006);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",i="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+o+";":a+="f"==n[1]?p(o,n):n+"{"+p(o,"k"==n[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(n,o):n+":"+o+";")}return r+(t&&i?t+"{"+i+"}":i)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,i)=>{var n;let o=f(e),s=m[o]||(m[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!m[s]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[s]=p(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&m.g?m.g:null;return r&&(m.g=m[s]),n=m[s],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),s},h=(e,t,r)=>e.reduce((e,a,i)=>{let n=t[i];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function A(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}A.bind({g:1});let b,y,v,x=A.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function i(n,o){let s=Object.assign({},n),l=s.className||i.className;r.p=Object.assign({theme:y&&y()},s),r.o=/ *go\d+/.test(l),s.className=A.apply(r,a)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),b(c,s)}return t?t(i):i}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,C=(a=0,()=>(++a).toString()),I=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},S=new Map,P=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),R({type:4,toastId:e})},1e3);S.set(e,t)},N=e=>{let t=S.get(e);t&&clearTimeout(t)},U=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&N(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?U(e,{type:1,toast:r}):U(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?P(a):e.toasts.forEach(e=>{P(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},j=[],M={toasts:[],pausedAt:void 0},R=e=>{M=U(M,e),j.forEach(e=>{e(M)})},B={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=(e={})=>{let[t,r]=(0,o.useState)(M);(0,o.useEffect)(()=>(j.push(r),()=>{let e=j.indexOf(r);e>-1&&j.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||B[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},J=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),V=e=>(t,r)=>{let a=J(t,e,r);return R({type:2,toast:a}),a.id},D=(e,t)=>V("blank")(e,t);D.error=V("error"),D.success=V("success"),D.loading=V("loading"),D.custom=V("custom"),D.dismiss=e=>{R({type:3,toastId:e})},D.remove=e=>R({type:4,toastId:e}),D.promise=(e,t,r)=>{let a=D.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(D.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{D.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var O=(e,t)=>{R({type:1,toast:{id:e,height:t}})},_=()=>{R({type:5,time:Date.now()})},z=e=>{let{toasts:t,pausedAt:r}=T(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&D.dismiss(t.id);return}return setTimeout(()=>D.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,o.useCallback)(()=>{r&&R({type:6,time:Date.now()})},[r]),i=(0,o.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:n}=r||{},o=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:O,startPause:_,endPause:a,calculateOffset:i}}},F=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Q=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,G=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,L=w("div")`
  position: absolute;
`,$=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,H=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(W,null,t):t:"blank"===r?null:o.createElement($,null,o.createElement(Q,{...a}),"loading"!==r&&o.createElement(L,null,"error"===r?o.createElement(F,{...a}):o.createElement(G,{...a})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,q=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=I()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),K(r)];return{animation:t?`${x(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?Z(e.position||t||"top-center",e.visible):{opacity:0},n=o.createElement(H,{toast:e}),s=o.createElement(q,{...e.ariaProps},E(e.message,e));return o.createElement(X,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):o.createElement(o.Fragment,null,n,s))});n=o.createElement,p.p=void 0,b=n,y=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let n=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:n,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=z(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let n=r.position||t,s=er(n,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?E(r.message,r):i?i(r):o.createElement(ee,{toast:r,position:n}))}))},en=D}},function(e){e.O(0,[296,166,584,253,769,744],function(){return e(e.s=4341)}),_N_E=e.O()}]);