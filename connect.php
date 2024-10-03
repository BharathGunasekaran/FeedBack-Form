<?php
    $host = "localhost";
    $name = "root";
    $password = "";
    $db_name = "form";

    $con = mysqli_connect($host, $name, $password, $db_name);
    if(!$con){
        die("Connection Failed".mysqli_connect_error());
    }
?>