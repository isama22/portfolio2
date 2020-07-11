console.log('hello! im working!')

// --- smooth scrolling --

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- fade in after clicking anchor tag to same page link --- 

$(document).ready(function(){
    $(".underline").click(function(){
      $(".work-links").fadeIn(3000);
    });
  });

// $(document).ready(function(){
// $(".projects").click(function(){
//     $("#projects-container").fadeIn(2000);
// });
// });

//--skills section--
$(document).ready(function(){
    $(".skill").click(function(){
      $("#show-skills").fadeIn(2000);
    });
  });