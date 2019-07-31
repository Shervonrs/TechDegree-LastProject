const notif = document.getElementById('notif');

notif.innerHTML = `
  <p class="message"><strong>Explore!</strong></p>
  <p class="notif-banner-close">x</p>
`

notif.addEventListener('click', e =>{
  const element = e.target;
  if(element.classList.contains("notif-banner-close")){
    notif.style.display="none";
  }
});

$(".form-control").on("keyup", ()=>{
  const input = $(".form-control").val().toLowerCase();
  const title = $(".card-title");
  const titleParent =title.parent().parent().parent()

  for(let i = 0; i < title.length; i++){
    const content = $(title[i]).text().toLowerCase();
    if(content.indexOf(input) > -1) {
      titleParent[i].style.display = "";
    } else {
      titleParent[i].style.display = "none";
    }
  }
})
