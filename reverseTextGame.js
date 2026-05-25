function reverseText() {
    const text = prompt('Введите текст, который хотите перевернуть');
    if (text === null || text === '') {
        alert('Вы ничего не ввели');
        return false;
    }
    const reversedText = text.split('').reverse().join('');
    alert(reversedText);
}