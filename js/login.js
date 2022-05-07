

const listAccount = [
  {
    username: "admin",
    password: "123",
  },
  {
    username: "hoanganh",
    password: "456",
  },
];





const btnLogin = document.getElementById("login");
const btnLogout = document.getElementById("logout");
document.getElementById("hide1").style.display = "none";


//isLogin
if(localStorage.getItem('username')) {
    document.getElementById("hide").style.display = "none";

    let isLoginName = (document.getElementById(
      "isLogin"
    ).innerHTML = `Hi, ${localStorage.getItem("username")}!`);
    document.getElementById("hide1").style.display = "block";
}


// handleLogin
btnLogin.addEventListener("click", () => {
  let username = document.getElementById("text1").value;
  let password = document.getElementById("password1").value;

  

  const isLogin = listAccount.find(
    (acc) => acc.username === username && acc.password === password
  );

  if (isLogin) {
    Swal.fire("Thành công!", "Bạn đăng nhập thành công!", "success");
    $("#modalLoginForm").modal("hide");

    localStorage.setItem("username", isLogin.username);

    document.getElementById("hide").style.display = "none";

    let isLoginName = (document.getElementById(
      "isLogin"
    ).innerHTML = `Hi, ${localStorage.getItem("username")}!`);
    document.getElementById("hide1").style.display = "block";
  } else {
    Swal.fire("Thất bại!", "Sai tên tài khoản hoặc mật khẩu!", "error");
  }
});

btnLogout.addEventListener("click", () => {
    localStorage.removeItem('username');
});
