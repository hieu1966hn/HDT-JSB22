Buổi 1: Mình học về display: block, inline - block, inline

Buổi 2: Mình sẽ học tiếp về Position, và display: flex;

    - Tất tần tật về position trong CSS: Nó là thuộc tính xác định loại của phương pháp
    định vị trí cho thành phần.

        + position: static: Giá trị hiển thị Position trong css 1 cách mặc định, các thành phần sẽ nằm theo thứ tự của văn bản

        + position: relative: Định vị vị trí tuyệt đối cho các thành phần, không gây ảnh hưởng tới vị trí ban đầu hay các thành phần khác 
            * Giá trị position: relative: giúp căn chỉnh phần tử mà không gây ảnh hưởng đến các phần tử khác. Bình thường ta dùng margin or padding chắc chắ sẽ => đẩy các phần tử khác ra 1 đoạn => gây ảnh hưởng layout

        + position: absolute: Giúp định vị vị trí tuyệt đối cho thành phần theo thành phần bao ngoài, hoặc ít nhất theo cửa sổ trình duyệt. (Nó sẽ không còn tồn tại trên mặt phẳng web mình nữa)
            * Thông thường absolute  khi được sử dụng cho phần tử mà phần tử của cha nó đang có relative hoặc absolute. Để lúc này nó sẽ chạy theo phần tử cha nó

        + position: fixed: Giá trị này giúp  cho phần tử luôn cố định 1 chỗ khi chúng ta scroll (lăn chuột) trình duyệt

        + position: sticky: Cái này ít được hỗ trợ nhiều. Nó na ná fixed nhưng khi mà các em croll lên ra khỏi nó thì sẽ quay lại vị trí ban đầu



    - Tất tần tật về display: flex; (CSS3) giúp sắp xếp, bố cục các thành phần khối (block) một cách dễ dàng, linh hoạt hơn trước.