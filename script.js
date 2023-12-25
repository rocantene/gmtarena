///ТАЙМЕР
// дата и время
const targetDate = new Date('January 6, 2024 17:00:00').getTime();

// Обновляет таймер каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    document.getElementById('timer').innerHTML = 'Время истекло!';
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML =
      `${days} days ${hours} hr ${minutes} min`;
  }
}


//АНИМАЦИЯ ТОГЛА
document.getElementById('toggle').addEventListener('change', function() {
    const toggleCircle = document.querySelector('.toggle-circle');
    toggleCircle.style.transform = this.checked ? 'translateX(30px)' : 'translateX(0)';
  });


//Скрипт меняющий язык
  function toggleLanguage() {
    // Получаем чекбокс и элементы, которые нужно изменить
    var checkbox = document.getElementById("toggle");
    var elementsToToggle = document.querySelectorAll("[data-lang-toggle]");

    // Определяем новый язык на основе состояния чекбокса
    var newLanguage = checkbox.checked ? "ru" : "az";

    // Изменяем содержимое элементов в соответствии с новым языком
    elementsToToggle.forEach(function (element) {
      var textKey = element.getAttribute("data-lang-toggle");
      element.textContent = languageData[newLanguage][textKey];
    });
  }

  // Пример данных для переключения языка
  var languageData = {
    "az": {
      "hello": "Salam!",
      "GMT Arena - это": "GMT Arena-da sizi nələr gözləyir:",
      "p1":"Mən Oggie, sizin sadiq dostunuz və GMT Arenanın gözəl dünyasında bələdçinizəm! Hər birinizlə unikal idman arenamızda görüşməyi səbirsizliklə gözləyirəm və həyəcanlanıram.",
      "p2":"GMT Esports komandası həmişə oyunçuların özlərini evdəki kimi hiss edə biləcəyi bir yer yaratmaq arzusunda olub. Və nəhayət, sizin üçün GMT Arenanın qapılarını açmağa hazır olduğumuz an gəlib çatdı.",
      "pc":"ədəd PC",
      "ps":"ədəd Playstation 5 oyun konsolu",
      "vip":"otaqlar",
      "dadli":"kofe bar",
      "coffee":"dadlı kofe, sendviçlər və desertlər olan kofe bar",
      "tv":"böyük ekranlarda dünya turnirlərinə baxmaq üçün məkan",
      "notebook":"noutbukda işləmək üçün rahat yerlər",
      "puzzle":"Stolüstü oyunlar",
      "event":"Açılışda sizi nə gözləyir:",
      "event-pc":"yeni güclü kompüterlər və PlayStation 5 ilə tanış olmaq imkanı",
      "event-cocktails":"xüsusi olaraq oyunçular üçün yaradılmış kokteyllər",
      "event-catering":"sizin üçün xüsusi hazırlanmış yemək və içkilər",
      "event-music":"DJ-dən musiqi",
      "event-tournaments":"lotereya, turnirlər və uduşlu oyunlar",
      "address-title":"6 yanvar saat 17:00",
      "address-subtitle":"Sizi gözləyirik",
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
      "event-catering":"люда и напитки от нашего кейтеринга",
      "event-music":"зажигательное музыкальное сопровождение от диджея",
      "event-tournaments": "лотерея, турниры и розыгрыши призов",
      "address-title":"с нетерпением ждем вас",
      "address-subtitle":"6 января в 17:00",
      "map-title":"по адресу:",
      "map-subtitle":"6 Tarlan Aliyarbeyov St, Baku",
      "social":"Присоединяйтесь к нам в социальных сетях:"
    }
  };




