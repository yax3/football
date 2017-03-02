var kick = document.getElementById('button');
var scene = document.getElementById('scene');
var classArray = ['animate-kick-1-sector', 'animate-kick-2-sector', 'animate-kick-3-sector', 'animate-kick-4-sector', 'animate-kick-5-sector',
    'animate-kick-6-sector', 'animate-kick-7-sector', 'animate-kick-8-sector', 'animate-kick-9-sector'
];

var animationIsActive = false;

kick.onclick = function() {
	
    if (animationIsActive == false) {
        animationIsActive = true;
        setTimeout(function() {
            animationIsActive = false;
        }, 1500);

        scene.removeAttribute('class');

        var classItem = Math.floor(Math.random() * classArray.length);
        var myClassName = classArray[classItem];
        setTimeout(function() {
            scene.classList.add(myClassName, 'animated');
        }, 10);
    }
}