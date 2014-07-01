var mainModule = (function($, window) {

  configVars = {
    scrollThreshold: 250
  }

  init = function() {
    addListeners();
  }

  addListeners = function(){
    $(document).on('scroll',onWindowScroll);
    $('.article-option.subnav').on('click',onArticleOptionClick);
  }

  onWindowScroll = function(e){
    var scrollTop = $(window).scrollTop();
    var scrollPos = Math.round((scrollTop / configVars.scrollThreshold) * 100);
    if (scrollPos > 100){
        //offWindowScroll();
    } else {
        $('.content-bg-image-container').css({'background-position-y' : scrollPos + '%'});
    }

    console.log(scrollPos);
  }

  offWindowScroll = function(){
    $(document).off('scroll',onWindowScroll);
  }

  onArticleOptionClick = function(){
    var isActive = $(this).hasClass('active');
    if (isActive){
        $(this).removeClass('active');
    } else {
        $('.article-option.subnav').removeClass('active');
        $(this).addClass('active');
    }
  }


  return {
    init: init,
  };

})(jQuery, window);

