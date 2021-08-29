<?php
// getInfoFromDirectory();

if(isset($_GET['uciNetId'])) {

	$ret['status'] = "ok";
	$ret['func'] = $_GET['uciNetId'];

	$url = 'http://directory.uci.edu/index.php?uid=nyadev&form_type=plaintext';
	// $ret['val'] = json_encode(file_get_contents($url));

	// echo "message successfully sent = " . json_decode($result);
	echo json_encode($ret)
}

function getInfoFromDirectory()
{
  $url = 'http://directory.uci.edu/index.php?uid=nyadev&form_type=plaintext';
  $result = file_get_contents($url);
  echo $result;
}

 ?>
