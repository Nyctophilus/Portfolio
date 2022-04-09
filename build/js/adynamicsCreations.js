const sections = document.querySelectorAll(
  "main > section"
);

const dynConsCreation = (sections) => {
  const container = document.createElement("div");
  container.classList.add("controls");

  sections.forEach((sect) => {
    const con = document.createElement("div");
    con.classList.add("control"),
      con.setAttribute("data-sect", sect.id);

    const icon = document.createElement("i");
    icon.classList = `icon icon-${sect.dataset.icon}`;

    if (sect.id === "skills") {
      icon.classList.add("icon"),
        (icon.style.fontSize = `2.5em`),
        (icon.textContent = sect.dataset.icon);
    }

    con.appendChild(icon);
    container.appendChild(con);
  });

  document.getElementById("light-toggler").after(container);
};

dynConsCreation(sections);
