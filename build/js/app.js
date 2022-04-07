/*	
	==========================
	==Begin helper functions==
	==========================
*/

const selectorId = (id) => {
  return document.getElementById(`${id}`);
};

const selectorUni = (sel) => {
  return document.querySelector(`${sel}`);
};

const selectorG = (list) => {
  return Array.from(document.querySelectorAll(`${list}`));
};

/*	
	============================
	====End helper functions====

	====Begin Cash Selectors====
	============================
*/

const controllers = selectorG(".controls .control"),
  lightToggler = selectorId("light-toggler"),
  gridWeb = selectorG(".grid-web");
(loader = selectorId("loading-state")),
  (eyeBalls = document.getElementsByClassName("ball"));

let isScrolling,
  del,
  settings = {};

/*	
	========================
	==End Cash Selectors====

	==Begin main functions==
	========================
*/

// local storage funtionality
const saveToLocalStorage = (setting) => {
  if (setting.lightenMode) {
    localStorage.setItem(
      "lightenMode",
      setting.lightenMode
    );
  }
  if (setting.activeSection)
    localStorage.setItem(
      "activeSection",
      setting.activeSection
    );
};

const applySettingsFromLocStorage = () => {
  if (localStorage.length) {
    const mode = localStorage.getItem("lightenMode"),
      section = localStorage.getItem("activeSection");

    console.log(mode, section);

    // apply light/dark mode on the body
    if (mode) document.body.classList.add(mode);

    // activate controller from localstorage
    selectorUni(
      `.controls .control[data-sect="${section}"]`
    ).classList.add("active");

    // activate section from localstorage
    if (section)
      selectorId(section).classList.add("active");
  } else {
    // defaulting home is active
    selectorId("home").classList.add("active");

    // add active class to home controller
    selectorUni(
      '.controls .control[data-sect="home"]'
    ).classList.add("active");
  }
};

/*	
	=====================
	==End main function==

	====Begin Events=====
	=====================
*/

// loading state
window.addEventListener("load", () => {
  applySettingsFromLocStorage();

  //  [x] loading functionality
  document.body.style.cssText =
    "height: 100vh; overflow: hidden;";

  //   remove the loader node from the dom
  setTimeout(() => {
    loader.remove();

    document.body.style.cssText =
      "height: unset; overflow: unset;";
  }, 2000);

  //   add mouse follow trail only in contact viewport
  if (localStorage.getItem("activeSection") === "contact")
    checkContactHeight(true);
});
