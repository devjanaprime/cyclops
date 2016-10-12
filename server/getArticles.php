<?php
  require ( "config.php" );
  $connect = mysqli_connect( DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE );
    if ( mysqli_connect_errno() )
    {
      echo "Failed to connect to server: " . mysqli_connect_error();
    }
    else
    {
      $sql = "SELECT * FROM articles ORDER BY id DESC";
      $result = $connect->query($sql);
      $jsonOut = '';
      if ($result->num_rows > 0)
      {
      $jsonOut = $jsonOut . '{"articles": [';
          $rowCounter = 0;
          // output data of each row
          while($row = $result->fetch_assoc())
          {
            $rowCounter++;
            $jsonOut = $jsonOut . '{';
            $jsonOut = $jsonOut . '"id": "' . $row["id"] . '",';
            $jsonOut = $jsonOut . '"title": "' . $row["title"] . '",';
            $jsonOut = $jsonOut . '"img_url": "' . $row["img_url"] . '",';
            $jsonOut = $jsonOut . '"link_url": "' . $row["link_url"] . '",';
            $jsonOut = $jsonOut . '"link_text": "' . $row["link_text"] . '",';
            $jsonOut = $jsonOut . '"youtube_embed": "' . $row["youtube_embed"] . '",';
            $jsonOut = $jsonOut . '"body": "' . $row["body"] . '",';
            $jsonOut = $jsonOut . '"tag0": "' . $row["tag0"] . '",';
            $jsonOut = $jsonOut . '"tag1": "' . $row["tag1"] . '",';
            $jsonOut = $jsonOut . '"tag2":"' . $row["tag2"] . '"';
            $jsonOut = $jsonOut . '}';
            if( $rowCounter < $result->num_rows )
            {
               $jsonOut = $jsonOut . ',';
            }
          }
          $jsonOut = $jsonOut . '] }';
          echo $jsonOut;
      } // end results
    }
    $connect->close();
?>
