/*===========================================================*/
/* クリックしたらナビ背景コンテンツがぼかされる※IE11非対応*/
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
	$("#header,#container,#footer").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
	BlurTextAnimeControl();
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#header,#container,#footer").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});

/*===========================================================*/
/*	ページ内にある指定の範囲内で下から出現*/
/*===========================================================*/
//スクロールした際の動きを関数でまとめる
function setFadeElement(){
	var windowH = $(window).height();	//ウィンドウの高さを取得
	var scroll = $(window).scrollTop(); //スクロール値を取得

    //出現範囲の指定
	var contentsTop = Math.round($('#blog').offset().top);	//要素までの高さを取得
	var contentsH = $('#blog').outerHeight(true);	//要素の高さを取得

    //2つ目の出現範囲の指定※任意
	var contentsTop2 = Math.round($('#footer').offset().top);	//要素までの高さを取得
	var contentsH2 = $('#footer').outerHeight(true);//要素の高さを取得

    //出現範囲内に入ったかどうかをチェック
	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
		$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
		$("#page-top").removeClass("DownMove");   //DownMoveを削除
		$(".hide-btn").removeClass("hide-btn");	  //hide-btnを削除
	}//2つ目の出現範囲に入ったかどうかをチェック※任意
   else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){
		$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
		$("#page-top").removeClass("DownMove");   //DownMoveを削除
	}//それ以外は
    else{
        if(!$(".hide-btn").length){				//サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
        $("#page-top").addClass("DownMove");  //DownMoveをクラス追加
		$("#page-top").removeClass("UpMove"); //UpMoveを削除
        }
	}
}

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

/*===========================================================*/
/* 複数画像を並列に見せる*/
/*===========================================================*/

	$('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 4,//スライドを画面に3枚見せる
		slidesToScroll: 4,//1回のスクロールで3枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
		responsive: [
            {
			breakpoint: 1200,//モニターの横幅が1200px以下の見せ方
			settings: {
				slidesToShow: 3,//スライドを画面に2枚見せる
				slidesToScroll: 3,//1回のスクロールで2枚の写真を移動して見せる
			}
		},
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
				slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1,//スライドを画面に1枚見せる
				slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			}
		}
	]
	});

/*===========================================================*/
/*印
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
    // 4-1 ふわっ（その場で）
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

    // 4-4 ボンッ（拡大）
	$('.zoomOutTrigger').each(function(){ //zoomOutTriggerというクラス名が
		var elemPos = $(this).offset().top;//要素上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomOut');// 画面内に入ったらzoomOutというクラス名を追記
		}else{
		$(this).removeClass('zoomOut');// 画面外に出たらzoomOutというクラス名を外す
		}
		});

}

/*===========================================================*/
/*印象編 8-2 テキストが流れるように出現（左から右）/
/*===========================================================*/

function slideAnime(){
	//====左右に動くアニメーションここから===
		$('.leftAnime').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//左から右へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

			}
		});

		$('.rightAnime').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//右から左へ表示するクラスを付与
				//テキスト要素を挟む親要素（右側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeRightLeft");//要素を右枠外にへ移動しCSSアニメーションで右から元の位置に移動
				$(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");//子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}else{
				//右から左へ表示するクラスを取り除く
				$(this).removeClass("slideAnimeRightLeft");
				$(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");

			}
		});
    //====左右に動くアニメーションここまで===
}

/*===========================================================*/
/*印象編 8-17 テキストがほのかに光りながら出現*/
/*===========================================================*/

// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
	$('.glowAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("glow");

		} else {
			$(this).removeClass("glow");
		}
	});
}



/*===========================================================*/
/*印象編 8-9 テキストがじわっと出現*/
/*===========================================================*/

// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});
}


/*===========================================================*/
/*印象編 6-7 スクロールするとヘッダー背景画像が拡大*/
/*===========================================================*/
$(window).scroll(function() {
        var scroll = $(window).scrollTop();//スクロール値を定義
    //header-imgの背景
	$('#header-img').css({
			transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
			top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
        });
    });

/*===========================================================*/
/*関数をまとめる*/
/*===========================================================*/


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	setFadeElement();//機能編  8-1-4ページ内にある指定の範囲内で下から出現の関数を呼ぶ
    fadeAnime();// 印象の関数を呼ぶ
    slideAnime();// 印象編 8-2 テキストが流れるように出現（左から右）の関数を呼ぶ
	GlowAnimeControl();//印象編 8-17 テキストがほのかに光りながら出現の関数を呼ぶ
	BlurTextAnimeControl();//印象編 8-9 テキストがじわっと出現の関数を呼ぶ
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){

    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

    /* 印象編 8-17 テキストがほのかに光りながら出現*/
	//spanタグを追加する
	var element = $(".glowAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	GlowAnimeControl();

    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    /*===========================================================*/
    /*背景色が伸びる（中央から外）*/
    /*===========================================================*/

    //=====ここから背景が伸びた後に動かしたいJSをまとめる
    $('.splashbg1').on('animationend', function() {
	setFadeElement();//ページ内にある指定の範囲内で下から出現の関数を呼ぶ
    fadeAnime();// 印象の関数を呼ぶ
    slideAnime();//印象編 8-2 テキストが流れるように出現（左から右）の関数を呼ぶ
	BlurTextAnimeControl();//印象編 8-9 テキストがじわっと出現の関数を呼ぶ
	});
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});// ここまでページが読み込まれたらすぐに動かしたい場合の記述
