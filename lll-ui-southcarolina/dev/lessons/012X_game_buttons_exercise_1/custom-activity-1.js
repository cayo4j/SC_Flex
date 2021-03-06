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
    $.getScript("lessons/64_inquiring-and-validating-draw-game-tickets-performing-inquiry-exercise/tzdragg.js", function(){

            console.log("\n\n\n\n  TZDRAGG.JS INITIALIZED \n\n\n\n");

    });


    document.getElementById("dropzone").style.display = 'none';
    document.getElementById("wrong").style.display = 'none';
    document.getElementById("keypad_button").style.display = 'none';

    //interactive button div
    //document.getElementById("button_dgi").onclick = respond;
    //run the respond function automatically:
    respond();
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

            console.log('Interaction #1');
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

        }

        if (counter == 2) {
            p++;
            console.log('Interaction #2');

            // calling completion
            finalScore = getCalculatedScore();
            completedCallback(finalScore); //this ends the exercise.


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



        if (counter == 3) {
            p++;
            //over, end
            var timeoutID;
            timeoutID = window.setTimeout(respond, 1000);
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/homescreen_total_ex.png' />";
        
            
        }




        if (counter == 4) {
            p++;
            document.getElementById("guiholder").innerHTML = "<img src='lessons/shared/images/inquiry_screen_ex20.png' />";

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
                text: "Drag the draw game ticket until it is at the top of the terminal.",
                imageUrl: "./lessons/shared/images/readerInput.jpg"
                }); 
            }else if(p == 1){
               swal({
                title: "Hint:",
                text: "Touch the OK button.",
                imageUrl: "./lessons/shared/images/okbtn.jpg"
                }); 
            };
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
       // wr.style.border = '2px dashed green';
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
            //    text: " "
            //});
            respond();




        }
        if (e.target.id == "wrong" || e.target.parentNode == "guiholder" || e.target.parentNode == "container") {
            console.log("WRONG!!!");
            swal({
                title: "Incorrect.",
                text: "Bring the ticket to the Reader."
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