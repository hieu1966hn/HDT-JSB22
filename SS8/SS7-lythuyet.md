JS function: Hàm số là 1 thành phần không thể thiếu trong cấu trúc chương trình.
Ưu điểm ==> Nó giúp chương trình trở nên rõ ràng hơn, dễ hiểu = cách gộp những đoạn code lặp lại thành 1 hàm số. Nhờ vậy ==> bảo trì phần mềm.

Định nghĩa 1 hàm như sau: 

function functionName([parameter1],[parameter2],...){
  code...
}

Đặc điểm của hàm trong JS: 

- Hàm số có thể không có tham số, 1, nhiều tham số.
- Nội dung hàm thì đặt trong dấu  {}, dù không có câu lệnh nào.
- Hàm số có thể có giá trị trả về hoặc không có giá trị trả về.
- Kiểu tham số hay giá trị trả về không được quy định. Do đó, minh thường phải kiểm tra kiểu giá trị truyền vào hàm. Nếu không bạn rất dễ bị sai cú pháp.


 nested scope:

 Mình có thể khai báo function JS ở trong 1 hàm số khác. Tính chất này đc gọi là  nested scope: (phạm vi lồng nhau).