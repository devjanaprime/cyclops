<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
       <title>Site Title</title>
       <!-- jQuery -->
       <script src="vendors/jquery-3.0.0.min.js" charset="utf-8"></script>
       <!-- W3 CSS -->
       <link rel="stylesheet" href="vendors/w3.css">
       <!-- Cyclops -->
       <script language="JavaScript" type="text/javascript" src='scripts/visor.js'></script>
       <script language="JavaScript" type="text/javascript" src='scripts/cyclops.js'></script>
 </head>
  <?php
    $article_id=$_GET["id"];
    if( $article_id == '' ){
      echo '<body>';
    }
    else{
       echo '<body onLoad="displayArticleFirst( ' . $article_id . ' )">';
    }
  ?>
  <div id='topper'></div>
  <div id='middler'></div>
   <div id="articleDiv"></div>
  <div id='bottomer'></div>
</body>
</html>
