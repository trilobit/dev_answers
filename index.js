function updateAnswer(index) {
    const obj = database[index];
    $('.content h2').text(obj.text);
    $('.content .copyright').text('(c) ' + obj.name);
}

function getIndex(isRandom = true) {
    let index;

    if(!window.location.hash || isRandom) {
        index = parseInt(Math.random() * database.length, 10);
    } else {
        index = parseInt(window.location.hash.substr(1), 10);
    }

    return index;
}

$('.overlay').on('click', () => {
    updateAnswer(getIndex());
});

updateAnswer(getIndex(false));
