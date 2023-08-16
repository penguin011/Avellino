<?php
//require('../dbconnect.php');

session_start();
if (!empty($_POST)) {
	// エラー項目の確認
	if ($_POST['name'] == '') {
		$error['name'] = 'blank';
	}
	if ($_POST['email'] == '') {
		$error['email'] = 'blank';
	}

	//test
	//	$fileName = $_FILES['image']['name'];
	//	if (!empty($fileName)) {
	//		$ext = substr($fileName, -3);
	//		if ($ext != 'jpg' && $ext != 'gif' && $ext != 'png' && $ext != 'jpeg') {
	//			$error['image'] = 'type';
	//		}
	//	}


	// 重複アカウントのチェック
	//	if (empty($error)) {
	//		$member = $db->prepare('SELECT COUNT(*) AS cnt FROM members WHERE	email=?');
	//		$member->execute(array($_POST['email']));
	//		$record = $member->fetch();
	//		if ($record['cnt'] > 0) {
	//			$error['email'] = 'duplicate';
	//		}
	//	}

	if (empty($error)) {
		// 画像をアップロードする
		$image = date('YmdHis') . $_FILES['image']['name'];
		/*		move_uploaded_file($_FILES['image']['tmp_name'], '../member_picture/' .$image); */
		move_uploaded_file($_FILES['image']['tmp_name'], './member_picture/' .$image);
		$_SESSION['join'] = $_POST;
		$_SESSION['join']['image'] = $image;
		header('Location: check.php');
		exit();
	}
}
// 書き直し
if ($_REQUEST['action'] == 'rewrite') {
	$_POST = $_SESSION['join'];
	$error['rewrite'] = true;
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="description"  content="増毛シミュレーション Simulation：目黒の増毛エクステAVELLINO">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>増毛シミュレーション Simulation：目黒の増毛エクステAVELLINO</title>

	<!--=============Google Font ===============-->
	<link href="https://fonts.googleapis.com/css?family=Lato:700%7CKosugi+Maru&display=swap" rel="stylesheet">

	<!--　横移動させて全画面で見せる-->
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">

	<!-- ツールチップ-->
	<link rel="stylesheet" type="text/css" href="https://unpkg.com/tippy.js@5.0.3/animations/shift-toward-subtle.css">
	<!--　サムネイルをクリックすると、メイン画像が切り替わる1-->
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
	<!--　ページを開くと、背景が暗くなりテキストを表示-->
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/css/modaal.min.css">


	<!--	<link rel="stylesheet" href="../style.css" /> -->

	<link rel="stylesheet" type="text/css" href="../../../css/reset_zoumou.css">
	<link rel="stylesheet" type="text/css" href="../../../css/parts_zoumou.css">
	<link rel="stylesheet" type="text/css" href="../../../css/layout_zoumouphp.css">

	<link rel="stylesheet" type="text/css" href="../../../css/layout_price.css">
	<link rel="stylesheet" type="text/css" href="../../../css/parts_price.css">

	<!--<link rel="stylesheet" type="text/css" href="../../../css/parts_review.css">-->
	<!--<link rel="stylesheet" type="text/css" href="../../../css/layout_review.css">-->

	<link rel="stylesheet" type="text/css" href="../../../css/demo.css">
</head>

<body>


	<div id="splash">
		<div id="splash-logo"><font size="7">AVELLINO</font><br><font size="2">増毛シミュレーション</font></div>
	</div>

	<div class="splashbg"></div>

	<!---画面遷移用-->



	<div id="container">



		<header id="header">

			<div class="img-gallery fadeUpTrigger">
				<ul class="slider2">
					<li><img src="../../../img/gal_01.png" alt=""></li>
					<li><img src="../../../img/gal_02.png" alt=""></li>
					<li><img src="../../../img/gal_03.png" alt=""></li>
					<li><img src="../../../img/gal_04.png" alt=""></li>
					<li><img src="../../../img/gal_05.png" alt=""></li>
					<li><img src="../../../img/gal_06.png" alt=""></li>
					<li><img src="../../../img/gal_07.png" alt=""></li>
					<li><img src="../../../img/gal_08.png" alt=""></li>
					<!--/slider2--></ul>
					<!--/img-gallery--></div>


					<ul class="header-utility">
						<li><a href="https://res.locaop.jp/a/avellino/shops/10436399904715329217?_src=lp" target="_blank">ご来店予約</a></li>
						<li><a href="https://lin.ee/mSPyMupI" target="_blank">LINE予約&emsp;</a></li>
						<li><a href="tel:050-3623-5556"><span class="pcnone">TEL</span><span class="spnone">050-3623-5556</span></a></li>
					</ul>
				</header>

				<div class="openbtn"><div class="openbtn-area"><span></span><span></span><span></span></div></div>
				<nav id="g-nav">
					<div id="g-nav-list">
						<!--<span class="bg-white2">AVELLINO</span></p>-->
						<ul>
							<li><a href="../../../../index.html">トップ</a></li>
							<li><a href="../../../avellino_price.html" target="_blank">料金表</a></li>
							<li><a href="../../../avellino_review.html" target="_blank">施術例</a></li>
							<li><a href="../../../avellino_faq.html#faq" target="_blank">よくあるご質問</a></li>
							<li><a href="../../../avellino_faq.html#timeline" target="_blank">施術の流れ</a></li>
							<li><a href="../../../avellino_shop.html" target="_blank">店舗情報・アクセス</a></li>
							<li><a>Instagram（準備中）</a></li>
							<li><a href="../../../avellino_faq.html#aftercare" target="_blank">アフターケア</a></li>
							<li><a>オンラインショップ（準備中）</a></li>
							<li><a href="index.php" target="_blank">増毛シミュレーション</a></li>
							<li><a href="../../../avellino_online.html" target="_blank">増毛オンライン相談</a></li>


						</ul>
					</div>
				</nav>
				<div class="circle-bg"></div>

				<main>

					<section id="contact2" class="inner">

						<div class="contact2-area fadeInTrigger">
							<h2>増毛シミュレーション</h2>
							<dl>
								<dt>お気軽にご利用くださいませ</a></dt>
								<dd>髪を増やしたときの<br>イメージ写真が届きます</dd>
							</dl>
							<!--	 <div class="contact2-btn"><a href="#" class="btn04 bordertop"><span>お問い合わせ</span></a></div> -->
							<!--/contact2-area--></div>

							<div class="contact2-img fadeInTrigger"></div>

						</section>

						<section id="contact3" class="scroll-point">
							<h2><span class="bgextend bgLRextendTrigger"><span class="bgappearTrigger">増毛シミュレーションのお申込み</span></span></h2>
							<form method="post" action="" enctype="multipart/form-data">
								<ul class="form-list fadeUpTrigger">

									<li>
										<dl>
											<dt>お名前&nbsp;<span class="required"><font color="#e9967a">必須</font></span></dt>
											<dd><input type="text" name="name" size="35" maxlength="255" value="<?php echo htmlspecialchars($_POST['name'], ENT_QUOTES); ?>"/>
												<?php if ($error['name'] == 'blank'): ?>
													<p class="error">* お名前を入力してください</p>
												<?php endif; ?>
											</dd>
										</dl>
									</li>



									<li>
										<dl>
											<dt>メールアドレス&nbsp;<span class="required"><font color="#e9967a">必須</font></span></dt>
											<dd>
												<input type="text" name="email" size="35" maxlength="255" value="<?php echo htmlspecialchars($_POST['email'], ENT_QUOTES); ?>"/>
												<?php if ($error['email'] == 'blank'): ?>
													<p class="error">* メールアドレスを入力してください</p>
												<?php endif; ?>
												<?php if ($error['email'] == 'duplicate'): ?>
													<p class="error">増毛シミュレーションは1度のみ利用できます</p>
												<?php endif; ?>
											</dd>
										</dl>
									</li>







									<li>
										<dl>
											<dt>Before写真&nbsp;<span class="required"><font color="#e9967a">必須</font><br>(.jpg, .png)</span></dt>
											<dd><input type="file" name="image" size="35" />
												<?php if ($error['image'] == 'type'): ?>
													<p class="error">* 写真は「.gif」または「.jpg」または「.png」の画像を指定してください
													</p>
												<?php endif; ?>
												<?php if (!empty($error)): ?>
													<p class="error">* 恐れ入りますが、画像を改めて指定してください</p>
												<?php endif; ?>
											</dd>
										</dl>
									</li>

									<!--
									<li>
									<dl>
									<dt><label for="name">お電話番号</label></dt>
									<dd><input type="text" name="Name" id="name" size="60" value="">
								</dd>
							</dl>
						</li>
					-->

					<li>
						<dl>
							<dt>お電話番号&nbsp;<span class="required"><font color="#e9967a">必須</font></span></dt>
							<dd><input type="text" name="tel" size="35" maxlength="20" value="<?php echo htmlspecialchars($_POST['tel'], ENT_QUOTES); ?>"/>
								<?php if ($error['tel'] == 'blank'): ?>
									<p class="error">* 電話番号を入力してください</p>
								<?php endif; ?>
							</dd>
						</dl>
					</li>

					<!--									<li>
					<dl>
					<dt><label for="msg">コメント</label></dt>
					<dd><textarea name="Message" id="msg" cols="50" rows="5"></textarea>
				</dd>
			</dl>
		</li> -->




	</ul>

	<div class="submit-btn fadeUpTrigger"><input type="submit" name="submit" value="確認"></div>
</form>

</section>
<!--
<section id="contact">
	<div class="contact-detail fadeUpTrigger">
		<h2><br>お気軽にご相談ください</h2>
		<p>経験豊富なスタッフが<br>お待ちしています</p>


		<ul>
			<li><a href="index.php" target="_blank" class="btn06 btnarrow2">増毛シミュレーション</a></li>
			<li><a href="../../../avellino_online.html" target="_blank" class="btn06 btnarrow2">オンライン相談</a></li>
		</ul>
	</div>
</section>-->
<!--/contact-detail-->
<!--
<ul class="slider">
<li class="slider-item slider-item01"></li>
<li class="slider-item slider-item02"></li>
<li class="slider-item slider-item03"></li>
</ul>
-->
<!--
<div class="bgextend bgLRextendTrigger_bk customise_one">
	<div class="bgappearTrigger_bk">
		<section id="contact2_new">
			<div class="contact2-detail">
				<span class="slide-in rightAnime"><span class="slide-in_inner rightAnimeInner">
						<h2>Contact</h2>
					</span></span>
				<p><span class="slide-in rightAnime"><span
							class="slide-in_inner rightAnimeInner">お電話・お問い合わせにてお気軽にお問い合わせください。</span></span>
				</p>
			</div>
			<div class="contact2-tel">
				<p><a href="tel:050-3623-5556"><span class="slide-in rightAnime"><span
								class="slide-in_inner rightAnimeInner">Tel:050-3623-5556</span></span></a>
				</p>
				<p><a href="/view/avellino_online.html"target="_blank"><span class="slide-in rightAnime"><span
								class="slide-in_inner rightAnimeInner">お問い合わせ<br>フォーム</span></span></a></p>
			</div>
		</section>
	</div>
</div>
-->
</main>


		<footer id="footer" class="inner fadeLeftTrigger fadeLeft php">
			<dl>
				<dt><span class="slide-in leftAnime"><span
							class="slide-in_inner leftAnimeInner">メンズ増毛エクステ</span></span></dt>
				<dd><span class="slide-in leftAnime"><span class="slide-in_inner leftAnimeInner">AVELLINO
							</span></span></dd>
			</dl>
			<div class="footer-list">
				<div class="slide-in leftAnime">
					<div class="slide-in_inner leftAnimeInner">
						<ul>
							<li><a href="/index.html"target="_blank">トップ</a></li>
							<li><a href="/view/avellino_price.html"target="_blank">料金表</a></li>
							<li><a href="/view/avellino_review.html"target="_blank">施術例</a></li>
							<li><a href="/view/avellino_faq.html#faq"target="_blank">よくあるご質問</a></li>
							<li><a href="/view/avellino_faq.html#timeline"target="_blank">施術の流れ</a></li>
							<li><a href="/view/avellino_shop.html"target="_blank">店舗情報・アクセス</a></li>
							<li><a href="#">INSTAGRAM（準備中）</a></li>
							<li><a href="/view/avellino_faq.html#aftercare"target="_blank">アフターケア</a></li>
							<li><a href="#">オンラインショップ（準備中）</a></li>
							<li><a href="https://form.run/@chocostory-SC1HlMuigRaVpRgu6U11">増毛シミュレーション</a></li>
							<li><a href="/view/avellino_online.html"target="_blank">増毛オンライン相談</a></li>
							<li><a href="/view/avellino_privacy.html"target="_blank">利用規約</a></li>
						</ul>
					</div>
				</div>

			</div>
			<br><br><small><span class="slide-in leftAnime"><span class="slide-in_inner leftAnimeInner"><br><br>〒153-0042<br>東京都目黒区青葉台1-30-9<br>ハイリー青葉台802<br><br>&copy; AVELLINO
						</span></span></small>
		</footer>

<!--
<footer id="footer" class="inner">
	<div class="footer-area">
		<dl class="fadeLeftTrigger fadeLeft school-info">
			<dt class="footer-title">目黒駅最寄りの増毛エクステ<span>Avelino</span></dt>
			<dd>
				<ul>
					<li>〒153-0042<br />東京都目黒区青葉台1-30-9<br>ハイリー青葉台802</li>
					<li>
						<dl><dt>TEL</dt><dd><a href="tel:050-3623-5556">050-3623-5556</a></dd></dl>
					</li>
					<li>

					</li>
				</ul>
			</dd>
		</dl>

		<div class="footer-sitemap">
			<ul>
				<li><a href="../../../../index.html" target="_blank" >トップ</a></li>
				<li><a href="../../../avellino_price.html" target="_blank">料金表</a></li>
				<li><a href="../../../avellino_review.html" target="_blank">施術例</a></li>
				<li><a href="../../../vellino_faq.html#faq" target="_blank">よくあるご質問</a></li>
				<li><a href="../../../avellino_faq.html#timeline" target="_blank">施術の流れ</a></li>
				<li><a href="../../../avellino_shop.html" target="_blank">店舗情報・アクセス</a></li>
				<li><a>Instagram（準備中）</a></li>
				<li><a href="../../../avellino_faq.html#aftercare" target="_blank">アフターケア</a></li>
				<li><a>オンラインショップ（準備中）</a></li>
				<li><a href="index.php" target="_blank">増毛シミュレーション</a></li>
				<li><a href="../../../avellino_online.html" target="_blank">増毛オンライン相談</a></li>
			</ul>
		</div>


	</div>
			<small><a href="../../../avellino_privacy.html" target="_blank">利用規約</a><br>

				<small><br><span class="pcnone">ヘアスタイルのお悩み解決で、<br>心も晴れやかに</span><span class="spnone">ヘアスタイルのお悩み解決で、心も晴れやかに</span><br><br>&copy; Avelino</small><br><br>
			</footer>
-->
			<!--/container--></div>

			<!--=============JS ===============-->
			<!--jQuery-->

			<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
			<!--　横移動させて全画面で見せる-->
			<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
			<!--印象編　9-2　PNG アニメーション（APNG）-->
			<script src="https://cdnjs.cloudflare.com/ajax/libs/apng-canvas/2.1.1/apng-canvas.min.js"></script>

			<!-- スクロールすると位置が固定して追従-->
			<script src="https://cdnjs.cloudflare.com/ajax/libs/stickyfill/2.1.0/stickyfill.min.js"></script>
			<!--　サムネイルをクリックすると、メイン画像が切り替わる1-->
			<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
			<!-- ツールチップ-->
			<script src="https://unpkg.com/popper.js@1"></script>
			<script src="https://unpkg.com/tippy.js@5"></script>
			<!--　ページを開くと、背景が暗くなりテキストを表示-->
			<script src="https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/js/modaal.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>

			<!--自作のJS-->
			<script src="../../../js/script.js"></script>
			<script src="../../../js/demo.js"></script>
<script src="js/script_price.js"></script>

			<script>
			(function(d) {
				var config = {
					kitId: 'ymx5juc',
					scriptTimeout: 3000,
					async: true
				},
				h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
			})(document);
			</script>




		</body>
		</html>
