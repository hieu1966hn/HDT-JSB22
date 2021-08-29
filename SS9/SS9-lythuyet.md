DOM (document - object - model):

- Với DOM, JS được tất cả  sức mạnh cần thiết để tạo ra HTML động
  + JS có thể thay đổi tất các phần tử HTML trong trang
  + JS có thể thay đổi tất các thuộc tính HTML trong trang
  + JS có thể thay đổi tất các phong cách CSS trong trang
  + JS có thể loại bỏ các yếu tố HTML và thuộc tính hiện
  + JS có thể phản ứng với tất cả các sự kiện HTML hiện trong trang
  + JS có thể tạo ra sự kiện HTML mới trong trang



Cách truy xuất trực tiếp thẻ (3 phương thức):

- document.getElementById("id_can_tim");

- document.getElementByTagName("div");
- document.getElementByName("Ten_can_tim");

- document.querySeclector("#id hoac .class"): truy xuất đến vùng chọn và trả về kết quả tham chiếu đầu tiên


- document.querySeclectorAll("#id hoac .class"): trả về các mảng tham chiếu


- Thay vi su dung onclick, DOM cung  cap cho chung ta 1 phương thức lắng nghe sự kiện

<!-- Quan trong -->
TheHTML.addEventListener("Sự kiện được lắng nghe", ()=>{
  <!-- Hành động xảy ra khi lắng nghe sự kiện đó -->
})
