<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    
    // Настройте ваш email здесь
    $to = "ваш-email@example.com";
    $subject = "Новый заказ с сайта Сладкий Тортик";
    
    $body = "Имя: " . htmlspecialchars($name) . "\n";
    $body .= "Email: " . htmlspecialchars($email) . "\n\n";
    $body .= "Сообщение:\n" . htmlspecialchars($message);
    
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Спасибо! Ваше сообщение отправлено.";
    } else {
        echo "Ошибка при отправке. Попробуйте позже.";
    }
} else {
    echo "Неверный запрос.";
}
?>