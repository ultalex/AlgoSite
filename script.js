let block = document.querySelector('.block')
let create_card_btn1 = document.querySelector('.container')

create_card_btn1.addEventListener('click', function(e) {
   block.style.transform = `translate(${e.pageX - 25}px, ${e.pageY - 25}px)`
   block.style.opacity = 1
   anime({
       targets: '.block',
       opacity: 0,
       scale: 2,
       display: 'none',
       duration: 2000
   })
})

let create_card_btn2 = document.querySelector('.container2')

create_card_btn2.addEventListener('click', function(e) {
   block.style.transform = `translate(${e.pageX - 25}px, ${e.pageY - 25}px)`
   anime({
       targets: '.block',
       scale: [
           {value:0.2},
           {value:1},
           {value:2},
           {value:1},
           {value:0.2},
           {value:0}
       ],
       translateX: [
           {value:'-100px'},
           {value:'-50px'},
           {value:'0px'},
           {value:'50px'},
           {value:'100px'},
           {value:'0px'},
       ],
       display: 'none',
       duration: 2000
   })
})

let create_card_btn3 = document.querySelector('.target_mini')

create_card_btn3.addEventListener('click', function(e) {
   block.style.transform = `translate(${e.pageX - 25}px, ${e.pageY - 25}px)`
   anime({
       targets: '.block',
       keyframes: [
           {opacity:0.2, translateX:'-100px',scale:0.2},
           {opacity:0.5, translateX:'-50px',scale:1},
           {opacity:1, translateX:'0px',scale:2},
           {opacity:0.5, translateX:'50px',scale:1},
           {opacity:0.2, translateX:'100px',scale:0.2},
           {opacity:0}
       ],
       display: 'none',
       duration: 2000
   })
})
