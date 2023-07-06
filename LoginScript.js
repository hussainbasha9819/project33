const enter = () => {
  document.getElementById("form").style.display === "flex"
    ? (document.getElementById("form").style.display = "none")
    : (document.getElementById("form").style.display = "flex");
};

const sub = () => {
  document.getElementById("section1").style.display = "flex";
  document.getElementById("sec").style.display = "none";
  localStorage.setItem("auth", true);
  setTimeout(myload, 9000);
  // } else {
  //   alert("this a wrong password");
  // }
};
const myload = () => {
  document.getElementById("section1").style.display = "none";
  window.location.href = "mainPage.html";
};

const Verify = () => {
  if (localStorage.auth) {
    window.location.href = "mainPage.html";
  }
};

Verify();
