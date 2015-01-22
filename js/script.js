
/**
 * Footnotes
 */

$(function(){

  //Give every toggle button a 'rel=ID'.
  $('.footnote-toggle').each(function(){
    $(this).attr( 'data-id', $(this).text() );
  });

  //Get all footnotes and loop those
  var footnote, footnote_bottom, diff, latest_footnote_bottom;
  $('.footnote').each(function(){

    //Now move this footnote to the footnote-wrapper
    $(this)
      .appendTo( $('.footnote-toggle[data-id='+$(this).data('id')+']') )
      .changeElementType('span');

    //And create some space if an footnote was already on that position.
    footnote = $('.footnote[data-id='+$(this).data('id')+']') 
    diff = footnote.offset().top - latest_footnote_bottom;
    
    if(diff <= 10){
      footnote.css( 'margin-top', -40 +30 -diff );
    }

    if( footnote.hasClass('mehrabian') ){
      footnote.css( 'margin-top', -40 +10 );
    }
    if( footnote.hasClass('van-hoek') ){
      footnote.css( 'margin-top', -40 +30 );
    }
    if( footnote.hasClass('bill-moyers') ){
      footnote.css( 'margin-top', -40 +10 );
    }
    if( footnote.hasClass('popkin') ){
      footnote.css( 'margin-top', -40 +40 );
    }
    if( footnote.hasClass('honan') ){
      footnote.css( 'margin-top', -40 +10 );
    }
    if( footnote.hasClass('term-uit-de-psychologie') ){
      footnote.css( 'margin-top', -40 +40  );
    }
    // if( footnote.hasClass('indica') ){
    //   footnote.css( 'margin-top', -40 +40  );
    // }
    if( footnote.hasClass('adam-s') ){
      footnote.css( 'margin-top', -40 +40  );
    }

    latest_footnote_bottom = footnote.offset().top + footnote.height();

  });

});
  
$(function(){

  //Op de klik van footnote-toggle: doe iets.
  $('.footnote-toggle').on('click', function(e){

    if( ! $(e.target).hasClass('footnote-toggle') )
      return;

    var footnote = $('.footnote[data-id=' + $(this).data('id') + ']');

    //Sowieso niet de href volgen!
    e.preventDefault();

    //Loop alle footnotes langs.
    $('.footnote').each(function(){

      //En als het niet de footnote is waar je op klikte...
      if( footnote.data('id') != $(this).data('id') ){
        // ... verberg dan de footnote.
        $(this).hide();
      }

    });

    //En laat die footnote vervolgens zien.
    footnote.toggle();

  });
  
});



/**
 * Voor de navigatie
 */ 

$(function(){

  $('#menu-lijst a').on('click', function(e){

    //Volg de href niet.
    e.preventDefault();

    //Haal de href (is gelijk aan het ID van de div) op.
    var item = $(e.target).attr('href');

    //Scroll naar de div.
    $('body').scrollTo( $(item), 1200, {
      offset: - 25
    });

  });

});



// parallax op img?
// $(window).scroll(function(e){
//   parallax();
// });
// function parallax(){
//   var scrolled = $(window).scrollTop();
//   $('.image').css('top',-(scrolled*0.2)+'px');
// }
