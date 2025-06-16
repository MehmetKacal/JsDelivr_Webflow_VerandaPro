$(document).ready(function() {
  //CarportColor radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='CarportColor']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Carport') > .i-sumwrap:contains('Kleur') > .i-sumval > .i-sumval-lbl").text(radioValue); //Set cartitem text to Radio value.
  });

  //materiaalDak radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='materiaalDak']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Carport') > .i-sumwrap:contains('Dakbedekking') > .i-sumval > .i-sumval-lbl").text(radioValue); //Set cartitem text to Radio value.
  });
  
  //Voorkant radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='voorkant']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Voorkant')").show(); //Show summary cartitem
    $("div.cartcontent-wrap > ul > li:contains('Voorkant') > .i-sumwrap > .i-sumval > .i-sumval-lbl").text(radioValue); //Set cartitem text to Radio value.
  });

  //zijwandLinks radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='zijwandLinks']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Zijkant links')").show(); //Show summary cartitem
    $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").text(radioValue); //Set cartitem text to Radio value.
    // To do: split Zijwand/Spie set text.
  });

  //zijwandRechts radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='zijwandRechts']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts')").show(); //Show summary cartitem
    $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").text(radioValue); //Set cartitem text to Radio value.
    // To do: split Zijwand/Spie set text.
  });

  //LEDverlichting radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='LEDverlichting']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('LED')").show(); //Show summary cartitem
    $("div.cartcontent-wrap > ul > li:contains('LED') > .i-sumwrap > .i-sumval > .i-sumval-lbl").text(radioValue); //Set cartitem text to Radio value.
  });

});