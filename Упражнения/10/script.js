/*
var leftOffset = 0;
var moveHeading = function () {
    $("#heading").offset({ left: leftOffset });

    leftOffset++;

    if (leftOffset > 200) {
        leftOffset = 0;
    }
};
setInterval (moveHeading, 30);
*/

/*
var clickHandler = function (event) {
    document.write("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);
*/

var direction = 'вправо';
var offset = 0;
var clicks = 0;
var intervalLength = 100;

$("h1").offset({left:offset, top:offset});

var moveHeading = function(){
    if (direction === 'вправо') {
        $("h1").offset({left:offset});
        offset++;
        if(offset > 300) {
            offset = 0;
            direction = 'вниз';
        }
    } else if (direction === 'вниз') {
        $("h1").offset({top: offset});
        offset++;
        if (offset > 300) {
            offset = 300;
            direction = 'влево';
        }
    } else if(direction === 'влево') {
        $("h1").offset({left:offset});
        offset--;
        if(offset < 0) {
            offset = 300;
            direction = 'вверх';
        }
    } else if (direction === 'вверх') {
        $("h1").offset({top:offset});
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'вправо';
        }
    }
};

var intervalId = setInterval(moveHeading, intervalLength);

$("h1").click(function() {
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;

    if (clicks > 10) {
        $("h1").text("Вы победили!");
    } else {
        intervalId = setInterval(moveHeading, intervalLength)
    }
});

setInterval(moveHeading, 10);