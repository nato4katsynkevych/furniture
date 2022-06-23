$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 200,
    variableWidth: true,
  })
})
$(document).ready(function () {
  $('.slider-herro').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    easing: 'ease',
    autoplay: false,
    autoplaySpeed: 200,
  })
})

var $slider = $('.slider-herro')

if ($slider.length) {
  var currentSlide
  var slidesCount
  var sliderCounter = document.createElement('div')

  sliderCounter.classList.add('slider__counter')

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1
    slidesCount = slick.slideCount
    $(sliderCounter).text(currentSlide + '/' + 4)
  }

  $slider.on('init', function (event, slick) {
    $slider.append(sliderCounter)
    updateSliderCounter(slick)
  })

  $slider.on('afterChange', function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide)
  })

  $slider.slick()
}
