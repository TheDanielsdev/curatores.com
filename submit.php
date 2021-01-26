<?php

include_once "db.inc.php";

$name = $_POST['Name'];
$phone = $_POST['Phone'];
$email = $_POST['Email'];
$message = $_POST['Message'];


$sql = "INSERT INTO users (Users_name, User_phone, User_email, User_message) VALUES ('$name', '$phone', '$email', '$message');";

mysqli_query($conn, $sql);

header(location: index.html);
