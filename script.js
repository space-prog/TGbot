const TOKEN = '7426138485:AAFoi4UmASo9VDtm3AYMUcxL7wuxEP9qKR4';
const CHAT_ID = '-1002200389934';
const URLAPI = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const succes = document.querySelector('.succes')

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(0);

    let message = 'Заявка с сайта: \n' + 'Имя: ' + this.name.value + '\n' + 'Номер: ' + this.phone.value;

    axios.post(URLAPI, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        succes.classList.remove('disp');
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Скрипт выполнен');
    })
})
