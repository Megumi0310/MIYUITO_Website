
$(function () {
  $(".Japanese").on("click", function () {
    $("#subtitle").text("栄養士サービス");
    $("#subtitle").css("font-size", "25px");
    $("#maintitle").text("食にまつわるストレスの軽減をサポートします");
    $("#maintitle").css("font-size", "33px");
    $(".introduce").html("食べ物は私たちの生活の中でとても大きな部分を占めています。<br>しかし、ときに圧倒され、混乱することもあります。<br>一緒に、肉体的にも精神的にも自分を大切にする方法を探していきましょう。");
    $(".under").text("さらに読む");
    $("#services").text("サービス");
    $("#services-title ").text("実現に向けての方法");
    $("#name1").text("カウンセリング");
    $("#name2").text("グループプログラム");
    $("#name3").text("電子書籍");
    $("#intro-title").text("管理栄養士の紹介");
    $("#responsive-intro-title").text("管理栄養士の紹介");
    $("#detail").html("初めまして、美優（みゆ）と申します。<br>私の小さなオンラインホームへようこそ。<br>様々な悩みを抱える方達の食と栄養にまつわる課題を克服し、心と体をケアしていくために管理栄養士の仕事を始めました。<br>自分自身のために、あるいは大切な人のために、このサイトを訪れてくれたことに感謝いたします。<br>私たちができることをご覧になって、ご質問等があればお気軽にご連絡ください。");
    $("#bottom-text").text("何か気になるものはありましたか？");
    $("#mail").text("お問合わせはこちら");
  });
});

$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#h-nav").toggleClass('panelactive');
});

$("#h-nav a").click(function () {
  $(".openbtn").removeClass('active');
  $("#h-nav").removeClass('panelactive');
});

$("#parentlist li").click(function () {
  $(this).children('.childlist').slideToggle();
});



