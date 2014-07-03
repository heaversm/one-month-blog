var mainModule = (function($, window) {

  init = function() {
    addListeners();
  }

  addListeners = function(){
    $('.article-option.subnav').on('click',onArticleOptionClick);
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

