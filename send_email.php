<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/SMTP.php';

    $receiving_email_address = "od30870@gmail.com";

    if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['submit']))
    {
        $name = filter_input(INPUT_POST, trim('user_name'), 
        FILTER_SANITIZE_SPECIAL_CHARS);

        $email = filter_input(INPUT_POST,trim('user_email'), 
        FILTER_SANITIZE_EMAIL);

        $subject = filter_input(INPUT_POST,trim('subject'),
        FILTER_SANITIZE_SPECIAL_CHARS);

        $message = filter_input(INPUT_POST,trim('message'),
        FILTER_SANITIZE_SPECIAL_CHARS);

        if(empty($name) || empty($email) || empty($subject) || empty($message) || 
        !filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL))
        {
            header("Location: /portfolio1/index.html?status=invalid");
            exit;
        }

        $headers = "From: " . $name . "<" . $email . ">" . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

        $email_body = "<h2>New Message from your Portfolio</h2>";
        $email_body .= "<p><strong>Name:</strong> " . $name . "</p>";
        $email_body .= "<p><strong>Email:</strong> " . $email . "</p>";
        $email_body .= "<p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>";
        $email_body .= "<hr>";
        $email_body .= "<p><strong>Message:</strong> " . htmlspecialchars($message ). "</p>";
        //$email_body .= "<p>" .  htmlspecialchars($message) . "</p>";

        
        $mail = new PHPMailer(true);

        try{
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'od30870@gmail.com';
            $mail->Password = 'toho nwgd wqyx xeew';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;


            $mail->setFrom('od30870@gmail.com', 'Portfolio Contact');
            $mail->addAddress($receiving_email_address);

            $mail->addReplyTo($email, $name);

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $email_body;

            $mail->send();

            header("Location: /portfolio1/index.html?status=success");
            exit;
        }catch(Exception $e){
            header("Location: /portfolio1/index.html?status=error");
            exit;
        }

    }else{
        header("Location: /portfolio1/index.html");
        exit;
    }
?>