<?php
    require('conn.php');
    
    $name = $_POST['name'];
    $user_id = $_POST['user_id'];
    $telefone = $POST['telefone'];
    $endereco = $POST['endereco'];
    
    $conn->query("INSERT INTO products (name, user_id, telefone, endereco) VALUES ('$name', '$user_id', '$telefone', '$endereco')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>