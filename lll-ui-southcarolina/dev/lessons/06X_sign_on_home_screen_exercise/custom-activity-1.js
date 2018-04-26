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
	var topLeftX_pencils = 61;
	var topLeftY_pencils = 27;
	var bottomRightX_pencils = 131;
	var bottomRightY_pencils = 82;
	
	var topLeftX_pens = 167;
	var topLeftY_pens = 22;
	var bottomRightX_pens = 232;
	var bottomRightY_pens = 80;
	
	var topLeftX_nails = 125;
	var topLeftY_nails = 86;
	var bottomRightX_nails = 189;
	var bottomRightY_nails = 144;
	
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
                 document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>Now, try signing on to the terminal.";   
				//swal({title: "", text: "Look at the items and identify each one that should NOT be used on the Touch Screen. Touch or click those items to stamp them with a red X."});
				break;
                case 1:
                swal({title:"", text:"Great job! That's exactly how you power up your terminal and sign on. I have another task for you."}, ()=>{
                        xmarksthespots();
                    });
                    break;  
				//case 2:
				//swal({title: "", text: "Find another item you should never use on the Touch Screen."});
				//break;
				//case 3:
				//swal({title: "", text: "There is one more item you should never use, can you find it?"});
				//break;

			};
		};
		instructionation(p);
		

		
$('canvas').css({'cursor': 'pointer'});
//$('canvas').click(function(e){
    $('canvas').on("click", function (e){
            
        if (isDoubleClicked($(this))) return;
			//for debug and dev:
			console.log('\n\n\n*****\nCanvas Touch\n*****\n\n\n' + counter);
			console.log(canvasX + "\n\n\n" + canvasY);
			console.log('Image index: ' + i);
			console.log('The Part to ID is: ' + p);
		
   //first action
            if(step1 == true){
                  if(canvasX > 200 && canvasY > 30 && canvasX < 276 && canvasY < 60){
                      step1 = false;
                      step2 = true;
                      signOn();
                  }else{
                      if(step1 != false){swal({title: "Incorrect.", text: "Pdtrdtj"});};
                     
                  }; 
                
            };
    
            
                          
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
		
		if(stamping == true){
            

					if(pencilsClicked != true){
	
						if (canvasX > topLeftX_pencils && canvasY > topLeftY_pencils && canvasX < bottomRightX_pencils && canvasY < bottomRightY_pencils){
							//setup is: top left X && top left Y && bottom right X && bottom right Y 
								counter++;
								p++;
								pencilsClicked = true;
								crossout();
								//swal({
									//title: "Good job!",
									 // text: "Do Not Use Pencils on the Touch Screen!"
									//},
									//function(){
									 instructionation(p);
								//});
							
						}
					};
					
					if(pensClicked != true){

						if (canvasX > topLeftX_pens && canvasY > topLeftY_pens && canvasX < bottomRightX_pens && canvasY < bottomRightY_pens){
							counter++;
							p++;
							pensClicked = true;
							crossout();
								//swal({
									//title: "Good job!",
									 // text: "Do Not Use Pens on the Touch Screen!"
									//},
									//function(){
									 instructionation(p);
								//});							
						}
					};	
						
						
					if(nailsClicked != true){
						if (canvasX > topLeftX_nails && canvasY > topLeftY_nails && canvasX < bottomRightX_nails && canvasY < bottomRightY_nails){
							counter++;
							p++;
							nailsClicked = true;
							crossout();
								//swal({
									//title: "Good job!",
									  //text: "Do Not Use Fingernails on the Touch Screen!"
									//},
									//function(){
									 instructionation(p);
									 
								//});							
						}
					};
            
            //fingertip or knuckles feedback
            if(canvasX>17 && canvasY>90 && canvasX<93 && canvasY<149){
               swal({title:"This item IS safe to use on the Touch Screen."}); 
            };
            if(canvasX>223 && canvasY>90 && canvasX<295 && canvasY<149){
               swal({title:"This item IS safe to use on the Touch Screen."}); 
            };            


			
        };//IF STAMPING

		
		
			if (counter == 3) { 
				finalScore = 3;
				swal({title: "Nicely done! You identified all of the items that are NOT safe to use with the Touch Screen.", text: " "});
						// calling completion
								finalScore = getCalculatedScore();
								completedCallback(finalScore);//this ends the exercise.

			} 			
		
		});
		

        
		function signOn(){
                    
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
            document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>Click SIGN ON.";
                      $('#photo').css({'background':'url(lessons/shared/images/screen_signOn_main.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //second action
                
                      $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step2 == true){
                      if(canvasX > 114 && canvasY > 68 && canvasX < 211 && canvasY < 107){
                          step2 = false;
                          step3 = true;
                         terminalNumber();
                      }else{
                          if(step2 != false){swal({title: "Incorrect.", text: "Press the SIGN ON button."});};
                      };  
                          
                      };
                
                  });//canvas click
        };//signon
            
        function terminalNumber(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
            document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>Enter Terminal Number\<br/>1 0 0 0 0 1 0 0";
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 1
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step3 == true){
                      if(canvasX > 165 && canvasY > 75 && canvasX < 211 && canvasY < 110){
                          step3 = false;
                          step4 = true;
                          step_4();
                      }else{
                          if(step3 != false){swal({title: "Incorrect.", text: "Press 1 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//1  

        
        
        
        
                function step_4(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
                    console.log(canvasX + "\n\n\n" + canvasY);
                    
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX1.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 0
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step4 == true){
                      if(canvasX > 186 && canvasY > 86 && canvasX < 226 && canvasY < 124){
                          step4 = false;
                          step5 = true;
                          step_5();
                      }else{
                          if(step4 != false){swal({title: "Incorrect.", text: "Press 0 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0
        
        
                  function step_5(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX10.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 0 
                 $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step5 == true){
                      if(canvasX > 186 && canvasY > 86 && canvasX < 226 && canvasY < 124){
                          step5 = false;
                          step6 = true;
                          step_6();
                      }else{
                          if(step5 != false){swal({title: "Incorrect.", text: "Press 0 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0      

        
        
                  function step_6(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX100.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 0 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step6 == true){
                      if(canvasX > 186 && canvasY > 86 && canvasX < 226 && canvasY < 124){
                          step6 = false;
                          step7 = true;
                          step_7();
                      }else{
                          if(step6 != false){swal({title: "Incorrect.", text: "Press 0 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0 
        
        
        
                    function step_7(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX1000.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 0 
                 $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step7 == true){
                      if(canvasX > 186 && canvasY > 86 && canvasX < 226 && canvasY < 124){
                          step7 = false;
                          step8 = true;
                          step_8();
                      }else{
                          if(step7 != false){swal({title: "Incorrect.", text: "Press 0 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0       
        
        
                     function step_8(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX10000.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 1 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step8 == true){
                      if(canvasX > 165 && canvasY > 75 && canvasX < 211 && canvasY < 110){
                          step8 = false;
                          step9 = true;
                          step_9();
                      }else{
                          if(step8 != false){swal({title: "Incorrect.", text: "Press 1 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0        
        
        
        
        
                      function step_9(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX100001.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 0 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step9 == true){
                      if(canvasX > 186 && canvasY > 86 && canvasX < 226 && canvasY < 124){
                          step9 = false;
                          step10 = true;
                          step_10();
                      }else{
                          if(step9 != false){swal({title: "Incorrect.", text: "Press 0 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0        
        
        
        
                      function step_10(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_number_powerupEX1000010.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 0 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step10 == true){
                      if(canvasX > 186 && canvasY > 86 && canvasX < 226 && canvasY < 124){
                          step10 = false;
                          step11 = true;
                          step_11();
                      }else{
                          if(step10 != false){swal({title: "Incorrect.", text: "Press 0 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0          
                        function step_11(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                            document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>Enter Pass Number\<br/>8  2  3  3  6";
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_password.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 8 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step11 == true){
                      if(canvasX > 180 && canvasY > 32 && canvasX < 246 && canvasY < 93){
                          step11 = false;
                          step12 = true;
                          step_12();
                      }else{
                          if(step11 != false){swal({title: "Incorrect.", text: "Press 8 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0       
        
                        function step_12(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_password1.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 2 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step12 == true){
                      if(canvasX > 189 && canvasY > 70 && canvasX < 235 && canvasY < 110){
                          step12 = false;
                          step13 = true;
                          step_13();
                      }else{
                          if(step12 != false){swal({title: "Incorrect.", text: "Press 2 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0       
                        function step_13(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_password2.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 3 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step13 == true){
                      if(canvasX > 207 && canvasY > 71 && canvasX < 257 && canvasY < 110){
                          step13 = false;
                          step14 = true;
                          step_14();
                      }else{
                          if(step13 != false){swal({title: "Incorrect.", text: "Press 3 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0        
                        function step_14(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_password3.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 3 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step14 == true){
                      if(canvasX > 207 && canvasY > 71 && canvasX < 257 && canvasY < 110){
                          step14 = false;
                          step15 = true;
                          step_15();
                      }else{
                          if(step14 != false){swal({title: "Incorrect.", text: "Press 3 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0         
                         function step_15(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
            console.log(canvasX + "\n\n\n" + canvasY);
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_password4.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press 6 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step15 == true){
                      if(canvasX > 175 && canvasY > 40 && canvasX < 256 && canvasY < 94){
                          step15 = false;
                          step16 = true;
                          step_16();
                      }else{
                          if(step15 != false){swal({title: "Incorrect.", text: "Press 6 on the keypad."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0        
                          function step_16(){
                      console.log('moving to next step\n\n\n\n\n\n\n');
                      console.log(canvasX + "\n\n\n" + canvasY);
                              
                      document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>Click the button that returns you to the Home screen.";
                              
                      $('#instructions').css({'left': '350px'});
                              $('#instructions').css({'top': '10px'});
                      $('#photo').css({'background':'url(lessons/shared/images/terminal_password5.jpg)no-repeat'});
                      $('#photo').css({'background-size': '100%'});

                 //press home button 
                  $('canvas').on("click", function (e){
                       //e.preventDefault();
                      if (isDoubleClicked($(this))) return;
                      if(step16 == true){
                      if(canvasX > 40 && canvasY > 21 && canvasX < 96 && canvasY < 56){
                          step16 = false;
                          step17 = true;
                          step_17();
                      }else{
                          if(step16 != false){swal({title: "Incorrect.", text: "Press the Home button."});};
                      };  
                          
                      };
                
                  });//canvas click        
        
        
        
        };//0         

                          function step_17(){
                      console.log('moving to next step\n\n\n\n\n\n\n')
                               document.getElementById("instructions").style.display = 'none';
                        $('#photo').css({'background':'url(lessons/shared/images/screen_home.jpg)no-repeat'});
                        $('#photo').css({'background-size': '100%'});
                              p = 1;
                instructionation(p);
                          
        
        
        
        };//0 
        
        
        function xmarksthespots(){
            $('#photo').css({'background':'url(lessons/shared/images/touchscreen-01.jpg)no-repeat'});
                        $('#photo').css({'background-size': '100%'});
            document.getElementById("instructions").style.display = 'inline';
            $('#instructions').css({'left': '10px'});
          document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS:</b><br/>Look at the items below and identify each one that should NOT be used on the Touch Screen.<br/><br/>Click those items to stamp them with a red X.";  
            stamping = true;
        }
        
        
        
		
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