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

const toggleActiveControllers = (con) => {
  // remove active class from all controllers
  selectorG(".controls .control").forEach((con) => {
    con.classList.remove("active");
  });

  // add active to the clicked one!
  con.classList.add("active");
};

const toggleActiveSections = (con) => {
  // remove active class from all sections
  selectorG("main > section").forEach((section) => {
    section.classList.remove("active");
  });

  // add active to the clicked one!
  selectorId(con.dataset.sect).classList.add("active");
};

const toggleBulbIcon = () => {
  const icon = selectorUni(".light-toggler.control i.icon"),
    cls = new RegExp(/^(icon-light)/);

  if (cls.test(icon.classList[1])) {
    icon.classList.toggle("icon-light");
    icon.classList.toggle("icon-light1");
  }
};
/*	
	======================
	==invoking functions==
	======================
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

// controllers
selectorG(".controls .control").forEach((controller) => {
  controller.addEventListener("click", () => {
    toggleActiveControllers(controller);

    toggleActiveSections(controller);
  });
});
//# sourceMappingURL=app.js.map
