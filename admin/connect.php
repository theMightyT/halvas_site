<?php
require_once('config.php');

function connect($config) {
	// return the pdo connection
	try {
		$conn = new PDO('mysql:host='.$config['DB_host'].';dbname='.$config['DB_basename'].'', $config['username'], $config['password']);
    	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        return $conn;

	} catch (Exception $e) {
		echo 'ERROR: ' . $e->getMessage();
		return false;
	}
}

?>