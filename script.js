"use strict";

// Bài 1: Viết một chương trình JavaScript thực hiện đảo ngược các giá trị trong một mảng đã cho. Không sử dụng phương thức reverse()

// const reverse = function (arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   return arr;
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(reverse(arr));

//-------------------------------------------------------------------------------------------------------

// Bài 2: Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không. Nếu có in ra vị trí của phần tử đó.

// const arr = [1, 2, 3, 4, 5];
// const element = Number(prompt("Input element"));
// console.log(arr.indexOf(element));

//-------------------------------------------------------------------------------------------------------

// Bài 3: Tạo mảng có sẵn với các phẩn tử số. Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:
// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
// Nếu số đó không có trong mảng cho sẳn thì alert(“Chúc bạn may mắn lần sau”)
// Và tiếp tục cho người dung chọn 1 số mới

// const arr = [1, 2, 3, 4, 5];
// let found = false;

// while (!found) {
//   const element = Number(prompt("Input element"));

//   if (arr.includes(element)) {
//     alert("Bingo");
//     found = true;
//   } else alert("Better luck next time");
// }

//-------------------------------------------------------------------------------------------------------

// Bài 4: Cho người dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng

// const maxElement = function (elements) {
//   const arr = elements.split(/[\s,]+/).map(Number);
//   const max = Math.max(...arr);
//   return max;
// };

// const elements = prompt("Enter number seperated by spaces or commas");
// console.log(maxElement(elements));

//-------------------------------------------------------------------------------------------------------

// Bài 5: Mô phỏng ứng dụng todo list, tạo sẵn một mảng todoList có sẵn 2 phần tử
// const todoList = [“Go to bed at 11pm”, “Do homework at 8pm”];

// Sử dụng những kiến thức thao tác với mảng (C/R/U/D), hỏi người dùng command mà người dùng muốn nhập vào thông qua 4 chữ cái C/R/U/D :

// C — Create:
// Cho người dùng nhập vào todo mới, sau đó in ra toàn bộ phần tử có trong todoList theo dạng :
// 1. Go to bed at 11pm
// 2. Do homework at 8pm
// 3. New todo
// 4. Something add new

// R — Read:
// In ra toàn bộ phần tử có trong todoList giống danh sách trên

// U — Update:
// Hỏi người dùng vị trí phần tử muốn update
// Hỏi người dùng nội dung muốn update → tiến hành update
// Sau đó in ra toàn bộ phần tử có trong todoList giống danh sách trên

// D — Delete:
// Hỏi người dùng vị trí phần tử muốn delete

// Tiến hành delete

// Sau đó in ra toàn bộ phần tử có trong todoList giống danh sách trên

// const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];

// function read() {
//   if (todoList.length === 0) {
//     console.log("Empty list!");
//   } else {
//     todoList.forEach((todo, i) => console.log(`${i + 1}. ${todo}`));
//   }
// }

// function create() {
//   const newTodo = prompt("Enter a new todo:");

//   todoList.push(newTodo);
//   read();
// }

// function update() {
//   const position =
//     Number(prompt("Enter the position of the todo to update:")) - 1;
//   if (position >= 0 && position < todoList.length) {
//     const newContent = prompt("Enter the new content for the todo:");

//     todoList[position] = newContent;
//     read();
//   } else {
//     alert("Invalid position!");
//   }
// }

// function del() {
//   const position =
//     Number(prompt("Enter the position of the todo to delete:")) - 1;
//   if (position >= 0 && position < todoList.length) {
//     todoList.splice(position, 1);
//     read();
//   } else {
//     alert("Invalid position!");
//   }
// }

// function commandList(command) {
//   switch (command.toUpperCase()) {
//     case "C":
//       create();
//       break;
//     case "R":
//       read();
//       break;
//     case "U":
//       update();
//       break;
//     case "D":
//       del();
//       break;
//     default:
//       alert("Invalid command!");
//       break;
//   }
// }

// function todoApp() {
//   let command;
//   while (true) {
//     command = prompt(
//       "Enter a command (C - Create, R - Read, U - Update, D - Delete, Q - Quit):"
//     );
//     if (command === null || command.toUpperCase() === "Q") {
//       break;
//     }
//     commandList(command);
//   }
// }

// todoApp();

//-------------------------------------------------------------------------------------------------------
