var alsOptimizely = {};

alsOptimizely.registeredVariations = [
  {"varA": 3981, "varB": 3982},
];

alsOptimizely.activeVariations = {};

for (var variationsIndex = 0; variationsIndex < alsOptimizely.registeredVariations.length; variationsIndex++ ) {
  if(window.location.href.indexOf('df_id=' + alsOptimizely.registeredVariations[variationsIndex].varA) != -1) {
    alsOptimizely.activeVariations.varA = alsOptimizely.registeredVariations[variationsIndex].varA;
    alsOptimizely.activeVariations.varB = alsOptimizely.registeredVariations[variationsIndex].varB;
    break;
  }
}
