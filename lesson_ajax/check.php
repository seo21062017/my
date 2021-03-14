<?php
sleep(2);
if($_POST['name'] == "Admin"){
    echo "Fail";
}else{
    echo "Успешно зарегистрировано имя: " . $_POST['name'];
}