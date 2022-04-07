/*
	functions
*/

const lightToggleFunc = () => {
  document.body.classList.toggle("light");
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
 	events 
*/
// execute light toggling!
lightToggler.addEventListener("click", (e) => {
  //  toggle bulb icon
  toggleBulbIcon();

  //  toggle body class
  lightToggleFunc();

  //   save lighten mode tolocalStorage
  saveToLocalStorage({
    lightenMode: document.body.classList.contains("light")
      ? "light"
      : "dark",
  });
});
