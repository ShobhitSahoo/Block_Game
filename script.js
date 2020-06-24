var controller = function() {

    document.addEventListener('keydown', e => {

        if (e.keyCode === 37 || e.which === 37) {
            //Move character to left
            console.log("left");
            moveLeft();
        } else if (e.keyCode === 39 || e.which === 39) {
            //Move character to right
            console.log("right");
            moveRight();
        }

    });

    const character = document.getElementById('character');

    let moveLeft = function() {
        // Get all css properties and get the value of left
        let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        // Moving left so - left  
        left -= 100;
        // Update the value to left
        if (left >= 0) {
            character.style.left = left + "px";
        }
    };

    let moveRight = function() {
        // Get all css properties and get the value of left
        let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        // Moving left so + left  
        left += 100;
        // Update the value to Right
        if (left < 300) {
            character.style.left = left + "px";
        }
    };

    let block = document.getElementById('block');
    let score = 0;

    block.addEventListener('animationiteration', () => {
        let random = Math.floor(Math.random() * 3);
        left = random * 100;
        //console.log(left);
        block.style.left = left + "px";
        score++;
    });

    setInterval(function() {

        let characterLeftValue = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

        if (characterLeftValue === blockLeft && blockTop < 500 && blockTop > 300) {
            alert("Game Over | Score:" + score);
            block.style.animation = "none";
        }
    }, 5);

};
document.querySelector('.newGame').addEventListener('click', function() {
    controller();
})