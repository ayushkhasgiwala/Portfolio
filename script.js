

//for navigation bar
function myFunction()
{
      var x=document.getElementById("myTopnav");
      if (x.className==="topnav")
      {
          x.className+="responsive";
      } 
      else 
      {
          x.className="topnav";
      }
}



//for slideshow 
var slideIndex = 0;
showSlides();

function showSlides()
{
    var dots=document.getElementsByClassName("dot");
    var slides=document.getElementsByClassName("mySlides");
    var i;

    for (i=0;i<slides.length;i++) 
    {
        slides[i].style.display="none";
    }

    slideIndex++;
    
    if(slideIndex>slides.length) 
    {
        slideIndex = 1;
    }

    for (i=0;i<dots.length;i++) 
    {
        dots[i].className= dots[i].className.replace(" active_slide", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active_slide";

    setTimeout(showSlides, 4000);
}



//for read more button
function read() 
{
    var btnText=document.getElementById("readBtn");
    var moreText=document.getElementById("more");
    var dots=document.getElementById("dots");
  
    if (dots.style.display==="none") 
    {
        moreText.style.display="none";
        btnText.innerHTML="Read more";
        dots.style.display="inline";
    } 
    else 
    {
        moreText.style.display="inline";
        btnText.innerHTML="Read less";
        dots.style.display="none";
    
    }
}
