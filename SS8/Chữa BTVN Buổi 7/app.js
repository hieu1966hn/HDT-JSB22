//  Chữa bài 1:
for (let i = 1; i < 6; i = i + 1) {
  for (let k = 6; k > i; k = k - 1) {
    document.write("&nbsp;&nbsp;");
  }
  for (let j = 1; j <= i * 2 - 1; j = j + 1) {
    document.write("*")
  }

  document.write("<br />");
}


// Bài 02: 

let myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];
// Duyệt mảng thì nên dùng tùy trường hợp, thông thường dùng in.
//  với for in
// for (let key in myArr) {
//   if (myArr[key] % 2 == 0 || myArr[key] === 0){
//     console.log(myArr[key]);
//   }
// }

// sử dụng for of
// for (let key of myArr) {
//   if (key % 2 == 0 || key === 0){
//     console.log(key);
//   }
// }


let myAnsers = []; // khai báo mảng rỗg nhé
let stop = true;
do {
  
  let input = prompt("EM ăn cơm chưa???");

  if (myAnsers.length == 1) {
    input = prompt("Em có muốn ăn bánh ngọt hemmm!!")
  }
  else if (myAnsers.length == 2) {
    input = prompt("Em có nhớ anh không");
  }
  else if (myAnsers.length == 3) {
    input = prompt("Em buồn ngủ chưa");
  }
  else if (myAnsers.length == 4) {
    input = prompt("G9 em");
  }
  else {
    console.log("");
  }
  myAnsers.push(input);

  // let temp = myAnsers.find(index => index =="no");
  // if(temp == no){
  //   stop = false;
  // }
}
while (myAnsers.length < 5 && stop == true);