const tc = Number.parseInt(prompt("Введите температуру в Цельсиях(например от -20 до +30)"));

const tf = (9 / 5) * tc + 32;

alert("Температура в Цельсиях: " + tc + " в Фаренгейтах будет: " + tf.toFixed(1));