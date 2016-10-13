<?php

#$recepient = "p4sh0k@gmail.com";
$recepient = "DanielGearhart41@gmail.com";
$sitename = "Gearhart Site";

$firstname = trim($_POST["firstname"]);
$lastname = trim($_POST["lastname"]);
$email = trim($_POST["email"]);
$service = trim($_POST["service"]);
$text = trim($_POST["message"]);
$message = "Name: $firstname $lastname \nEmail: $email \nService: $service \nMessage: $text";

$pagetitle = "New client from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");