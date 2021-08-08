// Bài 01:Viết một chương trình Javascript để nhập lương nhân viên, tính thuế thu nhập và lương ròng
// (số tiền lương thực sự mà nhân viên đó nhận được). 
// Với các thông số giả sử như sau (không theo luật lương, chỉ là con số giả sử để dễ tính toán):


// 30% thuế thu nhập nếu lương là 15 triệu.
// 20% thuế thu nhập nếu lương từ 7 đến 15 triệu.
// 10% thuế thu nhập nếu lương dưới 7 triệu.
//  lr: lương real (lương thật nhận được sau khi trừ thuế)
let a = prompt("Nhập lương của bạn (triệu VND)_ tối đa 15 triêu VND");
if (a < 7 && a > 0) {
    //  nếu a < 7 đồng thời a cũng phải >0
    let tax = 0.1; // 0.1 = 10% 
    let lr = a - (a * tax);
    alert("Lương thật sau khi trừ thuế thu nhập: " + lr + " triệu VND");
}
else if (a < 15 && a >= 7) {
    //  nếu a < 7 đồng thời a cũng phải >0
    let tax = 0.2; // 0.2 = 20% 
    let lr = a - (a * tax);
    alert("Lương thật sau khi trừ thuế thu nhập: " + lr + " triệu VND");
}
else if(a == 15){
    let tax = 0.3; // 0. = 30% 
    let lr = a - (a * tax);
    alert("Lương thật sau khi trừ thuế thu nhập: " + lr + " triệu VND");
}