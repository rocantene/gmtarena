  // preloader
  // window.onload = function() {
  //   setTimeout(function() {
  //     var preloader = document.querySelector(".preloader");
  //     preloader.style.display = "none";
  //     document.body.style.overflow = "auto";
  //   }, 3000);
  // };
  
  // document.addEventListener('DOMContentLoaded', () => {
  //   const preloader = document.querySelector('.preloader');
  //   const delayTime = 3500;
  
  //   // Добавляем случайный параметр к URL изображений (исправляю баг)
  //   const images = document.querySelectorAll('.preloader img');
  //   images.forEach(img => {
  //     const src = img.getAttribute('src');
  //     img.setAttribute('src', `${src}?${Math.random()}`);
  //   });
  //   // Запускаем таймер
  //   setTimeout(() => {
  //     preloader.classList.add('preloader_hidden');
  //   }, delayTime);
  // });
  document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const delayTime = 3500;
  
    // Добавляем случайный параметр к URL изображений (исправляю баг)
    const images = document.querySelectorAll('.preloader img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      img.setAttribute('src', `${src}?${Math.random()}`);
    });
  
    // Проверяем, является ли устройство мобильным
    const isMobile = window.innerWidth <= 768; // Измените это значение в соответствии с вашими требованиями
  
    // Запускаем таймер
    setTimeout(() => {
      preloader.classList.add('preloader_hidden');
  
      // Если устройство мобильное, то восстанавливаем скролл после скрытия прелоудера
      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    }, delayTime);
  
    // Если устройство мобильное, то запрещаем скролл во время показа прелоудера
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }
  });



///ТАЙМЕР
document.addEventListener("DOMContentLoaded", function() {
  const timerElement = document.getElementById('timer');

  const targetDate = new Date('January 12, 2024 17:00:00').getTime();
  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
    } else {
      const { days, hours, minutes, seconds } = calculateTimeUnits(timeDifference);

      timerElement.innerHTML = formatTime(days, hours, minutes, seconds);
    }
  }

  function calculateTimeUnits(timeDifference) {
    const oneDay = 1000 * 60 * 60 * 24;
    const oneHour = 1000 * 60 * 60;
    const oneMinute = 1000 * 60;

    const days = Math.floor(timeDifference / oneDay);
    const hours = Math.floor((timeDifference % oneDay) / oneHour);
    const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
    const seconds = Math.floor((timeDifference % oneMinute) / 1000);

    return { days, hours, minutes, seconds };
  }
  function formatTime(days, hours, minutes, seconds) {
    return `${days} d ${hours} h ${minutes} min`;
  }
});


//АНИМАЦИЯ ТОГЛА (цвет и положение)

document.getElementById('toggle').addEventListener('change', function () {
  var text1 = document.querySelector('.toggle-az');
  var text2 = document.querySelector('.toggle-ru');

  if (this.checked) {
      text1.style.color = '#FFF'; // Цвет для первого текста
      text2.style.color = '#1170F4'; // Цвет для второго текста
  } else {
      text1.style.color = '#1170F4'; // Возвращаем первый цвет 
      text2.style.color = '#FFF'; // Возвращаем второй цвет
  }
});

document.getElementById('toggle').addEventListener('change', function() {
const toggleCircle = document.querySelector('.toggle-circle');
toggleCircle.style.transform = this.checked ? 'translateX(30px)' : 'translateX(0)';

// Вызываем функцию плавного изменения языка
toggleLanguageSmooth();
});
// Функция плавного изменения языка
function toggleLanguageSmooth() {
// Получаем чекбокс и элементы, которые нужно изменить
var checkbox = document.getElementById("toggle");
var elementsToToggle = document.querySelectorAll("[data-lang-toggle]");

// Определяем новый язык на основе состояния чекбокса
var newLanguage = checkbox.checked ? "ru" : "az";

// Применяем класс для скрытия текста
elementsToToggle.forEach(function(element) {
  element.classList.add("hidden");
});

// Задержка перед сменой текста (по длительности перехода)
setTimeout(function() {
  // Изменяем содержимое элементов в соответствии с новым языком
  elementsToToggle.forEach(function(element) {
    var textKey = element.getAttribute("data-lang-toggle");
    element.textContent = languageData[newLanguage][textKey];
  });

  // Убираем класс для отображения текста с анимацией
  elementsToToggle.forEach(function(element) {
    element.classList.remove("hidden");
  });

  // Изменяем src атрибут iframe в соответствии с новым языком
  changeLanguage(newLanguage);
}, 500); // Длительность перехода в миллисекундах (0.5 секунды)
}
//Функция замены карты
function changeLanguage(newLanguage) {
  var iframe = document.getElementById('myIframe');
  var iframeSrc = '';

  if (newLanguage === 'ru') {
    iframeSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1519.9044384627778!2d49.8396743!3d40.368762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d410ad4f0c3%3A0xfc860b5dfbdf2cc2!2sGMT%20Arena!5e0!3m2!1sru!2saz!4v1704323881882!5m2!1sru!2saz';
  } else {
    iframeSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1519.8953862107353!2d49.8390926!3d40.3691634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d410ad4f0c3%3A0xfc860b5dfbdf2cc2!2sGMT%20Arena!5e0!3m2!1saz!2saz!4v1704314875301!5m2!1saz!2saz';
  }
  iframe.src = iframeSrc;
}

// Пример данных для переключения языка
  var languageData = {
    "az": {
      "hello": "Salam!",
      "GMT Arena - это": "GMT Arena-da sİzİ nələr gözləyİr:",
      "p1":"Mən Oggie, sizin sadiq dostunuz və GMT Arenanın gözəl dünyasında bələdçinizəm! Hər birinizlə unikal idman arenamızda görüşməyi səbirsizliklə gözləyirəm və həyəcanlanıram.",
      "p2":"GMT Esports komandası həmişə oyunçuların özlərini evdəki kimi hiss edə biləcəyi bir yer yaratmaq arzusunda olub. Və nəhayət, sizin üçün GMT Arenanın qapılarını açmağa hazır olduğumuz an gəlib çatdı.",
      "pc":"ədəd PC",
      "ps":"ədəd Playstation 5 oyun konsolu",
      "vip":"otaqlar",
      "dadli":"kofe bar",
      "coffee":"dadli kofe, sendvİçlər və desertlər olan kofe bar",
      "tv":"böyük ekranlarda dünya turnİrlərİnə baxmaq üçün məkan",
      "notebook":"noutbukda İşləmək üçün rahat yerlər",
      "puzzle":"Stolüstü oyunlar",
      "event":"Açilişda sİzİ nə gözləyİr:",
      "event-pc":"yeni güclü kompüterlər və PlayStation 5 ilə tanış olmaq imkanı",
      "event-cocktails":"xüsusi olaraq oyunçular üçün yaradılmış kokteyllər",
      "event-catering":"sizin üçün xüsusi hazırlanmış yemək və içkilər",
      "event-music":"DJ-dən musiqi",
      "event-tournaments":"lotereya, turnirlər və uduşlu oyunlar",
      "address-title":"12 yanvar saat 17:00",
      "address-subtitle":"Sİzİ gözləyİrİk",
      "map-title":"Ünvan:",
      "map-subtitle":"Bakı şəhəri, Tərlan Əliyarbəyov küç 6",
      "social":"Sosial şəbəkələrdə bizi izlə:"
    },
    "ru": {
      "hello": "Привет!",
      "GMT Arena - это": "GMT Arena - это:",
      "p1":"Я - Oggie, ваш верный компаньон и проводник в удивительный мир GMT Arena! С нетерпением и волнением я жду возможности встретить каждого из вас в нашей уникальной киберспортивной арене.",
      "p2":"Команда GMT Esports всегда мечтала о том, чтобы создать место, где геймеры смогут почувствовать себя как дома. И вот, наконец, наступил момент, когда мы готовы открыть перед вами двери GMT Arena.",
      "pc":"PC",
      "ps":"игровых консолей playstation 5",
      "vip":"комнаты",
      "dadli":"кофе-бар",
      "coffee":"Кофе-бар с вкусным кофе, сэндвичами и десертами",
      "tv": "просмотр мировых турниров на больших экранах вместе с друзьями",
      "notebook":"комфортные места для работы за ноутбуком",
      "puzzle":"настольные игры",
      "event":"Что вас ждет на Grand Opening:",
      "event-pc":"возможность испытать новые мощные компьютеры и PlayStation 5",
      "event-cocktails":"тематические коктейли, созданные специально для геймеров",
      "event-catering":"блюда и напитки от нашего кейтеринга",
      "event-music":"зажигательное музыкальное сопровождение от диджея",
      "event-tournaments": "лотерея, турниры и розыгрыши призов",
      "address-title":"с нетерпением ждем вас",
      "address-subtitle":"12 января в 17:00",
      "map-title":"по адресу:",
      "map-subtitle":"Баку, улица Тарлана Алиярбекова, 6",
      "social":"Присоединяйтесь к нам в социальных сетях:"
    }
  };




