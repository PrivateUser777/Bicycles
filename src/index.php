<?php
 if(!empty($_POST) && trim($_POST['name']) != '' && trim($_POST['email']) != '' && trim($_POST['message']) != ''){
        $message =  "Вам пришло новое сообщение с сайта: \nИмя отправителя: " . $_POST['name'] . "\nEmail отправителя: " . $_POST['email'] . "\nСообщение: " . $_POST['message'];

        $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта!")."?=";

        $email_from = '9034459505@mail.ru';

        $name_from = "Личный сайт портфолио";

        $headers = "MIME-Version: 1.0" . PHP_EOL . "Content-Type: text/html; charset=utf-8" . PHP_EOL . "From: " . "=?utf-8?B?".base64_encode($name_from)."?=" . "<" . $email_from . ">" .PHP_EOL . "Reply-To: " . $email_from . PHP_EOL;

        mail($email_from, $subject, $message, $headers);

        header('location: thankyou.html');
    }
?>