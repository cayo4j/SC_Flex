function startGame(completedCallback) {

    console.log('\n\n\nstartGame Loaded\n\n\n');

    var i = 0;
	var p = 0;
	var mouseXElem = $('#mouseX');
	var mouseYElem = $('#mouseY');
	var vpw = $("#vpw");
	var currentLocation = { x: 0, y: 0 };
    var canvas = $("#interactionCanvas");
    var context = canvas.get(0).getContext("2d");
	var counter = 0;

	var pencilsClicked = false;
	var pensClicked = false;
	var nailsClicked = false;
	
	var finalScore = 0;
	var seconds = 0;
	var canvasY;
	var canvasX;

    var stamping = false;
    var step1 = true;
    var step2 = false;
    var step3 = false;
    var step4 = false;
    var step5 = false;
    var step6 = false;
    var step7 = false;
    var step8 = false;
    var step9 = false; 
    var step10 = false;
    var step11 = false;
    var step12 = false;
    var step13 = false;
    var step14 = false;
    var step15 = false;
    var step16 = false;
    var step17 = false;
	
    $(document).ready(function() {
        
		var partArray = [{"name":"_ts"},{"name":"_pb"},{"name":"_rdr"},{"name":"_stkr"},{"name":"_scnr"},{"name":"_rear"}];	

        
         function isDoubleClicked(element) {

                        console.log('\n\n\nPREVENTING DOUBLE CLICK! In CSS\n\n\n');

         };

		$('canvas').mousemove(function(e){

			var mouseX = e.pageX ;//- context.canvas.offsetLeft
			var mouseY = e.pageY ;//- context.canvas.offsetTop
			var viewportWidth = $("#cuepoint-workspace").width();
			// scale mouse coordinates to canvas coordinates
			canvasX = mouseX * context.canvas.width / context.canvas.clientWidth;
			canvasY = mouseY * context.canvas.height / context.canvas.clientHeight;
			//set viewportWidth to container div width to match scaling
			

			//mouseXElem.text(canvasX);
			//mouseYElem.text(canvasY);
			//vpw.text(viewportWidth);
			

		});
		
		function instructionation(p){

			switch(p){
				case 0:
                 document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>";  
                 $('#photo').css({'background':'url(lessons/shared/images/welcome-screen.png)no-repeat'});
                 $('#photo').css({'background-size': '100%'});
                 swal({title:"", text:"Now, try signing on to the terminal."}, ()=>{
                	 terminalNumber();
                 });
                 
                 
				break;
                case 1:
                swal({title:"", text:"Now, try signing on to the terminal."}, ()=>{
                	terminalNumber();
                    });
                    break;  
				

			};
		};
		instructionation(p);

		$('canvas').on("click", function (e){
            {swal({title: "Incorrect.", text: "Please Try Again."});};
                     
                  });

		
$('canvas').css({'cursor': 'default'});
$('#hotButton').css({'cursor': 'pointer'});
//$('canvas').click(function(e){
    $('#hotButton').on("click", function (e){
            
        if (isDoubleClicked($(this))) return;
			//for debug and dev:
			console.log('\n\n\n*****\nCanvas Touch\n*****\n\n\n' + counter);
			console.log(canvasX + "\n\n\n" + canvasY);
			console.log('Image index: ' + i);
			console.log('The Part to ID is: ' + p);
		
		
		});
		

        
            
        function terminalNumber(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
            document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>Enter Pass Number\<br/>8  2  3  3";
                      $('#photo').css({'background':'url(lessons/shared/images/welcome-screen.png)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 8
                  $('#hotButton').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      	step_4();
                  });//button click        
        
                  
                  $('canvas').on("click", function (e){
                      //e.preventDefault();
                     if (isDoubleClicked($(this))) return;
                     {swal({title: "Incorrect.", text: "Press 8 on the keypad."});};
                 });//canvas click 
                  
                  
        
        };//1  

        
        
        
        
                function step_4(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
                    console.log(canvasX + "\n\n\n" + canvasY);
                    
                     //$('#hotButton').css({'left':''});
                     $('#hotButton').css({'top':'45%'});
                      $('#photo').css({'background':'url(lessons/shared/images/sign-on-enter1.png)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 2
                      $('#hotButton').on("click", function (e){
                           //e.preventDefault();
                          if (isDoubleClicked($(this))) return;
                          	step_5();
                      });//button click        
            
                      
                      $('canvas').on("click", function (e){
                          //e.preventDefault();
                         if (isDoubleClicked($(this))) return;
                         {swal({title: "Incorrect.", text: "Press 2 on the keypad."});};
                     });//canvas click 
                             
        
        };//0
        
        
        function step_5(){
            console.log('moving to next step\n\n\n\n\n\n\n');
          console.log(canvasX + "\n\n\n" + canvasY);
          
           $('#hotButton').css({'left':'70%'});
          // $('#hotButton').css({'top':'45%'});
            $('#photo').css({'background':'url(lessons/shared/images/sign-on-enter2.png)no-repeat'});
            $('#photo').css({'background-size': '100%'});

       //press 3
            $('#hotButton').on("click", function (e){
                 //e.preventDefault();
                if (isDoubleClicked($(this))) return;
                	step_6();
            });//button click        
  
            
            $('canvas').on("click", function (e){
                //e.preventDefault();
               if (isDoubleClicked($(this))) return;
               {swal({title: "Incorrect.", text: "Press 3 on the keypad."});};
           });//canvas click 
                   

};//0                   

function step_6(){
    console.log('moving to next step\n\n\n\n\n\n\n');
  console.log(canvasX + "\n\n\n" + canvasY);
  
   $('#hotButton').css({'left':'70%'});
  // $('#hotButton').css({'top':'45%'});
    $('#photo').css({'background':'url(lessons/shared/images/sign-on-enter3.png)no-repeat'});
    $('#photo').css({'background-size': '100%'});

//press 3
    $('#hotButton').on("click", function (e){
         //e.preventDefault();
        if (isDoubleClicked($(this))) return;
        	step_7();
    });//button click        

    
    $('canvas').on("click", function (e){
        //e.preventDefault();
       if (isDoubleClicked($(this))) return;
       {swal({title: "Incorrect.", text: "Press 3 on the keypad."});};
   });//canvas click 
           

};//0          
        
function step_7(){
    console.log('moving to next step\n\n\n\n\n\n\n');
  console.log(canvasX + "\n\n\n" + canvasY);
  
   $('#hotButton').css({'left':'60%'});
   $('#hotButton').css({'top':'62%'});
  $('#hotButton').css({'width':'14.5%'});
    $('#photo').css({'background':'url(lessons/shared/images/sign-on-submit.png)no-repeat'});
    $('#photo').css({'background-size': '100%'});

//press 3
    $('#hotButton').on("click", function (e){
         //e.preventDefault();
        if (isDoubleClicked($(this))) return;
        	step_8();
    });//button click        

    
    $('canvas').on("click", function (e){
        //e.preventDefault();
       if (isDoubleClicked($(this))) return;
       {swal({title: "Incorrect.", text: "Press Submit on the keypad."});};
   });//canvas click 
           

};//0                 
        
        
        function step_8(){
            console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
            $('#photo').css({'background':'url(lessons/shared/images/sign-on-submit.png)no-repeat'});
            $('#photo').css({'background-size': '100%'});      
        
            endgame();
        };
        
         
              
		function endgame(){ 
			finalScore = 3;
			swal({title: "Nice Work!", text: " That's exactly how you sign on.", type: "success"});
					// calling completion
							finalScore = getCalculatedScore();
							completedCallback(finalScore);//this ends the exercise.

		};
        
        
        
		
		function getCalculatedScore() {
			var successRatio = 1;
			
			console.log('\n\n\n\n\n\n\n****\nGET CALC SCORE FIRED\n' + successRatio + '****\n\n\n')
			return successRatio < 1 ? successRatio : 1;
			//return successRatio;

		}
										
		
    }); //document	
	
	
}; //startGame




//ES6 
export default startGame;