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

const Toggle = () => {
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
	======================
	==invoking functions==
	======================
*/

// execute light toggling!
selectorId("light-toggler").addEventListener(
  "click",
  Toggle
);

// controllers
selectorG(".controls .control").forEach((con) => {
  con.addEventListener("click", () => {
    selectorG(".controls .control").forEach((con) => {
      con.classList.remove("active");
    });

    selectorId(con.dataset.sect).classList.add("active");
  });
});
