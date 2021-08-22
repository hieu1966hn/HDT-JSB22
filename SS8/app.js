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


// Tham số và phạm vi của hàm (scope)
// function increate(number) {
//   let x = 5;
//   number = number + x;// 8
//   console.log(`Number inside function: ${number}`);

// }

// let num = 3;
// increate(num); // Kết quả sẽ in ra gì khi gọi hàm

// console.log(x);// 5


//  nested scope:
function displayMax(a, b, c, d) {
  let max = function (m, n) {
    if (m > n) { return m; }
    else { return n };
  }
  // Khai báo xong hàm tìm max của 2 tham số.

  let t1 = max(a, b); // lấy giá trị lớn nhất của a và b  //5
  let t2 = max(c, d); // 10
  let t3 = max(t1, t2);// 10


  console.log(t3);

}
displayMax(3,5,4,10);

t = max (10,11)// in ra gì???

