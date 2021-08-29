<?php
//attendEvent and pickedUpSwag were made assuming that php getdate()
//was used to create a datetime object.

  class eweekDB extends SQLite3
  {
    function __construct()
    {
       $this->open('eweek2018.sqlite');
    }
    function insertNewStudent($studentObject)
    {
      chmod("test.sqlite", 0755);

      $id = $studentObject['UCINetId'];
      $name = $studentObject['Name'];
      $email= $studentObject['Email'];
      $major = $studentObject['Major'];
      //$level = $studentObject['Level'];
      $receivemail = $studentObject['ReceivedEmails'];
      $giveaway = $studentObject['PickedUpGiveAway'];
      $giveaway2 = $studentObject['PickedUpGiveAway2'];
      $giveaway3 = $studentObject['PickedUpGiveAway3'];
      $mon = $studentObject['Monday'];
      $tue = $studentObject['Tuesday'];
      $wed = $studentObject['Wednesday'];
      $thur = $studentObject['Thursday'];
      $fri = $studentObject['Friday'];
      $sat = $studentObject['Saturday'];
      $sun = $studentObject['Sunday'];
      $sql = $this->prepare('INSERT INTO eweek (UCINetID, Name, Email, Major, ReceiveEmails, PickedUpGiveAway, PickedUpGiveAway2, PickedUpGiveAway3, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) VALUES ("'.$id.'","'. $name.'","'. $email.'","'.$major.'","'.$receivemail.'","'.$giveaway.'","'.$giveaway2.'","'.$giveaway3.'","'.$mon.'","'.$tue.'","'.$wed.'","'.$thur.'","'.$fri.'","'.$sat.'","'.$sun.'")');
      $result = $sql->execute();

      //var_dump($studentObject);
      //echo "<script type='text/javascript'>alert('$row');</script>";

      return $result;
    }
    function getStudentInfo($studentNetID)
    {
      $sql = $this->prepare('SELECT * FROM eweek WHERE UCINetID = ?');
      $sql->bindValue(1, $studentNetID);
      $result = $sql->execute();
      $row = $result->fetchArray();

      return $row;
    }
    function attendEvent($studentNetID, $date, $formattedDateTime)
    {
		    $day = $date["weekday"];
        $sql = $this->prepare('UPDATE eweek SET "'.$day.'" = "'.$formattedDateTime.'" WHERE UCINetID = "'.$studentNetID.'"');
        $result = $sql->execute();

      	return $result;
    }
    function pickedUpSwag($studentNetID, $formattedDateTime)
    {
      $sql = $this->prepare('UPDATE eweek SET PickedUpGiveAway = "'.$formattedDateTime.'"  WHERE UCINetID = "'.$studentNetID.'"');
      $result = $sql->execute();

      return $result;
    }
    function pickedUpSwag2($studentNetID, $formattedDateTime)
    {
      $sql = $this->prepare('UPDATE eweek SET PickedUpGiveAway2 = "'.$formattedDateTime.'"  WHERE UCINetID = "'.$studentNetID.'"');
      $result = $sql->execute();

      return $result;
    }
    function pickedUpSwag3($studentNetID, $formattedDateTime)
    {
      $sql = $this->prepare('UPDATE eweek SET PickedUpGiveAway3 = "'.$formattedDateTime.'"  WHERE UCINetID = "'.$studentNetID.'"');
      $result = $sql->execute();

      return $result;
    }

    function receiveEmails($studentNetID, $emails)
    {
      $sql = $this->prepare('UPDATE eweek SET ReceiveEmails = "'.$emails.'"  WHERE UCINetID = "'.$studentNetID.'"');
      $result = $sql->execute();

      return $result;
    }
    function debug_to_console( $data ) {
      if ( is_array( $data ) )
       $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
       else
       $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";
      echo $output;
    }
  }

  ?>
