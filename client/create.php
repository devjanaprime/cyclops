<!DOCTYPE html>
<html>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- jQuery -->
  <script src="vendors/jquery-3.0.0.min.js" charset="utf-8"></script>
  <!-- W3 CSS -->
  <link rel="stylesheet" href="vendors/w3.css">
  <script src="scripts/addNewArticle.js" charset="utf-8"></script>
<body>
  <div class="w3-container w3-blue">
    <h2>Create article</h2>
  </div>
  <div class="w3-container">
    <p><label>Image (16x9 aspect ratio, max 2.5 MB):</label>
    <?php
    if($_GET["f"] == ''){
      echo '<form action="../server/upload.php" method="post" enctype="multipart/form-data"><input type="file" name="fileToUpload" id="fileToUpload"><input type="submit" value="Upload Image" name="submit"></form>';
    }
    ?>
    <input class="w3-input" type="text" name="img_urlIn" id='img_urlIn' value='<?php echo $_GET["f"] ?>'></p>
    <p><label>Title:</label>
    <input class="w3-input" type="text" name="titleIn" id='titleIn' ></p>
    <p><label>Body Text (no line breaks):</label>
    <input class="w3-input" type="text" name="bodyIn" id='bodyIn' ></p>
    <p><label>Link URL:</label>
    <input class="w3-input" type="text" name="linkUrlIn" id='linkUrlIn' ></p>
    <p><label>Link Text:</label>
    <input class="w3-input" type="text" name="linkTextIn" id='linkTextIn' ></p>
    <p><label>Youtube ID (just th id, not the whole URL):</label>
    <input class="w3-input" type="text" name="youtube_embedIn" id='youtube_embedIn' ></p>
    <p><label>Tag0:</label>
    <input class="w3-input" type="text" name="tag0In" id='tag0In' ></p>
    <p><label>Tag1:</label>
    <input class="w3-input" type="text" name="tag1In" id='tag1In' ></p>
    <p><label>Tag2:</label>
    <input class="w3-input" type="text" name="tag2In" id='tag2In' ></p>
    <button id='addNewButton'>Submit new article</button>
  </div>
</body>
</html>
