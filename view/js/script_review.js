/*===========================================================*/
/*機能編  8-1-7 スクロール途中からリンクボタンの形状が変化*/
/*===========================================================*/
//スクロールした際の動きを関数でまとめる
function PageTopCheck(){
  var winScrollTop = $(this).scrollTop();
  var secondTop =  $("#sort").offset().top - 150; //#sortの上から150pxの位置まで来たら
  if(winScrollTop >= secondTop){
    $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
    $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
  } else {//元に戻ったら
    $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
    $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
  }
}

//クリックした際の動き
$('.scroll-top a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  if (elmHash == "#gallery") {//もし、リンク先のhref の後が#galleryの場合
    var pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, pos); //#galleryにスクロール
  }else{
    $('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
  }
  return false;//リンク自体の無効化
});

/*===========================================================*/
/*機能編  6-1-4 動きを組み合わせて全画面で見せる*/
/*===========================================================*/

//画像と動画の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768){
  var responsiveImage = [//PC用の動画と画像
    { src: './img/main01.jpg',//動画が再生されなかった場合の代替画像
    video:{
      src: [//mp4で動画が再生されない時のことを考えて複数の形式の動画を設定
        './video/movie.mp4',
        './video/movie.webm',
        './video/movie.ogv'
      ],
      loop: false,//動画を繰り返さない
      mute: true,//動画の音を鳴らさない
    }
  },
  {src: './img/main02.jpg'},
  {src: './img/main03.jpg'}
];
} else {
  var responsiveImage = [//タブレットサイズ（768px）以下用の画像
    { src: './img/main_sp01.jpg' },
    { src: './img/main_sp02.jpg' },
    { src: './img/main_sp03.jpg' }
  ];
}

//Vegas全体の設定
$('#slider').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 5000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage,//画像と動画の設定を読む
});


/*===========================================================*/
/*機能編  6-2-2 カテゴリ別に画像を並び替える*/
/*===========================================================*/
//＝＝＝ Fancyboxの設定
$('[data-fancybox]').fancybox({
  thumbs: {
    autoStart: false, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
  },
});

/*===========================================================*/
/* 印象編 4-12 順番に現れる（CSS x jQuery）*/
/*===========================================================*/
delayScrollAnime();
function delayScrollAnime() {
  var time = 0.2;//遅延時間を増やす秒数の値
  var value = time;
  $('.delayScroll').each(function () {
    var parent = this;					//親要素を取得
    var elemPos = $(this).offset().top;   //要素の位置まで来たら
    var scroll = $(window).scrollTop();   //スクロール値を取得
    var windowHeight = $(window).height();  //画面の高さを取得
    var childs = $(this).children();	//子要素

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {

        if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック

          $(parent).addClass("play");	//親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp");//アニメーションのクラス名を追加
          value = value + time;//delay時間を増加させる

          //全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
      value = time;//delay初期値の数値に戻す
    }
  })
}


/*===========================================================*/
/* 印象編 8-1 テキストがバラバラに出現 */
/*===========================================================*/

// TextRandomAnimeにappearRandomtextというクラス名を付ける定義
function TextRandomAnimeControl() {
  $('.TextRandomAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appearRandomtext");
    } else {
      $(this).removeClass("appearRandomtext");
    }
  });
}


//========================================================
// 関数をまとめる
//========================================================

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){

  delayScrollAnime();//印象編 4-12 順番に現れる（CSS x jQuery）の関数を呼ぶ

  /*===========================================================*/
  /*機能編  6-2-2 カテゴリ別に画像を並び替える*/
  /*===========================================================*/
  //画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する
  //＝＝＝Muuriギャラリープラグイン設定
  var grid = new Muuri('.grid', {

    //アイテムの表示速度※オプション。入れなくても動作します
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',

    // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    }
  });

  //＝＝＝並び替えボタン設定
  $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
    $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
    var className = $(this).attr("class");			//クラス名を取得
    className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
    $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
    if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
      grid.show('');								//全ての要素を出す
      setTimeout(function(){//ここからは選択後にふわっと出すアニメーションを使用したい場合の追記
        delayScrollAnime();
      },1000);//ここまで
    }else{											//それ以外の場合は
      grid.filter("."+className[0]); 				//フィルターを実行
      setTimeout(function(){//ここからは選択後にふわっと出すアニメーションを使用したい場合の追記
        delayScrollAnime();
      },1000);//ここまで
    }
  });

  /*===========================================================*/
  /* 印象編 8-1 テキストがバラバラに出現 */
  /*===========================================================*/

  //spanタグを追加する
  var element = $(".TextRandomAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = '';
    text.split('').forEach(function (t) {
      textbox += '<span>' + t + '</span>';
    });
    $(this).html(textbox);
  });

  /*===========================================================*/
  /*機能編  4-1-1数字カウントアップ*/
  /*===========================================================*/



  //アニメーションスタート
  bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します

    //=====ここからローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(500).fadeOut(800,function(){//#splashエリアをフェードアウトした後にアニメーションを実行
      PageTopCheck();// スクロール途中からリンクボタンの形状が変化の関数を呼ぶ
      delayScrollAnime();//印象編 4-12 順番に現れる（CSS x jQuery）の関数を呼ぶ
      TextRandomAnimeControl();//印象編 8-1 テキストがバラバラに出現の関数を呼ぶ
    });
    //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる

  });

});//ここまでページが読み込まれたらすぐに動かしたい場合の記述

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  $(".submit-btn2").removeClass("fadeOk");
  $("contact").removeClass("fadeOk");
  $(".customise_one").removeClass("fadeOk");
  PageTopCheck();// スクロール途中からリンクボタンの形状が変化の関数を呼ぶ
  delayScrollAnime();// 印象編 4-12 順番に現れる（CSS x jQuery）の関数を呼ぶ
  TextRandomAnimeControl();//印象編 8-1 テキストがバラバラに出現の関数を呼ぶ



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
