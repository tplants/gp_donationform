if(alsOptimizely.activeVariations.varB) {
  // Note: does not preserve URL parameters sent to original page.
  window.location.replace("http://us.greenpeace.org/site/Donation2?df_id=" +
    alsOptimizely.activeVariations.varB +
    "&" +
    alsOptimizely.activeVariations.varB+
    ".donation=form1");
}
