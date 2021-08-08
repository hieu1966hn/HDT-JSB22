// in ra các số từ 1 -> 10;

// let i=1;
// while(i<=10){
//     console.log(i);// 1,2,3,4,..10
//     i = i+1;
//     // gán lại giá trị i.
// }



//  In ra từ 1 -> 10 = do while
// let i =1;
// do{
//     console.log(i);// 1,2,3,..,10
//     i = i +1;
// }
// while(i<=10);


///// Vòng lặp for: in ra các số từ 1-> 10;
for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);// in ra 1,2,3....,10
}


let ketQua = Math.ceil(Math.random()*100); // có kết quả là random 1 - 100
let dem = 0;
// cho người dùng dùng số lần đoán giới hạn
let input; // biến lưu trữ mỗi lần mình nhập
let min = 0;
let max = 100;
while (dem < 6) {
    input = Number(prompt(`Nhập vào lần đoán số ${dem + 1}`));
    if (input === ketQua) {
        alert(`You win this game`);
        break;
    }
    if (input > ketQua) {
        max = input;
        alert(`Số cần tìm lớn hơn ${min} và nhỏ hơn ${max}`);
    }
    else {
        min = input;
        alert(`Số cần tìm lớn hơn ${min} và nhỏ hơn ${max}`)
    }
    dem++;

}



// Bài toán đoán số: 6 lần đoán số. Đoán chính xác số (1-100) => 10k thẻ đt.