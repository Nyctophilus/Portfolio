const form_data = {
  name: "",
  email: "",
  subject: "",
  msg: "",
};

/*
	helper functions
*/

const fetchFormData = () => {
  const formData = new FormData(
    document.getElementById("contact-form")
  );
  for (let pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // filling obj with formData
    form_data[pair[0]] = pair[1];
  }

  console.log(form_data);
};

const getValidationSpan = () => {
  return [
    document.querySelector(
      `#contact-form input[name="name"] + span`
    ),
    document.querySelector(
      `#contact-form input[name="email"] + span`
    ),
  ].filter((validate) => validate);
};

const sendMessageToFireBase = () => {
  console.log(form_data.msg);

  fetch(
    "https://react-my-burger-e68ad-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_data),
    }
  );
};

/*
	main functions
*/

// function to create popup spans
const validateSpans = (where, text, span) => {
  console.log(`validating`, where);
  (span.textContent = text),
    (span.style.cssText = `color: var(--txt-clr);
  background-color: var(--lighty-clr);
  border-radius: 10px;
  padding: 0.2rem 1rem;
  font-size: 0.8em;
  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 1;
  animation: up-Down 2s infinite alternate`);

  document
    .querySelector(`#contact-form input[name="${where}"]`)
    .after(span);
};

// correct validation coloring
const correctValidation = (where) => {
  const validateSpan = document.querySelector(
    `#contact-form input[name="${where}"]`
  );

  validateSpan.style.cssText = `background-color:var(--lighty-clr); font-weight: bold;`;
};

const submission = (e) => {
  // fetch form data
  fetchFormData();

  //   return the true condition which has the span next to it
  if (getValidationSpan()[0])
    getValidationSpan()[0].remove();

  // when both fields filled
  if (form_data.name && form_data.email) {
    const nameReg = /^[a-z\s]+$/gi, // ONLY letters and spaces
      mailReg = /\w+@\w+\.(com|net|org)/gi, // asdsadsa@asdsa.com       com|net|org
      testName = nameReg.test(form_data.name),
      testMail = mailReg.test(form_data.email);

    // [x] popup for unvalid data
    if (!testName) {
      validateSpans(
        "name",
        "Invalid User name!(only characters) 😔",
        document.createElement("span")
      );
    } else {
      correctValidation("name");
    }

    if (!testMail) {
      validateSpans(
        "email",
        "Invalid E-Mail Format!(example@xyz.(com|net|org))🙁",
        document.createElement("span")
      );
    } else {
      correctValidation("email");
      ThxPopup();
    }

    if (form_data.msg) sendMessageToFireBase();
  } else {
    popMsg("", "Please, Enter your name and email");
  }

  e.preventDefault();
};

/*
	events
*/

document
  .getElementById("contact-form")
  .addEventListener("submit", submission);

document
  .getElementById("submit-form")
  .addEventListener("click", submission);
