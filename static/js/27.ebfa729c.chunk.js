"use strict";(self.webpackChunkfbbath=self.webpackChunkfbbath||[]).push([[27],{27:(e,t,r)=>{r.r(t),r.d(t,{Contact:()=>S,default:()=>_});var o=r(5043),i=r(5464);class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const s={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},n=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=await fetch(s.origin+e,{method:"POST",headers:r,body:t}),i=await o.text(),n=new a(o.status,i);if(o.ok)return n;throw n},c=(e,t,r)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!==typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d=e=>e.webdriver||!e.languages||0===e.languages.length,p=()=>new a(451,"Unavailable For Headless Browser"),h=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const r=(o=t,i=e.watchVariable,o instanceof FormData?o.get(i):o[i]);var o,i;return"string"===typeof r&&e.list.includes(r)},m=()=>new a(403,"Forbidden"),u=async(e,t,r)=>{if(!t.throttle||!r)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const o=t.id||e,i=await(async(e,t,r)=>{const o=Number(await r.get(e)||0);return t-Date.now()+o})(o,t.throttle,r);return i>0||(await r.set(o,Date.now().toString()),!1)},b=()=>new a(429,"Too Many Requests"),g=async(e,t,r,o)=>{const i=n(o),a=i.publicKey||s.publicKey,g=i.blockHeadless||s.blockHeadless,f=s.storageProvider||i.storageProvider,x={...s.blockList,...i.blockList},w={...s.limitRate,...i.limitRate};if(g&&d(navigator))return Promise.reject(p());const y=(e=>"string"===typeof e?document.querySelector(e):e)(r);c(a,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(y);const j=new FormData(y);return h(x,j)?Promise.reject(m()):await u(location.pathname,w,f)?Promise.reject(b()):(j.append("lib_version","4.4.1"),j.append("service_id",e),j.append("template_id",t),j.append("user_id",a),l("/api/v1.0/email/send-form",j))};r(4050);var f=r(579);const x=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9; 
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px; 
  margin: 0 auto;
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

`,w=i.I4.form`
  width: 100%; 
`,y=i.I4.label`
font-weight: 700;

  display: block;
  margin-bottom: 12px; 
  font-size: 16px; 
  color: #333; 
`,j=i.I4.input`
  width: 100%; 
  padding: 10px; 
  margin-bottom: 20px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 16px; 

  &:focus {
    outline: none; 
    border-color: #007bff; 
  }
`,v=i.I4.textarea`
  width: 100%; 
  padding: 10px; 
  margin-bottom: 20px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 16px; 
  resize: vertical;

  &:focus {
    outline: none; 
    border-color: #007bff; 
  }
`,k=i.I4.button`
font-weight: 700;
width: 200px;
height: 50px;
background: linear-gradient(90deg, #6BAB4C, #338B41);

  color: black; 
  padding: 10px 15px; 
  border: none; 
  border-radius: 4px; 
  font-size: 16px; 
  cursor: pointer; 
  transition: background-color 0.3s; 

  &:hover {
    background-color: #0056b3;
  }
`,I=i.I4.div`
display:flex;
flex-direction:column;
align-self: center;
justify-content:center;
align-items:center; 
padding:30px;
font-weight: 700;
font-size: larger;
margin-top : 0px;`,S=()=>{const e=(0,o.useRef)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{children:(0,f.jsxs)(w,{ref:e,onSubmit:t=>{t.preventDefault(),g("FBbath_37_20","template_pjenobc",e.current,"mv34fnzDd-j6ru_BT").then((t=>{alert("\uc131\uacf5\uc801\uc73c\ub85c \uc774\uba54\uc77c\uc774 \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.current.reset()}),(e=>{console.log(e.text),alert("\uc774\uba54\uc77c\uc774 \uc804\uc1a1\uc774 \uc2e4\ud328\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}))},children:[(0,f.jsxs)(y,{children:["\ub2f5\ubcc0\ubc1b\uc744 \uc774\uba54\uc77c",(0,f.jsx)(j,{type:"email",name:"user_email",placeholder:"ex)abcd@naver.com",required:!0})]}),(0,f.jsxs)(y,{children:["\ud68c\uc2e0\ubc1b\uc744 \uc5f0\ub77d\ucc98",(0,f.jsx)(j,{type:"tel",name:"user_tel",placeholder:"ex) 010-0000-0000",required:!0})]}),(0,f.jsxs)(y,{children:["\uc6d0\ud558\uc2dc\ub294 \uc2dc\uacf5\uc744 \uc801\uc5b4\uc8fc\uc138\uc694",(0,f.jsx)(j,{type:"text",name:"user_subject",placeholder:"\uc608) \uc2e0\ucd95\uacf5\uc0ac, \ud0c0\uc77c\uacf5\uc0ac , \ubc30\uad00\uacf5\uc0ac (20\uc790 \uc774\ub0b4)",maxLength:20,required:!0})]}),(0,f.jsxs)(y,{children:["\ubb38\uc758 \ub0b4\uc6a9",(0,f.jsx)(v,{name:"user_message",placeholder:"\ubb38\uc758\uc0ac\ud56d\ub4e4\uc744 \uc801\uc5b4\uc8fc\uc138\uc694, \uc2dc\uacf5\uc0c1\ub2f4\uc744 \uc704\ud55c \uae30\ucd08\uc815\ubcf4\uc785\ub2c8\ub2e4.",required:!0})]}),(0,f.jsx)(k,{type:"submit",children:" \ubb38\uc758\ud558\uae30 "})]})}),(0,f.jsxs)(I,{children:[(0,f.jsx)("p",{children:" \uc571\uc73c\ub85c \ubb38\uc758\ud558\uae30 "}),(0,f.jsxs)("div",{className:"button_div",style:{marginTop:"5px"},children:[(0,f.jsx)("button",{className:"button_soomgo",onClick:()=>{window.location.href="https://soomgo.com/profile/users/6109002"},children:" "}),(0,f.jsx)("button",{className:"button_miso",onClick:()=>{window.location.href="https://miso.kr/partners/24111"},children:" "})]})]})]})},_=S}}]);
//# sourceMappingURL=27.ebfa729c.chunk.js.map