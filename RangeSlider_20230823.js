var breedte, diepte;

$(document).ready(function () {
    breedte = $('.slider[name=breedte]'); //300
    $('[name=breedte]:first').val(breedte);
    swiper_func_breedte("breedte", '#Slider-Number-Breedte');
    do_on_range_change_breedte();
  });

  $("[name=breedte]").on("input", function () { //mousemove change instead of input?
    breedte = $(this).val();
    $('#Input-Breedte').val(breedte);
    swiper_func_breedte("breedte", '#Slider-Number-Breedte');
    do_on_range_change_breedte();
  });

  $('#Input-Breedte').on('keyup touchend', function () {
    let input_breedte_value = $(this).val();
    breedte = input_breedte_value;
    $('[name=breedte]:first').val(input_breedte_value)
    swiper_func_breedte("breedte", '#Slider-Number-Breedte');
    do_on_range_change_breedte();
  });

  function do_on_range_change_breedte() {
      $('.breedte-number').text(breedte);
  }

  function swiper_func_breedte(name, swiper) {
    name = "[name=" + name + "]"; //'[name=breedte]'
    var range_val = $(name).val(); //$('[name=breedte]').val();
    range_val = parseFloat(range_val);
    var range_width = $(name).width() - 30; //360 - 30
    var range_min = $(name).attr("min"); //300
    var range_max = $(name).attr("max"); //1200
    range_width = range_width / (range_max - range_min); //330 / (1200-300) = 0.367
    range_width = range_width * (range_val - range_min); //0.367 * (750 - 300) = 165
    $(swiper).css({ transform: "translateX(" + range_width + "px)" });
  }


$(document).ready(function () {
diepte = 250;
$('[name=diepte]').val(diepte);
swiper_func_diepte("diepte", '#Slider-Number-Diepte');
do_on_range_change_diepte();
  });

$("[name=diepte]").on("input", function () {
diepte = $('[name=diepte]').val();
swiper_func_diepte("diepte", '#Slider-Number-Diepte');
do_on_range_change_diepte();
});

function do_on_range_change_diepte() {
$('.diepte-number').text(diepte);
}

function swiper_func_diepte(name, swiper) {
name = "[name=" + name + "]";
var range_val = $(name).val();
range_val = parseFloat(range_val);
var range_width = $(name).width() - 10;
var range_max = $(name).attr("max");
range_width = range_width / range_max;
range_width = range_width * (range_val - 1);
$(swiper).css({ transform: "translateX(" + range_width + "px)" });
  }