<?php

	function getFeaturedProject($tableName, $conn) {
		try {
			$result = $conn->query("SELECT * FROM portfolio WHERE feature = 1");
			return ($result->rowCount() > 0) ? $result : false;
		} catch (Exception $e) {
			return $e->getMessage();
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

	// function getLightboxContent($tableName, $image, $conn) {
	// 	try {
	// 		$result = $conn->query("SELECT 1 FROM $tableName WHERE id='$image'");
	// 		return ($result->rowCount() > 0) ? $result : false;
	// 	} catch(Exception $e) {
	// 		return $e->getMessage();
	// 	}
	// }

	function redirect_to($location) {
		if($location !=NULL) {
			header("Location: {$location}");
		}
	}
?>
