var verbose = true;
if( verbose ) console.log( 'addNewArticle.js sourced' );

$( document ).ready( function(){
  if( verbose ) console.log( 'doc ready' );
  // get input and check if OK
  $( '#addNewButton' ).on( 'click', function(){
    if( verbose ) console.log( 'addNewButton on click');
    // get user input
    var title = $( '#titleIn' ).val();
    if( verbose ) console.log( 'imageUrlIn:', $( '#imageUrlIn' ).val() );
    var youtube_embed = $( '#youtube_embedIn' ).val();
    // only save image_url if !videoOverride
    var vidOverride = $( '#videoOverride' ).is(':checked');
    if( vidOverride && youtube_embed !='' ){
      var img_url = '';
    }
    else{
      // use imageUrlIn if not empty, otherwise use imageSelection
      if( $( '#imageUrlIn' ).val() == '' ){
        if( verbose ) console.log( 'imageUrlIn not found, using image selection' );
        img_url = 'uploads/' + $( '#imageSelection' ).val();
      } // end no image URL
      else{
        if( verbose ) console.log( 'imageUrlIn found, using that' );
        img_url = $( '#imageUrlIn' ).val();
      } // end iamge url
    }
    var body = $( '#bodyIn' ).val();
    var linkUrl = $( '#linkUrlIn' ).val();
    var linkText = $( '#linkTextIn' ).val();
    var tag0 = $( '#tag0In' ).val();
    var tag1 = $( '#tag1In' ).val();
    var tag2 = $( '#tag2In' ).val();
    //check inputs
    var errorText ='';
    if( title == '') errorText+= 'Title cannot be left blank. ';
    if( linkUrl != '' && ( linkUrl.indexOf( 'http' ) < 0 || linkUrl.indexOf( '.' ) < 0  ) ) errorText += "Invalid Link URL. ";
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
      if( verbose ) console.log( 'sending:', newArticle );
      $.ajax({
        url:'../server/newArticle.php',
        type: 'POST',
        data: newArticle,
        success: function ( data ){
          if( data == 'saved'){
            window.location = "index.php";
          }else{
            alert( data );
          }
        } // end success
      }); //end ajax
    } // end no errors
  }); // end addNewButton on click

  $( "#imageSelection" ).change( function() {
    var img = $( "#imageSelection" ).val();
    $( '#imgPrev' ).html( "<img src='uploads/" + img + "' width=50%>" );
  });

  var getImages = function(){
    $.ajax({
      type: 'GET',
      url: '../server/getImages.php',
      success: function( data ){
        var imageNames = JSON.parse( data );
        if( verbose ) console.log( 'back from AJAX:', imageNames );
        for( var name in imageNames ) {
          $( '#imageSelection' ).append( '<option value="' + name + '">' + name + '</option>' );
        }
      } // end success
    }); // end ajax
  }; // end getImages
  getImages();
}); // end doc ready

var clearInputs = function(){
  if( verbose ) console.log( 'in clearInputs' );
  $( '#titleIn' ).val( '' );
  $( '#bodyIn' ).val( '' );
  $( '#linkUrlIn' ).val( '' );
  $( '#linkTextIn' ).val( '' );
  $( '#youtube_embedIn' ).val( '' );
  $( '#tag0In' ).val( '' );
  $( '#tag1In' ).val( '' );
  $( '#tag2In' ).val( '' );
}; //end clearInputs
