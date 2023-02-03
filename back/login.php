<?php
    require('conn.php');

    $username= $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    
    $result = $conn->query("SELECT id, username FROM users WHERE username = '$username' AND password = '$password' $email = '$email'");
    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    header('Access-Control-Allow-Origin: *');
    if (sizeof($data) == 0) {
        http_response_code(403);
        exit();
    }
    
    echo json_encode($data[0]);
?>