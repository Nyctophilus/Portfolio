/*	
	=============
	==Cash Selectors==
	=============
*/

/*	
	====================
	==helper functions==
	====================
*/

const lightToggle = () => {
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
	==================
	==main functions==
	==================
*/

// active controllers classes toggling
const toggleActiveControllers = (con) => {
  // remove active class from all controllers
  selectorG(".controls .control").forEach((con) => {
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
/*	
	==========
	==Events==
	==========
*/

// execute light toggling!
selectorId("light-toggler").addEventListener(
  "click",
  (e) => {
    //  toggle bulb icon
    toggleBulbIcon();

    lightToggle();
  }
);

// controllers navigating to section
selectorG(".controls .control").forEach((controller) => {
  controller.addEventListener("click", () => {
    toggleActiveControllers(controller);

    toggleActiveSections(controller);
  });
});

// on scroll to timeline viewport..
window.addEventListener("scroll", () => {
  // coz scrollY calculates from the acutal screenView,
  // but offsetHeight calculates even from the hidden sections

  //   when timeline section has height ==> active
  if (
    window.scrollY > 700 &&
    selectorUni(".timelines").clientHeight
  )
    selectorUni(".timelines").classList.add("reach");

  //   when myskills section has height ==> active
  if (
    window.scrollY > 100 &&
    selectorUni(".my-skills").clientHeight
  )
    selectorUni(".my-skills").classList.add("reach");
});
