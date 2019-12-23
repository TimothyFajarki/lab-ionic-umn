<?php

    if (isset($_SERVER['HTTP_ORIGIN'])) {
	    header("Access-Control-Allow-Origin: *");
	    header('Access-Control-Allow-Credentials: true');
	    header('Access-Control-Allow-Headers: X-App-Token, Content-Type');
   	}

	//ngambil data dari mobile
	$requestBody = json_decode(file_get_contents('php://input'), true);

    require 'config.php'; //contains all the required credentials to connect to the DB

    // Create connection
    $conn = mysqli_connect($hostname, $username, $pswd, $dbname); //this fields are relative to your DB settings (hostname, username, and so on)

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        $booking_id = $requestBody['booking_id'];

        // $sql = "DELETE FROM bookings WHERE booking_id = '$booking_id'";
        $sql = "UPDATE bookings SET status = 0 WHERE booking_id = '$booking_id'";

        if (mysqli_query($conn, $sql)) {
            $status = true;
        } else {
            $status = false;
        }

        mysqli_close($conn);
        echo json_encode($status);
    }
?>