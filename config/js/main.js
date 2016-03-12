(function(){
  loadOptions();
  submitHandler();
})();

function submitHandler(){
  $("#submitButton").on("click", function(){
      var return_to = getQueryParam('return_to', 'pebblejs://close#');
      document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigureData()));
  });
}

function loadOptions() {
  
  var $temperatureInput = $("#temperatureInput");
  var $celsiusCheckbox = $("#celsiusCheckbox");
  var $fahrenheitCheckbox = $("#fahrenheitCheckbox");
  var $lightLevelSliderInput = $("#lightLevelSliderInput");
  var $lightLevelValueInput = $("#lightLevelValueInput");

  if (localStorage.temperatureInput) {
    $temperatureInput[0].value = localStorage.temperatureInput;
    $celsiusCheckbox[0].checked = localStorage.celsiusCheckbox == "true";
    $fahrenheitCheckbox[0].checked = localStorage.fahrenheitCheckbox == "true";
    $lightLevelSliderInput[0].value = localStorage.lightLevelSliderInput;
    $lightLevelValueInput[0].value = localStorage.lightLevelValueInput;
  }
}

function getAndStoreConfigureData(){

  var $temperatureInput = $("#temperatureInput");
  var $celsiusCheckbox = $("#celsiusCheckbox");
  var $fahrenheitCheckbox = $("#fahrenheitCheckbox");
  var $lightLevelSliderInput = $("#lightLevelSliderInput");
  var $lightLevelValueInput = $("#lightLevelValueInput");

  var options = {
    temperatureInput: $temperatureInput.val(),
    celsiusCheckbox: $celsiusCheckbox[0].checked,
  //  fahrenheitCheckbox: $fahrenheitCheckbox[0].checked,
    lightLevelSliderInput: $lightLevelSliderInput.val(),
  };

  localStorage.temperatureInput = options.temperatureInput;
  localStorage.celsiusCheckbox = options.celsiusCheckbox;
  localStorage.fahrenheitCheckbox = $fahrenheitCheckbox[0].checked;
  localStorage.lightLevelSliderInput = options.lightLevelSliderInput;
  localStorage.lightLevelValueInput = $lightLevelValueInput.val();

  console.log("Got options " + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}