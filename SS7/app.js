// // Khai báo mảng

// // let arr = [];
// // let arr1 = [1];
// // arr2 = [1, 2, 3]; // mặc định hiểu là có let đằng sau khi trừ thuế
// // console.log(arr, "Mảng 0 phần tử");
// // console.log(arr1, "Mảng 1 phần tử");
// // // console.log(arr2,"Mảng 2 phần tử");
// // console.log("Mảng " + arr + " có " + arr.length + " phần tử")
// // console.log(arr2);
// // let a = 1
// // console.log(Array.isArray(a)); // phần tử truyền vào có phải mảng? => true


// ///THêm phàn tử vào cuối mảng:

// // let arr = [1];
// // arr.push(2);
// // console.log(arr); // 

// //THêm phàn tử vào đầu mảng:
// // let arr = [1, 2, 3];
// // arr.unshift(0)
// // console.log(arr);


// // ^ Thêm 1 phần tử ở vị trí bất kỳ: vd: giữa mảng; 
// // let arr = [1, 2, 3];
// // arr.splice(1,0,1.5)
// // console.log(arr);


// // Update
// // C1: dùng splice
// // let arr = [1, 2, 3];
// // //vị trí   0, 1, 2
// // //  2 => 1 + 1
// // arr.splice(1,1,"1+1")
// // console.log(arr);

// // C2: Vòng lặp thông qua chỉ số của mảng
// // let arr = [1, 2, 3];
// // arr[1] = "1+1";
// // console.log(arr);


// // Delete 1 phần tử mảng ở vị trí bất kỳ mình muốn
// // let arr = [10, 5, 100, 8];
// // xóa phần tử thứ 30
// // // C1 : splice
// // arr.splice(2,1);
// // console.log(arr);



// ///////// Giới thiệu Về object
// let Quan = {
//     //  thuộc tính được định nghĩa
//     name: "Lê Hoàng Quân",
//     age: 13,
//     address: "Việt Nam",
//     Id: 1234567891012,


//     // method: phương thức
//     say: function () {
//         alert("Quân đang nói gì đó");
//     },
//     walk: function () {
//         alert("Ban Quan dang di bo")
//     }
// };

// // Quan.walk();
// console.log(Quan.name);


// // C,R,U,D với object

// // C: them thuộc tính cho object
// Quan.sex = 'male';


// // R
// // console.log(Quan);


// // U: Update 
// // upđate: thuộc tính 
// Quan.age = 103;
// console.log(Quan);
// // upđate: Phương thức
// Quan.say = function () {
//     alert("Anh Hiếu đẹp troai")
// }
// Quan.say();

// /// delete 1 phương thức;
// delete Quan.walk;


/////////////// Chữa bài tập về nhà
// Bai01
// let TraiCay = [
//     ["Grape", 15],
//     ["banana", 20],
//     ["apple", 200],
// ]
// let a;
// for (let i = 0; i < TraiCay.length; i++) {
//     a = TraiCay[i];
//     console.log(`Tôi có ${a[1]} quả ${a[0]}`);
// }

// Bai02:
// C2 
// for (let key in TraiCay) {
//     // console.log(key); Hiểu Key là vị trí phần tử trong mảng
//     let b = TraiCay[key];
//     console.log(`Tôi có ${b[1]} quả ${b[0]}`);
// }

// C3: 
// for(let key of TraiCay) {
//     // console.log(key); Key: chính là phần tử trong mảng
//     console.log(`Tôi có ${key[1]} quả ${key[0]}`);
// }


// Bài 03; 
let myDog = {
    "name": "Ngáo",
    "legs": 4,
    "friends": ["everything"]
}
console.log(myDog, " tên chưa đổi");
myDog.name = "Husky";


//  thêm thuộc tính màu cho 
myDog.color = "Green"
console.log(myDog, "sau khi thêm thuộc tính màu");

// xóa thuộc tính friends 
delete myDog.friends;
console.log(myDog, "sau khi xóa thuộc tính friends");
