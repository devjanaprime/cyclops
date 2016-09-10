console.log( 'addNewArticle.js sourced' );

$( document ).ready( function(){
  console.log( 'doc ready' );
  // get input and check if OK
  $( '#addNewButton' ).on( 'click', function(){
    console.log( 'addNewButton on click');
    // get user input
    var title = $( '#titleIn' ).val();
    var img_url = $( '#img_urlIn' ).val();
    var body = $( '#bodyIn' ).val();
    var linkUrl = $( '#linkUrlIn' ).val();
    var linkText = $( '#linkTextIn' ).val();
    var youtube_embed = $( '#youtube_embedIn' ).val();
    var tag0 = $( '#tag0In' ).val();
    var tag1 = $( '#tag1In' ).val();
    var tag2 = $( '#tag2In' ).val();
    //check inputs
    var errorText ='';
    if( title == '') errorText+= 'Title cannot be left blank. ';
    if( linkUrl != '' && ( linkUrl.indexOf( 'http' ) < 0 || linkUrl.indexOf( '.' ) < 0  ) ) errorText += "Invalid Link URL. ";
    if( body.length < 64 ) errorText += 'Body text must be at least 64 characters long. ';
    if( youtube_embed != '' && youtube_embed.indexOf( 'youtube' ) > 0 ) errorText += 'Invalid Youtube ID. ';
    if( tag0.indexOf( ' ' ) > 0 || tag1.indexOf( ' ' ) > 0 || tag2.indexOf( ' ' ) > 0 ) errorText += 'Tags cannot have spaces. ';
    if( errorText != '' ){
      //  errorText
      alert( errorText );
    }
    else{
      // no input errors
      // assemble object to send if passes tests
      var newArticle = {
        title : title,
        img_url : img_url,
        body : body,
        linkUrl : linkUrl,
        linkText : linkText,
        youtube_embed : youtube_embed,
        tag0 : tag0,
        tag1 : tag1,
        tag2 : tag2
      };
      console.log( 'sending:', newArticle );
      $.ajax({
        url:'../server/newArticle.php',
        type: 'POST',
        data: newArticle,
        success: function ( data ){
          console.log( 'ajax success:', data );
          if( data =='saved'){
            alert( 'Article saved successfully' );
            clearInputs();
          } // end data saved correctly
          else{
            alert( 'uh oh... something no worky...' );
          } // end data not saved correctly
        } // end success
      }); //end ajax
    } // end no errors
  }); // end addNewButton on click
}); // end doc ready

var clearInputs = function(){
  console.log( 'in clearInputs' );
  $( '#titleIn' ).val( '' );
  $( '#img_urlIn' ).val( '' );
  $( '#bodyIn' ).val( '' );
  $( '#linkUrlIn' ).val( '' );
  $( '#linkTextIn' ).val( '' );
  $( '#youtube_embedIn' ).val( '' );
  $( '#tag0In' ).val( '' );
  $( '#tag1In' ).val( '' );
  $( '#tag2In' ).val( '' );
}; //end clearInputs
