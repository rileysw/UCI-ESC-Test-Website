<?php
date_default_timezone_set('America/Los_Angeles');
include 'eweek-db.php';

$dbObject = new eweekDB();
$uciNetId = $_POST['uciNetId'];
$registerNonEngineer = $_POST['registerNonEngineer'];
$result = $dbObject-> getStudentInfo($uciNetId);
$engineering = array('Engr AE','Engr BM','EngrBMP','EngrChm','Engr CE','EngrCpE','CSE','Engr EE','EngrEnv','Enr MSE','Engr ME', 'EngrMAE', 'EngrMSE','Engineering');
$returnObj['studentInfo'] = $result;
if (!$result) {

  $url = 'http://directory.uci.edu/index.php?uid='.$uciNetId.'&form_type=plaintext';
  $data = file_get_contents($url);

  $data = trim($data);
  $error_string = strpos($data, 'rror:');
  $returnObj['error'] = $error_string;
  $pos = ($error_string) ? $error_string-1: strpos($data, '<body>')+8;

  $data = substr($data, $pos);
  $data_array = explode('<br/>', $data);

  $user_array = array();

  foreach($data_array as $line)
  {
    $temp = explode(':', $line);
    $extra = ($temp[2])? ':'.$temp[2]:'';
    $user_array[strtolower(trim($temp[0]))] = trim($temp[1]).$extra;
  }

  $studMajor = $user_array['major'];

  if (!in_array($studMajor, $engineering)) {
    $returnObj['engineeringStudent'] = "No";
  } else {
    $returnObj['engineeringStudent'] = "Yes";
	}

  $studentObject = array (
  'UCINetId' => $user_array['ucinetid'],
  'Name' => $user_array['name'],
  'Email' => $user_array['ucinetid']."@uci.edu",
  'Major' => $studMajor,
  //'Level' => $user_array['student\'s level'],
  'ReceivedEmails' => null,
  'PickedUpGiveAway' => null,
  'PickedUpGiveAway2' => null,
  'PickedUpGiveAway3' => null,
  'Monday' => null,
  'Tuesday' => null,
  'Wednesday' => null,
  'Thursday' => null,
  'Friday' => null,
  'Saturday' => null,
  'Sunday' => null
);
  $dbObject->insertNewStudent($studentObject);
  $returnObj['studentInfo'] = $studentObject;
  $returnObj['newStudent'] = "Yes";
} else {
    $returnObj['newStudent'] = "No";
}

$formatDate = date('m/d/Y h:i:s a', time());
$r = $dbObject-> attendEvent($uciNetId, getdate(), $formatDate);

echo json_encode($returnObj);

?>
