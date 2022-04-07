/*
	functions
*/

const toggleScrollingEvent = (section) => {
  if (section === "skills" || section === "about") {
    document.addEventListener("scroll", scrollingForBars);
  } else {
    document.removeEventListener(
      "scroll",
      scrollingForBars
    );
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

const scrollingForBars = () => {
  console.log(`scrolling in skills||about only`);
  //   when timeline section has height ==> active
  checkSectionReach(".timelines");

  //   when myskills section has height ==> active
  checkSectionReach(".my-skills");
};

/*
  	events
*/

// after loading done, attach scroll event at skills,about sections only
setTimeout(() => {
  if (
    selectorUni(
      "#skills .container"
    ).getBoundingClientRect().height ||
    selectorUni("#about .container").getBoundingClientRect()
      .height
  )
    document.addEventListener("scroll", scrollingForBars);
}, 2001);
