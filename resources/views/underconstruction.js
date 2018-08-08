const canvas = document.querySelector('canvas');
const c = canvas.getcontext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

const colours = {
    '#2185C5',
    '#7ECEFD',
    '#FFF6ES',
    '#FF7F66'
};

addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', {} => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init {};
});

function randosIntfromRange(min)