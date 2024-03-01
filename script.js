let block = document.querySelector('.block')
let create_card_btn = document.querySelector('body')

create_card_btn.addEventListener('click', function(e) {
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

alert('test')
