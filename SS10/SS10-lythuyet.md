Giới thiệu về localStorage là gì?

- localStorage dùng để lưu trữ dữ liệu tại trình duyệt của user, tính năng hữu ích trong HTML 5 dùng để lưu trữ nhiều dạng dữ liệu mà không ảnh hưởng tới hiệu năng website
  - local Storage: Lưu trữ dữ liệu mà không có thời hạn (kể cả khi trình duyệt bị đóng).
  - Session Storage: Lưu trữ dữ liệu trong 1 session và sẽ mất khi tab hiện tại bị đóng.

* local Storage: Cách sử dụng:
  Bước 1: Lưu trữ dữ liệu tại local Storage: (chỉ có thể lưu trữ chuỗi bên trong localStorage).

  - localStorage.setItem('key',"value");
  - localStorage.key = "value"
  - localStorage['key'] = "value"

  ==> lưu trữ 1 biến x bất kỳ, ta sử dụng câu lệnh:
  localStorage.setItem('key',JSON.stringify(x));

  Bước 2: Lấy ra giá trị đã lưu trữ, ta sử dụng phương thức getItem();
  Cú pháp:
  let variable = localStorage.getItem("key");

  Bước 3; Xóa dữ liệu đã lưu trữ trên localStorage
  localStorage.removeItem('key')

- Nhiệm Vụ: Lưu trữ mảng vào trong localStorage

- Lý thuyết mới như sau: Đối tượng location trong Javascript

  - Đối tượng location là con của đối tượng window và Đối tượng location này chuyên dùng để xử lý, điều hướng url của trang web.

  - Cú pháp : window.location;

  - redirect trang web bằng javascript: sử dụng window.location.href = ''
