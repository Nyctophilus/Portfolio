/*
	helper functions
*/

const checkContactHeight = (loading) => {
  let time;
  loading ? (time = 2001) : (time = 0);

  setTimeout(() => {
    if (
      selectorUni(
        "#contact .container"
      ).getBoundingClientRect().height
    ) {
      document.addEventListener(
        "mousemove",
        mouseFollowEvent
      );
    }
  }, time);
};

const toggleMouseMoveEvent = (section) => {
  if (section === "contact") {
    document.addEventListener(
      "mousemove",
      mouseFollowEvent
    );
  } else {
    document.removeEventListener(
      "mousemove",
      mouseFollowEvent
    );
  }
};

/*
	main functions
*/

// [x] only at contact section
const mouseFollowEvent = (e) => {
  console.log(`Mouse Event is running!`);
  let x = `${(e.clientX * 100) / window.innerWidth}%`,
    y = `${(e.clientY * 100) / window.innerHeight}%`;

  for (let ball of eyeBalls) {
    ball.style.left = x;
    ball.style.top = y;
    ball.style.transform = `translate(-${x},-${y})`;
  }

  //   red eye when go on boundries
  if (
    (e.clientY * 100) / window.innerHeight > 95 ||
    (e.clientY * 100) / window.innerHeight < 5 ||
    (e.clientX * 100) / window.innerWidth > 95 ||
    (e.clientX * 100) / window.innerWidth < 5
  ) {
    Array.from(eyeBalls).forEach((ball) => {
      ball.classList.add("red");
    });
  } else {
    Array.from(eyeBalls).forEach((ball) => {
      ball.classList.remove("red");
    });
  }
};

const submitForm = () => {
  const msg = selectorUni('textarea[name="msg"]').value,
    name = selectorUni('input[name="name"]').value;

  //   send email with the anchor element
  selectorId(
    "submit-form"
  ).href = `mailto:mohammed.yuossry@gmail.com?subject=feedback from portfolio website&body=${msg}`;

  //   invoke popup msg
  thanksMsg(name);
};

const thanksMsg = (name) => {
  console.log(name);

  const dialog = document.createElement("dialog");
  (dialog.open = true),
    (dialog.style.cssText = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);`);

  dialog.textContent = `Thank you for your concern, ${name}!`;

  document.body.appendChild(dialog);

  setTimeout(() => {
    dialog.remove();
  }, 5000);
};

/*
	events
*/

// submit contact us form click!
selectorId("submit-form").addEventListener(
  "click",
  submitForm
);
