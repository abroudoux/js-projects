let result = document.getElementById('result');

const wipe = () => {
    result.value = '';
}

const show = (n) => {
    result.value += n;
}

const calc = () => {
    result.value = eval(result.value);
}