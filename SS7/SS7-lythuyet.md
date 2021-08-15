Array (Mảng)
- 1 tập hợp các phần tử cố định có cùng 1 kiểu, được lưu trữ liên tiếp nhau trong các ô nhớ. (Kiểu phần tử có thể được lưu trữ: Number, String, Boolean,..)

- Khai báo mảng: Cú pháp
C1: 
let/var <tên mảng> = [];
 + Khi khai báo mảng, các bạn có thể khai báo luôn mảng đó có sẵn bao nhiêu phần tử
    VD: let arr = [1,2];
                = [1,2,3]; ==> mảng 3 phần tử

C2: let <tên mảng> = new Array();



+ <tên mảng>.lenght: số phần tử của mảng hiện có
+ Kiểm tra xem đó có phải là 1 Array(mảng) hay không: Array.isArray(<tên mảng>)

+ Nguyên tắc C,R,U,D trong Mảng:
    * C: Create: Thêm phần tử trong mảng
        ^ Thêm 1 phần tử ở cuối mảng: <tên mảng>.push('phần tử 1',"phần tử 2")
        ^ Thêm 1 phần tử ở đầu mảng: <tên mảng>.unShift('phần tử 1',"phần tử 2")
        ^ Thêm 1 phần tử ở vị trí bất kỳ: vd: giữa mảng; 
    * R: Read: Đọc các phần tử mảng
        ^ console.log(<tên mảng>)
    * U: Update: Update phần tử mảng
        ^ update 1 phần tử trong mảng khi biết vị trí muốn update: <tên mảng>.splice(1,0,1.5)
    * D: Delete: Xóa phần tử trong

///////// Giới thiệu Về object
- Là một đối tượng gồm các thuộc tính và phương Thức
VD: với đối tượng Người
+ khai báo 1 đối tượng
    VD;
    let Nguoi={
        
    }

