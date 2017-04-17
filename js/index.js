var wh = window.innerHeight,
	$iphone = $('.iphone'),
	$innerS1 = $('.innerS1'),
	$innerS2 = $('.innerS2'),
	$innerS3 = $('.innerS3'),
	$innerS4 = $('.innerS4'),
	$screenHat = $('.screenHat'),
	$screenA = $('.screenA'),
	$screenB = $('.screenB'),
	$screenC = $('.screenC'),
	$banner = $('#TalkTrashNewYork'),
	$subsection1=$('#sub-section1'),
	$subsection2=$('#sub-section2'),
	$subsection3=$('#sub-section3');



window.onscroll = function(){                   
    var yScrollTop = document.body.scrollTop;   

    if (yScrollTop > 47){
        $('#nav-line').css('display','block');
        $('#nav-words').css('display','none');
    } else{
        $('#nav-line').css('display','none');
        $('#nav-words').css('display','block');
    } 

    $('#TalkTrashNewYork').css('top',wh+60);
    $('#TalkTrashNewYork').css('margin-bottom','50px');

    $('#screenA-background').css('top',wh+287);
    $('#screenA-background').css('display','block');


    if(yScrollTop>wh){
      $('#myScrollspy').css('display','block');
    }else{
      $('#myScrollspy').css('display','none');
    }



}

$(document).ready(function(event){
	var myTimer;
	var yScrollTop;




	$('#nav-line-change').hover(function(){
        $('#nav-line-change').attr("src", "./image/navArrow.svg");
        }, function(){
        $('#nav-line-change').attr("src", "./image/navLine.svg");
    });
	$('#playButtonId').hover(function(){
        $('#playButtonId').attr("src", "./image/play-button-hover.svg");
        }, function(){
        $('#playButtonId').attr("src", "./image/play-button.svg");
    });




	$('#nav-line-change').click(function(){

    GOBackToTop();	
			
	});

  $('#nav-section1').click(function(){
      GoToSection1();
  });

  $('#nav-section2').click(function(){
      GoToSection2();
  });

  $('#nav-section3').click(function(){
      GoToSection3();
  });

	$('#scrollspy-section1').click(function(e){
      e.preventDefault();
      GoToSection1();
  });

  $('#scrollspy-section2').click(function(e){
      e.preventDefault();
      GoToSection2();
  });

  $('#scrollspy-section3').click(function(e){
      e.preventDefault();
      GoToSection3();
  });

		

})













// init
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
				// trigger animation by adding a css class
				.setClassToggle("#nav-words", "bounceOutUp")
				.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
				.addTo(ctrl);



// Create scene
$("section").each(function() {
  
	new ScrollMagic.Scene({
		triggerElement: this,
		 duration: '50%'       //50%
	})
	.setPin(this)
	.addTo(ctrl);
 
});

// new ScrollMagic.Scene({
//   triggerElement: $('#screenA-background'),
//   duration:'50%'
// })
// setPin(this)
// addTo(ctrl);



	// iPhone intro animation Tween
	/*
	var iphoneIntro = TweenMax.from($iphone, 1, {
		yPercent: 50,
		xPercent: 100,
		ease: Cubic.easeOut
	});
  */

// iPhone intro animation Timeline
var iphoneIntroTl = new TimelineMax();
iphoneIntroTl
	.from($iphone, 1, {yPercent: 200,xPercent: 100, ease: Power4.easeInOut})
	.to($innerS1, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0')
	.to($banner,0.2, {opacity:0, yPercent:10, scale:0.98},'-=0.1');

// iPhone back to stylesheet position
new ScrollMagic.Scene({
	duration: '100%'
})
.setTween(iphoneIntroTl)
.triggerElement($('body')[0])
.addTo(ctrl);
	







	// Animate the hat up, letter A in and fade in content of section 2
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat		
    .to($screenHat, 1, {yPercent: -50, ease: Power4.easeOut})
    .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
    .fromTo($subsection1, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
    .from($innerS2, 1, {autoAlpha: 0}, '-=0.3');

  new ScrollMagic.Scene({
    offset: wh*0.6,
    triggerElement: $('body')[0],
    duration: '80%'
  })
  //.setPin(this)
  .setTween(iphoneContentHat)
  .addIndicators()
  .addTo(ctrl);

	// Animate letter A out, letter B in and fade in content of section 3
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl
  	//.to($subsection1, 1, {yPercent: -20, autoAlpha: 0, scale: 0.8, ease: Power4.easeOut}, '0' )		
    //.to($screenA, 10, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})   //0.3  autoAlpha:0
    .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .fromTo($subsection2, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS3, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS2 h2')[0],
    // triggerElement:$('#screenA-background')[0],
    // triggerElement: $('.innerS3 h2')[0],
    duration: '80%'
  })
  //.setPin(this)
  .setTween(iphoneContent1Tl)
  .addIndicators()
  .addTo(ctrl);

	// Animate letter B out, letter C in and fade in content of section 4
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl		
    //.to($screenB, 1, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenC, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .fromTo($subsection3, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS4, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS3 h2')[0],
    duration: '80%'
  })
  //.setPin(this)
  .setTween(iphoneContent2Tl)
  .addIndicators()
  .addTo(ctrl);





function GOBackToTop(){
  var timer=setInterval(function(){
    document.body.scrollTop-=30;
    if (document.body.scrollTop==0) {
      clearInterval(timer);
    }
  },30);
}


function GoToSection1(){
    var destination=wh*1.23+287;
    var timer=setInterval(function(){
    document.body.scrollTop+=30;
    if (document.body.scrollTop>=destination) {
      clearInterval(timer);
    }
  },30);
}


function GoToSection2(){
    var destination=wh*2.7+287;
    var timer=setInterval(function(){
    document.body.scrollTop+=30;
    if (document.body.scrollTop>=destination) {
      clearInterval(timer);
    }
  },30);
}

function GoToSection3(){
    var destination=wh*4.3+287;
    var timer=setInterval(function(){
    document.body.scrollTop+=30;
    if (document.body.scrollTop>=destination) {
      clearInterval(timer);
    }
  },30);
}














































































































