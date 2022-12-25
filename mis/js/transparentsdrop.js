window.onload = function () {
  var prev = document.getElementsByClassName("common-btn prev")[0];
  var next = document.getElementsByClassName("common-btn next")[0];
  var content = document.querySelector(".content");
  var num = 0;
  next.addEventListener("click", function () {
    num = num - 371;
    content.style.transform = "translateX(" + num + "px)";
    console.log(num);
    if (num <= -742) {
      next.style.display = "none";
    }
    if (num < -200) {
      prev.style.display = "block";
    }
  });
  prev.addEventListener("click", function () {
    num = num + 371;
    content.style.transform = "translateX(" + num + "px)";
    console.log(num);
    if (num > -742) {
      next.style.display = "block";
    }
    if (num > -200) {
      prev.style.display = "none";
    }
  });

  var prev1 = document.getElementsByClassName("common-btn prev")[1];
  var next1 = document.getElementsByClassName("common-btn next")[1];
  var content1 = document.querySelector(".content1");
  var num1 = 0;
  next1.addEventListener("click", function () {
    num1 = num1 - 371;
    content1.style.transform = "translateX(" + num1 + "px)";
    console.log(num1);
    if (num1 <= -1855) {
      next1.style.display = "none";
    }
    if (num1 < -200) {
      prev1.style.display = "block";
    }
  });
  prev1.addEventListener("click", function () {
    num1 = num1 + 371;
    content1.style.transform = "translateX(" + num1 + "px)";
    console.log(num1);
    if (num1 > -1855) {
      next1.style.display = "block";
    }
    if (num1 > -200) {
      prev1.style.display = "none";
    }
  });
};
