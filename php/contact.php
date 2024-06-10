<?php

header('Content-Type: text/html; charset=utf-8');

// Email recipient
$EmailTo = "gabrielifoga@yahoo.com";

$errors = "";

// Name
if (empty($_POST["name"])) {
    $errors = "Name is required ";
} else {
    $name = $_POST["name"];
}

// Email
if (empty($_POST["email"])) {
    $errors .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// Subject
if (empty($_POST["subject"])) {
    $errors = "Subject is required ";
} else {
    $Subject = $_POST["subject"];
}

// Message
if (empty($_POST["message"])) {
    $errors .= "Message is required ";
} else {
    $message = $_POST["message"];
}

// Prepare email body text
$Body = "";
$Body .= "___________________________";
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $Subject;
$Body .= "\n";
$Body .= "---------------------------";
$Body .= "\n";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
$Body .= "___________________________";
echo "Request data" . $Body;
// Open file in append mode
$file = fopen("contacts.txt", "a");

// Write form data to the file
fwrite($file, "$Body\n");

// Close the file
fclose($file);

if(empty($errors)) 
{
    echo 'success';
} else  {
    echo $errors;
}



// $Headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";
// $Headers .= 'Content-Transfer-Encoding: base64' . "\r\n";
// $Headers .= "From:".$email . "\r\n";

// Send email
// $success = mail($EmailTo, '=?UTF-8?B?' . base64_encode($Subject) . '?=' , base64_encode($Body), $Headers);

// // Redirect to success page
// if ($success && $errors == ""){
//    echo 'success';
// }
// else{
//     echo $errors;
// }
?>
