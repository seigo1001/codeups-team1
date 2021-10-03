jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".page-top");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  //Topへ戻るボタン
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if(scroll >= 200){
      $('#pageTop').removeClass('DownMove');
      $('#pageTop').addClass('UpMove');
    }else{
      if($('#pageTop').hasClass('UpMove')){
        $('#pageTop').removeClass('UpMove');
        $('#pageTop').addClass('DownMove');
      }
    }
  }

  $(window).scroll(function(){
    PageTopAnime();
  });

  // ボタンをクリックしたらスクロールして上に戻る
  $('#pageTop').click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // ヘッダー
  $(window).on("scroll", function () {
    if ($(".slider1").height() < $(this).scrollTop()) {
      $(".header").css("background", "rgba(17,17,17,1)");
    } else {
      $(".header").css("background", "rgba(17,17,17,0.5)");
    }
  });

  //ドロワーメニュー
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("open")) {
      $(this).removeClass("open");
      $(".p-header").removeClass("open");
      $(".js-drawer-menu").fadeOut();
    } else {
      $(this).addClass("open");
      $(".p-header").addClass("open");
      $(".js-drawer-menu").fadeIn();
    }
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });
});
