import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const o="feedback-form-state",a=document.querySelector(".feedback-form"),r=a.querySelector('textarea[name="message"]'),l=a.querySelector('input[name="email"]');s();a.addEventListener("submit",i);a.addEventListener("input",m);function s(){const e=localStorage.getItem(o);if(!e)return;const n=JSON.parse(e);l.value=n.email||"",r.value=n.message||""}const t={email:"",message:""};function m(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem(o,JSON.stringify(t))}function i(e){if(e.preventDefault(),!l.value||!r.value)return alert("Fill please all fields");t.email=l.value.trim(),t.message=r.value.trim(),console.log(t),localStorage.removeItem(o),a.reset()}
//# sourceMappingURL=2-form.js.map
