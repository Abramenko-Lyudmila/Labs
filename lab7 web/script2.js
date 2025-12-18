const userList = document.getElementById('userList');
const userDetails = document.getElementById('userDetails');
const pagination = document.getElementById('pagination');

let users = [];
let currentPage = 1;
const usersPerPage = 3;

// --- Отримати дані з API ---
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data;
        renderPage(currentPage);
        renderPagination();
    })
    .catch(err => {
        userList.innerHTML = `<li>Помилка завантаження даних: ${err.message}</li>`;
    });

// --- Відобразити користувачів на сторінці ---
function renderPage(page) {
    userList.innerHTML = '';
    const start = (page - 1) * usersPerPage;
    const end = start + usersPerPage;
    const pageUsers = users.slice(start, end);

    pageUsers.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        li.addEventListener('click', () => showDetails(user));
        userList.appendChild(li);
    });
}

// --- Показати деталі користувача ---
function showDetails(user) {
    userDetails.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Телефон:</strong> ${user.phone}</p>
        <p><strong>Сайт:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p><strong>Компанія:</strong> ${user.company.name}</p>
        <p><strong>Адреса:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
}

// --- Пагінація ---
function renderPagination() {
    const totalPages = Math.ceil(users.length / usersPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.disabled = true;
        btn.addEventListener('click', () => {
            currentPage = i;
            renderPage(currentPage);
            renderPagination();
        });
        pagination.appendChild(btn);
    }
}
