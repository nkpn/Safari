<meta http-equiv='refresh' content='3; url=https://you-hands.ru'>
<meta charset="UTF-8" />
<?php

	if (isset($_POST['name']) && $_POST['name'] != "")//если существует атрибут NAME и он не пустой то создаем переменную для отправки сообщения
		$name = $_POST['name'];
	else die ("Please enter your name");//если же атрибут пустой или не существует то завершаем выполнение скрипта и выдаем ошибку пользователю.

	if (isset($_POST['email']) && $_POST['email'] != "") //тут все точно так же как и в предыдущем случае
		$email = $_POST['email'];
	else die (" Please enter your Email");

	if (isset($_POST['message']) && $_POST['message'] != "") 
		$body = $_POST['message'];
	else die ("Please enter your message");
	 


	$address = "illinmikita@gmail.com";//адрес куда будет отсылаться сообщение для администратора
	$mes  = "Name: $name \n";	//в этих строчках мы заполняем текст сообщения. С помощью оператора .= мы просто дополняем текст в переменную
	$mes .= "E-mail: $email \n";
 	$mes .= "Text: $body"; 
	$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");//собственно сам вызов функции отправки сообщения на сервере

	if ($send) //проверяем, отправилось ли сообщение
		echo "Your email was succesfully sent";
	else 
		echo "Something went wrong.";
		 
?>