// Khái niệm function

// khai báo hàm và gán vào biến
let greet = function (name) {
  console.log("Hello " + name + " !");
  // -> CHƯA CÓ GIÁ TRỊ TRẢ VỀ
}

greet("Hiếu");


// Cách 2: khai báo hàm thông thường thì phải có tên hàm

// function min(a, b) {
//   if (a < b) {
//     return a;
//     //  Lưu ý, khi đã chạy lệnh return trong hàm thì ta thoát khỏi hàm đó luôn
//   }
//   else {
//     return b;
//   }
//   console.log("đừng thoát mà");
// }
// // thực hiện hàm: tênHàm();


// console.log(min(1,2));


/// Tham số và phạm vi của hàm (scope)
// function increate(number) {
//   let x = 5;
//   number = number + x;// 8
//   console.log('Number inside function: '+ number);
 
// }


// let number = 3;
// increate(number); // Kết quả sẽ in ra gì khi gọi hàm

// console.log(x);// 5


