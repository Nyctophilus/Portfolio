/*
	helper functions
*/

const populateP = (projectName) => {
  const p = document.createElement("p");
  switch (projectName) {
    case "Portfolio":
      p.textContent =
        "My personal portfolio. A brief about my previous work and background. I tried to gather all my skills and tricks i've learnt so far building this website. It will be in continuous development!";
      break;

    case "Weather App":
      p.textContent =
        "It was part of Udacity Nano Degree. Used Express as backend tech to handle server routes. Basically you enter a postal code of a city and your feeling/any feedback and the a little good UI will popup beneath to showcasing the temperature and some information about that specific city";
      break;

    case "Metis":
      p.textContent =
        "A newsletter website. Created with Gird-system, leveraging the extraordinary new-css feature of layouting. The website has cool dark/light mode toggle, Also multi-pages for each article directs to its own separate page.";
      break;

    case "FoodCrush":
      p.textContent =
        "Recipes website made for irl client. Multi-pages website. Used Pug SASS structuring to maintain the architecture of this project";
      break;

    case "Composition":
      p.textContent =
        "It was SASS practical purpose website. Created Reusable Mixins. Advanced Solid Environment Structure. Fully responsive";
      break;

    case "Blogs":
      p.textContent =
        "Built a multi-section landing page, Profermant blogging website. dynamically updating navigational menu based on the amount of content that is added to the page.";
      break;

    case "Aero":
      p.textContent =
        "Car Accessories Website. A Practice Design Template, Mainly Focused on practical Javascript. Used LocalStorage To Save User Settings, and take defaults when reload. Randomly Change Background images at time intervals.";
      break;

    case "EliteCrop":
      p.textContent =
        "My third Practice Template on Bootstrap. squeezing bootstrap classes to get the maximum benefit of the framework!";
      break;

    case "AXIT":
      p.textContent =
        "My second Practice Template on Bootstrap. Built with precise accurate on layout and responsive media-Queries";
      break;

    case "Fayy":
      p.textContent =
        "A landing Page built with Bootstrap Framework! Used Jquery too for the first time. loading screen. Used varity of libs such as: hover.css wow.js animate.css nice-scroll-jquery";
      break;

    case "Cola":
      p.textContent =
        "A Practice Design Template, Mainly Focused on practical Javascript. Used Swiper.js lib";
      break;

    case "Leno":
      p.textContent =
        "A Practice Design Template, Mainly Focused on practical Javascript. LocalStorage To Save User Settings, and take defaults when reload. Randomly Change Background images at time intervals. Validation System of Form Fully functioning.";
      break;

    case "Modernist":
      p.textContent =
        "The Modernist Template Practice. Completed the full development of the website in 04h 57m";
      break;

    case "Nyctophilus":
      p.textContent =
        "Practice Template. was learning the fundamentals of HTML and CSS. Created good chuck of animations there!";
      break;

    case "Kasper":
      p.textContent =
        "My second Practice Template on HTML and CSS. Pixel-Art challenge";
      break;

    case "Leon":
      p.textContent =
        "My first even Practice Template. learnt the fundamentals of the web design through development it";
      break;

    case "Git & GitHub":
      p.textContent =
        "Got introduced for this fluid version control system and how to custom your own profile and fundamental mechanism of github";
      break;

    case "GANS certificate":
      p.textContent =
        "Enrolled in this specialization for my graduation project. Got exposed to the machine learning and artificial intelligence fields. My study time for that specialization was roughly 3-4 months";
      break;

    case "Learn HTML &CSS (ITI)":
      p.textContent =
        "A prerequisite course for MERN Stack development Track from Mahara-Tech";
      break;

    case "Professional Web Development Nano Degree (Udacity)":
      p.textContent =
        "Consists of JavaScript & The DOM, Web APIs and Asynchronous Applications, Agile mindset. Submitted 3 practical projects learned about server code with express and server routes.";
      break;
  }

  return p;
};

const closePreview = (btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
};

const createListOfIskills = (number) => {
  const skillsContainers = [];
  for (let i = 0; i < number; i++) {
    skillsContainers[i] = document.createElement("i");

    skillsContainers[i].classList.add("skill");
  }

  return skillsContainers;
};

const specifySkills = (name) => {
  const skills = {
      html: `<img src="https://symbols.getvecta.com/stencil_83/68_html5-icon.09e3da538e.svg" alt="html" width="40" height="40" />`,
      css: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="css" width="40" height="40"/>`,
      js: `<img src="https://symbols.getvecta.com/stencil_25/39_javascript.0ca26ec4ab.svg" alt="javascript" width="40" height="40"/>`,
      bootstrap: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" height="40" alt="bootstrap"/>`,
      react: `<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>`,
      sass: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="40" height="40" alt="sass"/>`,
      pug: `<img src="https://cdn.worldvectorlogo.com/logos/pugpugjs.svg" width="40" height="40" alt="pugjs"/>`,
      gulp: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg" width="40" height="40" alt="gulp"/>`,
      express: `<img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" width="40" height="40" alt="express"/>`,
      git: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40" alt="git"/>`,
    },
    container = document.createElement("div");
  container.classList.add("skills-preview");

  let arrOfSkills;

  switch (name) {
    case "Portfolio":
      arrOfSkills = createListOfIskills(5);
      arrOfSkills[0].innerHTML = skills.js;
      arrOfSkills[1].innerHTML = skills.pug;
      arrOfSkills[2].innerHTML = skills.sass;
      arrOfSkills[3].innerHTML = skills.gulp;
      arrOfSkills[4].innerHTML = skills.git;
      break;

    case "Weather App":
      arrOfSkills = createListOfIskills(3);
      arrOfSkills[0].innerHTML = skills.js;
      arrOfSkills[1].innerHTML = skills.express;
      arrOfSkills[2].innerHTML = skills.git;
      break;

    case "Metis":
    case "FoodCrush":
    case "Composition":
      arrOfSkills = createListOfIskills(6);
      arrOfSkills[0].innerHTML = skills.html;
      arrOfSkills[1].innerHTML = skills.css;
      arrOfSkills[2].innerHTML = skills.js;
      arrOfSkills[3].innerHTML = skills.pug;
      arrOfSkills[4].innerHTML = skills.sass;
      arrOfSkills[5].innerHTML = skills.git;

      break;

    case "EliteCrop":
    case "AXIT":
    case "Fayy":
      arrOfSkills = createListOfIskills(5);
      arrOfSkills[0].innerHTML = skills.html;
      arrOfSkills[1].innerHTML = skills.css;
      arrOfSkills[2].innerHTML = skills.js;
      arrOfSkills[3].innerHTML = skills.bootstrap;
      arrOfSkills[4].innerHTML = skills.git;
      break;

    case "Blogs":
    case "Aero":
    case "Cola":
    case "Leno":
    case "Modernist":
    case "Nyctophilus":
    case "Kasper":
    case "Leon":
      arrOfSkills = createListOfIskills(4);
      arrOfSkills[0].innerHTML = skills.html;
      arrOfSkills[1].innerHTML = skills.css;
      arrOfSkills[2].innerHTML = skills.js;
      arrOfSkills[3].innerHTML = skills.git;
      break;
  }

  container.append(...arrOfSkills);

  return container;
};

/*
	main functions
*/

const createDialog = (location, name, links) => {
  const dialog = document.createElement("dialog"),
    button = document.createElement("button"),
    h2 = document.createElement("h2"),
    img = document.createElement("img");

  (button.id = "closeModal"), (button.textContent = "x");
  closePreview(button);

  img.setAttribute(
    "src",
    `./assets/images/${location}.webp`
  ),
    img.setAttribute("alt", name),
    img.classList.add("img-res"),
    img.setAttribute("loading", "lazy");

  const p = populateP(name);

  h2.classList.add("h1"), (h2.textContent = name);

  dialog.append(button, img, h2, p);

  //   add skills list only on portfolio path
  if (/portfolio\//.test(location)) {
    const skillsContainer = specifySkills(name);
    dialog.appendChild(skillsContainer);
  }

  dialog.appendChild(links);

  return dialog;
};

/*
	events
*/

// preview image on click grid item
gridWeb.forEach((web) => {
  web.addEventListener("click", (e) => {
    // console.log(e.target.dataset.img);
    // console.log(e.target.dataset.name);

    if (e.target.dataset.img) {
      const loc = e.target.dataset.img,
        name = e.target.dataset.name,
        cloneLinks =
          e.target.parentElement.nextElementSibling
            .querySelector("div.links")
            .cloneNode(true);

      const dialog = createDialog(loc, name, cloneLinks);
      web.appendChild(dialog);

      dialog.showModal();
    }
  });
});
