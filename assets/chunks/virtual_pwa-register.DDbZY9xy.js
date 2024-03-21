function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as u}from"./framework.3RHGp9W5.js";function p(c={}){const{immediate:o=!1,onNeedRefresh:_,onOfflineReady:d,onRegistered:r,onRegisteredSW:s,onRegisterError:t}=c;let a,n,i;const f=async(e=!0)=>{await n,await(i==null?void 0:i())};async function l(){if("serviceWorker"in navigator){if(a=await u(()=>import("./workbox-window.prod.es5.DFjpnwFp.js"),__vite__mapDeps([])).then(({Workbox:e})=>new e("/sw.js",{scope:"/",type:"classic"})).catch(e=>{t==null||t(e)}),!a)return;i=async()=>{await(a==null?void 0:a.messageSkipWaiting())},a.register({immediate:o}).then(e=>{s?s("/sw.js",e):r==null||r(e)}).catch(e=>{t==null||t(e)})}}return n=l(),f}export{p as registerSW};
