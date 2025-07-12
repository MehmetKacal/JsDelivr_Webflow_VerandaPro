var breedteVeranda, diepteVeranda;

$(document).ready(function () {
  ////Initialize base values for input block and slider////
  //Breedte Veranda
  breedteVeranda = 300; //Initial Breedte Veranda
  $('[name=conf-breedteVeranda]').val(breedteVeranda); //Set slider value
  swiper_func_breedte("conf-breedteVeranda", '#conf-Slider-Number-BreedteVeranda'); //Set slider-thumb location
  do_on_range_change_breedte('#conf-BreedteVeranda-Number-Val',breedteVeranda); //Set slider-thumb number

  // //Diepte Veranda
  diepteVeranda = 250; //Initial Breedte Veranda
  $('[name=conf-diepteVeranda]').val(diepteVeranda); //Set slider value
  swiper_func_breedte("conf-diepteVeranda", '#conf-Slider-Number-DiepteVeranda'); //Set slider-thumb location
  do_on_range_change_breedte('#conf-DiepteVeranda-Number-Val',diepteVeranda); //Set slider-thumb number
});

////On input Rangeslider and input number text field change, update all values////
updateOnSliderInput('conf-breedteVeranda','conf-Slider-Number-BreedteVeranda','conf-BreedteVeranda-Number-Val','conf-Input-BreedteVeranda'); //Breedte Veranda on input Rangeslider & inputblock
updateOnSliderInput('conf-diepteVeranda','conf-Slider-Number-DiepteVeranda','conf-DiepteVeranda-Number-Val','conf-Input-DiepteVeranda'); //Breedte Veranda on input Rangeslider & inputblock

function do_on_range_change_breedte(name, value) {
    $(name).text(value);
    // $('#conf-BreedteVeranda-Number-Val').text(breedteVeranda);
}

function swiper_func_breedte(name, swiper) {
  name = "[name=" + name + "]"; // e.g., '[name=breedte]'
  var $slider = $(name);
  var range_val = parseFloat($slider.val());
  var range_min = parseFloat($slider.attr("min"));
  var range_max = parseFloat($slider.attr("max"));

  // Calculate usable width (slider width - thumb size)
  var slider_width = $slider.width();
  var thumb_width = 20; // approximate, adjust as needed
  var usable_width = slider_width - thumb_width;

  // Calculate value percent
  var percent = (range_val - range_min) / (range_max - range_min);

  // Final pixel offset
  var range_width = percent * usable_width;

  // Apply transform with center correction
  $(swiper).css({
    left: range_width + "px",
    transform: "translateX(-50%)" // center the element horizontally
  });
}

////On input Rangeslider, update all values////
function updateOnSliderInput(sliderName, sliderThumbID, sliderThumbNumID,inputBlockID) {
  $("[name="+ sliderName +"]").on("input", function () { //mousemove change instead of input?
    $('#'+ inputBlockID).val($(this).val()); //Update input block value
    $('#'+ inputBlockID)[0].dispatchEvent(new Event('input', { bubbles: true }));
    swiper_func_breedte(sliderName, '#'+ sliderThumbID); //Update slider-thumb location
    $('#'+ sliderThumbID).addClass("show"); // display slider-thumb
    do_on_range_change_breedte('#'+ sliderThumbNumID, $(this).val()); //Update slider-thumb number

  });

  $("[name="+ sliderName +"]").on( "blur", function() {
    $('#'+ sliderThumbID).removeClass("show"); // hide slider-thumb
  } );

  //on input number text field change
  //Breedte Veranda on input number text field change
  $('#'+ inputBlockID).on('keyup touchend', function () {
    $('[name="'+ sliderName +'"]:first').val($(this).val())
    swiper_func_breedte(sliderName, '#'+ sliderThumbID);
    do_on_range_change_breedte('#'+ sliderThumbNumID, $(this).val());
  });
}