<?php
$target_dir = "../client/uploads/";
$target_file = $target_dir . basename( $_FILES[ "fileToUpload" ][ "name" ] );
// echo basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
// Check if image file is a actual image or fake image
if( isset( $_POST["submit"] ) ) {
    $check = getimagesize( $_FILES[ "fileToUpload" ][ "tmp_name" ] );
    if( $check !== false ) {
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if( file_exists( $target_file ) ) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if( $_FILES[ "fileToUpload" ][ "size" ] > 2640000 ) {
    echo "Bummin. File is too large. ";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if( $uploadOk == 0 ) {
    echo "Sux2bu. Upload no worky. ";
// if everything is ok, try to upload file
} else {
    if( move_uploaded_file( $_FILES[ "fileToUpload" ][ "tmp_name" ], $target_file ) ) {
        header( 'Location: ../client/create.html' ) ;
    } else {
        echo "Yikes, there was an error uploading your file. ";
    }
}
?>
