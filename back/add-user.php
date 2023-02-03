<?php
    require('conn.php');
    
    $username = $_POST['nome'];
    $password = $_POST['senha'];
    $email = $_POST['email'];

    $conn->query("INSERT INTO users (nome, senha, email) VALUES ('$username', '$password', '$email')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>