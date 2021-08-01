- Giới thiệu tổng quan về ngôn ngữ lập trình Javascript:  (HTML - CSS - Javascript)
    + Tại sao tên là Javascript (JS)? JS ra đời khi mà ngôn ngữ Java lúc ý đang cực kỳ hot lúc bấy giờ (hot trend). Nên => đặt tên có chữ Java ở đầu để => pú fame => kéo người sử dụng Java => sang sử dụng Javascript. => rất rất thành công với cách đặt tên như vậy.

    + Javascript là ngôn ngữ lập trình đồng bộ hay bất đồng bộ? 
        * Đồng bộ: Xếp hàng lần lượt (người sau đợi người trước xong rồi mới tới mình)
        * Bất Đồng bộ: Mạnh ai người nấy được (Xử lý liền hết).

    ==> Javascript là ngôn ngữ lập trình có cả 2 điều trên?  => Tốc độ xử lý thuật toán cực kỳ nhanh. Nhưng  khi mà mình phải đợi 1 tiến trình gì đó (mà nó cần phải đợi). Thì JS không đợi mà nó thực hiện đồng thời các câu lệnh phía sau.


    + Ngôn ngữ lập trình có: Biến, toán tử, vòng lặp, điều kiện, hướng đối tượng.... (Java, JS, PHP, Python, Ruby, C, C++, C#)

        * Khai báo biến (Để lưu trữ dữ liệu)
            ^ const là hằng số: cannot change value;
            ^ let (Nên dùng cái này): Khai báo biến cục bộ: Chỉ được dùng trong khối của nó => ngoài khối ko sử dụng được.
            ^ var: Khai báo biến toàn cục: Sử dụng được trong toàn file

        * Các kiểu dữ liệu nguyên thủy của Javascript: (5 kiểu)
            ^ Number: kiểu số
                # Kiểm tra có phải kiểu Number hay không? (cú pháp typeof(variable))
                # Kiểm tra có phải kiểu Number hay không? (sử dụng isNan()) => isNotANumber() : Biến truyền vào không phải kiểu Number đúng không? 


            ^ String: Kiểu chuỗi: 3 loại ngoặc: ` `, ' ', " "; 
                #  Kiểm tra có phải kiểu String hay không? (cú pháp typeof(variable))
            ^ Boolean: Kiểu đúng/sai
                #  Kiểm tra có phải kiểu Boolean hay không? (cú pháp typeof(variable))
            ^ undefinded: Kiểu không xác định
            ^ Null: Không tồn tại giá trị

        * Các phép toán tử: 
            ^ <: Dấu nhỏ hơn
            ^ >: Dấu lớn hơn
            ^ =: Dấu gán giá trị
            ^ ==: Dấu so sánh tương đối
            ^ ===: Dấu so sánh tuyệt đối
            ^ (điều kiện)? Lệnh 1: Lệnh 2; : Toán tử 3 ngôi.

        * Câu điều kiện: Cú pháp
            ^ if(điều kiện){
                // Kiểm tra điều kiện đúng thì thực hiện lệnh trong này. Sai thì bỏ qua khối if và chạy lệnh phía sau
            }

            ^ else if(điều kiện){
                // Điều kiện này nằm ở giữa if và else, nó sẽ kiểm tra điều kiện khi mà if(điều kiện) là sai. => chạy đến else if.
            }

            ^ else{
                Nếu như if không thỏa mãn điều kiện => chạy code trong else
            }
        