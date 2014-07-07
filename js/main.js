var mainModule = (function($, window) {

  configVars = {
    scrollThreshold: 350
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
    var scrollThreshold = configVars.scrollThreshold;
    if (scrollTop > scrollThreshold){
        showBottomEmail();
    } else {
        hideBottomEmail();
    }
  }

  showBottomEmail = function(){
    $('#fixed-email-container:not(.active)').addClass('active');
  }

  hideBottomEmail = function(){
    $('#fixed-email-container').removeClass('active');
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

