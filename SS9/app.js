// function myFunction (){
//   document.getElementById("demo").innerHTML = 
//   `
//     Noi dung da duoc thay doi
//   `
// }



function myFunction() {
  let x = document.getElementById("myBtn").
    attributes[0].name;
    // luu tru thuoc tinh dau tien cua the co #myBtn
  document.getElementById("demo").innerHTML = x;
  
}


//  ham doi mau
// function changeColor(){
//   // document.getElementById("h1").style.color = "red"
//   document.querySelector("#h1").style.color = "red"
// }

//  tao ra 1 bien co ten la h1 de luu tru the minh muon trong do
const h1 = document.getElementById("tieuDe");
console.log(h1);

h1.addEventListener("click", function(){
  console.log("addEventListener hoat dong nha");
  h1.style.color = "blue"
})

