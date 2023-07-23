// on each radio button click
$('label.optionimageradio > input[type="radio"][add-value]').click(function () {
  // declare sum variable
  let sum;
  // if this radio button is in the CarportColor group
  if($(this).is('[name="CarportColor"]')){
    // the sum is equal to the radio button's value plus the selected other radio button values, if nothing of the other radio button group(s) is selected, default to 0
    sum = Number($(this).attr('add-value')) + (Number($('input[name="materiaalDak"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="voorkant"]:checked').attr('add-value')) || 0) + (Number($('input[name="zijwandLinks"]:checked').attr('add-value')) || 0) 
    + (Number($('input[name="zijwandRechts"]:checked').attr('add-value')) || 0) + (Number($('input[name="LEDverlichting"]:checked').attr('add-value')) || 0);
  }
  else if($(this).is('[name="materiaalDak"]')){
    sum = Number($(this).attr('add-value')) + (Number($('input[name="CarportColor"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="voorkant"]:checked').attr('add-value')) || 0) + (Number($('input[name="zijwandLinks"]:checked').attr('add-value')) || 0) 
    + (Number($('input[name="zijwandRechts"]:checked').attr('add-value')) || 0) + (Number($('input[name="LEDverlichting"]:checked').attr('add-value')) || 0);
  }
  else if($(this).is('[name="voorkant"]')){
    sum = Number($(this).attr('add-value')) + (Number($('input[name="materiaalDak"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="CarportColor"]:checked').attr('add-value')) || 0) + (Number($('input[name="zijwandLinks"]:checked').attr('add-value')) || 0) 
    + (Number($('input[name="zijwandRechts"]:checked').attr('add-value')) || 0) + (Number($('input[name="LEDverlichting"]:checked').attr('add-value')) || 0);
  }
  else if($(this).is('[name="zijwandLinks"]')){
    sum = Number($(this).attr('add-value')) + (Number($('input[name="materiaalDak"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="voorkant"]:checked').attr('add-value')) || 0) + (Number($('input[name="CarportColor"]:checked').attr('add-value')) || 0) 
    + (Number($('input[name="zijwandRechts"]:checked').attr('add-value')) || 0) + (Number($('input[name="LEDverlichting"]:checked').attr('add-value')) || 0);
  }
  else if($(this).is('[name="zijwandRechts"]')){
    sum = Number($(this).attr('add-value')) + (Number($('input[name="materiaalDak"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="voorkant"]:checked').attr('add-value')) || 0) + (Number($('input[name="zijwandLinks"]:checked').attr('add-value')) || 0) 
    + (Number($('input[name="CarportColor"]:checked').attr('add-value')) || 0) + (Number($('input[name="LEDverlichting"]:checked').attr('add-value')) || 0);
  }
  else { // if this radio button is in the remaining LEDverlichting group, the sum is equal to the radio button's value plus the selected other group radio button,
    // if no radio button is selected in the other group(s), default to 0.
    sum = Number($(this).attr('add-value')) + (Number($('input[name="materiaalDak"]:checked').attr('add-value')) || 0)
    + (Number($('input[name="voorkant"]:checked').attr('add-value')) || 0) + (Number($('input[name="zijwandLinks"]:checked').attr('add-value')) || 0) 
    + (Number($('input[name="zijwandRechts"]:checked').attr('add-value')) || 0) + (Number($('input[name="CarportColor"]:checked').attr('add-value')) || 0);
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