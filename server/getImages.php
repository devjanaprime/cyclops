<?php
  $dir    = '../client/uploads/';
  // Open a directory, and read its contents
  $json = '{';
  $counter = 0;
  if( is_dir( $dir ) ){
    if ( $dh = opendir( $dir ) ){
      while ( ( $file = readdir( $dh ) ) !== false ){
        if( $file != '.' && $file != '..'){
          $json = $json . '"' . $file . '": "' . $file . '",';
          $counter++;
        }
      }
      closedir($dh);
    }
    $json = rtrim( $json, "," );
    $json = $json . '}';
    echo $json;
  }
?>
