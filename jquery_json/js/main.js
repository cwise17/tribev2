//define an array to hold the slideshow data 
var slideshow = [];

//identify the json file to get
var datafile = "data/lemurs.json";

//preload JSON to load images
$(window).load(function(){
    //load json data file
    $.getJSON(file, function(data) { 
        //loop through data to get image paths     
        $.each(data.lemurs, function( i, obj ) {
            //preload images
            $('<img/>')[0].src = obj.image;
            console.log(obj.image);
        }); 
    });
 });

//ready function
$(function() { 

    //get file again 
    $.getJSON(datafile, function(data) { 
        //store json data in array
        slideshow = data.lemurs;
        //loop through array to get content
        $.each(slideshow, function( i, obj ) {
            $("#slides").append("<li id="+i+"><img  src="+obj.image+"><div class='text'><span class='title'>"+obj.title+"</span><span class='caption'>"+obj.caption+"</span></div></li>");
        });
    });
});
