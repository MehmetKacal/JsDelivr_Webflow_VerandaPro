<script>
var Webflow = Webflow || [];
Webflow.push(function () {
  var tabName = getParam('tab');
  if (!tabName) return;

  if(tabName=='carports' || tabName=='verandaOptions1'){
    nextTab = 'carportsKleur';
  } else if(tabName=='glazenSchuifwand' || tabName=='zonweringen'){
    nextTab = 'Gegevens';
  }
  
  tabList[0]=tabName;
  tabList[1]=nextTab;

  //  openTab('carports')
  tab = tabName;
  var tab_link = "a[data-w-tab=" + tab;
  tab = "div[data-w-tab=" + tab;

  $(tab).siblings().removeClass("w--tab-active");
  $(tab).addClass("w--tab-active");
  $(tab_link).siblings("a").removeClass("w--current");
  $(tab_link).addClass("w--current");
  
  $('[bloc=next-tab]').addClass('active');
  $(".w--tab-active").attr('next-tab',nextTab);
  $($('[data-w-tab='+nextTab+']')).attr('prev-tab',tabName);
  // Show summary only on tablet size or larger
  if (window.innerWidth >= 768) {
    $('.summary-wrapper').show();
  } else {
    $('.summary-wrapper').hide(); // Optional: hide it on smaller screens
  }
  //$('.summary-wrapper').show();

  function getParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
});
</script>