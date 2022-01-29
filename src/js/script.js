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
    if (scroll >= 200) {
      $("#pageTop").removeClass("DownMove");
      $("#pageTop").addClass("UpMove");
    } else {
      if ($("#pageTop").hasClass("UpMove")) {
        $("#pageTop").removeClass("UpMove");
        $("#pageTop").addClass("DownMove");
      }
    }
  }

  $(window).scroll(function () {
    PageTopAnime();
  });

  // ボタンをクリックしたらスクロールして上に戻る
  $("#pageTop").click(function () {
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
    if ($(".js-hamburger").hasClass("is-open")) {
      $(this).removeClass("is-open");
      $(".p-header").removeClass("is-open");
      $(".js-drawer-menu").fadeOut();
    } else {
      $(this).addClass("is-open");
      $(".p-header").addClass("is-open");
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

var searchItem = ".search__item"; //絞り込み項目を選択するエリア
var listItem = ".p-blog__item"; //絞り込み対象のアイテム
var hideClass = "is-hide"; //絞り込み対象外の場合に付与されるclass名
var activeClass = "is-active"; //選択中のグループに付与されるclass名

$(function () {
  //絞り込みを変更した時
  $(searchItem).on("click", function () {
    $(searchItem).removeClass(activeClass);
    var group = $(this).addClass(activeClass).data("group");
    search_filter(group);
  });
});

function search_filter(group) {
  //非表示状態を解除
  $(listItem).removeClass(hideClass);
  //値が空の場合はすべて表示
  if (group === "") {
    return;
  }
  //リスト内の各アイテムをチェック
  for (var i = 0; i < $(listItem).length; i++) {
    //アイテムに設定している項目を取得
    var itemData = $(listItem).eq(i).data("group");
    //絞り込み対象がどうかを調べる
    if (itemData !== group) {
      $(listItem).eq(i).addClass(hideClass);
    }
  }
}

// var searchItem = ".search__item"; //絞り込み項目を選択するエリア
// var listItem = ".p-works__item"; //絞り込み対象のアイテム
// var hideClass = "is-hide"; //絞り込み対象外の場合に付与されるclass名
// var activeClass = "is-active"; //選択中のグループに付与されるclass名

// $(function () {
//   //絞り込みを変更した時
//   $(searchItem).on("click", function () {
//     $(searchItem).removeClass(activeClass);
//     var group = $(this).addClass(activeClass).data("group");
//     search_filter(group);
//   });
// });

// function search_filter(group) {
//   //非表示状態を解除
//   $(listItem).removeClass(hideClass);
//   //値が空の場合はすべて表示
//   if (group === "") {
//     return;
//   }
//   //リスト内の各アイテムをチェック
//   for (var i = 0; i < $(listItem).length; i++) {
//     //アイテムに設定している項目を取得
//     var itemData = $(listItem).eq(i).data("group");
//     //絞り込み対象がどうかを調べる
//     if (itemData !== group) {
//       $(listItem).eq(i).addClass(hideClass);
//     }
//   }
// }
