<?php

    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: X-App-Token, Content-Type');
    }
    
    require 'config.php';//contains all the required credentials to connect to the DB
    // Create connection
    $conn = mysqli_connect($hostname, $username, $pswd, $dbname); //this fields are relative to your DB settings (hostname, username, and so on)

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        date_default_timezone_set("Asia/Jakarta");
        $hariini = date("Y-m-d");
        // echo $hariini;
        $sql = "SELECT * FROM bookings WHERE `status` = 1";
        $result = $conn->query($sql);

        $bookings = array();
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                array_push($bookings,$row);
            }
            echo json_encode($bookings);
        } else {
            echo "0 results";
        }

        $conn->close();
        
        
    }
?>