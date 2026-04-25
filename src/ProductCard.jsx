import React from "react";

const ProductCard = () => {
  return (
    <article className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden md:max-w-3xl md:flex md:items-center">

      {/* Оптимизированное изображение */}
      <picture className="md:w-1/3 md:flex-shrink-0">
        <source
          media="(min-width:768px)"
          srcSet="/img/phone-desktop.webp"
          type="image/webp"
        />

        <source
          srcSet="/img/phone-mobile.webp"
          type="image/webp"
        />

        <img
          src="/img/phone.jpg"
          alt="Смартфон"
          loading="lazy"
          className="w-full h-48 object-cover md:h-full md:min-h-[250px]"
        />
      </picture>

      {/* Информация */}
      <div className="p-6 text-center md:text-left md:w-2/3 md:p-8">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Samsung Galaxy S24
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-2">
          Потужний смартфон з AMOLED дисплеєм 6.2", процесором Snapdragon
          та камерою 50MP.
        </p>

        {/* характеристики */}
        <ul className="text-sm text-gray-600 mt-3 space-y-1">
          <li>📱 Дисплей: 6.2" AMOLED</li>
          <li>⚡ Процесор: Snapdragon 8 Gen</li>
          <li>💾 Пам'ять: 256 GB</li>
          <li>📷 Камера: 50 MP</li>
        </ul>

        {/* цена */}
        <p className="text-xl font-bold text-blue-600 mt-4">
          29 999 грн
        </p>

        {/* кнопка */}
        <button className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Купити
        </button>

      </div>
    </article>
  );
};

export default ProductCard;