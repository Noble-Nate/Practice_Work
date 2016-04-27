$(document).ready(function(){

	var images = ["images/food2.jpg",
				  "images/food3.jpg",
				  "images/food4.jpg",
				  "images/food5.jpg",
				  "images/food6.jpg",
				  "images/food7.jpg"];
	var scores = [];	

	$('select#your-vote').change(function(){

		if( scores.length >= images.length ){

			alert('Game over');
			$('div#result').html( 'Average food score: ' + averageScores(scores) );
			return;

		}

		var currentScore    = $(this).val();
		var currentScoreInt = parseInt( currentScore );

		// Add score to array:
		
		var numberOfScores  = scores.length;

		console.log( scores );
		console.log( '# of times voted: ' + numberOfScores );

		$('img#image-to-vote-on').attr('src', images[ numberOfScores ] );

		scores.push( currentScoreInt );

		$(this).val('');

	});

	$('input#skip').click(function(){

		if( scores.length >= images.length ){

			alert('Game over');
			$('div#result').html( 'Average food score: ' + averageScores(scores) );
			return;

		}

		var numberOfScores  = scores.length;

		console.log( '# of times voted: ' + numberOfScores );

		$('img#image-to-vote-on').attr('src', images[ numberOfScores ] );

		scores.push( false );

		console.log( averageScores( scores ) );

		console.log( scores );

	});

	function averageScores( scores ){

		//Take in array of scores
		//Average all of the array items together EXCEPT for falses

		// console.log( 'starting an average...' );

		var total = 0;
		var sum   = 0;

		$( scores ).each(function(index, object){

			// console.log( index );
			// console.log( 'you voted: ' + object );

			if( object != false ){

				total = total + 1;
				sum   = sum + object;

			}

		});

		var average = ( sum / total );

		return average;

	}

});





