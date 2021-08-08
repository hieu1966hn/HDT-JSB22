// Bài 01:Viết một chương trình Javascript để nhập lương nhân viên, tính thuế thu nhập và lương ròng
// (số tiền lương thực sự mà nhân viên đó nhận được). 
// Với các thông số giả sử như sau (không theo luật lương, chỉ là con số giả sử để dễ tính toán):


// 30% thuế thu nhập nếu lương là 15 triệu.
// 20% thuế thu nhập nếu lương từ 7 đến 15 triệu.
// 10% thuế thu nhập nếu lương dưới 7 triệu.
//  lr: lương real (lương thật nhận được sau khi trừ thuế)
// let a = prompt("Nhập lương của bạn (triệu VND)_ tối đa 15 triêu VND");
// if (a < 7 && a > 0) {
//     //  nếu a < 7 đồng thời a cũng phải >0
//     let tax = 0.1; // 0.1 = 10% 
//     let lr = a - (a * tax);
//     alert("Lương thật sau khi trừ thuế thu nhập: " + lr + " triệu VND");
// }
// else if (a < 15 && a >= 7) {
//     //  nếu a < 7 đồng thời a cũng phải >0
//     let tax = 0.2; // 0.2 = 20% 
//     let lr = a - (a * tax);
//     alert("Lương thật sau khi trừ thuế thu nhập: " + lr + " triệu VND");
// }
// else if(a == 15){
//     let tax = 0.3; // 0. = 30% 
//     let lr = a - (a * tax);
//     alert("Lương thật sau khi trừ thuế thu nhập: " + lr + " triệu VND");
// }


///////////////// Bài 02:
// Bài 02: Viết chương trình Javascript để nhập tuổi và 
// in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10. 
// Biết tuổi vào lớp 10 của học sinh là 16.

// let age = prompt("Người dùng nhập vào tuổi của mình");
// if (age <= 0) {
//     alert("Xin nhập số tuổi lớn hơn 0 nhé");
// }
// else if ((age > 0 && age < 16)) {
//     alert("Không đủ điều kiện vào lớp 10")
// }
// else {
//     // còn lại duy nhất trường hợp age == 16
//     alert("Đủ điều kiện vào lớp 10")
// }

/////////////////// Bài 03:
// Bài 03: Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác và hưởng hoa hồng, với mức hoa hồng theo doanh số bán như sau:
// 5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
// 10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
// 20 % nếu tổng doanh số là lớn hơn 300 triệu.
// Hãy viết chương trình Javascript  để tính hoa hồng bạn sẽ nhận được dựa trên doanh số bán hàng.

////////////////////// Bai 04:

// Bài 04: Viết chương trình Javascript để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
// Phí thuê bao bắt buộc là 25 nghìn.
// 600 đồng cho mỗi phút gọi của 50 phút đầu tiên.
// 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
// 200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên.
// let total_time = prompt("Nhập số phút hộ gia đình đã gọi điện thoại:");

// let sum = 0;
// if(total_time <=0){
//     alert("Hãy điền thời gian phù hợp");
// }

