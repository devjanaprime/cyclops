<?php

  $id = $_POST[ "id" ];
  require ( "config.php" );
  $connect = mysqli_connect( DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE );

  if ( mysqli_connect_errno() ){
    echo "Failed to connect to server: " . mysqli_connect_error();
  } // end error
  else{
    $sql = "DELETE FROM articles WHERE id=" . $id;
    if ( $connect->query( $sql ) === TRUE ) {
        echo "deleted";
    } // end success
    else {
        echo "Error deleting record: " . $connect->error;
    } // end error
    $conn->close();
  } // end no error

?>
