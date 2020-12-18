const myfullpage = new fullpage('#fullpage');

function init(){


    const hamburger = document.querySelector(".menu");
    const navOpen = document.querySelector(".nav-open");
    // const contact = document.querySelectorAll(".contact h3,p ");
    const social = document.querySelectorAll(".social");
    const logo = document.querySelector(".logo");
    const hlines = document.querySelectorAll(".menu line");
    
    const tl = new TimelineMax( {paused: 'true', reversed: 'true' } );
    tl.to(navOpen, 0.5, {y:0})
    // .fromTo(contact, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
    .fromTo(social, 0.5, {opacity: 0, y:10}, {opacity: 1, y:0},'-=0.5')
    .fromTo(logo, 0.2, {color: 'white'}, {color: 'black'}, '-=1')
    .fromTo(hlines, 0.2, {stroke: 'white', fill:"white"}, {stroke: 'black', fill:"black"}, '-=1');
    
    
    hamburger.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
    }
    init();
//Parallax-----------------------------------------------
            
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
//FLIGHTPATH---------------------------------------------
const flightPath1 = {
    curviness: 1.25,
    autoRotate: false,
    values:[
        {x: 130 , y: 0},
        {x: 140,y:5},
        {x: 150,y:5},
        {x: 160,y:8},
        {x: 170,y:5},
        {x: 200,y:2},
        {x: 220,y:3},
        {x: 280,y:0},
        {x: 290,y:5},
        {x: 320,y:5},
        {x: 500,y:0},
        {x: 550,y:-5},
        {x: 600,y:-50},
        {x: 720,y:-100},
        {x: 850,y:-250}

    ]
};

const flightPath2 = {
    curviness: 1.25,
    autoRotate: false,
    values:[
        {x: 130 , y: 0},
        {x: 160,y:5},
        {x: 200,y:10},
        {x: 260,y:20},
        {x: 300,y:50},
        {x: 360,y:60},
        {x: 400,y:70},
        {x: 450,y:80},
        {x: 500,y:90},
        {x: 550,y:95},
        {x: 600,y:100},
        {x: 650,y:98},
      

    ]
};

const flightPath3 = {
    curviness: 1.25,
    autoRotate: false,
    values:[
        {x: 130 , y: 0},
        {x: 160,y:5},
        {x: 200,y:10},
        {x: 260,y:20},
        {x: 300,y:30},
        {x: 360,y:30},
        {x: 400,y:40},
        {x: 50,y:40},
        {x: 550,y:30},
        {x: 600,y:25},
        {x: 700,y:20},
        {x: 850,y:10},
      

    ]
};

const flightPath4 = {
    curviness: 1.25,
    autoRotate: false,
    values:[
        {x: 130 , y: 0},
        {x: 140,y:5},
        {x: 150,y:-5},
        {x: 160,y:-8},
        {x: 170,y:-10},
        {x: 180,y:-20},
        {x: 190,y:-30},
        {x: 280,y:-60},
        {x: 210,y:-80},
        {x: 220,y:-100},
        {x: 230,y:-120},
        {x: 240,y:-160},
        {x: 250,y:-200},
        {x: 260,y:-240},
        {x: 270,y:-290},
        {x: 200,y:-290},
        {x: 100,y:-290},


      

    ]
};

const tween1 = new TimelineLite();

tween1.add(
    TweenLite.to(".f-1", 20, {
        bezier: flightPath1,
        ease: Power1.easeInOut
    })
); 

const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to(".f-2", 20, {
        bezier: flightPath2,
        ease: Power1.easeInOut
    })
); 

const tween3 = new TimelineLite();

tween3.add(
    TweenLite.to(".f-3", 20, {
        bezier: flightPath3,
        ease: Power1.easeInOut
    })
);

const tween4 = new TimelineLite();

tween4.add(
    TweenLite.to(".f-4", 20, {
        bezier: flightPath4,
        ease: Power1.easeInOut
    })
);

function copy() {
    var copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);
