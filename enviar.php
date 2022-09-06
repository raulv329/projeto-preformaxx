<?php
    $name = $_POST['nome'];
    $telefone = $_POST['celula'];
    $email = $_POST['email'];
    $tema = $_POST['tema'];
    $message = $_POST['msg'];
    $from = 'From: preformax.com';
    $to = 'suporte@preformax.com.py';
    $subject = 'Customer Inquiry';
    $body = "From: $name\n E-Mail: $email\n Telefone: $telefone\n Message:\n $message";

    if ($_POST['envia']) {
        if (mail ($to, $subject, $body, $from)) {
            echo '<p>Sua Mensagem foi enviado com Sucesso!!</p>';
        } else {
            echo '<p>Sua Mensagem não foi enviada, tente novamente.</p>';
        }
    }
?>
