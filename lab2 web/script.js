const gallery = document.getElementById('gallery');

for (let i = 1; i <= 3; i++) {
    const img = document.createElement('img');
    img.src = `images/pic_${i}.jpg`;
    img.alt = `pic_${i}`;
    gallery.appendChild(img);
}

let j = 4;
while (j <= 6) {
    const img = document.createElement('img');
    img.src = `images/pic_${j}.jpg`;
    img.alt = `pic_${j}`;
    gallery.appendChild(img);
    j++;
}
