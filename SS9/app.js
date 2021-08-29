// function myFunction (){
//   document.getElementById("demo").innerHTML = 
//   `
//     Noi dung da duoc thay doi
//   `
// }



function myFunction() {
  let x = document.getElementById("myBtn").
    attributes[1].name;
  document.getElementById("demo").innerHTML = x;
}