// let, var, const
// const message = 'Доброго вечора, ' + 'ми з України!';
// alert(message);

const userAge = parseInt(prompt('Введіть вік'));
alert('Ваш вік: ' + userAge);

const nextAge = add(userAge, 1); //userAge + 1;
alert('Ваш наступний вік: ' + nextAge);

// Number: 42, 42.42, Infinity, NaN
// Boolean: true, false

if (userAge >= 18) {
  alert('Повнолітній');
} else {
  alert('Неповнолітній');
}

function add(a, b) {
  const sum = a + b; // +, -, /, *, %
  return sum;
}

// undefined
// null
