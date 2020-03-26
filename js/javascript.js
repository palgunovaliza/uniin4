// ЖЕЛТАЯ СТРАНИЦА
let block1 = anime({
  targets: '.block1',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '54', duration: 50, },
    {value: '5', duration: 50,}
  ],
})

let block1Click =
document.querySelector('.block1')
block1Click.onclick = block1.play

let block2 = anime({
  targets: '.block2',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '52', duration: 50, },
    {value: '5', duration: 50,}
  ],
})

let block2Click =
document.querySelector('.block2')
block2Click.onclick = block2.play


let block3 = anime({
  targets: '.block3',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '50', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block3Click =
document.querySelector('.block3')
block3Click.onclick = block3.play


let block4 = anime({
  targets: '.block4',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '48', duration: 50, },
    {value: '5', duration: 50,}
  ],
})

let block4Click =
document.querySelector('.block4')
block4Click.onclick = block4.play

let block5 = anime({
  targets: '.block5',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '46', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block5Click =
document.querySelector('.block5')
block5Click.onclick = block5.play


let block6 = anime({
  targets: '.block6',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '44', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block6Click =
document.querySelector('.block6')
block6Click.onclick = block6.play


let block7 = anime({
  targets: '.block7',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '42', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block7Click =
document.querySelector('.block7')
block7Click.onclick = block7.play

let block8 = anime({
  targets: '.block8',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '40', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block8Click =
document.querySelector('.block8')
block8Click.onclick = block8.play

let block9 = anime({
  targets: '.block9',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '38', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block9Click =
document.querySelector('.block9')
block9Click.onclick = block9.play

let block10 = anime({
  targets: '.block10',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '36', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block10Click =
document.querySelector('.block10')
block10Click.onclick = block10.play

let block11 = anime({
  targets: '.block11',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '34', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block11Click =
document.querySelector('.block11')
block11Click.onclick = block11.play

let block12 = anime({
  targets: '.block12',
  easing: 'linear',
  autoplay: false,
  opacity: 0,
  zIndex: [
    {value: '32', duration: 50, },
    {value: '5', duration: 50,}
  ],
})
let block12Click =
document.querySelector('.block12')
block12Click.onclick = block12.play



// // ЧЕРНАЯ СТРАНИЦА
let tl = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.redyellow',
    top: ['-36.5vw', '-36.5vw'],
    left: ['0px','-200px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseyellow',
    top: ['-14.5vw', '-14.5vw'],
    left: ['307px','481px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.bluered',
    top: ['-763px', '-763px'],
    left: ['-318px','0px'],
    easing:'easeInSine',
    opacity: 100,
    duration: 800,
  }, 0)
  .add({
    targets: '.bluered2',
    opacity: 0,
    display: 'none',
    easing: 'linear',
    duration: 10,
  }, 0)

let yellowredClick =
document.querySelector('.redyellow')
yellowredClick.onclick = tl.play


let tl2 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.ellipseblue',
    top: ['-675px', '-675px'],
    left: ['771px','956px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseyellow2',
    top: ['-130px', '-130px'],
    left: ['980px','813px'],
    easing:'easeInSine',
    opacity: 100,
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseyellow3',
    easing:'linear',
    opacity: ['100', '0'],
    duration: 10,
  }, 0)

let blueClick =
document.querySelector('.ellipseblue')
blueClick.onclick = tl2.play


let tl3 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.ellipsered',
    top: ['-80px', '-80px'],
    left: ['1300px','1442px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.blueyellow',
    top: ['-710px', '-710px'],
    left: ['1436px','1238px'],
    easing:'easeInSine',
    opacity: 100,
    duration: 800,
  }, 0)
  .add({
    targets: '.blueyellow2',
    opacity: ['100', '0'],
    easing: 'linear',
    duration: 10,
  }, 0)

let redClick =
document.querySelector('.ellipsered')
redClick.onclick = tl3.play


let tl4 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.planetyellow',
    top: ['-461px', '-461px'],
    left: ['1620px','1620px'],
    overflow: 'hidden',
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipsered2',
    top: ['1620px','1500px'],
    easing:'easeInSine',
    opacity: 100,
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipsered4',
    easing:'linear',
    opacity: ['100', '0'],
    duration: 10,
  }, 0)
let planetyellowClick =
document.querySelector('.planetyellow')
planetyellowClick.onclick = tl4.play


let tl5 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.bluered',
    easing: 'linear',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.bluered2',
    top: ['-763px', '-763px'],
    left: ['0px','-318px'],
    easing:'linear',
    opacity: ['0', '100'],
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipsered3',
    top: ['-130px', '-130px'],
    left: ['-154px','0px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseblue2',
    top: ['-775px', '-775px'],
    left: ['476px','281px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)


let bluered2Click =
document.querySelector('.bluered2')
bluered2Click.onclick = tl5.play

let tl6 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.ellipseyellow3',
    top: ['-130px', '-130px'],
    left: ['813px','980px'],
    easing:'linear',
    opacity: ['0', '100'],
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipseyellow2',
    easing: 'linear',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.yellowred',
    top: ['-435px', '-435px'],
    left: ['959px','816px'],
    easing:'easeInSine',
    opacity: 100,
    duration: 800,
  }, 0)

let ellipseyellow3Click =
document.querySelector('.ellipseyellow3')
ellipseyellow3Click.onclick = tl6.play

let tl7 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.blueyellow',
    // top: ['1135px','925px'],
    easing: 'linear',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.blueyellow2',
    top: ['-710px', '-710px'],
    left: ['1238px','1436px'],
    easing:'linear',
    opacity: ['0', '100'],
    duration: 800,
  }, 0)
  .add({
    targets: '.planetred',
    top: ['-253px', '-253px'],
    left: ['1446px','1244px'],
    easing:'easeInSine',
    duration: 800,
  }, 0)

let blueyellow2Click =
document.querySelector('.blueyellow2')
blueyellow2Click.onclick = tl7.play

let tl8 = anime.timeline({
  autoplay: false
})

  .add({
    targets: '.ellipseyellow4',
    display: 0,
    top: ['-130px', '-130px'],
    left: ['-200px','-200px'],
    easing: 'easeInSine',
    duration: 800,
  }, 0)
  .add({
    targets: '.ellipsered2',
    easing: 'linear',
    opacity: 0,
    duration: 10,
  }, 0)
  .add({
    targets: '.ellipsered4',
    top: ['-130px', '-130px'],
    left: ['0px','-200px'],
    easing: 'linear',
    opacity: ['0', '100'],
    duration: 800,
  }, 0)

let ellipsered4Click =
document.querySelector('.ellipsered4')
ellipsered4Click.onclick = tl8.play




// КРАСНАЯ СТРАНИЦА
anime({
  targets: '.square01',
  height: 10,
  easing: 'linear',
  direction: 'alternate',
  duration: 3000,
  loop: true,
});

anime({
  targets: '.square02',
  width: 5,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3000,
  loop: true,
});
anime({
  targets: '.square03',
  height: 7,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 400,
  loop: true,
});
anime({
  targets: '.square04',
  width: 20,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 200,
  loop: true,
});
anime({
  targets: '.square05',
  height: 5,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 1000,
  loop: true,
});
anime({
  targets: '.square06',
  width: 15,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 500,
  loop: true,

});
anime({
  targets: '.square07',
  width: 5,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3000,
  loop: true,
});
anime({
  targets: '.square08',
  height: 20,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 350,
  loop: true,
});
anime({
  targets: '.square09',
  width: 10,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 2000,
  loop: true,
});
anime({
  targets: '.square010',
  height: 5,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3700,
  loop: true,
});
anime({
  targets: '.square011',
  height: 17,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
});
anime({
  targets: '.square012',
  width: 7,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 700,
  loop: true,
});
anime({
  targets: '.square013',
  width: 9,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 300,
  loop: true,
});

// СИНЯЯ СТАРНИЦА
let status1 = false;
    let element1 = document.querySelector('.eyered1')

    element1.onclick = function () {

        if (status1) {

            element1.setAttribute('src', 'img/eye red.svg')

            status1 = false
        } else {

            element1.setAttribute('src', 'img/eye close.svg')

            status1 = true
        }
    }

let status2 = false;
  let element2 = document.querySelector('.eyeblack1')

  element2.onclick = function () {

      if (status2) {

          element2.setAttribute('src', 'img/eye black.svg')

          status2 = false
      } else {

          element2.setAttribute('src', 'img/eye close.svg')

          status2 = true
      }
  }
let status3 = false;
  let element3 = document.querySelector('.eyeyellow1')

  element3.onclick = function () {

      if (status3) {

          element3.setAttribute('src', 'img/eye yellow.svg')

          status3 = false
      } else {

          element3.setAttribute('src', 'img/eye close.svg')

          status3 = true
      }
  }

let status4 = false;
    let element4 = document.querySelector('.eyered2')

    element4.onclick = function () {

        if (status4) {

            element4.setAttribute('src', 'img/eye red.svg')

            status4 = false
        } else {

            element4.setAttribute('src', 'img/eye close.svg')

            status4 = true
        }
    }

let status5 = false;
    let element5 = document.querySelector('.eyeblack2')

    element5.onclick = function () {

        if (status5) {

            element5.setAttribute('src', 'img/eye black.svg')

            status5 = false
        } else {

            element5.setAttribute('src', 'img/eye close.svg')

            status5 = true
        }
    }

let status6 = false;
    let element6 = document.querySelector('.eyeyellow2')

    element6.onclick = function () {

        if (status6) {

            element6.setAttribute('src', 'img/eye yellow.svg')

            status6 = false
        } else {

            element6.setAttribute('src', 'img/eye close.svg')

            status6 = true
        }
    }

let status7 = false;
    let element7 = document.querySelector('.eyered3')

    element7.onclick = function () {

        if (status7) {

            element7.setAttribute('src', 'img/eye red.svg')

            status7 = false
        } else {

            element7.setAttribute('src', 'img/eye close.svg')

            status7 = true
        }
    }

let status8 = false;
    let element8 = document.querySelector('.eyeblack3')

    element8.onclick = function () {

        if (status8) {

            element8.setAttribute('src', 'img/eye black.svg')

            status8 = false
        } else {

            element8.setAttribute('src', 'img/eye close.svg')

            status8 = true
        }
    }

let status9 = false;
    let element9 = document.querySelector('.eyeyellow3')

    element9.onclick = function () {

        if (status9) {

            element9.setAttribute('src', 'img/eye yellow.svg')

            status9 = false
        } else {

            element9.setAttribute('src', 'img/eye close.svg')

            status9 = true
        }
    }

let status10 = false;
    let element10 = document.querySelector('.eyered4')

    element10.onclick = function () {

        if (status10) {

            element10.setAttribute('src', 'img/eye red.svg')

            status10 = false
        } else {

            element10.setAttribute('src', 'img/eye close.svg')

            status10 = true
        }
    }
