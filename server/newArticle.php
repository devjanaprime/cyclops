<?php
  $title = $_POST["titleIn"];
  $img_url = $_POST["img_urlIn"];
  $body = $_POST["bodyIn"];
  $link_url = $_POST["linkUrlIn"];
  $link_text = $_POST["linkTextIn"];
  $youtube_embed = $_POST["youtube_embedIn"];
  $tag0 = $_POST["tag0In"];
  $tag1 = $_POST["tag1In"];
  $tag2 = $_POST["tag2In"];

  require ( "config.php" );
  $connect = mysqli_connect( DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE );
    if ( mysqli_connect_errno() ){
      echo "Failed to connect to server: " . mysqli_connect_error();
    }
    else{
      $title = $connect->real_escape_string( $title );
      $body = $connect->real_escape_string( $body );
      $sql = "INSERT INTO articles ( `title`, `img_url`, `body`, `link_url`, `youtube_embed`, `link_text`, `tag0`, `tag1`, `tag2` )
      VALUES ( '$title', '$img_url', '$body', '$link_url', '$youtube_embed', '$link_text','$tag0', '$tag1', '$tag2' )";

      if ( $connect->query( $sql ) === TRUE ){
          echo "saved";
      }
      else{
          echo "error: " . $connect->error;
      }
      $connect->close();
    }
    $connect->close();
?>
