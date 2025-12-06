// 2
const user = {
  name: "Людмила",
  age: 20,
  isStudent: true
};

for (let key in user) {
  console.log(user[key]);
}

// 3
let num = prompt("Введіть число більше за 100:");

while (num !== null && num !== "" && num <= 100) {
  num = prompt("Спробуйте ще раз. Введіть число більше за 100:");
}

console.log("Ваше число:", num);

// 4
let n = 10;

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// 5

const fitness = {
    visitors: [] 
};

for (let i = 0; i < 2; i++) {
    const pib = prompt("Введіть ПІБ:");
    const visits = prompt("Скільки разів на тиждень відвідуєте фітнес?");

    fitness.visitors.push(`${pib} – ${visits}`);
}

document.write("<h3>Частота відвідувань фітнес центру (тиждень):</h3>");
fitness.visitors.forEach((v, index) => {
    document.write(`${index + 1}. ${v}<br>`);
});




