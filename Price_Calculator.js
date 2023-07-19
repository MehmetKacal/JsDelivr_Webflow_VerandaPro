<script data-info="hacks-body">
// on each radio button click
$('.optionImageRadioInput2').click(function(){
  // declare sum variable
  let sum;
  // if this radio button is in the materiaalDak group
  if($(this).prev().is('[name="materiaalDak"]')){
    // the sum is equal to the radio button's value
    // plus the selected voorkant group radio button
    // if no radio button is selected in the voorkant group
    // default to 0
    sum = Number($(this).prev().attr('add-value')) + (Number($('input[name="voorkant"]:checked').attr('add-value')) || 0);
  }
  else { // if this radio button is in the voorkant group
    // the sum is equal to the radio button's value
    // plus the selected materiaalDak group radio button
    // if no radio button is selected in the materiaalDak group
    // default to 0
    sum = Number($(this).prev().attr('add-value')) + (Number($('input[name="materiaalDak"]:checked').attr('add-value')) || 0);
  }
  
  // format sum e.g. 3500 to 3,500
  const formattedSum = new Intl.NumberFormat().format(sum);
  
  // display the sum
  // NB: use sum directly if not interested in formatting
  // $('.total-added-value').text(sum);
  $('.total-added-value').text(formattedSum);
  // add the radio button's value to the hidden input field
  $('.total-send-value').val(formattedSum);
});
</script>