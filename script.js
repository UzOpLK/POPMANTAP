window.onload = function(){
    var img = document.getElementById("popmantap1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio('pop.mp3');

    // mouseclick event
    img.addEventListener("mousedown", function(){
        increaseScore();
        img.src = 'popmantap2.png';
        audio.play();
    });

    img.addEventListener("mouseup", function(){
        img.src = 'popmantap1.png';
        audio.play();
    });

    // touch event
    img.addEventListener("touchstart", function(){
        increaseScore();
        img.src = 'popmantap2.png';
        audio.play();
    });

    img.addEventListener("touchmove", function(){
        img.src = 'popmantap1.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}