function arrayNameManipulator(array, position) {
  let valueStr = array
    .map((elem) => {
      if (typeof elem !== "string") {
        return;
      }
      return elem;
    })
    .join(" ");
  let valueArr = valueStr.split(" ");
  valueArr.forEach((elem) => {
    if (elem == "") {
      return;
    }
    console.log(elem[position]);
  });
}

arrayNameManipulator(
  [
    "abida",
    "john",
    "emma",
    "alex",
    "eva",
    "joseph",
    "very very extremely short girl",
  ],
  0
);

// some test code:
// let arr = ["abc def ", "ghi", "jkl"];
// let a = arr.map((elem) => elem).join(" ");
// let x = a.split(" ");
// x;
// x.forEach((elem) => {
//   if (!elem) {
//     return;
//   }
//   console.log(elem[0]);
// });
