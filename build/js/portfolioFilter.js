let timer;
const portItems = document.querySelectorAll(
  "section.portfolio .grid-web .grid-item"
);

/*
	portfolio items display
*/
const reset = (item) => {
  item.style.display = "flex";
  item.classList.remove("fadeOut");
};

const filter = (type) => {
  clearTimeout(timer);

  portItems.forEach((item) => {
    reset(item);

    if (item.dataset.filter !== type) {
      item.classList.add("fadeOut");

      timer = setTimeout(() => {
        item.style.display = "none";
      }, 301);
    }
  });
};

/*
	filter tabs
*/

const filterTabs = document.querySelectorAll(
  "section.portfolio ul.filter li"
);

filterTabs.forEach((li) => {
  li.onclick = () => {
    filterTabs.forEach((tab) =>
      tab.classList.remove("active")
    );

    li.classList.add("active");

    filter(li.dataset.filter);
  };
});
