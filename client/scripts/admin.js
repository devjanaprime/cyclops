$( document ).ready( function(){

  $( 'body' ).on( 'click', '.deleteArticleButton', function(){
    var obj = {
      id: $( this ).attr( 'id' )
    }; // end obj to send
    console.log( 'deleteArticleButton clicked for:', obj.id );
    $.ajax({
      url:'../server/deleteArticle.php',
      type: 'POST',
      data: obj,
      success: function(){
        getArticles();
      }
    }); //end ajax
  }); // end deleteArticleButton

  $( 'body' ).on( 'click', '#loginButton', function(){
  // get user input
  var email = $( '#emailIn' ).val();
  var pass = $( '#passwordIn' ).val();
    console.log( 'Checking login for', email );
    // no input errors
    // assemble object to send if passes tests
    var userLogin = {
      email : email,
      pass : pass
    };
    $.ajax({
      url:'../server/login.php',
      type: 'POST',
      data: userLogin,
      success: function ( data ){
        console.log( 'ajax success:', data );
        /// - force login for testing - ///
        alert( 'logged in now, yo' );
        sessionStorage.loggedIn = 'true';
        clearInputs();
        getArticles();
      } // end success
    }); //end ajax
  }); // end logIn on click


  $( 'body' ).on( 'click', '.moveArticleDownButton', function(){
    console.log( 'moveArticleDownButton clicked for:', $( this ).attr( 'id' ) );
  }); // end deleteArticleButton

  $( 'body' ).on( 'click', '.moveArticleUpButton', function(){
    console.log( 'moveArticleUpButton clicked for:', $( this ).attr( 'id' ) );
  }); // end deleteArticleButton

  getArticles();
}); // end doc ready

var clearInputs = function(){
  console.log( 'in clearInputs' );
  $( '#emailIn' ).val( '' );
  $( '#passwordIn' ).val( '' );
}; //end clearInputs

var displayArticlesList = function( articles ){
  $( '#articlesList' ).empty();

  if( sessionStorage.loggedIn == 'true' ){
    $( '#articlesList' ).append( '<hr><h2>Current Articles:</h2>' );
    for ( var i = 0; i < articles.length; i++ ) {
      $( '#articlesList' ).append( '<p><img src="' + pageInfo.trashcan + '" width=32 height=32px class="w3-hover-opacity deleteArticleButton" id="' + articles[i].id + '"><img src="' + pageInfo.upArrow + '" width=32 height=32px class="w3-hover-opacity moveArticleUpButton" id="' + articles[i].id + '"><img src="' + pageInfo.downArrow + '" width=32 height=32px class="w3-hover-opacity moveArticleDownButton" id="' + articles[i].id + '"><b>' + articles[i].title + '</b></p>' );
    }
    $( '#articlesList' ).append( '<hr>' );
  }
  else{
    $( '#articlesList' ).append( '<hr><h2>Please Log In</h2><hr>' );
  }
}; //end displayArticlesList

var getArticles = function(){
  $.ajax({
    url:'../server/getArticles.php',
    type: 'GET',
    success: function ( data ){
      displayArticlesList( JSON.parse( data ).articles );
    } // end success
  }); //end ajax
}; // end getArticles
