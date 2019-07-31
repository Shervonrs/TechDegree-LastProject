

$("#searchBox").on("keyup", function(){
  const input = $("#searchBox").val().toLowerCase();
  const photo =$("a[href*='photos']");
  const im= $("img[src*='photos']");

  for(let i = 0; i < photo.length; i++){
    const content= $(photo[i]).attr('data-title').toLowerCase();
    const $attr = $(im[i]).attr('alt').toLowerCase();
    if(content.indexOf(input) > -1 || $attr.indexOf(input) > -1) {
      photo[i].style.display = '';
    } else {
      photo[i].style.display = 'none';
    }
    console.log(input);
  }
});
