<?php
    include('connect.php');
    if (isset($_POST['first']) && isset($_POST['last']) && isset($_POST['email']) && 
        isset($_POST['dob']) && isset($_POST['phone']) && isset($_POST['feed'])) {
        
        $first = $_POST['first'];
        $last = $_POST['last'];
        $email = $_POST['email'];
        $dob = $_POST['dob'];
        $phone = $_POST['phone'];
        $feed = $_POST['feed'];
        $query = "INSERT INTO form_info (First_Name, Last_Name, Email, DOB, Phone_No, Feed_Back) 
                  VALUES ('$first', '$last', '$email', '$dob', '$phone', '$feed')";

        
        if(mysqli_query($con,$query)){
            echo "Data Inserted Successfully";            
        }
        else{
            echo "Data Insertion Failed";            
        }
    } 
?>