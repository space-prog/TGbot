const TOKEN = '7426138485:AAFoi4UmASo9VDtm3AYMUcxL7wuxEP9qKR4'; //Сюди ми записуємо токен бота
const CHAT_ID = '-1002200389934'; //Сюди ми пишемо ID Чату у який буде відправлятися форма
const URLAPI = `https://api.telegram.org/bot${TOKEN}/sendMessage` //Це відправка повідомлення через бота у вказаний чат вище

const succes = document.querySelector('.succes') //Це не обов'язково, тут ми шукаємо по класу p Яка показується при успішному виконанні скрипта

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(0);  //Забираємо перезавантаження сторінки при кліку на Сабміт

    let message = 'Заявка з сайту: \n' + 'Им`я: ' + this.name.value + '\n' + 'Номер: ' + this.phone.value; 
    // Це те що прийде нам на телеграм
    // \n Це перенос на нову строку
    // this.name.value - Зчитуємо що написав користувач у інпут

    axios.post(URLAPI, {
        chat_id: CHAT_ID, // Звертаємося до Константа CHAT_ID
        parse_mode: 'html', // Даємо знати що відправка йде з html
        text: message // У повідомлення виводимо текст з змінної message
    })
    // Через axios підключений у html ми відправляємо повідомлення на телеграм
    .then((res) => {
        succes.classList.remove('disp');
    }) 
    // Якщо все добре прибираємо клас disp в p 
    .catch((err) => {
        console.warn(err);
    })
    // Якщо щось не так видаємо помилку у консоль
    .finally(() => {
        console.log('Скрипт виконано успішно');
    })
    // Це не обов'язково! Якщо кнопка сабміт була натиснута виводимо у консоль 'Скрипт виконано успішно'
})
