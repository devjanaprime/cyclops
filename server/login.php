<?php
  $email = $_POST[ "email" ];
  $pass = $_POST[ "pass" ];
  $hashedPass = md5( $pass );

  require( "config.php" );
  $connect = mysqli_connect( DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE );
    if( mysqli_connect_errno() ){
      echo "Failed to connect to server: " . mysqli_connect_error();
    }
    else{
      $sql = "SELECT * FROM users WHERE email=" . $email . " and " . "pass=" . $hashedPass;
      $result = $connect->query($sql);
      echo $result->num_rows;
      $connect->close();
    }
    $connect->close();
?>
