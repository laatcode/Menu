$(function (){
  $('.menu li:has(ul)').click(function (e){
    e.preventDefault()

    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this).children('ul').slideUp()
    }else {
      // Oculta los elementos
      $('.menu li ul').slideUp()
      $('.menu li').removeClass('active')
      $(this).addClass('active')
      // Mostrar elementos hijos
      $(this).children('ul').slideDown()
    }
  })

  $('.btn-menu').click(function (e){
    e.preventDefault()
    $('.menu-container .menu').slideToggle()
  })

  $(window).resize(function (){
    if($(document).width() > 450){
      $('.menu-container .menu').css({'display' : 'block'})
    }

    if($(document).width() < 450){
      $('.menu-container .menu').css({'display' : 'none'})
      $('.menu li ul').slideUp()
      $('.menu li').removeClass('active')
    }
  })
})
