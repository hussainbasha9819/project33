const lg = () => {
  document.getElementById("in").style.display === "flex"
    ? (document.getElementById("in").style.display = "none")
    : (document.getElementById("in").style.display = "flex");
};

const onclk = () => {
  let nm = document.getElementById("NM").value;
  let num = document.getElementById("Num").value;
  if (nm == "hussain basha" && num == "0987654321") {
    localStorage.removeItem("auth");
    window.location.href = "loginPage.html";
  } else {
    alert("wrong enter details");
  }
};
const Verify = () => {
  if (localStorage.auth) {
  } else {
    window.location.href = "loginPage.html";
  }
};

Verify();
