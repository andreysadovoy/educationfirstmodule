// В функцию передаем два параметра: массив и значение. По результату выполнения вернуть все объекты массива, свойство 'year', которых не равно второму параметру.

let array = [12,24,38,64,128,364,425,1028]
let collectionArr =[
  {
    name: "Ford",
    model: "Mustang",
    year: 1969
  },
  {
    name: "Ford",
    model: "Mustang",
    year: 1969
  },{
    name: "Ford",
    model: "Mustang",
    year: 1969
  },{
    name: "Ford",
    model: "Mustang",
    year: 1969
  }
];

const testFunction = (arr, val, val2) => {
  let result = false;

  arr.forEach(value => {
    if (value.name === val && value.year === val2) {
      result = true;
    } else {
      result = false;
      return result;
    }

  })
  return result

}






const t = testFunction(collectionArr,'Ford',1969);
console.log(t);
