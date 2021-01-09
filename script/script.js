/*==============================
PC：コメント欄の開閉
===============================*/
$(function(){
  $(".whatwedo_area1_right_a_1").on("click", function() {
  $(this).next().slideToggle();
  });
});

$(function(){
  $(".whatwedo_area1_right_a_2").on("click", function() {
  $(this).next().slideToggle();
  });
});

$(function(){
  $(".whatwedo_area1_right_a_3").on("click", function() {
  $(this).next().slideToggle();
  });
});

$(function(){
  $(".whatwedo_area1_right_a_top").on("click", function() {
  $(this).next().slideToggle();
  });
});

/*==============================
PC：コメント欄の開閉に連動した＋−切替
===============================*/

$(function(){
  $(".whatwedo_area1_right_a_1").on("click", function() {
  $(".whatwedo_area1_right_a_1_txt").toggleClass('active');
  });
});

$(function(){
  $(".whatwedo_area1_right_a_2").on("click", function() {
  $(".whatwedo_area1_right_a_2_txt").toggleClass('active');
  });
});

$(function(){
  $(".whatwedo_area1_right_a_3").on("click", function() {
  $(".whatwedo_area1_right_a_3_txt").toggleClass('active');
  });
});

/*==============================
SP：メニューボタンの開閉
===============================*/
$(function(){
  $('.header_sp i').on('click', function(){
    $('.header_sp_menu').toggleClass('is_active');
  });
}());

/*==============================
SP：メニューボタンを押下後クローズ&遷移
===============================*/
$(function(){
  $('.menu_item').on('click', function(){
    $('.header_sp_menu').removeClass('is_active');
  });
}());