<?php
  $title = $_POST[ "title" ];
  $img_url = $_POST[ "img_url" ];
  $body = $_POST[ "body" ];
  $link_url = $_POST[ "linkUrl" ];
  $link_text = $_POST[ "linkText" ];
  $youtube_embed = $_POST[ "youtube_embed" ];
  $tag0 = $_POST[ "tag0" ];
  $tag1 = $_POST[ "tag1" ];
  $tag2 = $_POST[ "tag2" ];

  require( "config.php" );
  $connect = mysqli_connect( DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE );
    if( mysqli_connect_errno() ){
      echo "Failed to connect to server: " . mysqli_connect_error();
    }
    else{
      // upload pic
      if( move_uploaded_file( $_FILES[ "fileToUpload" ][ "tmp_name" ], $target_file ) ) {
          echo "The file ". basename( $_FILES[ "fileToUpload" ][ "name" ] ). " has been uploaded.";
      } else {
          echo "Sorry, there was an error uploading your file.";
      }

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
