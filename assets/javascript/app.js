$(document).ready(function(){

var qARR = {
    question:["What shape is the Earth?", "What is the color of the sky?", "How many fingers on 1 hand?", "What is H20?", "How many days are in a year?", "Who was the first president of the United States?"],

    q1a:["flat","cube","sphere","triangle"],
    q2a:["blue","red","green","orange"],
    q3a:["3","6","5","9"],
    q4a:["Energy drink","Carbon Dioxde","Hydrogen Monoxide","Water"],
    q5a:["3","257","356","365"],
    q6a:["George Washington","John Adams","Thomas Jefferson", "Dwayne Elizondo Mountain Dew Herbert Camacho"]

}
var ans1="";
var ans2="";
var ans3="";
var ans4="";
var ans5="";
var ans6="";

var correct = 0;
var incorrect = 0;
var unanswered  = 0;




function startCountdown(){
    var seconds = 30;
    
    var timer = setInterval(function(){

        if(seconds == 0){
            checkScore();
        }
        $("#timeLeft").text("Time Left: "+seconds);
        seconds--;
        

    }, 1000);
}


    $(".start").on("click", startTrivia);




    function startTrivia(){
        $(".start").hide();
        startCountdown();




        for(var i = 0; i<qARR.question.length; i++){
            var a = $("<h5>");

            a.addClass("question text-center");
            a.text(i+1+": "+qARR.question[i]);
            $(".jumbotron").append(a);

            var b = $("<div>");
            b.addClass("answerSection"+i);
            b.addClass("aS");
            $(".jumbotron").append(b);

            
        }
        for (var i = 0; i < 4; i++){

            var btset1 = $('<input type = "radio" name ="set1"/> val = qARR.q1a[i]');
            $(btset1).attr("info", qARR.q1a[i]);
            var btset2 = $('<input type = "radio" name ="set2"/> val = qARR.q2a[i]');
            $(btset2).attr("info", qARR.q2a[i]);
            var btset3 = $('<input type = "radio" name ="set3"/> val = qARR.q3a[i]');
            $(btset3).attr("info", qARR.q3a[i]);
            var btset4 = $('<input type = "radio" name ="set4"/> val = qARR.q4a[i]');
            $(btset4).attr("info", qARR.q4a[i]);
            var btset5 = $('<input type = "radio" name ="set5"/> val = qARR.q5a[i]');
            $(btset5).attr("info", qARR.q5a[i]);
            var btset6 = $('<input type = "radio" name ="set6"/> val = qARR.q6a[i]');
            $(btset6).attr("info", qARR.q6a[i]);
            
            

            btset1.appendTo(".answerSection0");
            $(".answerSection0").append("<span class = 'item'>"+qARR.q1a[i]+"</span>");
            btset2.appendTo(".answerSection1"); 
            $(".answerSection1").append("<span class = 'item'>"+qARR.q2a[i]+"</span>");
            btset3.appendTo(".answerSection2");
            $(".answerSection2").append("<span class = 'item'>"+qARR.q3a[i]+"</span>");
            btset4.appendTo(".answerSection3");
            $(".answerSection3").append("<span class = 'item'>"+qARR.q4a[i]+"</span>");
            btset5.appendTo(".answerSection4");
            $(".answerSection4").append("<span class = 'item'>"+qARR.q5a[i]+"</span>");
            btset6.appendTo(".answerSection5");
            $(".answerSection5").append("<span class = 'item'>"+qARR.q6a[i]+"</span>");
        }



        

        var done = $("<button>");
        done.addClass("btn btn-success submit");
        done.text("Submit");
        $(".jumbotron").append(done);


        $(".submit").on("click", checkScore);



       $(document).on("click","input", function(){
           var selection = $(this).attr('info');
           console.log(selection);
            var category = $(this).attr('name');
            console.log(category);

            if($(this).attr('name') === "set1"){
                ans1 = $(this).attr('info');
            }
            else if ($(this).attr('name') === "set2"){
                ans2 = $(this).attr('info');
            }
            else if ($(this).attr('name') === "set3"){
                ans3 = $(this).attr('info');
            }
            else if ($(this).attr('name') === "set4"){
                ans4 = $(this).attr('info');
            }
            else if ($(this).attr('name') === "set5"){
                ans5 = $(this).attr('info');
            }
            else if ($(this).attr('name') === "set6"){
                ans6 = $(this).attr('info');
            }
           // console.log(ans1, ans2, ans3, ans4, ans5, ans6);
       }) 
       
         
       

    }

    function checkScore(){

        if(ans1 === "sphere"){
            correct++;
        }
        else if (ans1 ===""){
            unanswered++;
        }
        else{
            incorrect++;
        }

        if(ans2 === "blue"){
            correct++;
        }
        else if (ans2 ===""){
            unanswered++;
        }
        else{
            incorrect++;
        }

        if(ans3 == "5"){
            correct++;
        }
        else if (ans3 ===""){
            unanswered++;
        }
        else{
            incorrect++;
        }

        if(ans4 === "Water"){
            correct++;
        }
        else if (ans4 ===""){
            unanswered++;
        }
        else{
            incorrect++;
        }

        if(ans5 == "365"){
            correct++;
        }
        else if (ans5 ===""){
            unanswered++;
        }
        else{
            incorrect++;
        }

        if(ans6 === "George Washington"){
            correct++;
        }
        else if (ans6 ===""){
            unanswered++;
        }
        else{
            incorrect++;
        }

        $(".jumbotron").empty();
        var end = $("<h3> Finished!!! </h3>");
        var cscore = $("<h4> Correct: "+correct+"</h4>");
        var iscore = $("<h4> Incorrect: "+incorrect+"</h4>");
        var uscore = $("<h4> Unanswered: "+unanswered+"</h4>");

        $(".jumbotron").append(end);
        $(".jumbotron").append(cscore);
        $(".jumbotron").append(iscore);
        $(".jumbotron").append(uscore);

        


        

    }




});