
/**
 * Voor de afbeeldingen in print-modus
 */
$(function(){

  var latest_bottom;
  $('.image-left, .image-right').each(function(){

    $(this)
      .css('margin-top', '-' + $(this).outerHeight())
      .css('top', $(this).outerHeight() + 35);

    if( $(this).hasClass('obama') ){
      $(this).css('top', $(this).outerHeight() + 35 + 0);
    }

    if( $(this).hasClass('evil-spirits') ){
      $(this).css('top', $(this).outerHeight() + 35 - 15);
    }

    if( $(this).hasClass('sjaal') ){
      $(this).css('top', $(this).outerHeight() + 35 - 15);
    }

    if( $(this).hasClass('nophone') ){
      $(this).css('top', $(this).outerHeight() + 35 - 15);
    }

  });

});

/**
 * Voor de video in print-modus
 */
$(function(){

  setTimeout(function(){
    $('.video').each(function(){

      if( $(this).attr('data-url') == undefined)
        return;

      $(this).find('iframe').remove();

      $(this).prepend('<img src="'+$(this).attr('data-url')+'" />');

    });
  });

});

