alert("Людмила Абраменко");

let user1 = "Людмила";
let user2 = user1;
alert(user2);

let password = prompt("Введіть пароль:");
if (password === "111") {
  alert("Рівень доступу: A");
} else if (password === "222") {
  alert("Рівень доступу: Б");
} else {
  alert("Доступ заборонено!!!");
}

let username = prompt("Введіть ім’я користувача:");
if (username === "ADMIN") {
  alert("Привіт адміністратор");
} else {
  alert("Доступ обмежений! Зверніться до адміністратора системи");
}

let day = prompt("Введіть номер дня тижня (1–7):");
day = Number(day);

switch (day) {
  case 6:
  case 7:
    alert("Вихідний");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    alert("Робочий день");
    break;
  default:
    alert("Невірне значення. Введіть число від 1 до 7.");
}
