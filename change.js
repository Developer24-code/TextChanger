
  let textarea = document.getElementById("Text");
  let button1 = document.getElementById("btn1");
  let button2 = document.getElementById("btn2");
  let results = document.getElementById("Result");

  button1.addEventListener("click", () => {
      let text = textarea.value;
      let isUppercase = text.toUpperCase();
      results.textContent = "Uppercase: "  + isUppercase;
  });
  button2.addEventListener("click", () => {
      let text = textarea.value;
      let isLowercase = text.toLowerCase();
      results.textContent = "Lowercase: "  + isLowercase;
  });
