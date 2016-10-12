<?php
  $startId = $_POST[ "startId" ];
  $targetId = $_POST[ "targetId" ];

  echo 'start: ' . $startId . ' target:' . $targetId;

  require( "config.php" );
  $connect = mysqli_connect( DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE );
    if( mysqli_connect_errno() ){
      echo "Failed to connect to server: " . mysqli_connect_error();
    }
    else{
      $sql0 = "UPDATE articles SET id='-1' WHERE id='" . $targetId . "'";
      if ( $connect->query( $sql0 ) === TRUE ){
        $sql1 = "UPDATE articles SET id='" . $targetId . "' WHERE id='" . $startId . "'";
        if ( $connect->query( $sql1 ) === TRUE ){
          $sql2 = "UPDATE articles SET id='" . $startId . "' WHERE id='-1'";
          if ( $connect->query( $sql2 ) === TRUE ){
            echo 'saved';
          }
          else{
            echo "error: " . $connect->error;
          }
        }
        else{
          echo "error: " . $connect->error;
        }
      }
      else{
        echo "error: " . $connect->error;
      }
      $connect->close();
    }
?>
