function toggleMode() {
  const html = document.documentElement
   html.classList.toggle('light')
  
   // if(html.classList.contains('light')){
   // html.classList.remove('light')
 // } else {
   // html.classList.add('light')
  //}

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")){
    
    img.setAttribute("src", "./assets/profile-pic (20).png")

  } else {

    img.setAttribute("src", "./assets/profile-pic (18).png")

       }


}
