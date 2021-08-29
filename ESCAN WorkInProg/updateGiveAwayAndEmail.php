<?php
date_default_timezone_set('America/Los_Angeles');
include 'eweek-db.php';

$dbObject = new eweekDB();
$uciNetId = $_POST['uciNetId'];
$pickedUpGiveAway = $_POST['pickedUpGiveAway'];
$pickedUpGiveAway2 = $_POST['pickedUpGiveAway2'];
$pickedUpGiveAway3 = $_POST['pickedUpGiveAway3'];
$recieveEmails = $_POST['recieveEmails'];

$formatDate = date('m/d/Y h:i:s a', time());

$giveAwayParams;
$giveAwayParams2;
$giveAwayParams3;

if ($pickedUpGiveAway == "true")
{
	$returnObj['falseV'] = $pickedUpGiveAway == "false";
	$returnObj['receive'] = $pickedUpGiveAway;
	$giveAwayParams = "Yes, on ".$formatDate;
} else {
	$giveAwayParams = null;
}
if ($pickedUpGiveAway2 == "true")
{
	$returnObj['falseV'] = $pickedUpGiveAway2 == "false";
	$returnObj['receive'] = $pickedUpGiveAway2;
	$giveAwayParams2 = "Yes, on ".$formatDate;
} else {
	$giveAwayParams2 = null;
}
if ($pickedUpGiveAway3 == "true")
{
	$returnObj['falseV'] = $pickedUpGiveAway3 == "false";
	$returnObj['receive'] = $pickedUpGiveAway3;
	$giveAwayParams3 = "Yes, on ".$formatDate;
} else {
	$giveAwayParams3 = null;
}

$returnObj['giveAway'] = $dbObject -> pickedUpSwag($uciNetId, $giveAwayParams);
$returnObj['giveAway2'] = $dbObject -> pickedUpSwag2($uciNetId, $giveAwayParams2);
$returnObj['giveAway3'] = $dbObject -> pickedUpSwag3($uciNetId, $giveAwayParams3);
$returnObj['emails'] = $dbObject -> receiveEmails($uciNetId, $recieveEmails);

echo json_encode($returnObj);
?>
