var flag = 0,
    svg = document.querySelector('svg'),
    $svg = $(svg);

// Необходимо поймать второй клик (если на первом удалить атрибуты, анимация не начнётся), потом подменяем функцию на вызов по "разморозке" анимации
var start = function(){
  if(flag === 1){
    // Убираем у animateTransform триггер, чтобы не сбрасывалась анимация на ноль
    $svg.find('animate').removeAttr('begin');
    
    start = function() {
      svg.unpauseAnimations()
    };
     start();
  }
  flag++;
}
var pause = function(){
  svg.pauseAnimations();
}