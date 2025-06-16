var breedteVeranda, diepteVeranda, breedteCarport, diepteCarport;

$(document).ready(function () {
    //Breedte Veranda
    breedteVeranda = 300;
    $('[name=breedteVeranda]').val(breedteVeranda);
    swiper_func_breedte("breedteVeranda", '#Slider-Number-BreedteVeranda');
    do_on_range_change_breedte('#BreedteVeranda-Number-Val',breedteVeranda);

    //Diepte Veranda
    diepteVeranda = 250;
    $('[name=diepteVeranda]').val(diepteVeranda);
    swiper_func_breedte("diepteVeranda", '#Slider-Number-DiepteVeranda');
    do_on_range_change_breedte('#BreedteVeranda-Number-Val',diepteVeranda);

    //Breedte Carport
    breedteCarport = 300;
    $('[name=breedteCarport]').val(breedteCarport);
    swiper_func_breedte("breedteCarport", '#Slider-Number-BreedteCarport');
    do_on_range_change_breedte('#BreedteCarport-Number-Val',breedteCarport);

    //Diepte Carport
    diepteCarport = 250;
    $('[name=diepteCarport]').val(diepteCarport);
    swiper_func_breedte("diepteCarport", '#Slider-Number-DiepteCarport');
    do_on_range_change_breedte('#DiepteCarport-Number-Val',breedteCarport);
  });

  //On input
  //Breedte Veranda on input Rangeslider
  $("[name=breedteVeranda]").on("input", function () { //mousemove change instead of input?
    breedteVeranda = $(this).val();
    $('#Input-BreedteVeranda').val(breedteVeranda);
    swiper_func_breedte("breedteVeranda", '#Slider-Number-BreedteVeranda');
    $('#Slider-Number-BreedteVeranda').addClass("show"); // display slider-thumb
    do_on_range_change_breedte('#BreedteVeranda-Number-Val',breedteVeranda);
    $('#i-sumBreedteVal').text(breedteVeranda); //Update summary value
  });

  $("[name=breedteVeranda]").on( "blur", function() {
    $('#Slider-Number-BreedteVeranda').removeClass("show"); // hide slider-thumb
  } );

  //Diepte Veranda on input Rangeslider
  $("[name=diepteVeranda]").on("input", function () { //mousemove change instead of input?
    diepteVeranda = $(this).val();
    $('#Input-DiepteVeranda').val(diepteVeranda);
    swiper_func_breedte("diepteVeranda", '#Slider-Number-DiepteVeranda');
    $('#Slider-Number-DiepteVeranda').addClass("show"); // display slider-thumb
    do_on_range_change_breedte('#DiepteVeranda-Number-Val',diepteVeranda);
    $('#i-sumDiepteVal').text(diepteVeranda); //Update summary value
  });

  $("[name=diepteVeranda]").on( "blur", function() {
    $('#Slider-Number-DiepteVeranda').removeClass("show"); // hide slider-thumb
  } );

  //Breedte Carport on input Rangeslider
  $("[name=breedteCarport]").on("input", function () { //mousemove change instead of input?
    breedteCarport = $(this).val();
    $('#Input-BreedteCarport').val(breedteCarport);
    swiper_func_breedte("breedteCarport", '#Slider-Number-BreedteCarport');
    $('#Slider-Number-BreedteCarport').addClass("show"); // display slider-thumb
    do_on_range_change_breedte('#BreedteCarport-Number-Val',breedteCarport);
    $('#i-sumBreedteVal').text(breedteCarport); //Update summary value
  });

  $("[name=breedteCarport]").on( "blur", function() {
    $('#Slider-Number-BreedteCarport').removeClass("show"); // hide slider-thumb
  } );

  //Diepte Carport on input Rangeslider
  $("[name=diepteCarport]").on("input", function () { //mousemove change instead of input?
    diepteCarport = $(this).val();
    $('#Input-DiepteCarport').val(diepteCarport);
    swiper_func_breedte("diepteCarport", '#Slider-Number-DiepteCarport');
    $('#Slider-Number-DiepteCarport').addClass("show"); // display slider-thumb
    do_on_range_change_breedte('#DiepteCarport-Number-Val',diepteCarport);
    $('#i-sumDiepteVal').text(diepteCarport); //Update summary value
  });

  $("[name=diepteCarport]").on( "blur", function() {
    $('#Slider-Number-DiepteCarport').removeClass("show"); // hide slider-thumb
  } );

  //on input number text field change
  //Breedte Veranda on input number text field change
  $('#Input-BreedteVeranda').on('keyup touchend', function () {
    let input_breedte_value = $(this).val();
    breedteVeranda = input_breedte_value;
    $('[name=breedteVeranda]:first').val(input_breedte_value)
    swiper_func_breedte("breedteVeranda", '#Slider-Number-BreedteVeranda');
    do_on_range_change_breedte('#BreedteVeranda-Number-Val',breedteVeranda);
    $('#i-sumBreedteVal').text(breedteVeranda); //Update summary value
  });

  //Diepte Veranda on input number text field change
  $('#Input-DiepteVeranda').on('keyup touchend', function () {
    let input_breedte_value = $(this).val();
    diepteVeranda = input_breedte_value;
    $('[name=diepteVeranda]:first').val(input_breedte_value)
    swiper_func_breedte("diepteVeranda", '#Slider-Number-DiepteVeranda');
    do_on_range_change_breedte('#DiepteVeranda-Number-Val',diepteVeranda);
    $('#i-sumDiepteVal').text(diepteVeranda); //Update summary value
  });

  //Breedte Carport on input number text field change
  $('#Input-BreedteCarport').on('keyup touchend', function () {
    let input_breedte_value = $(this).val();
    breedteCarport = input_breedte_value;
    $('[name=breedteCarport]:first').val(input_breedte_value)
    swiper_func_breedte("breedteCarport", '#Slider-Number-BreedteCarport');
    do_on_range_change_breedte('#BreedteCarport-Number-Val',breedteCarport);
    $('#i-sumBreedteVal').text(breedteCarport); //Update summary value
  });

  //Diepte Carport on input number text field change
  $('#Input-DiepteCarport').on('keyup touchend', function () {
    let input_breedte_value = $(this).val();
    diepteCarport = input_breedte_value;
    $('[name=diepteCarport]:first').val(input_breedte_value)
    swiper_func_breedte("diepteCarport", '#Slider-Number-DiepteCarport');
    do_on_range_change_breedte('#DiepteCarport-Number-Val',diepteCarport);
    $('#i-sumDiepteVal').text(diepteCarport); //Update summary value
  });


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