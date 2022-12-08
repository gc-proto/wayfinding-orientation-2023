function validateElement(idLegend, idError, strErrorMsg, top) {
  elementTop = getOffsetTop(document.getElementById(idLegend))
  if (document.getElementById(idError) !=null) {
    $("#"+idError).removeClass('hidden');
  } else {
    $("#"+idLegend).append('<strong style="margin-top:10px;" class="error" id="'+idError+'"><span class="label label-danger" style="text-align: left; display:block;">'+strErrorMsg+'</span></strong>');
  }
  if (top > elementTop) {
    top = elementTop;
  }
  return top;
}

//Get top based on page height instead of parent element
const getOffsetTop = element => {
  let offsetTop = 0;
  while(element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
