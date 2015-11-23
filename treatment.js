$('html').hide();

window.alsOptimizely = {};

alsOptimizely.registeredVariations = [
  {"varA": 3981, "varB": 3982},
  {"varA": 4061, "varB": 4064},
  {"varA": 4063, "varB": 4065}
];

alsOptimizely.activeVariations = {};

for (var variationsIndex = 0; variationsIndex < alsOptimizely.registeredVariations.length; variationsIndex++ ) {
  if(window.location.href.indexOf('df_id=' + alsOptimizely.registeredVariations[variationsIndex].varA) != -1) {
    alsOptimizely.activeVariations.varA = alsOptimizely.registeredVariations[variationsIndex].varA;
    alsOptimizely.activeVariations.varB = alsOptimizely.registeredVariations[variationsIndex].varB;
    break;
  }
}

if(alsOptimizely.activeVariations.varB) {
  window.location.replace("http://us.greenpeace.org/site/Donation2?df_id=" +   // Note: does not preserve URL parameters sent to original page.
    alsOptimizely.activeVariations.varB +
    "&" +
    alsOptimizely.activeVariations.varB+
    ".donation=form1");
} else {
  $('html').show();
}
