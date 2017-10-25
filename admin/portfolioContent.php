<?php
 require_once('functions.php');

 $conn = connect($config);

 $table = $_GET['$tableName'];

 if (isset($_GET['$image'])) {
   // get the lightbox image data
   $targetImage = $_GET['$image'];

   $result = getLightboxContent($table, $targetImage, $conn);
   echo json_encode($result->fetch(PDO::FETCH_ASSOC));
 } else {
   $result = getPortfolioContent($table, $conn);
   echo json_encode($result->fetchAll());
 }
?>
