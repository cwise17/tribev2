  
//ready function
$(function() { 

    
    //the change method is triggered when a change happens on an element
        $("input:radio").change(function() {
            //clear the text of the results div
            $("#results").html("");
            //copy the selected radio button value to the results div
            var result = ($(this).val());
            $("#results").append("<p>"+result+"</p>"); 
        }); 
    
    //the submit method is triggered when a user clicks a submit type element or hits enter on certain elements
    
/*        $(element).submit(function() {
            //do something
        });*/ 
    
    
});