//$ - все что является node
let $startBtn = document.querySelector('.app__btn--start');
let $appGame = document.querySelector('.app__game');
let $time = document.querySelector('.app__time--dinamic');
let $result = document.querySelector('.app__result-dinamic');
let $input = document.querySelector('.app__input');

let count = 0;
let userTime = $input.value;

$startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.app__result').classList.add('hide');
    count = 0;
    $time.textContent = userTime;
    $appGame.classList.remove('hide');
    let interval = setInterval(function () {
        let time = parseFloat($time.textContent);
        if (time <= 0) {
            $appGame.classList.add('hide');
            document.querySelector('.app__result').classList.remove('hide');
            $result.textContent = count;
            clearInterval(interval);
            $appGame.innerHTML = '';
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);
    renderBox();
});

$input.oninput = function () {
    userTime = $input.value;
    $time.textContent = userTime;
    if ($time.textContent == '') {
        $time.textContent = 5.0;
    } 
}

document.onclick = function (event) {
    if(event.target.classList.contains('click')) {
        event.target.remove();
        count += 1;
        renderBox();
    }
}

function randInt() {
    return Math.floor(Math.random() * 100 + 10);
}

function renderBox () {
    let box = document.createElement('div');
    box.style.backgroundColor = '#000';
    box.classList.add('click');
    box.style.width = randInt() + 'px';
    box.style.position = 'absolute';
    box.style.top = randInt() * 3 + 'px';
    box.style.left = randInt() * 3 + 'px';
    console.log(box.style.width);
    box.style.height = box.style.width;
    $appGame.append(box);
}

