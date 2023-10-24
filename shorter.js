function arrayNameManipulator(array, position) {
  let valueStr = array.map((elem) => elem).join(" ");
  let valueArr = valueStr.split(" ");
  let finalValue = valueArr.map((elem) => elem[position]);

  console.log(finalValue)
}

arrayNameManipulator(
  [
    "abida",
    "john",
    "emma",
    "alex",
    "eva",
    "joseph",
    "very very extremely short girl"
  ],
  0
);
