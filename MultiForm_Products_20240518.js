var products, VerandaColor, VerandaMateriaalDak, verandaOptions2, verandaOptions1, glazenSchuifwand, carports, zonweringen, verandaOptions3, carportsKleur, materiaalDak, voorkant, zijwandLinks, zijwandRechts, LEDverlichting, Gegevens;

// // if radio button VerandaColor and VerandaMateriaalDak have selection, then set next tab
// function Multi_Step_Check_VerandaColor_and_VerandaMateriaalDak() {
//   if (VerandaColor != null && VerandaMateriaalDak != null) {

//     nextTab = 'verandaOptions2';
//     we_activeTab = $(".w--tab-active").attr("data-w-tab");
//     we_indexOfActiveTab = tabList.indexOf(we_activeTab);
//     we_indexOfNextTab = we_indexOfActiveTab + 1;
//     we_indexOfPrevTab = we_indexOfActiveTab - 1;
//     we_prevTab = tabList[we_indexOfPrevTab];
//     we_amountOfTabs = tabList.length;

//     if (we_indexOfNextTab < we_amountOfTabs) {
//       tabList[we_indexOfNextTab] = nextTab;
//     } else {
//       tabList.push(nextTab);
//     }
//     $(we_tabs_next_button).addClass(we_tabs_active_class);
//     $(".w--tab-active").attr('next-tab',nextTab);
//     $($('[data-w-tab=verandaOptions2]')).attr('prev-tab',we_activeTab);

//   }
// }

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
    $('.summary-wrapper').show();
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

  if (indexOfActiveTab > 0) {
    if(attrPrevTab=='products'){
      openTab(attrPrevTab);
      $('.summary-wrapper').hide();
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

//     $("[name=VerandaColor]").on("input", function () {
//     VerandaColor = getValueFromInput("VerandaColor");
//       Multi_Step_Check_VerandaColor_and_VerandaMateriaalDak();
// });

//     $("[name=VerandaColor]").parent("label.w-radio").on("click", function () {
//       clickedRadioButtonValue = $("input", this).val();
//       VerandaColor = getValueFromInput("VerandaColor");
//         Multi_Step_Check_VerandaColor_and_VerandaMateriaalDak();
// });
//     $("[name=VerandaMateriaalDak]").on("input", function () {
//     VerandaMateriaalDak = getValueFromInput("VerandaMateriaalDak");
//       Multi_Step_Check_VerandaColor_and_VerandaMateriaalDak();
// });

//     $("[name=VerandaMateriaalDak]").parent("label.w-radio").on("click", function () {
//       clickedRadioButtonValue = $("input", this).val();
//       VerandaMateriaalDak = getValueFromInput("VerandaMateriaalDak");
//         Multi_Step_Check_VerandaColor_and_VerandaMateriaalDak();
// });

  //   $('[bloc=next-tab]').on('click',function() {
  // if($('.w--tab-active').attr('data-w-tab')=='verandaOptions2') {

  //       nextTab = 'verandaOptions3';
  //       we_activeTab = $(".w--tab-active").attr("data-w-tab");
  //       we_indexOfActiveTab = tabList.indexOf(we_activeTab);
  //       we_indexOfNextTab = we_indexOfActiveTab + 1;
  //       we_indexOfPrevTab = we_indexOfActiveTab - 1;
  //       we_prevTab = tabList[we_indexOfPrevTab];
  //       we_amountOfTabs = tabList.length;

  //       if (we_indexOfNextTab < we_amountOfTabs) {
  //         tabList[we_indexOfNextTab] = nextTab;
  //       } else {
  //         tabList.push(nextTab);
  //       }
  //       $(we_tabs_next_button).addClass(we_tabs_active_class);
  //       $(".w--tab-active").attr('next-tab',nextTab);
  //       $($('[data-w-tab=verandaOptions3]')).attr('prev-tab',we_activeTab);


  //     }});

// $('[bloc=next-tab]').on('click',function() {
//   if($('.w--tab-active').attr('data-w-tab')=='verandaOptions3') {

//         nextTab = 'Gegevens';
//         we_activeTab = $(".w--tab-active").attr("data-w-tab");
//         we_indexOfActiveTab = tabList.indexOf(we_activeTab);
//         we_indexOfNextTab = we_indexOfActiveTab + 1;
//         we_indexOfPrevTab = we_indexOfActiveTab - 1;
//         we_prevTab = tabList[we_indexOfPrevTab];
//         we_amountOfTabs = tabList.length;

//         if (we_indexOfNextTab < we_amountOfTabs) {
//           tabList[we_indexOfNextTab] = nextTab;
//         } else {
//           tabList.push(nextTab);
//         }
//         $(we_tabs_next_button).addClass(we_tabs_active_class);
//         $(".w--tab-active").attr('next-tab',nextTab);
//         $($('[data-w-tab=Gegevens]')).attr('prev-tab',we_activeTab);


//       }});

// carports -> carportsKleur
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='carports') {

    nextTab = 'carportsKleur';
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
    $($('[data-w-tab=carportsKleur]')).attr('prev-tab',we_activeTab);
}});

//Below two blocks are for enabling next tab on input radio.
$("[name=CarportColor]").on("input", function () {
  CarportColor = getValueFromInput("CarportColor");

  nextTab = 'materiaalDak';
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
  $($('[data-w-tab=materiaalDak]')).attr('prev-tab',we_activeTab);

});

  $("[name=CarportColor]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    CarportColor = getValueFromInput("CarportColor");

    nextTab = 'materiaalDak';
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
    $($('[data-w-tab=materiaalDak]')).attr('prev-tab',we_activeTab);

    });

//Below two blocks are for enabling next tab on input radio.
$("[name=materiaalDak]").on("input", function () {
  materiaalDak = getValueFromInput("materiaalDak");

  nextTab = 'voorkant';
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
  $($('[data-w-tab=voorkant]')).attr('prev-tab',we_activeTab);
});

$("[name=materiaalDak]").parent("label.w-radio").on("click", function () {
  clickedRadioButtonValue = $("input", this).val();
  materiaalDak = getValueFromInput("materiaalDak");

  nextTab = 'voorkant';
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
  $($('[data-w-tab=voorkant]')).attr('prev-tab',we_activeTab);
});

// voorkant -> zijwandLinks
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='voorkant') {

    nextTab = 'zijwandLinks';
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
    $($('[data-w-tab=zijwandLinks]')).attr('prev-tab',we_activeTab);
}});

// zijwandLinks -> zijwandRechts
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='zijwandLinks') {

    nextTab = 'zijwandRechts';
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
    $($('[data-w-tab=zijwandRechts]')).attr('prev-tab',we_activeTab);
}});

// zijwandRechts -> LEDverlichting
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='zijwandRechts') {

    nextTab = 'LEDverlichting';
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
    $($('[data-w-tab=LEDverlichting]')).attr('prev-tab',we_activeTab);
}});

// LEDverlichting -> Gegevens
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='LEDverlichting') {

    nextTab = 'Gegevens';
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
    $($('[data-w-tab=Gegevens]')).attr('prev-tab',we_activeTab);
}});

//if active tab is Gegevens, open next tab summary and set previous tab to Gegevens.
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='Gegevens') {
    nextTab = 'summary';
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
    $($('[data-w-tab=summary]')).attr('prev-tab',we_activeTab);
}});

//verandaOptions1 -> verandaKleur
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='verandaOptions1') {
    nextTab = 'verandaKleur';
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
    $($('[data-w-tab=verandaKleur]')).attr('prev-tab',we_activeTab);
}});

//verandaKleur -> verandaMateriaalDak
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='verandaKleur') {
    nextTab = 'verandaMateriaalDak';
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
    $($('[data-w-tab=verandaMateriaalDak]')).attr('prev-tab',we_activeTab);
}});

//verandaMateriaalDak -> verandaVoorkant
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='verandaMateriaalDak') {
    nextTab = 'verandaVoorkant';
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
    $($('[data-w-tab=verandaVoorkant]')).attr('prev-tab',we_activeTab);
}});

//verandaVoorkant -> verandaZijwandLinks
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='verandaVoorkant') {
    nextTab = 'verandaZijwandLinks';
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
    $($('[data-w-tab=verandaZijwandLinks]')).attr('prev-tab',we_activeTab);
}});

//verandaZijwandLinks -> verandaZijwandRechts
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='verandaZijwandLinks') {
    nextTab = 'verandaZijwandRechts';
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
    $($('[data-w-tab=verandaZijwandRechts]')).attr('prev-tab',we_activeTab);
}});

//verandaZijwandRechts -> verandaLEDverlichting
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='verandaZijwandRechts') {
    nextTab = 'verandaLEDverlichting';
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
    $($('[data-w-tab=verandaLEDverlichting]')).attr('prev-tab',we_activeTab);
}});

//verandaLEDverlichting -> Gegevens
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='verandaLEDverlichting') {
    nextTab = 'Gegevens';
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
    $($('[data-w-tab=Gegevens]')).attr('prev-tab',we_activeTab);
}});

//glazenSchuifwand -> Gegevens
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='glazenSchuifwand') {
    nextTab = 'Gegevens';
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
    $($('[data-w-tab=Gegevens]')).attr('prev-tab',we_activeTab);
}});

//zonweringen -> Gegevens
$('[bloc=next-tab]').on('click',function() {
  if($('.w--tab-active').attr('data-w-tab')=='zonweringen') {
    nextTab = 'Gegevens';
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
    $($('[data-w-tab=Gegevens]')).attr('prev-tab',we_activeTab);
}});

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