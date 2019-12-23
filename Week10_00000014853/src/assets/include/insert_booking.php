<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

require 'config.php'; //contains all the required credentials to connect to the DB

if ($_SERVER['REQUEST_METHOD'] != "OPTIONS") {
    // Create connection
    $conn = mysqli_connect($hostname, $username, $pswd, $dbname); //this fields are relative to your DB settings (hostname, username, and so on)

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        $message = array();

        $booking_name = $data['booking_name'];
        $topic = $data['topic'];
        $details = $data['details'];
        $booking_date = $data['booking_date'];
        $start_hour = $data['start_hour'];
        $end_hour = $data['end_hour'];
        $creator = $data['creator'];

        $q = mysqli_query($conn, "INSERT INTO `bookings` (`booking_name`, `topic`,`details`, `booking_date`, `start_hour`, `end_hour`, `creator`) VALUES ('$booking_name','$topic','$details','$booking_date', '$start_hour', '$end_hour', '$creator')");

        if ($q) {
            $message['status'] = "success";
        } else {
            $message['status'] = "error";
        }

        mysqli_close($conn);
        echo json_encode($message);
        echo mysqli_error($con);
    }
}

	// //ngambil data dari mobile
	// $requestBody = json_decode(file_get_contents('php://input'), true);

    // require 'config.php';

    // // Create connection
    // $conn = mysqli_connect($hostname, $username, $pswd, $dbname);

    // // Check connection
    // if ($conn->connect_error) {
    //     die("Connection failed: " . $conn->connect_error);
    // }
    // else {
    //     $booking_name = $requestBody['booking_name'];
    //     $topic = $requestBody['topic'];
    //     $details = $requestBody['details'];
    //     $booking_date = $requestBody['booking_date'];
    //     $start_hour = $requestBody['start_hour'];
    //     $end_hour = $requestBody['end_hour'];

    //     $sql = "INSERT INTO bookings (booking_name, topic, details, booking_date, start_hour, end_hour)
    //     VALUES ('$booking_name', '$topic', '$details', '$booking_date', '$start_hour', '$end_hour')";

    //     if (mysqli_query($conn, $sql)) {
    //         $status = true;
    //     } else {
    //         $status = false;
    //     }

    //     mysqli_close($conn);
    //     echo json_encode($status);
    // }
