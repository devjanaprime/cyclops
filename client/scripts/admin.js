$( document ).ready( function(){

  $( 'body' ).on( 'click', '.deleteArticleButton', function(){
    console.log( 'deleteArticleButton clicked for:', $( this ).attr( 'id' ) );
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


  $( 'body' ).on( 'click', '.viewArticleButton', function(){
    console.log( 'viewArticleButton clicked for:', $( this ).attr( 'id' ) );
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
  console.log( articles );
  for ( var i = 0; i < articles.length; i++ ) {
    $( '#articlesList' ).append( '<p><button class="deleteArticleButton" id="' + articles[i].id + '">Delete</button><button class="moveArticleUpButton" id="' + articles[i].id + '">^</button><button class="moveArticleDownButton" id="' + articles[i].id + '">v</button><b>' + articles[i].title + '</b></p>' );
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
