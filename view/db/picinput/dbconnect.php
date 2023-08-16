<?php
try {
$db = new PDO('', '', '');
} catch (PDOException $e) {
echo 'DB接続エラー： ' . $e->getMessage();
}
?>
