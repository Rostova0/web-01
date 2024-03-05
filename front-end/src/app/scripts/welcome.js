// TODO #import-html: use ES default imports to import welcome.html as template
import template from "../views/welcome.html";
  /* class WelcomeComponent constructor  */
  export class WelcomeComponent{
    constructor() {
      this.template = template;
    }

    init() {
      var form = document.querySelector("form.form-signin");

      form.addEventListener(
          "submit",
          // TODO #arrow-function: use arrow function instead.
          (event) => {
              event.preventDefault();
              if (form.checkValidity() === false) {
                  event.stopPropagation();
                  form.classList.add("was-validated");
              } else {
                  var name = event.srcElement.querySelector("#nickname").value;
                  var size = parseInt(event.srcElement.querySelector("#size").value);

                  _startGame(name, size);
              }
          },
          false
      );

      return this;
    }

    _startGame(name, size) {
      // TODO #spa: replace with './#game'
      var gamePage = "./#game";
      // TODO #template-literals:  use template literals (backquotes)
      window.location = `${gamePage}?name=${name}&size=${size}`;
    }
  }
