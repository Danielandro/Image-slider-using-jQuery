
//declaring variables set default image to start with
sliderInt = 1;

//set next image to image2
sliderNext = 2;

$(document).ready(function(){

  //select first image & fade-in
  $('#slider > img#1').fadeIn(300);

  //run a function once document is ready
  startSlider();
});

function startSlider(){

//count number of images in this slider - declare variable
  count = $('#slider > img').length;

//declare loop variable, loops every 3 seconds (3000ms)
  loop = setInterval(function(){

    //check if slideshow has reached the last image. If so, starts back at image 1
    if(sliderNext > count){
      sliderNext = 1;
      sliderInt = 1;
    }

    //fade out all images at end of each loop
    $('#slider > img').fadeOut(300);

    //fade in next img using sliderNext variable
    $('#slider > img#' + sliderNext).fadeIn(300);

    //sliderInt is now = to sliderNext i.e 2
    sliderInt = sliderNext;

    //next slide is = to current slide + 1
    sliderNext = sliderNext + 1;

  }, 3000);
};

function prev(){

  /*find previous slide, save in the variable newSlide. functions defined in html(onclick) */
  newSlide = sliderInt - 1;

  /*make a function to execute new slide upon click*/
  showSlide(newSlide);
};

function next(){

  /*find next slide, save in the variable newSlide. functions defined in html(onclick) */
  newSlide = sliderInt + 1;

  /*make a function to execute new slide upon click*/
  showSlide(newSlide);
};

//stops loop once button is clicked
function stopLoop(){

  //clears timer with a set interval i.e clears the variable 'loop'
  window.clearInterval(loop);
}

/*create func showSlide, brackets contain variable name of info being passed into it*/
function showSlide(id){
   //stops loop once showSlide function runs - defined in function above
   stopLoop();

  /*if var id (represents next slide) is >5, returns to slide image1*/
  if(id > count){
    id = 1;

    /*if id < 1, it now loops back to the last image i.e image5*/
  }else if(id < 1){
    id = count;
  }

  $('#slider > img').fadeOut(300);
  $('#slider > img#' + id).fadeIn(300);

  sliderInt = id;
  sliderNext = id + 1;

  //starts slider again using already defined function
  startSlider();
};

//when mouse hovers over img, loop stops. Restarts when mouse moves away
$("#slider > img").hover(function(){
    stopLoop();
  },
  function(){
    startSlider();
  }
);
