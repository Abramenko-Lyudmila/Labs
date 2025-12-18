const fetchBtn = document.getElementById('fetchBtn');
const axiosBtn = document.getElementById('axiosBtn');
const dogContainer = document.getElementById('dogContainer');
const loading = document.getElementById('loading');

// --- Fetch API ---
fetchBtn.addEventListener('click', () => {
    dogContainer.innerHTML = '';
    loading.style.display = 'block';

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка мережі');
            }
            return response.json();
        })
        .then(data => {
            const img = document.createElement('img');
            img.src = data.message;
            dogContainer.appendChild(img);
        })
        .catch(error => {
            dogContainer.textContent = 'Сталася помилка: ' + error.message;
        })
        .finally(() => {
            loading.style.display = 'none';
        });
});

// --- Axios API ---
axiosBtn.addEventListener('click', () => {
    dogContainer.innerHTML = '';
    loading.style.display = 'block';

    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            const img = document.createElement('img');
            img.src = response.data.message;
            dogContainer.appendChild(img);
        })
        .catch(error => {
            dogContainer.textContent = 'Сталася помилка: ' + error.message;
        })
        .finally(() => {
            loading.style.display = 'none';
        });
});
