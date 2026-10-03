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
						$('#blow_candle').fadeIn('slow');
					});
				}
				else{
					msgLoop(i);
				}			
			});
		}
		
		msgLoop(0);
	});

	// --- Blow Out Candles & Crackers Blast ---
	function blastCrackers() {
		var duration = 4.5 * 1000;
		var animationEnd = Date.now() + duration;
		var defaults = { startVelocity: 35, spread: 360, ticks: 70, zIndex: 99999 };

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		var interval = setInterval(function() {
			var timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			var particleCount = 60 * (timeLeft / duration);
			if (typeof confetti === 'function') {
				confetti(Object.assign({}, defaults, { particleCount: particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
				confetti(Object.assign({}, defaults, { particleCount: particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
				confetti(Object.assign({}, defaults, { particleCount: particleCount, origin: { x: 0.5, y: 0.3 }, spread: 160 }));
			}
		}, 250);
	}

	$('#blow_candle').click(function(){
		// 1. Extinguish candle flames
		$('.fuego').fadeOut('slow');
		$(this).fadeOut('slow');

		// 2. Blast of crackers & party confetti!
		blastCrackers();

		// 3. Continue to photo memories (if photos are present) or straight to Coffee Polama
		setTimeout(function(){
			if ($('#photo-memories-container img').length > 0) {
				$('#photo-memories-overlay').fadeIn('slow');
			} else {
				$('#coffee-overlay').fadeIn('slow');
			}
		}, 3200);
	});

	$('#btn-finish-photos').click(function(){
		$('#photo-memories-overlay').fadeOut('fast', function(){
			$('#coffee-overlay').fadeIn('slow');
		});
	});

	// Photo Carousel Navigation
	var photos = ['nan01.png', 'nan02.png'];
	var currentPhotoIndex = 0;

	function updatePhoto() {
		$('#current-photo').fadeOut(150, function(){
			$(this).attr('src', photos[currentPhotoIndex]).fadeIn(150);
			$('#photo-counter').text((currentPhotoIndex + 1) + ' / ' + photos.length);
		});
	}

	$('#btn-next-photo').click(function(){
		currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
		updatePhoto();
	});

	$('#btn-prev-photo').click(function(){
		currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
		updatePhoto();
	});

	// --- Coffee Proposal & Date Picker Logic ---
	var yesScale = 1.0;
	var noCount = 0;
	var noTexts = [
		"No 🥺",
		"Are you sure? 🥺",
		"Really sure? 😢",
		"Think of the coffee! ☕😭",
		"Don't break my heart 💔",
		"Look at the crying cat! 🐱😭",
		"Please say yes? 🥺",
		"Reconsider? 🥺",
		"Still no? 😭",
		"Just press YES! 🥰"
	];

	// No Button Clicked: Yes button grows bigger & shows crying cat GIF
	$('#btn-no').click(function(){
		noCount++;
		yesScale += 0.35;

		// Yes button gets bigger each time
		$('#btn-yes').css({
			'transform': 'scale(' + yesScale + ')'
		});

		// Switch to crying cat gif
		$('#coffee-cat-gif').attr('src', 'crying_cat.gif');

		// Cycle playful text
		var textIndex = Math.min(noCount, noTexts.length - 1);
		$(this).text(noTexts[textIndex]);

		// Playful little shake/movement
		var randomX = (Math.random() - 0.5) * 30;
		var randomY = (Math.random() - 0.5) * 15;
		$(this).css({
			'transform': 'translate(' + randomX + 'px, ' + randomY + 'px)'
		});
	});

	// Yes Button Clicked: Celebration & Show Date Picker
	$('#btn-yes').click(function(){
		if (typeof confetti === 'function') {
			confetti({
				particleCount: 120,
				spread: 70,
				origin: { y: 0.6 }
			});
		}

		$('#coffee-ask-stage').fadeOut('fast', function(){
			$('#coffee-date-stage').fadeIn('slow');
		});
	});

	// Initialize date picker minimum date to today
	var now = new Date();
	var yyyy = now.getFullYear();
	var mm = String(now.getMonth() + 1).padStart(2, '0');
	var dd = String(now.getDate()).padStart(2, '0');
	$('#selected-coffee-date').attr('min', yyyy + '-' + mm + '-' + dd);

	// Quick Date Select Buttons
	$('.quick-date-btn').click(function(){
		$('.quick-date-btn').removeClass('active');
		$(this).addClass('active');

		var daysVal = $(this).data('days');
		var targetDate = new Date();

		if (daysVal === 'this_weekend') {
			var dayOfWeek = targetDate.getDay();
			var daysUntilSat = (6 - dayOfWeek + 7) % 7;
			if (daysUntilSat === 0) daysUntilSat = 7;
			targetDate.setDate(targetDate.getDate() + daysUntilSat);
		} else {
			targetDate.setDate(targetDate.getDate() + parseInt(daysVal));
		}

		var tYYYY = targetDate.getFullYear();
		var tMM = String(targetDate.getMonth() + 1).padStart(2, '0');
		var tDD = String(targetDate.getDate()).padStart(2, '0');
		$('#selected-coffee-date').val(tYYYY + '-' + tMM + '-' + tDD);
	});

	// Confirm Date Clicked
	$('#btn-confirm-date').click(function(){
		var pickedDate = $('#selected-coffee-date').val();
		if (!pickedDate) {
			alert("Please select a date first! 📅☕");
			return;
		}

		var note = $('#coffee-time-note').val().trim();
		var dParts = pickedDate.split('-');
		var dObj = new Date(dParts[0], dParts[1] - 1, dParts[2]);
		var dateFormatted = dObj.toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});

		var displayText = "📅 " + dateFormatted + (note ? " (" + note + ")" : "");
		$('#confirmed-date-text').text(displayText);

		var waMsg = "Hey Jaswanth! 🥰 I'm free for coffee on " + dateFormatted + (note ? " (" + note + ")" : "") + "! ☕✨";
		var waUrl = "https://wa.me/?text=" + encodeURIComponent(waMsg);
		$('#btn-whatsapp-share').attr('href', waUrl);

		if (typeof confetti === 'function') {
			confetti({
				particleCount: 160,
				spread: 90,
				origin: { y: 0.5 }
			});
		}

		$('#coffee-date-stage').fadeOut('fast', function(){
			$('#coffee-confirm-stage').fadeIn('slow');
		});
	});
});