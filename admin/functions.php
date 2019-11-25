<?php

	function getAssociatedTools($ref, $conn) {
		//echo "get tools here";
		// $tools = $conn->query("SELECT path, toolname FROM devtools WHERE projectRef='$ref'");
		$tools = $conn->query("SELECT projectRef, GROUP_CONCAT(toolRef) as tools from portToolsLink WHERE projectRef='$ref' GROUP BY projectRef");
		//var_dump($tools->fetch());
		$res = $tools->fetch();
		$res = explode(',', $res['tools']);
		
		$retrieved = [];

		foreach ($res as $tool) {
			$toolq = $conn->query("SELECT path, toolname FROM devtools WHERE id='$tool'");
			$theTool = $toolq->fetch();
			//echo "dumping the tool: ";
			//var_dump($theTool);
			array_push($retrieved, $theTool);
		}

		return $retrieved;

		//echo "All the tools: ";
		//var_dump($retrieved);

		// if ($tools->rowCount() > 0) {
		// 	$res = $tools->fetchAll();
		// 	return $res;
		// }
	}

	function getFeaturedProject($tableName, $conn) {
		try {
			$result = $conn->query("SELECT * FROM portfolio WHERE feature = 1");

			if ($result->rowCount() > 0) {
				$featured = $result->fetch(PDO::FETCH_ASSOC);
				$featured["tools"] = getAssociatedTools($featured["id"], $conn);
				//var_dump($featured["tools"]["projectRef"]);

				return $featured;
			}
		} catch (Exception $e) {
			return $e->getMessage();
		}
	}

	function getPortfolioContent($tableName, $conn) {
		try {
			$result = $conn->query("SELECT * FROM $tableName");

			if ($result->rowCount() > 0) {
				$port = array();

				foreach ($result as $row) {
					$row["tools"] = getAssociatedTools($row["id"], $conn);

					if (is_null($row["tools"])) {
						unset($row["tools"]);
					}

					$port[] = $row;
				}

				return $port;
			}
			//return ($result->rowCount() > 0) ? $result : false;
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
