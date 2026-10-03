$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
	var vw;

	function positionBalloons() {
		vw = $(window).width() / 2;
		var isMobile = $(window).width() < 600;
		if (isMobile) {
			$('#b11').animate({top: 140, left: vw - 115}, 500);
			$('#b22').animate({top: 140, left: vw + 5}, 500);
			$('#b33').animate({top: 290, left: vw - 115}, 500);
			$('#b44').animate({top: 290, left: vw + 5}, 500);
		} else {
			$('#b11').animate({top: 220, left: vw - 240}, 500);
			$('#b22').animate({top: 220, left: vw - 80}, 500);
			$('#b33').animate({top: 220, left: vw + 80}, 500);
			$('#b44').animate({top: 220, left: vw + 240}, 500);
		}
	}

	$(window).resize(function(){
		$('#b11,#b22,#b33,#b44').stop();
		positionBalloons();
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = Math.max(10, ($(window).width() - 130) * Math.random());
		var randtop = Math.max(20, ($(window).height() - 250) * Math.random());
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = Math.max(10, ($(window).width() - 130) * Math.random());
		var randtop = Math.max(20, ($(window).height() - 250) * Math.random());
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = Math.max(10, ($(window).width() - 130) * Math.random());
		var randtop = Math.max(20, ($(window).height() - 250) * Math.random());
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = Math.max(10, ($(window).width() - 130) * Math.random());
		var randtop = Math.max(20, ($(window).height() - 250) * Math.random());
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b3').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b4').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		$('#b1,#b2,#b3,#b4').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		positionBalloons();
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var totalMsg = $('.message p').length;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1200);
				if(i == totalMsg + 1){
					$("p:nth-child("+totalMsg+")").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});
				}
				else{
					msgLoop(i);
				}			
			});
		}
		
		msgLoop(0);
	});
});




//alert('hello');