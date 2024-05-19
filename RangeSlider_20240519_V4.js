var breedteVeranda, diepteVeranda, breedteCarport, diepteCarport;

$(document).ready(function () {
  ////Initialize base values for input block and slider////
  //Breedte Veranda
  breedteVeranda = 300; //Initial Breedte Veranda
  $('[name=breedteVeranda]').val(breedteVeranda); //Set slider value
  swiper_func_breedte("breedteVeranda", '#Slider-Number-BreedteVeranda'); //Set slider-thumb location
  do_on_range_change_breedte('#BreedteVeranda-Number-Val',breedteVeranda); //Set slider-thumb number

  //Diepte Veranda
  diepteVeranda = 250; //Initial Diepte Veranda
  $('[name=diepteVeranda]').val(diepteVeranda); //Set slider value
  swiper_func_breedte("diepteVeranda", '#Slider-Number-DiepteVeranda'); //Set slider-thumb location
  do_on_range_change_breedte('#DiepteVeranda-Number-Val',diepteVeranda); //Set slider-thumb number

  //Breedte Carport
  breedteCarport = 300; //Initial Breedte Carport
  $('[name=breedteCarport]').val(breedteCarport); //Set slider value
  swiper_func_breedte("breedteCarport", '#Slider-Number-BreedteCarport'); //Set slider-thumb location
  do_on_range_change_breedte('#BreedteCarport-Number-Val',breedteCarport); //Set slider-thumb number

  //Diepte Carport
  diepteCarport = 250; //Initial Diepte Carport
  $('[name=diepteCarport]').val(diepteCarport); //Set slider value
  swiper_func_breedte("diepteCarport", '#Slider-Number-DiepteCarport'); //Set slider-thumb location
  do_on_range_change_breedte('#DiepteCarport-Number-Val',diepteCarport); //Set slider-thumb number
});

////On input Rangeslider and input number text field change, update all values////
updateOnSliderInput('breedteVeranda','Slider-Number-BreedteVeranda','BreedteVeranda-Number-Val','i-sumBreedteVal','Input-BreedteVeranda'); //Breedte Veranda on input Rangeslider & inputblock
updateOnSliderInput('diepteVeranda','Slider-Number-DiepteVeranda','DiepteVeranda-Number-Val','i-sumDiepteVal','Input-DiepteVeranda'); //Diepte Veranda on input Rangeslider & inputblock
updateOnSliderInput('breedteCarport','Slider-Number-BreedteCarport','BreedteCarport-Number-Val','i-sumBreedteVal','Input-BreedteCarport'); //Breedte Carport on input Rangeslider & inputblock
updateOnSliderInput('diepteCarport','Slider-Number-DiepteCarport','DiepteCarport-Number-Val','i-sumDiepteVal','Input-DiepteCarport'); //Diepte Carport on input Rangeslider & inputblock
updateOnSliderInput('breedteZonwering','Slider-Number-BreedteZonwering','BreedteZonwering-Number-Val','i-sumBreedteVal','Input-Breedte-Zonwering'); //Breedte Zonwering on input Rangeslider & inputblock
updateOnSliderInput('diepteZonwering','Slider-Number-DiepteZonwering','DiepteZonwering-Number-Val','i-sumDiepteVal','Input-Diepte-Zonwering'); //Diepte Zonwering on input Rangeslider & inputblock
updateOnSliderInput('breedteGlazenSchuifwand','Slider-Number-BreedteGlazenSchuifwand','BreedteGlazenSchuifwand-Number-Val','i-sumBreedteVal','Input-Breedte-GlazenSchuifwand'); //Breedte GlazenSchuifwand on input Rangeslider & inputblock
updateOnSliderInput('hoogteGlazenSchuifwand','Slider-Number-HoogteGlazenSchuifwand','HoogteGlazenSchuifwand-Number-Val','i-sumDiepteVal','Input-Hoogte-GlazenSchuifwand'); //Hoogte GlazenSchuifwand on input Rangeslider & inputblock

function do_on_range_change_breedte(name, value) {
    $(name).text(value);
    // $('#BreedteVeranda-Number-Val').text(breedteVeranda);
}

function swiper_func_breedte(name, swiper) {
  name = "[name=" + name + "]"; //'[name=breedte]'
  var range_val = $(name).val(); //$('[name=breedte]').val();
  range_val = parseFloat(range_val);
  var range_width = $(name).width() - 20; //pxwidth - width slide-thumb
  var range_min = $(name).attr("min"); //300
  var range_max = $(name).attr("max"); //1200
  range_width = range_width / (range_max - range_min); //330 / (1200-300) = 0.367
  range_width = range_width * (range_val - range_min); //0.367 * (750 - 300) = 165
  $(swiper).css({ transform: "translateX(" + range_width + "px)" });
}

////On input Rangeslider, update all values////
function updateOnSliderInput(sliderName, sliderThumbID, sliderThumbNumID, summaryID,inputBlockID) {
  $("[name="+ sliderName +"]").on("input", function () { //mousemove change instead of input?
    $('#'+ inputBlockID).val($(this).val()); //Update input block value
    swiper_func_breedte(sliderName, '#'+ sliderThumbID); //Update slider-thumb location
    $('#'+ sliderThumbID).addClass("show"); // display slider-thumb
    do_on_range_change_breedte('#'+ sliderThumbNumID, $(this).val()); //Update slider-thumb number
    $('#'+ summaryID).text($(this).val()); //Update summary value
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
    $('#'+ summaryID).text($(this).val()); //Update summary value
  });
}