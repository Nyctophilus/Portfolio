/*	
	====================
	==helper functions==
	====================
*/

const lightToggleFunc = () => {
  document.body.classList.toggle("light");
};

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
	=============
	==Cash Selectors==
	=============
*/

const controllers = selectorG(".controls .control"),
  lightToggler = selectorId("light-toggler");

let isScrolling, del;

/*	
	==================
	==main functions==
	==================
*/

// active controllers classes toggling
const toggleActiveControllers = (con) => {
  // remove active class from all controllers
  controllers.forEach((con) => {
    con.classList.remove("active");
  });

  // add active to the clicked one!
  con.classList.add("active");
};

// active section classes toggling
const toggleActiveSections = (con) => {
  // remove active class from all sections
  selectorG("main > section").forEach((section) => {
    section.classList.remove("active");
  });

  // add active to the clicked one!
  selectorId(con.dataset.sect).classList.add("active");
};

// change bulb icon on click
const toggleBulbIcon = () => {
  const icon = selectorUni(".light-toggler.control i.icon"),
    cls = new RegExp(/^(icon-light)/);

  if (cls.test(icon.classList[1])) {
    icon.classList.toggle("icon-light");
    icon.classList.toggle("icon-light1");
  }
};

const checkSectionReach = (sel) => {
  let offset;

  if (sel === ".timelines") offset = 700;

  if (sel === ".my-skills") offset = 100;

  /* coz of scrollY calculates from the acutal screenView,
   	 but offsetHeight calculates even from the hidden sections
     clientHeight --> to check if the section has height 
	*/

  if (
    window.scrollY > offset &&
    selectorUni(sel).clientHeight
  )
    selectorUni(sel).classList.add("reach");
};

const idleState = () => {
  const conContainer = selectorUni(".controls");

  // conClone = selectorUni(".controls").cloneNode(true)..if (!conContainer) lightToggler.after(conClone);

  conContainer.classList.remove("del"),
    conContainer.classList.remove("idle"),
    clearTimeout(del),
    clearTimeout(isScrolling);

  //   idle state
  isScrolling = setTimeout(() => {
    conContainer.classList.add("idle");
  }, 6000);

  // to delete from the dom
  del = setTimeout(() => {
    conContainer.classList.add("del");
  }, 6500);
};

/*	
	==========
	==Events==
	==========
*/

// execute light toggling!
lightToggler.addEventListener("click", (e) => {
  //  toggle bulb icon
  toggleBulbIcon();

  lightToggleFunc();
});

// controllers navigating to section
controllers.forEach((controller) => {
  controller.addEventListener("click", () => {
    toggleActiveControllers(controller);

    // start every section from top
    window.scrollTo(0, 0);

    toggleActiveSections(controller);
  });
});

// on scroll to timeline viwport..
window.addEventListener("scroll", () => {
  //   when timeline section has height ==> active
  checkSectionReach(".timelines");

  //   when myskills section has height ==> active
  checkSectionReach(".my-skills");

  //   idle state
  idleState();
});
