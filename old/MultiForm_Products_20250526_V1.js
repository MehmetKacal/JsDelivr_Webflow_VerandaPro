var products, VerandaColor, VerandaMateriaalDak, verandaOptions2, verandaOptions1, glazenSchuifwand, carports, zonweringen, verandaOptions3, carportsKleur, materiaalDak, voorkant, zijwandLinks, zijwandRechts, LEDverlichting, Gegevens;

var we_tabs_next_button = '[bloc=next-tab]';
var we_tabs_prev_button = '[bloc=prev-tab]';
var we_tabs_active_class = 'active';

var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

var tabList = ['products'];

openTab(tabList[0]);

$(we_tabs_next_button).on("click", function () {
  var activeTab = $(".w--tab-active").attr("data-w-tab");
  var indexOfActiveTab = tabList.indexOf(activeTab);
  var indexOfNextTab = indexOfActiveTab + 1;
  var nextTab = tabList[indexOfNextTab];
  var amountOfTabs = tabList.length;
  var attrNextTab = $('.w--tab-active').attr('next-tab');

  if(activeTab=='products' && (attrNextTab=='carports' || attrNextTab=='verandaOptions1')){
    if(attrNextTab=='carports'){
      $('#i-sumHeadProductTxt').text('Carport')
    }
    else{
      $('#i-sumHeadProductTxt').text('Veranda')
    }
    openTab(attrNextTab);
    // Show summary only on tablet size or larger
    if (window.innerWidth >= 768) {
      $('.summary-wrapper').show();
    } else {
      $('.summary-wrapper').hide(); // Optional: hide it on smaller screens
    }
    //$('.summary-wrapper').show(); //Show summary on next btn to Veranda or Carports tab.
  } else {
    openTab(attrNextTab);
  }

  attrNextTab = $('.w--tab-active').attr('next-tab');

  if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
    $(we_tabs_next_button).addClass(we_tabs_active_class);
  } else {
    $(we_tabs_next_button).removeClass(we_tabs_active_class);
  }

  if (amountOfTabs > 1) {
    $(we_tabs_prev_button).addClass(we_tabs_active_class);
  }
});

$(we_tabs_prev_button).on("click", function () {
  var activeTab = $(".w--tab-active").attr("data-w-tab");
  var indexOfActiveTab = tabList.indexOf(activeTab);
  var indexOfPrevTab = indexOfActiveTab - 1;
  var prevTab = tabList[indexOfPrevTab];

  var attrPrevTab = $('.w--tab-active').attr('prev-tab');

  // 👉 If there is no previous tab, redirect to homepage
  if (indexOfActiveTab <= 0 || typeof attrPrevTab === "undefined") {
    window.location.href = "https://www.verandapromax.nl";
    return; // Stop further execution
  }

  if (indexOfActiveTab > 0) {
    if(attrPrevTab=='products'){
      openTab(attrPrevTab);
      $('.summary-wrapper').hide(); //Hide summary on prev btn from all tabs.
      //Empty all cart items
      $("div.cartcontent-wrap > ul > li:contains('Carport') > .i-sumwrap:contains('Kleur') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Carport') > .i-sumwrap:contains('Dakbedekking') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Veranda') > .i-sumwrap:contains('Kleur') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Veranda') > .i-sumwrap:contains('Dakbedekking') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Voorkant') > .i-sumwrap:contains('Voorkant') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap:contains('Zijwand links') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap:contains('Zijwand rechts') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links') > .i-sumwrap:contains('Spie links') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts') > .i-sumwrap:contains('Spie rechts') > .i-sumval > .i-sumval-lbl").text('-');
      $("div.cartcontent-wrap > ul > li:contains('LED') > .i-sumwrap:contains('LED') > .i-sumval > .i-sumval-lbl").text('-');
      //Reset breedte/diepte radio values
      $('[name=breedteVeranda]').val(300) //range slider value
      $('[name=diepteVeranda]').val(250) //range slider value
      $('#Input-BreedteVeranda').val(300); //Input field value
      $('#Input-DiepteVeranda').val(250); //Input field value
      $('#Input-BreedteCarport').val(300); //Input field value
      $('#Input-DiepteCarport').val(250); //Input field value
      $('#i-sumBreedteVal').text(300); //Update summary value
      $('#i-sumDiepteVal').text(250); //Update summary value
      //Hide all cart items
      $("div.cartcontent-wrap > ul > li:contains('Voorkant')").hide();
      $("div.cartcontent-wrap > ul > li:contains('Zijkant links')").hide();
      $("div.cartcontent-wrap > ul > li:contains('Zijkant rechts')").hide();
      $("div.cartcontent-wrap > ul > li:contains('LED')").hide();
    } else {
      openTab(attrPrevTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
  }

  if (indexOfActiveTab <= 1) {
    $(we_tabs_prev_button).removeClass(we_tabs_active_class);
  } else {
    $(we_tabs_prev_button).addClass(we_tabs_active_class);
  }
});

function openTab(tab) {
  var tab_link = "a[data-w-tab=" + tab;
  tab = "div[data-w-tab=" + tab;

  $(tab).siblings().removeClass("w--tab-active");
  $(tab).addClass("w--tab-active");
  $(tab_link).siblings("a").removeClass("w--current");
  $(tab_link).addClass("w--current");
}

$("[name=products]").on("input", function () {
products = getValueFromInput("products");
if (products == 1) {

  nextTab = 'verandaOptions1';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=verandaOptions1]')).attr('prev-tab',we_activeTab);

} else if (products == 2) {

  nextTab = 'glazenSchuifwand';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=glazenSchuifwand]')).attr('prev-tab',we_activeTab);

} else if (products == 3) {

  nextTab = 'carports';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=carports]')).attr('prev-tab',we_activeTab);

  } else if (products == 4) {

  nextTab = 'zonweringen';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=zonweringen]')).attr('prev-tab',we_activeTab);

  }
});

$("[name=products]").parent("label.w-radio").on("click", function () {
  clickedRadioButtonValue = $("input", this).val();
  products = getValueFromInput("products");
  if (products == 1) {

  nextTab = 'verandaOptions1';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=verandaOptions1]')).attr('prev-tab',we_activeTab);

  } else if (products == 2) {

  nextTab = 'glazenSchuifwand';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=glazenSchuifwand]')).attr('prev-tab',we_activeTab);

  } else if (products == 3) {

  nextTab = 'carports';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=carports]')).attr('prev-tab',we_activeTab);

  } else if (products == 4) {

  nextTab = 'zonweringen';
  we_activeTab = $(".w--tab-active").attr("data-w-tab");
  we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  we_indexOfNextTab = we_indexOfActiveTab + 1;
  we_indexOfPrevTab = we_indexOfActiveTab - 1;
  we_prevTab = tabList[we_indexOfPrevTab];
  we_amountOfTabs = tabList.length;

  if (we_indexOfNextTab < we_amountOfTabs) {
    tabList[we_indexOfNextTab] = nextTab;
  } else {
    tabList.push(nextTab);
  }
  $(we_tabs_next_button).addClass(we_tabs_active_class);
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab=zonweringen]')).attr('prev-tab',we_activeTab);

  }
});

//Next tab on input radio
nextTabOnRadioInput('CarportColor','materiaalDak'); //On input radio CarportColor within tab XX, next tab is materiaalDak
nextTabOnRadioInput('materiaalDak','voorkant'); //On input radio materiaalDak within tab XX, next tab is voorkant
nextTabOnRadioInput('VerandaColor','verandaMateriaalDak'); //On input radio VerandaColor within tab verandaKleur, next tab is verandaMateriaalDak
nextTabOnRadioInput('verandaMateriaalDak','verandaVoorkant'); //On input radio verandaMateriaalDak within tab verandaMateriaalDak, next tab is verandaVoorkant

//Next tab based on current tab.
nextTabOnNextBtn('carports','carportsKleur'); // carports -> carportsKleur
nextTabOnNextBtn('voorkant','zijwandLinks'); // voorkant -> zijwandLinks
nextTabOnNextBtn('zijwandLinks','zijwandRechts'); // zijwandLinks -> zijwandRechts
nextTabOnNextBtn('zijwandRechts','LEDverlichting'); // zijwandRechts -> LEDverlichting
nextTabOnNextBtn('LEDverlichting','Gegevens'); // LEDverlichting -> Gegevens
nextTabOnNextBtn('Gegevens','summary'); //if active tab is Gegevens, open next tab summary and set previous tab to Gegevens.
nextTabOnNextBtn('verandaOptions1','verandaKleur'); //verandaOptions1 -> verandaKleur
nextTabOnNextBtn('verandaVoorkant','verandaZijwandLinks'); //verandaVoorkant -> verandaZijwandLinks
nextTabOnNextBtn('verandaZijwandLinks','verandaZijwandRechts'); //verandaZijwandLinks -> verandaZijwandRechts
nextTabOnNextBtn('verandaZijwandRechts','verandaLEDverlichting'); //verandaZijwandRechts -> verandaLEDverlichting
nextTabOnNextBtn('verandaLEDverlichting','Gegevens'); //verandaLEDverlichting -> Gegevens
nextTabOnNextBtn('glazenSchuifwand','Gegevens'); //glazenSchuifwand -> Gegevens
nextTabOnNextBtn('zonweringen','Gegevens'); //zonweringen -> Gegevens

//Hide meeting summary on page summary
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='summary') {
    $('[bloc=meeting-summary]').css({
      'display':'none',
    });
}});

//Unhide meeting summary when prev btn is pressed on summary page.
$('[bloc=prev-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='Gegevens') {
    $('[bloc=meeting-summary]').css({
    'display':'flex',
    });
}});

//Function to determine next tab on on next button click, based on current tab.
function nextTabOnNextBtn(fromTab, nextTab) {
    $('[bloc=next-tab]').on('click',function() {
      if($('.w--tab-active').attr('data-w-tab')==fromTab) {

        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;
    
        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab="'+ nextTab +'"]')).attr('prev-tab',we_activeTab);
    }});
}

//Function to determine next tab on radiobutton input.
function nextTabOnRadioInput(radioButton, nextTab) {
  //Below two blocks are for determining next tab on input radio.
  $("[name="+radioButton+"]").on("input", function () {
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
      tabList[we_indexOfNextTab] = nextTab;
    } else {
      tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab',nextTab);
    $($('[data-w-tab="'+ nextTab +'"]')).attr('prev-tab',we_activeTab);

  });

  $("[name="+radioButton+"]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();

    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
      tabList[we_indexOfNextTab] = nextTab;
    } else {
      tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab',nextTab);
    $($('[data-w-tab="'+ nextTab +'"]')).attr('prev-tab',we_activeTab);

    });
}