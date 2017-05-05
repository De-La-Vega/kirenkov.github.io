<?
	if (
		$_SERVER["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest"
		&& strlen($_REQUEST["name"])
		&& strlen($_REQUEST["email"])
		&& strlen($_REQUEST["message"])
	) {
		$sMessage = "";
		$sMessage .= "Имя: ".$_REQUEST["name"]."<br>";
		$sMessage .= "E-mail: ".$_REQUEST["email"]."<br>";
		$sMessage .= "Сообщение: ".$_REQUEST["message"];

		mail("kirenkov.vitaliy@gmail.com", "Сообщение с kirenkov.me", $sMessage, "Content-type: text/html; charset=utf-8", "-f kirenkov.vitaliy@gmail.com");
		echo "Your message was sent.";
	} else {
		echo "Error in sending form.";
	}
?>