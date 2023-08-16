/*===========================================================*/
/*クリックしたら円形背景が拡大（上から）*/
/*===========================================================*/



/*===========================================================*/
/*リンクボタンをクリックしたら形状が変化*/
/*===========================================================*/

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
		$('body,html').animate({
			scrollTop: 0
		}, 800,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
			$('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
		});
	}
	return false;//リンク自体の無効化
});


/*===========================================================*/
/*横移動させて全画面で見せる*/
/*===========================================================*/
$('.slider').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
	speed:500,//スライドの動きのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 1,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
	arrows:false,//左右の矢印なし
	//prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	//nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	//dots: true,//下部ドットナビゲーションの表示
	pauseOnFocus: false,//フォーカスで一時停止を無効
	pauseOnHover: false,//マウスホバーで一時停止を無効
	pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
	$('.slider').slick('slickPlay');
});

/*===========================================================*/
/*複数画像を流して見せる*/
/*===========================================================*/

$('.slider2').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 6900,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 4,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			}
		}
	]
});

/*===========================================================*/
/*印象*/
/*===========================================================*/

function fadeAnime(){

	//4-1 ふわっ（その場で）
	$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
		}else{
			$(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
		}
	});
	//4-1 ふわっ（下から）
	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
			$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});

	//4-1 ふわっ（下から）
	$('.fadeUpTriggers').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeUps');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
			$(this).removeClass('fadeUps');// 画面外に出たらfadeUpというクラス名を外す
		}
	});

	//4-2 パタッ（左上へ）
	$('.flipLeftTopTrigger').each(function(){ //flipLeftTopTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('flipLeftTop');// 画面内に入ったらflipLeftTopというクラス名を追記
		}else{
			$(this).removeClass('flipLeftTop');// 画面外に出たらflipLeftTopというクラス名を外す
		}
	});

	//4-2 パタッ（右上へ）
	$('.flipRightTopTrigger').each(function(){ //flipRightTopTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('flipRightTop');// 画面内に入ったらflipRightTopというクラス名を追記
		}else{
			$(this).removeClass('flipRightTop');// 画面外に出たらflipRightTopというクラス名を外す
		}
	});

	// 4-4 ボンッ（拡大）
	$('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
		}else{
			$(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
		}
	});

}

/*===========================================================*/
/*印象編　9-2　PNG アニメーション（APNG）*/
/*===========================================================*/

APNG.ifNeeded().then(function () {
	var images = document.querySelectorAll(".apng-image");
	for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
});

/*===========================================================*/
/*関数をまとめる*/
/*===========================================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();//	リンクボタンをクリックしたら形状が変化の関数を呼ぶ
	fadeAnime();//印象の関数を呼ぶ

	delayScrollAnime();/* 印象編 4-12 順番に現れる（CSS x jQuery）関数を呼ぶ*/



	$('.fadeLeftTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeLeft');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
			$(this).removeClass('fadeLeft');// 画面外に出たらfadeUpというクラス名を外す
		}
	});




});


// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){



	$("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

	//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
	$("#splash").delay(1500).fadeOut('slow',function(){

		$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

		var h = $(window).height();//ブラウザの高さを取得
		$(".splashbg").css({
			"border-width":h,//ボーダーの太さにブラウザの高さを代入
			"animation-name":"backBoxAnime"//animation-nameを定義
		});

		PageTopAnime();//	リンクボタンをクリックしたら形状が変化の関数を呼ぶの関数を呼ぶ


	});
	//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

	/*===========================================================*/
	/*背景色が四角に拡大（四隅へ）*/
	/*===========================================================*/

	//=====ここから背景が伸びた後に動かしたいJSをまとめる
	$('.splashbg').on('animationend', function() {
		fadeAnime();//印象の関数を呼ぶ

		delayScrollAnime();/* 印象編 4-12 順番に現れる（CSS x jQuery）関数を呼ぶ*/

	});
	//=====ここまで背景が伸びた後に動かしたいJSをまとめる

});// ここまでページが読み込まれたらすぐに動かしたい場合の記述


/*===========================================================*/
/*スクロールすると位置が固定して追従*/
/*===========================================================*/

$(window).on('load resize', function() {
	var windowWidth = window.innerWidth;
	var elements = $('.sub-fix-block');//position: sticky;を指定している要素
	if (windowWidth >= 1020) {/*1020px以上にIE用のJSをきかせる*/
		Stickyfill.add(elements);
	}else{
		Stickyfill.remove(elements);
	}
});



/*===========================================================*/
/* ページの指定の高さを超えたら下から出現*/
/*===========================================================*/
//スクロールした際の動きを関数でまとめる
//function PageTopAnime() {
//	var scroll = $(window).scrollTop();
//	if (scroll >= 200){//上から200pxスクロールしたら
//		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
//		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
//	}else{
//		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
//			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
//			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
//		}
//	}
//}

// #page-topをクリックした際の設定
//$('#page-top').click(function () {
//    $('body,html').animate({
//        scrollTop: 0//ページトップまでスクロール
//    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
//    return false;//リンク自体の無効化
//});



/*===========================================================*/
/*ツールチップ*/
/*===========================================================*/

tippy('.cap', {//指定した要素にツールチップが出現
	placement: 'top-start',//ツールチップの表示位置⇒top、top-start、top-end、right、right-start、right-end、bottom、bottom-start、bottom-end、left、left-start、left-end。指定をしなくてもtopに表示
	animation: 'shift-toward-subtle',//ツールチップ出現の動き。動きを指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/animations/から任意の動きを選び<head>内に読み込むことが必要。使用できる動き⇒shift-away、shift-away-subtle、shift-away-extreme、shift-toward、shift-toward-subtle、shift-toward-extreme、scale、scale-subtle、scale-extreme、perspective、perspective-subtle、perspective-extreme。指定をしなくてもfadeで表示
	//theme: 'light-border',//ツールチップのテーマの色。色を指定するにはhttps://unpkg.com/browse/tippy.js@5.0.3/themes/からテーマを選び<head>内に読み込んで指定する。テーマの種類⇒light、light-border、material、translucent。指定をしなくても黒色で表示
	duration: 200,//ツールチップの出現の速さをミリ秒単位で指定
}
)

/*===========================================================*/
/*	複数画像を中央に注目させて見せる*/
/*===========================================================*/

$('.slider').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	speed: 500,//スライドのスピード。初期値は300。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	centerMode: true,//要素を中央ぞろえにする
	variableWidth: true,//幅の違う画像の高さを揃えて表示
	dots: true,//下部ドットナビゲーションの表示
});

/*===========================================================*/
/*	サムネイルをクリックすると、メイン画像が切り替わる1*/
/*===========================================================*/

//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 4, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});

//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var index = nextSlide; //次のスライド番号
	//サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
	$(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});

/*==================================================
/* ページを開くと、背景が暗くなりテキストを表示*/
/*===================================*/
//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
var access = $.cookie('access')
if(!access){
	flag = true;
	$.cookie('access', false);
}else{
	flag = false
}

//モーダル表示
$(".modal-open").modaal({
	start_open:flag, // ページロード時に表示するか
	overlay_close:true,//モーダル背景クリック時に閉じるか
	background: '#000', // 背景色
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});

/*===========================================================*/
/*印象編 4-12 順番に現れる（CSS x jQuery）*/
/*===========================================================*/

function delayScrollAnime() {
	var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素

		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {

				if (!$(this).hasClass("flipRight")) {//アニメーションのクラス名が指定されているかどうかをチェック

					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("flipRight");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる

					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("flipRight");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}
/*===========================================================*/
/* 印象*/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

	//4-1 ふわっ（下から）

	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
			$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});

	//4-1 ふわっ（上から）

	$('.fadeDownTrigger').each(function(){ //fadeDownTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
		}else{
			$(this).removeClass('fadeDown');// 画面外に出たらfadeDownというクラス名を外す
		}
	});
}

/*===========================================================*/
/* 関数をまとめる*/
/*===========================================================*/

// ページがリサイズされたら動かしたい場合の記述
//$(window).resize(function() {
//	mediaQueriesWin();/*機能編  5-1-3 ドロップダウンメニュー（写真付 上ナビ）の関数を呼ぶ*/
//});

// 画面をスクロールをしたら動かしたい場合の記述
//$(window).scroll(function () {
//	PageTopAnime();/*機能編  8-1-2 ページの指定の高さを超えたら下から出現の関数を呼ぶ*/
//    fadeAnime();/* 印象*/
//	delayScrollAnime();/* 印象編 4-12 順番に現れる（CSS x jQuery）関数を呼ぶ*/
//});

// ページが読み込まれたらすぐに動かしたい場合の記述

$(window).on('load', function () {
	//	mediaQueriesWin();/*機能編  5-1-3 ドロップダウンメニュー（写真付 上ナビ）の関数を呼ぶ*/
	//PageTopAnime();/*機能編  8-1-2 ページの指定の高さを超えたら下から出現の関数を呼ぶ*/
	//  fadeAnime();/* 印象*/
	//delayScrollAnime();/* 印象編 4-12 順番に現れる（CSS x jQuery）関数を呼ぶ*/

	/* 任意の場所をクリックすると隠れていた内容が開くの読み込み*/
	//$(".open").each(function(index, element){	//openクラスを取得
	//	var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
	//	$(Title).addClass('close');				//タイトルにクラス名closeを付与し
	//	var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
	//	$(Box).slideDown(500);					//アコーディオンを開く
	//});


	/* タブメニューの読み込み*/
	//  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	// GethashID (hashName);//設定したタブの読み込み

});
