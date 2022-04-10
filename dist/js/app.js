const sections=document.querySelectorAll("main > section"),dynConsCreation=e=>{const t=document.createElement("div");t.classList.add("controls"),e.forEach((e=>{const o=document.createElement("div");o.classList.add("control"),o.setAttribute("data-sect",e.id);const n=document.createElement("i");n.classList=`icon icon-${e.dataset.icon}`,"skills"===e.id&&(n.classList.add("icon"),n.style.fontSize="2rem",n.textContent=e.dataset.icon),o.appendChild(n),t.appendChild(o)})),document.getElementById("light-toggler").after(t)};dynConsCreation(sections);const selectorId=e=>document.getElementById(`${e}`),selectorUni=e=>document.querySelector(`${e}`),selectorG=e=>Array.from(document.querySelectorAll(`${e}`)),controllers=selectorG(".controls .control"),lightToggler=selectorId("light-toggler"),gridWeb=selectorG(".grid-web");loader=selectorId("loading-state"),eyeBalls=document.getElementsByClassName("ball");let isScrolling,del,settings={};const saveToLocalStorage=e=>{e.lightenMode&&localStorage.setItem("lightenMode",e.lightenMode),e.activeSection&&localStorage.setItem("activeSection",e.activeSection)},applySettingsFromLocStorage=()=>{if(localStorage.length){const e=localStorage.getItem("lightenMode"),t=localStorage.getItem("activeSection");console.log(e,t),e&&document.body.classList.add(e),selectorUni(`.controls .control[data-sect="${t}"]`).classList.add("active"),t&&selectorId(t).classList.add("active")}else selectorId("home").classList.add("active"),selectorUni('.controls .control[data-sect="home"]').classList.add("active")};window.addEventListener("load",(()=>{applySettingsFromLocStorage(),document.body.style.cssText="height: 100vh; overflow: hidden;",setTimeout((()=>{loader.remove(),document.body.style.cssText="height: unset; overflow: unset;"}),2e3),"contact"===localStorage.getItem("activeSection")&&checkContactHeight(!0)}));const checkContactHeight=e=>{let t;t=e?2001:0,setTimeout((()=>{selectorUni("#contact .container").getBoundingClientRect().height&&document.addEventListener("mousemove",mouseFollowEvent)}),t)},toggleMouseMoveEvent=e=>{"contact"===e?document.addEventListener("mousemove",mouseFollowEvent):document.removeEventListener("mousemove",mouseFollowEvent)},mouseFollowEvent=e=>{console.log("Mouse Event is running!");let t=100*e.clientX/window.innerWidth+"%",o=100*e.clientY/window.innerHeight+"%";for(let e of eyeBalls)e.style.left=t,e.style.top=o,e.style.transform=`translate(-${t},-${o})`;100*e.clientY/window.innerHeight>95||100*e.clientY/window.innerHeight<5||100*e.clientX/window.innerWidth>95||100*e.clientX/window.innerWidth<5?Array.from(eyeBalls).forEach((e=>{e.classList.add("red")})):Array.from(eyeBalls).forEach((e=>{e.classList.remove("red")}))},ThxPopup=()=>{selectorUni('textarea[name="msg"]').value;const e=selectorUni('input[name="name"]').value;popMsg(e,", Thank you for your concern!")},popMsg=(e,t)=>{const o=document.createElement("dialog");o.open=!0,o.style.cssText="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);padding: 2rem 3rem; background-color: var(--bg-clr-alt); color: var(--txt-clr); border: none;border-radius: 20px; width: 80%;",o.textContent=`${e}${t}`,document.body.appendChild(o),setTimeout((()=>{o.remove()}),4e3)},toggleActiveControllers=e=>{controllers.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")},toggleActiveSections=e=>{selectorG("main > section").forEach((e=>{e.classList.remove("active")}));const t=e.dataset.sect;selectorId(t).classList.add("active"),toggleScrollingEvent(t),toggleMouseMoveEvent(t),saveToLocalStorage({activeSection:t})},idleState=()=>{const e=selectorUni(".controls");e.classList.remove("del"),e.classList.remove("idle"),clearTimeout(del),clearTimeout(isScrolling),isScrolling=setTimeout((()=>{selectorId("home").getBoundingClientRect().height||e.classList.add("idle")}),6e3),del=setTimeout((()=>{selectorId("home").getBoundingClientRect().height||e.classList.add("del")}),6500)};controllers.forEach((e=>{e.addEventListener("click",(()=>{var t;window.scrollTo(0,0),t=e,controllers.forEach((e=>{e.classList.remove("active")})),t.classList.add("active"),toggleActiveSections(e)}))})),window.addEventListener("scroll",idleState);const form_data={},fetchFormData=()=>{const e=new FormData(document.getElementById("contact-form"));for(let t of e.entries())form_data[t[0]]=t[1]},getValidationSpan=()=>[document.querySelector('#contact-form input[name="name"] + span'),document.querySelector('#contact-form input[name="email"] + span')].filter((e=>e)),validateSpans=(e,t,o)=>{console.log("validating",e),o.textContent=t,o.style.cssText="color: var(--txt-clr);\n  background-color: var(--lighty-clr);\n  border-radius: 10px;\n  padding: 0.2rem 1rem;\n  font-size: 0.8em;\n  position: absolute;\n  top: 2rem;\n  left: 1rem;\n  z-index: 1;\n  animation: up-Down 2s infinite alternate",document.querySelector(`#contact-form input[name="${e}"]`).after(o)},correctValidation=e=>{document.querySelector(`#contact-form input[name="${e}"]`).style.cssText="background-color:var(--lighty-clr); font-weight: bold;"},submission=e=>{if(fetchFormData(),getValidationSpan()[0]&&getValidationSpan()[0].remove(),form_data.name&&form_data.email){const e=/\w+@\w+\.(com|net|org)/gi,t=/^[a-z\s]+$/gi.test(form_data.name),o=e.test(form_data.email);t?correctValidation("name"):validateSpans("name","Invalid User name!😔",document.createElement("span")),o?(correctValidation("email"),ThxPopup()):validateSpans("email","Invalid E-Mail Format!🙁",document.createElement("span"))}else popMsg("","Please, Enter your name and email! 😥");e.preventDefault()};document.getElementById("contact-form").addEventListener("submit",submission),document.getElementById("submit-form").addEventListener("click",submission);const lightToggleFunc=()=>{document.body.classList.toggle("light")},toggleBulbIcon=()=>{const e=selectorUni(".light-toggler.control i.icon");new RegExp(/^(icon-light)/).test(e.classList[1])&&(e.classList.toggle("icon-light"),e.classList.toggle("icon-light1"))};lightToggler.addEventListener("click",(e=>{toggleBulbIcon(),document.body.classList.toggle("light"),saveToLocalStorage({lightenMode:document.body.classList.contains("light")?"light":"dark"})}));const toggleScrollingEvent=e=>{"skills"===e||"about"===e?document.addEventListener("scroll",scrollingForBars):document.removeEventListener("scroll",scrollingForBars)},checkSectionReach=e=>{let t;".timelines"===e&&(t=700),".my-skills"===e&&(t=100),window.scrollY>t&&selectorUni(e).clientHeight&&selectorUni(e).classList.add("reach")},scrollingForBars=()=>{console.log("scrolling in skills||about only"),checkSectionReach(".timelines"),checkSectionReach(".my-skills")};setTimeout((()=>{(selectorUni("#skills .container").getBoundingClientRect().height||selectorUni("#about .container").getBoundingClientRect().height)&&document.addEventListener("scroll",scrollingForBars)}),2001);const populateP=e=>{const t=document.createElement("p");switch(e){case"Portfolio":t.textContent="My personal portfolio. A brief about my previous work and background. I tried to gather all my skills and tricks i've learnt so far building this website. It will be in continuous development!";break;case"Weather App":t.textContent="It was part of Udacity Nano Degree. Used Express as backend tech to handle server routes. Basically you enter a postal code of a city and your feeling/any feedback and the a little good UI will popup beneath to showcasing the temperature and some information about that specific city";break;case"Metis":t.textContent="A newsletter website. Created with Gird-system, leveraging the extraordinary new-css feature of layouting. The website has cool dark/light mode toggle, Also multi-pages for each article directs to its own separate page.";break;case"FoodCrush":t.textContent="Recipes website made for irl client. Multi-pages website. Used Pug SASS structuring to maintain the architecture of this project";break;case"Composition":t.textContent="It was SASS practical purpose website. Created Reusable Mixins. Advanced Solid Environment Structure. Fully responsive";break;case"Blogs":t.textContent="Built a multi-section landing page, Profermant blogging website. dynamically updating navigational menu based on the amount of content that is added to the page.";break;case"Aero":t.textContent="Car Accessories Website. A Practice Design Template, Mainly Focused on practical Javascript. Used LocalStorage To Save User Settings, and take defaults when reload. Randomly Change Background images at time intervals.";break;case"EliteCrop":t.textContent="My third Practice Template on Bootstrap. squeezing bootstrap classes to get the maximum benefit of the framework!";break;case"AXIT":t.textContent="My second Practice Template on Bootstrap. Built with precise accurate on layout and responsive media-Queries";break;case"Fayy":t.textContent="A landing Page built with Bootstrap Framework! Used Jquery too for the first time. loading screen. Used varity of libs such as: hover.css wow.js animate.css nice-scroll-jquery";break;case"Cola":t.textContent="A Practice Design Template, Mainly Focused on practical Javascript. Used Swiper.js lib";break;case"Leno":t.textContent="A Practice Design Template, Mainly Focused on practical Javascript. LocalStorage To Save User Settings, and take defaults when reload. Randomly Change Background images at time intervals. Validation System of Form Fully functioning.";break;case"Modernist":t.textContent="The Modernist Template Practice. Completed the full development of the website in 04h 57m";break;case"Nyctophilus":t.textContent="Practice Template. was learning the fundamentals of HTML and CSS. Created good chuck of animations there!";break;case"Kasper":t.textContent="My second Practice Template on HTML and CSS. Pixel-Art challenge";break;case"Leon":t.textContent="My first even Practice Template. learnt the fundamentals of the web design through development it";break;case"Git & GitHub":t.textContent="Got introduced for this fluid version control system and how to custom your own profile and fundamental mechanism of github";break;case"GANS certificate":t.textContent="Enrolled in this specialization for my graduation project. Got exposed to the machine learning and artificial intelligence fields. My study time for that specialization was roughly 3-4 months";break;case"Learn HTML &CSS (ITI)":t.textContent="A prerequisite course for MERN Stack development Track from Mahara-Tech";break;case"Professional Web Development Nano Degree (Udacity)":t.textContent="Consists of JavaScript & The DOM, Web APIs and Asynchronous Applications, Agile mindset. Submitted 3 practical projects learned about server code with express and server routes."}return t},closePreview=e=>{e.addEventListener("click",(()=>{e.parentElement.close()}))},createListOfIskills=e=>{const t=[];for(let o=0;o<e;o++)t[o]=document.createElement("i"),t[o].classList.add("skill");return t},specifySkills=e=>{const t={html:'<img src="https://symbols.getvecta.com/stencil_83/68_html5-icon.09e3da538e.svg" alt="html" width="40" height="40" />',css:'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="css" width="40" height="40"/>',js:'<img src="https://symbols.getvecta.com/stencil_25/39_javascript.0ca26ec4ab.svg" alt="javascript" width="40" height="40"/>',bootstrap:'<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" height="40" alt="bootstrap"/>',react:'<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>',sass:'<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="40" height="40" alt="sass"/>',pug:'<img src="https://cdn.worldvectorlogo.com/logos/pugpugjs.svg" width="40" height="40" alt="pugjs"/>',gulp:'<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg" width="40" height="40" alt="gulp"/>',express:'<img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" width="40" height="40" alt="express"/>',git:'<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40" alt="git"/>'},o=document.createElement("div");let n;switch(o.classList.add("skills-preview"),e){case"Portfolio":n=createListOfIskills(5),n[0].innerHTML=t.js,n[1].innerHTML=t.pug,n[2].innerHTML=t.sass,n[3].innerHTML=t.gulp,n[4].innerHTML=t.git;break;case"Weather App":n=createListOfIskills(3),n[0].innerHTML=t.js,n[1].innerHTML=t.express,n[2].innerHTML=t.git;break;case"Metis":case"FoodCrush":case"Composition":n=createListOfIskills(6),n[0].innerHTML=t.html,n[1].innerHTML=t.css,n[2].innerHTML=t.js,n[3].innerHTML=t.pug,n[4].innerHTML=t.sass,n[5].innerHTML=t.git;break;case"EliteCrop":case"AXIT":case"Fayy":n=createListOfIskills(5),n[0].innerHTML=t.html,n[1].innerHTML=t.css,n[2].innerHTML=t.js,n[3].innerHTML=t.bootstrap,n[4].innerHTML=t.git;break;case"Blogs":case"Aero":case"Cola":case"Leno":case"Modernist":case"Nyctophilus":case"Kasper":case"Leon":n=createListOfIskills(4),n[0].innerHTML=t.html,n[1].innerHTML=t.css,n[2].innerHTML=t.js,n[3].innerHTML=t.git}return o.append(...n),o},createDialog=(e,t,o)=>{const n=document.createElement("dialog"),s=document.createElement("button"),a=document.createElement("h2"),i=document.createElement("img");var c;s.id="closeModal",s.textContent="x",(c=s).addEventListener("click",(()=>{c.parentElement.close()})),i.setAttribute("src",`./assets/images/${e}.webp`),i.setAttribute("alt",t),i.classList.add("img-res"),i.setAttribute("loading","lazy");const l=populateP(t);if(a.classList.add("h1"),a.textContent=t,n.append(s,i,a,l),/portfolio\//.test(e)){const e=specifySkills(t);n.appendChild(e)}return n.appendChild(o),n};gridWeb.forEach((e=>{e.addEventListener("click",(t=>{if(t.target.dataset.img){const o=t.target.dataset.img,n=t.target.dataset.name,s=t.target.parentElement.nextElementSibling.querySelector("div.links").cloneNode(!0),a=createDialog(o,n,s);e.appendChild(a),a.showModal()}}))}));
//# sourceMappingURL=app.js.map