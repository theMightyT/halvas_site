<?php
    require_once('connect.php');
    require_once('functions.php');

    $conn = connect($config);

    $table = $_GET['tableName'];

    //echo $table;

    if (isset($_GET['feature'])) {
        $result = getFeaturedProject($table, $conn);
        echo json_encode($result->fetch(PDO::FETCH_ASSOC));

    } else {
        $result = getPortfolioContent($table, $conn);
        echo json_encode($result->fetchAll());
    }
?>
