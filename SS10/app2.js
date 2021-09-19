///////////// code phần xác nhận thông tin đăng nhập:
const infoLogin = document.getElementById("infoLogin");

console.log(infoLogin);
infoLogin.addEventListener("submit", (event) => {
  event.preventDefault(); // ko load lại trình duyệt

  const dataLogin = {
    email: infoLogin.email.value.trim(),
    password: infoLogin.password.value.trim(),
  }

  /// so sanh đăng nhạp thông tin: nếu đúng => chuyển hướng về trang chủ.

  console.log("thông tin người đăng nhập", dataLogin);
  let userInfor = JSON.parse(localStorage.getItem("UserInfor"));
  // userInfor khi lấy ra là 1 mảng
  console.log(userInfor);
  // console.log(userInfor.find((item) => { return item.email === dataLogin.email }).password);
  if (dataLogin.email === userInfor.find((item) => { return item.email === dataLogin.email }).email) {
    console.log("tk tồn tại");
    let k = userInfor.find((item) => { return item.email === dataLogin.email }).password
    console.log("this is k", k);
    if (dataLogin.password === k) {
      alert("Bạn đã đăng nhập thành công")
      window.location.href = "./trangChu.html"
    }
  }
  else {
    alert("tk không tồn tại")
  }

  // làm trống lại các trường thông tin
  infoLogin.email.value = ""
  infoLogin.password.value = ""
})