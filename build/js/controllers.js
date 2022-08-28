/*
	main functions
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

  const section = con.dataset.sect;

  // add active to the clicked one!
  selectorId(section).classList.add("active");

  //   limit scroll event to about,skills sections
  toggleScrollingEvent(section);

  //   toggle mousemove event
  toggleMouseMoveEvent(section);

  //   save active section to localstorage
  saveToLocalStorage({ activeSection: section });

  resetLightingDotsEvents();
};

const idleState = () => {
  const conContainer = selectorUni(".controls");

  conContainer.classList.remove("del"),
    conContainer.classList.remove("idle"),
    clearTimeout(del),
    clearTimeout(isScrolling);

  //   idle state not in home section
  isScrolling = setTimeout(() => {
    if (
      !selectorId("home").getBoundingClientRect().height
    ) {
      conContainer.classList.add("idle");
    }
  }, 6000);

  // to delete from the dom
  del = setTimeout(() => {
    if (
      !selectorId("home").getBoundingClientRect().height
    ) {
      conContainer.classList.add("del");
    }
  }, 6500);
};

/*
	helper function
*/

const resetLightingDotsEvents = () => {
  if (
    !document
      .querySelector("main > section.home")
      .classList.contains("active")
  ) {
    console.log(`home isnt active!!`);
    document
      .querySelectorAll(
        "section.home .text-content > .ripple"
      )
      .forEach((ripple) => {
        ripple.removeEventListener(
          "click",
          activateSection
        );
      });
  } else {
    document
      .querySelectorAll(
        "section.home .text-content > .ripple"
      )
      .forEach((ripple) => {
        ripple.addEventListener("click", activateSection);
      });
  }
};

const toggleHover = (c) => {
  c.classList.add("hover");
  c.addEventListener("mouseout", () =>
    c.classList.remove("hover")
  );
};

/*
	Events
*/

// controllers navigating to section
controllers.forEach((controller) => {
  controller.addEventListener("click", () => {
    // start every section from top
    window.scrollTo(0, 0);

    toggleActiveControllers(controller);

    toggleActiveSections(controller);
  });

  controller.addEventListener("mouseover", () => {
    toggleHover(controller);
  });
});

// FIXDONE idle state... add this on con click and if not home only
window.addEventListener("scroll", idleState);

/*
	lighting dots
*/

const activateSection = (e) => {
  toggleActiveSections(e.target);

  const myController = selectorG(
    ".controls > .control"
  ).filter(
    (con) => con.dataset.sect === e.target.dataset.sect
  );

  toggleActiveControllers(...myController);
};

document
  .querySelectorAll("section.home .text-content > .ripple")
  .forEach((ripple) => {
    ripple.addEventListener("click", activateSection);
  });
