$( document ).ready( function(){
  console.log( 'doc ready' );
  // get input and check if OK
  $( '#loginButton' ).on( 'click', function(){
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
      } // end success
    }); //end ajax
  }); // end addNewButton on click
}); // end doc ready

var clearInputs = function(){
  console.log( 'in clearInputs' );
  $( '#emailIn' ).val( '' );
  $( '#passwordIn' ).val( '' );
}; //end clearInputs
