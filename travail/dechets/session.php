<?php /* Date de création: 08/03/2013 */ ?>
<html>
<body>
<?php
session_name('SESSION1');
session_start();
$_SESSION['data'] = time();
 
var_dump($_SESSION['data'], session_id());
?>
</body>
</html>
