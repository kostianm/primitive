/**1. Даний рядок тексту. Вивести його задом наперед */

// let str = 'abrakadabra'
// let strReverse = str.split("").reverse().join("");
// console.log(strReverse);

/*2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину */

// function wholePart(num) {
//     return Math.trunc(num)
// }

// console.log(wholePart(1.543542));

/* 3. Прийняти від користувача (за допомогою prompt) його ім’я і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)*/

// const userName = prompt('Please enter your name: ')
// alert(userName.toUpperCase())

/* 4. Написати функцію, яка приймає рядок тексту з датою у форматі “2021 - 22 -09” і повертає її у вигляді “22.09.2021” */

// function changeDate(date) {
//     date = prompt('Please enter date: ')
//     let dateChange = `${date.slice(7, 9)}.${date.slice(-2,)}.${date.slice(0, 4)}`
//     return dateChange
// }

// console.log(changeDate());

/* 5. Написати функцію, яка приймає два рядки, написані у різному регістрі та порівнює їх незалежно від регістру.
isEqual(‘pApA’, ‘papa’)  //true
isEqual(‘qwerty’, ‘QWErty’)  //true
isEqual(‘aaa’, ‘EEE’) //false */

// function isEqual(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(isEqual('pApA', 'papa'));
// console.log(isEqual('qwerty', 'QWErty'));
// console.log(isEqual('aaa', 'EEE'));

/*6. Написати функцію, яка викидає помилку під час роботи і перевірити роботу функції, викликавши її у блоці try-catch
 */

// function makeError() {
//     throw new UserException('Is wrong')
// }

// try {
//     makeError()
// } catch (error) {
//     alert(`Виникла помилка!`);
// }