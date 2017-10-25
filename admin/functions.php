<?php
require 'config.php';

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

function getPortfolioContent($tableName, $conn) {
	try {
		$result = $conn->query("SELECT * FROM $tableName");

		return ($result->rowCount() > 0) ? $result : false;
	} catch(Exception $e) {
		return $e->getMessage();
	}
}

function getLightboxContent($tableName, $image, $conn) {
	try {
		$result = $conn->query("SELECT 1 FROM $tableName WHERE id='$image'");

	return ($result->rowCount() > 0) ? $result : false;
	} catch(Exception $e) {
		return $e->getMessage();
	}
}

function redirect_to($location) {
	if($location !=NULL) {
    	header("Location: {$location}");
    }
}
?>
