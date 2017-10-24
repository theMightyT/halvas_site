<?php
 require_once('functions.php');

 $conn = connect($config);

 if (isset($_GET['$image'])) {
   echo 'get one';
 } else {
   
   echo 'get all';
 }
?>
