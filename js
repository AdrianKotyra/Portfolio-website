
var arrow_left = document.getElementById("slider_arrow1")
var arrow_right = document.getElementById("slider_arrow2")
var slider_container = document.getElementById("img_container")
var text_slider = document.getElementById("text_scroll")



var gray_img1 = document.getElementById("img1_gray")
var gray_img2 = document.getElementById("img2_gray")
var gray_img3 = document.getElementById("img3_gray")
var gray_img4 = document.getElementById("img4_gray")
var gray_img5 = document.getElementById("img5_gray")


var gray_container = document.getElementById("container_gray")
var button1_gray_slider = document.getElementById("window_settings_text_2")
var button2_gray_slider = document.getElementById("window_settings_text_3")
var button3_gray_slider = document.getElementById("window_settings_text_4")
var button4_gray_slider = document.getElementById("window_settings_text_5")





var head3 = document.getElementById("head_white3")
var head4 = document.getElementById("head_white4")
var head5 = document.getElementById("head_white5")
var head6 = document.getElementById("head_white6")
var head7 = document.getElementById("head_white7")
var head8 = document.getElementById("head_white8")
var head9 = document.getElementById("head_white9")
var imgwhite = document.getElementById("img_white")
var half2 = document.getElementById("white_half2")





nav = document.getElementById("navigation")


window.addEventListener('scroll', () =>{
const scrolled = window.scrollY;
if (window.scrollY>>0) {
  nav.style.backgroundColor="black", nav.style.animation="fadeEffect 0.7s forwards";
}
else if ((scrolled==0)) {
  nav.style.backgroundColor="", nav.style.animation="fadeoutEffect 0.7s forwards"; 
}


})




// This is scroll function

function scroll_pictures_right() {
  
  slider_container.scrollBy(700, 0)
 
  
  

  
}

function scroll_pictures_left() {
  slider_container.scrollBy(-700, 0)
  
}

 
arrow_right.addEventListener("click", scroll_pictures_right)

arrow_left.addEventListener("click", scroll_pictures_left)






button1_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="inline-block", gray_img2.style.display="none", gray_img3.style.display="none", gray_img4.style.display="none", gray_img5.style.display="none",
  button1_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button2_gray_slider.style.backgroundColor = "", button3_gray_slider.style.backgroundColor = "" 
  button4_gray_slider.style.backgroundColor = ""
  

})

button2_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="none", gray_img2.style.display="inline-block", gray_img3.style.display="none", gray_img4.style.display="none", gray_img5.style.display="none",
  button2_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button1_gray_slider.style.backgroundColor = "", button3_gray_slider.style.backgroundColor = "" 
  button4_gray_slider.style.backgroundColor = ""
})
  

button3_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="none", gray_img2.style.display="none", gray_img3.style.display="inline-block", gray_img4.style.display="none", gray_img5.style.display="none",
  button3_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button1_gray_slider.style.backgroundColor = "", button2_gray_slider.style.backgroundColor = "" 
  button4_gray_slider.style.backgroundColor = ""
})
  

button4_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="none", gray_img2.style.display="none", gray_img3.style.display="none", gray_img4.style.display="inline-block", gray_img5.style.display="none",
  button4_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button1_gray_slider.style.backgroundColor = "", button2_gray_slider.style.backgroundColor = "" 
  button3_gray_slider.style.backgroundColor = ""
})
  





// magic scroll split screen parallex
function splitscroll() { 
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    duration: '290%',
    triggerElement:'#wrapper_white',
    triggerHook:0
  })
  .setPin('#white_half1')
  .addTo(controller);


}
splitscroll()








  // document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/10.jpg\">"
  




// checking if element is visible on screen

// function isInViewport(head3) {
 
//   var rect = head3.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }






// checking if element is visible on screen

function change_img_on_scroll2() {
  
  var rect2 = head4.getBoundingClientRect();
  var rect3 = head6.getBoundingClientRect();
  var rect4 = head8.getBoundingClientRect();
  if (rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)
    )

  {
    document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/10.jpg\">"
    
  }

  if (rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  {
    document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/16.jpg\">"
  }

  if (rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  {
    document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/14.jpg\">"
    
  }





}
document.addEventListener("scroll",change_img_on_scroll2)

// checking if element is visible on screen

var checkpoint1 = document.getElementById("checkpoint1")
var middle_content = document.getElementById("two_texts")
var text_middle5 = document.getElementById("text_middle5")
function appear_elements_animation() {

  
  var rect = checkpoint1.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  ) 
   
  {
    middle_content.style.display="flex"
  }

  
  else {
    middle_content.style.display="none"
  }
  
  

}

document.addEventListener("scroll", appear_elements_animation)
  



var text_gray_all = document.getElementById("text_gray_all")
var text_gray1 = document.getElementById("text_gray1")

var top_content = document.getElementById("top_content")
var checkpoint2 = document.getElementById("checkpoint2")

function appear_elements_animation2() {

  
  var rect = checkpoint2.getBoundingClientRect();
  
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    text_gray_all.style.display="block"
  }
  else {
    
    
    
    text_gray_all.style.display="none"
  }
}
 
document.addEventListener("scroll", appear_elements_animation2)

  
  
  
  



var checkpoint3 = document.getElementById("checkpoint3")


function appear_elements_animation3() {
  var rect = checkpoint3.getBoundingClientRect()
  var text_semi_black_both = document.getElementById("text_semi_black_both")
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    text_semi_black_both.style.display="block"
  }
  else {
    
    
    
    text_semi_black_both.style.display="none"
  }
}
  
document.addEventListener("scroll", appear_elements_animation3)



var checkpoint_bottom = document.getElementById("checkpoint_bottom")
var bottom_text = document.getElementById("bottom_text")


function appear_elements_animation4() {
  var rect = checkpoint_bottom.getBoundingClientRect()
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    bottom_text.style.display="flex"
  }
  else {
    
    
    bottom_text.style.display="none"
  }
}

document.addEventListener("scroll", appear_elements_animation4)


function appear_slider(){

  var checkpoint_slider = document.getElementById("checkpoint_slider")
  var rect = checkpoint_slider.getBoundingClientRect()
  
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    slider_container.style.display="flex"
  }
  
}



document.addEventListener("scroll", appear_slider)

var nav_arrow2 = document.getElementById("nav_arrow2")
var nav_arrow1 = document.getElementById("nav_arrow1")
var middle_nav1 = document.getElementById("middle_nav1")
var middle_nav3 = document.getElementById("middle_nav3")


function arrow_animation_nav3(){
  
 
  nav_arrow2.style.transform="rotateX(180deg)"
 



}
function arrow_animation_nav4(){
  
 
  nav_arrow2.style.transform="rotateX(0deg)"
 



}


function arrow_animation_nav(){
  
 
  nav_arrow1.style.transform="rotateX(180deg)"
 



}

function arrow_animation_nav2() {
  nav_arrow1.style.transform="rotateX(0deg)" 
    
}
middle_nav1.addEventListener("mouseover",arrow_animation_nav )
middle_nav1.addEventListener("mouseout", arrow_animation_nav2)


middle_nav3.addEventListener("mouseover",arrow_animation_nav3 )
middle_nav3.addEventListener("mouseout", arrow_animation_nav4)



var extra_navigation_display_onhover = document.getElementById("extra_navigation_display_onhover")
var container_4_col = document.getElementById("container_4_col")
function appear_extra_nav() {
  extra_navigation_display_onhover.style.display="block"
  extra_nav_2.style.display="none"




}



function hide_extra_nav() {
  
  extra_navigation_display_onhover.style.display="none"
  
  
 


}



var navigation = document.getElementById("navigation")


middle_nav1.addEventListener("mouseover",appear_extra_nav )
container_4_col.addEventListener("mouseleave", hide_extra_nav )



// middle_nav3.addEventListener("mouseover",appear_extra_nav2 )



var extra_nav_2= document.getElementById("extra_nav_2")

function appear_extra_nav2() {
  extra_nav_2.style.display="block"
  extra_navigation_display_onhover.style.display="none"


}


function hide_extra_nav2() {
  
  extra_nav_2.style.display="none"
  
  
}

middle_nav3.addEventListener("mouseover",appear_extra_nav2)
extra_nav_2.addEventListener("mouseleave", hide_extra_nav2 )
