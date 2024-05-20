$(document).ready(function() {
  function SummaryOnClick(radioName, sumSection, sumSubSection, showOnClick) {
    $(".productchoiceoptions > .optionimageradio > input[name$="+ radioName +"]").click(function() {
      var radioValue = $(this).val(); // Radio value
      if(showOnClick == true){
        $("div.cartcontent-wrap > ul > li:contains("+ sumSection +")").show(); //Show summary cartitem
      }
      $("div.cartcontent-wrap > ul > li:contains("+ sumSection +") > .i-sumwrap:contains("+ sumSubSection +") > .i-sumval > .i-sumval-lbl").text(radioValue); //Set cartitem text to Radio value.
    });
  }

  ////Carport section////
  SummaryOnClick('CarportColor', 'Carport','Kleur', false); //CarportColor radio button click
  SummaryOnClick('materiaalDak', 'Carport','Dakbedekking', false); //materiaalDak radio button click
  SummaryOnClick('voorkant', 'Voorkant','Voorkant', true); //Voorkant radio button click
  SummaryOnClick('LEDverlichting', 'LED','LED', true); //LEDverlichting radio button click

  //zijwandLinks radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='zijwandLinks']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Zijkant links')").show(); //Show summary cartitem
    if($(this).is('[value="Zijwand polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Zijwand aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Zijwand vast glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Glazen schuifwanden zijkant"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Spie polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Spie aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Spie glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Geen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("-")
    }
  });

  //zijwandRechts radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='zijwandRechts']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts')").show(); //Show summary cartitem
    if($(this).is('[value="Zijwand polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Zijwand aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Zijwand vast glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Glazen schuifwanden zijkant"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Spie polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Spie aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Spie glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Geen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("-")
    }
  });

  ////Veranda section////
  SummaryOnClick('VerandaColor', 'Veranda','Kleur', false); //VerandaColor radio button click
  SummaryOnClick('verandaMateriaalDak', 'Veranda','Dakbedekking', false); //verandaMateriaalDak radio button click
  SummaryOnClick('verandaVoorkant', 'Voorkant','Voorkant', true); //verandaVoorkant radio button click
  SummaryOnClick('verandaLEDverlichting', 'LED','LED', true); //verandaLEDverlichting

  //verandaZijwandLinks radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='verandaZijwandLinks']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Zijkant links')").show(); //Show summary cartitem
    if($(this).is('[value="Zijwand polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Zijwand aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Zijwand vast glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Glazen schuifwanden zijkant"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Spie polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Spie aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Spie glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Geen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("-")
    }
  });

  //verandaZijwandRechts radio button click
  $(".productchoiceoptions > .optionimageradio > input[name$='verandaZijwandRechts']").click(function() {
    var radioValue = $(this).val(); // Radio value
    $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts')").show(); //Show summary cartitem
    if($(this).is('[value="Zijwand polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Zijwand aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Zijwand vast glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Glazen schuifwanden zijkant"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text(radioValue)
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Spie polycarbonaat"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Polycarbonaat")
    }
    if($(this).is('[value="Spie aluminium rabatdelen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Aluminium rabatdelen")
    }
    if($(this).is('[value="Spie glas"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("Glas")
    }
    if($(this).is('[value="Geen"]')){
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(0).text("-")
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap > .i-sumval > .i-sumval-lbl").eq(1).text("-")
    }
  });

});