function startGame(completedCallback) {

    console.log("\n\n\n startGame Loaded \n\n\n");

    var i = 0;
    var p = 0;

    //var canvas = $("#interactionCanvas");
    //var context = canvas.get(0).getContext("2d");
    var counter = 0;
    var topLeftX = 0;
    var topLeftY = 0;
    var bottomRightX = 0;
    var bottomRightY = 0;
    var finalScore = 0;
    var stateMouseDown;
    var canvasY;
    var canvasX;

    //let's use jQ to load an external js file:
    $.getScript("lessons/134_scratch-ticket-validations-validatingscratchoffs-exercise/tzdragg.js", function(){

            console.log("\n\n\n\n  TZDRAGG.JS INITIALIZED \n\n\n\n");

    });

            
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/terminal_ticket_drag.jpg' />"
            document.getElementById("ticket").style.display = 'inline';
            document.getElementById("dropzone").style.display = 'inline';
            document.getElementById("wrong").style.display = 'inline';
            document.getElementById("button_dgi").style.display = 'none';


            //DnD
            var dragtic = document.querySelectorAll("#ticket,#dropzone,#wrong");
            [].forEach.call(dragtic, function(dt) {
                dt.addEventListener('dragstart', handleDragStart, false);
                dt.addEventListener('dragenter', handleDragEnter, false);
                dt.addEventListener('dragover', handleDragOver, false);
                dt.addEventListener('dragleave', handleDragLeave, false);
                dt.addEventListener('drop', handleDrop, false);
                dt.addEventListener('dragend', handleDragEnd, false);
            });

    //interactive button div
   // document.getElementById("button_dgi").onclick = respond;
    
    //incorrect click listener
    document.getElementById("guiholder").onclick = fail;

    function fail(){
        console.log('\n\n\n  INCORRECT CLICK!!! \n\n\n');
        swal({
                title: "Sorry...",
                text: "that is not correct.  Follow the instructions to the left."
            });
    }


    function respond() {
        counter = (counter + 1);
        console.log(counter);

        

        
        
        
        if (counter == 1) {
                    p++;
            console.log('Interaction #2');
            swal({
                title: "Great Job!",
                text: " "
            });
            //change instructions
            document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS</b><br/>Now enter the Security Number, 2135, from the ticket using the numeric keypad.";
            //go back to home screen
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX1.jpg' />";
            document.getElementById("button_dgi").style.display = 'inline';
            //document.getElementById("zoomed").style.height = 'auto';
            document.getElementById("wrong").style.display = 'none';
            document.getElementById("dropzone").style.display = 'none';
            //re-render draw game inquiry button
            //
            document.getElementById("button_dgi").style.left = '705px';
            document.getElementById("button_dgi").style.top = '268px';
            document.getElementById("button_dgi").onclick = respond;


            //kill DnD
            //DnD
            var dragtic = document.querySelectorAll("#ticket,#dropzone,#wrong");
            [].forEach.call(dragtic, function(dt) {
                dt.removeEventListener('dragstart', handleDragStart, false);
                dt.removeEventListener('dragenter', handleDragEnter, false);
                dt.removeEventListener('dragover', handleDragOver, false);
                dt.removeEventListener('dragleave', handleDragLeave, false);
                dt.removeEventListener('drop', handleDrop, false);
                dt.removeEventListener('dragend', handleDragEnd, false);
            });                   

        }

        if (counter == 2) {
                   p++;
            console.log('Interaction #3');//
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX1-1.jpg' />";
            document.getElementById("button_dgi").style.left = '655px';
            document.getElementById("button_dgi").style.top = '268px';
            document.getElementById("button_dgi").onclick = respond;





        }


          if (counter == 3) {
            p++;//
              document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX1-2.jpg' />";
            document.getElementById("button_dgi").style.left = '755px';
            document.getElementById("button_dgi").style.top = '268px';
            document.getElementById("button_dgi").onclick = respond;

        }      
        
        

        
        
        
        if (counter == 4) {
            p++;//
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX1-3.jpg' />";
            document.getElementById("button_dgi").style.left = '705px';
            document.getElementById("button_dgi").style.top = '218px';
            document.getElementById("button_dgi").onclick = respond;

        }
        
        
        
                if (counter == 5) {
                    //presses SEND
            p++;//
            console.log('Interaction #5');
                    document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS</b><br/>Great! Continue validating the ticket.";
            document.getElementById("ticket").style.display = 'none';
            document.getElementById("dropzone").style.display = 'none';
            document.getElementById("wrong").style.display = 'none';
            //change screen to DGI keypad screen
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX1-4.jpg' />";
            /// respond
            document.getElementById("button_dgi").style.left = '665px';
            document.getElementById("button_dgi").style.top = '390px';
                    document.getElementById("button_dgi").style.width = '100px';
            document.getElementById("button_dgi").onclick = respond;

        }
        
        
        
                if (counter == 6) {
                    //presses OK
            p++;
            console.log('Interaction #6');
                    document.getElementById("instructions").innerHTML = "<b>INSTRUCTIONS</b><br/>Finish the process and return to Home.";
            document.getElementById("ticket").style.display = 'none';
            document.getElementById("dropzone").style.display = 'none';
            document.getElementById("wrong").style.display = 'none';
            //change screen to DGI keypad screen
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX2.jpg' />";
            /// respond
            document.getElementById("button_dgi").style.display = 'inline';
            document.getElementById("keypad_button").style.display = 'none';
            document.getElementById("button_dgi").style.left = '525px';
            document.getElementById("button_dgi").style.top = '350px';
            document.getElementById("button_dgi").onclick = respond;

        }
        
      
        
        if (counter == 7) {
//presses HOME
            p++;
            document.getElementById("button_dgi").style.left = '295px';
            document.getElementById("button_dgi").style.top = '90px';
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX3.jpg' />";
             document.getElementById("button_dgi").onclick = respond;  
            

        }
 if(counter == 8){
                    document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/scratchValEX4.jpg' />";
                
                    // calling completion
            finalScore = getCalculatedScore();
            completedCallback(finalScore); //this ends the exercise.
                
                }

    } //respond

   
    
        $('#hinter').mousedown(function(){
            console.log(p);
            //show hints
            if(p == 0){
               swal({
                title: "Hint:",
                text: "Drag the ticket to the Barcode Scanner.",
                imageUrl: "./lessons/shared/images/terminalArrowToScanner.jpg"
                }); 
            }else if(p == 1){
               swal({
                title: "Hint:",
                text: "Press 2 on the numeric keypad.",
                imageUrl: "./lessons/shared/images/btn2.jpg"
                }); 
            }else if(p == 2){
               swal({
                title: "Hint:",
                text: "Press 1 on the numeric keypad.",
                imageUrl: "./lessons/shared/images/btn1.jpg"
                }); 
            }else if(p == 3){
               swal({
                title: "Hint:",
                text: "Press 3 on the numeric keypad.",
                imageUrl: "./lessons/shared/images/btn3.jpg"
                }); 
            }else if(p == 4){
               swal({
                title: "Hint:",
                text: "Press 5 on the numeric keypad.",
                imageUrl: "./lessons/shared/images/btn5.jpg"
                }); 
            }else if(p == 5){
               swal({
                title: "Hint:",
                text: "Press the OK button.",
                imageUrl: "./lessons/shared/images/sendButton.jpg"
                });
            }else if(p == 6){
               swal({
                title: "Hint:",
                text: "Press the OK button.",
                imageUrl: "./lessons/shared/images/okButton.jpg"
                }); 
            }else if(p == 7){
               swal({
                title: "Hint:",
                text: "Press the HOME button.",
                imageUrl: "./lessons/shared/images/homeButton.jpg"
                }); 
            }
        });
  
    
    
    //drag functions:        
    function handleDragStart(e) {
        this.style.opacity = '0.0';
        console.log('\n\n\n************************** DRAG  START  ********************\n\n\n')

    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // allows user to DROP
        }
        var dz = document.getElementById("dropzone");
        //dz.style.border = '2px dashed green';
        var wr = document.getElementById("wrong");
        //wr.style.border = '2px dashed green';
        e.dataTransfer.dropEffect = 'move'; //datatransfer obj
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');

    }

    function handleDrop(e) {
        console.log("THIS IS e:", e.target.id, e.target.parentNode);
        if (e.stopPropagation) {
            e.stopPropagation(); //stop browser redirect
        }
        if (e.target.id == "dropzone") {
            console.log("CORRECT!");
            //add correct swal, increase count++
            //change image to include ticket in stacker!-no
            //swal({
            //    title: "Correct!",
            //    text: ""
            //});
            respond();




        }
        if (e.target.id == "wrong" || e.target.parentNode == "guiholder" || e.target.parentNode == "container") {
            console.log("WRONG!!!");
            swal({
                title: "Incorrect.",
                text: "Bring the ticket to the Barcode Scanner."
            });
            var dragtic = document.getElementById("ticket");
            dragtic.style.opacity = '1.0';
        }

        return false;
    }

    function handleDragEnd(e) {
        // var dragtic = document.querySelectorAll("#ticket");
        // [].forEach.call(dragtic, function(dt){
        //     dt.classList.remove('over');
        // });
        console.log('\n\n\n************************** DRAG  END  ********************\n\n\n******')
        var dz = document.getElementById("dropzone");
        dz.style.border = 'none';
        var wr = document.getElementById("wrong");
        wr.style.border = 'none';
        var dragtic = document.getElementById("ticket");
        dragtic.style.opacity = '1.0';



    }




    function getCalculatedScore() {
        var successRatio = 1;

        console.log('\n\n\n\n\n\n\n****\nGET CALC SCORE FIRED\n' + successRatio + '****\n\n\n')
        return successRatio < 1 ? successRatio : 1;
        //return successRatio;

    }




}; //startGame




//ES6 
export default startGame;