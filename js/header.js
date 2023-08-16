//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 768) {//横幅が768px以下の場合
		$(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
		$(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
			var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
			$(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
			$(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
			return false;//リンクの無効化
		});
	}else{//横幅が768px以上の場合
		$(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
		$(".has-child").removeClass('active');//activeクラスを削除
		$('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});


//スクロール途中からヘッダーを出現させるための設定を関数でまとめる
//function FixedAnime() {
//	var elemTop = $('#area-3').offset().top;//#area-3の位置まできたら
//	var scroll = $(window).scrollTop();
//	if(scroll <= 20){//上から20pxスクロールされたら
//		$('#header').addClass('DownMove');//DownMoveというクラス名を除き
//	} else if (scroll >= elemTop){
//			$('#header').removeClass('UpMove');//#headerについているUpMoveというクラス名を除く
//			$('#header').addClass('DownMove');//#headerについているDownMoveというクラス名を付与

//		}else{
//			if($('#header').hasClass('DownMove')){//すでに#headerにDownMoveというクラス名がついていたら
//				$('#header').removeClass('DownMove');//DownMoveというクラス名を除き
//				$('#header').addClass('UpMove');//UpnMoveというクラス名を付与
//			}
//		}
//}

//ナビゲーションをクリックした際のスムーススクロール
$('#nav a').click(function () {
	var elmHash = $(this).attr('href'); //hrefの内容を取得
	var pos = Math.round($(elmHash).offset().top-70);	//headerの高さを引く
	$('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
	return false;//リンクの無効化
});


// 画面をスクロールをしたら動かしたい場合の記述
//$(window).scroll(function () {
//	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
//});

// ページが読み込まれたらすぐに動かしたい場合の記述
//$(window).on('load', function () {
//	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
//});
