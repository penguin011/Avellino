<?php
session_start();
require('../dbconnect.php');
/*require('../join/check.php');*/

if (!isset($_SESSION['join'])) {
	header('Location: index.php');
	exit();
}
if (!empty($_POST)) {
	// 登録処理をする
	$statement = $db->prepare('INSERT INTO members SET name=?, email=?,	tel=?, picture=?, created=NOW()');
	echo $ret = $statement->execute(array(
		$_SESSION['join']['name'],
		$_SESSION['join']['email'],
		$_SESSION['join']['tel'],
		$_SESSION['join']['image']

	));


//mail

//mail

	unset($_SESSION['join']);
	header('Location: thanks.php');

	exit();

}

?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>増毛シミュレーション Simulation：目黒の増毛エクステAVELLINO</title>

	<link rel="stylesheet" href="../style.css" />
</head>

<body>
	<div id="wrap">
		<div id="head">
			<h1>増毛シミュレーションのお申込み内容確認画面</h1>
		</div>
		<div id="content">
			<form action="" method="post">
				<input type="hidden" name="action" value="submit" />
				<dl>
					<dt>お名前&nbsp;</dt>
					<dd>
						<?php echo htmlspecialchars($_SESSION['join']['name'], ENT_QUOTES,'UTF-8'); ?>
					</dd>
					<dt>メールアドレス&nbsp;</dt>
					<dd>
						<?php echo htmlspecialchars($_SESSION['join']['email'], ENT_QUOTES,'UTF-8'); ?>
					</dd>

					<dt>Before写真</dt>
					<dd>
						<img src="./member_picture/<?php echo htmlspecialchars($_SESSION['join']['image'], ENT_QUOTES, 'UTF-8'); ?>" width="100" height="100" alt="" />
					</dd>

					<dt>電話番号&nbsp;</dt>
					<dd>
						<?php echo htmlspecialchars($_SESSION['join']['tel'], ENT_QUOTES,'UTF-8'); ?>
					</dd>

				</dl>
				<div><a href="index.php?action=rewrite">&laquo;&nbsp;訂正する</a> | <input
					type="submit" value="申込む" /></div>
				</form>
			</div>

		</div>
	</body>
	</html>
