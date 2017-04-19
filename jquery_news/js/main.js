//This script reads in data from newsapi.org and displays a list of sources in a pulldown menu

//API url to get list of news sources
var sources_url = "https://newsapi.org/v1/sources"; // this url will get all sources, there are optional parameters for category, language, and country

var articles_url = "https://newsapi.org/v1/articles?"; // this url will get all articles from a source, but you must pass a source id after the question mark

//empty array to hold list of news sources
var sources = [];

//API Key for accessing News API. Generate your own at https://newsapi.org/account
var api_key = "44b748112d284d26a23cd8c39916eaa9";
    
//ready function
$(function() { 

    //get list of sources from API 
    $.getJSON(sources_url, function(data) { 
        console.log(data);
        //store json data in array
        sources = data.sources;
        //console.log(sources);
        //loop through array to get content
        $.each(sources, function( i, obj ) {
            $("#sources").append("<option value='"+obj.id+"'>"+obj.name+"</option>");
            
        });
    //event handler for when the sources select element changes
        $("#sources").change(function() {

            //get value of selected sources
            var sel_sources = $("#sources option:selected").val();
            console.log(sel_sources);

            var articles_query = articles_url +"source="+ sel_sources+"&apiKey=" + api_key;
            alert(articles_query);
            //get the articles from selected source
            $.getJSON(articles_query, function(data) { 

                //store json data in array
                var articles = data.articles;
                console.log(articles);
                
                //clear the previous articles
                $("#articles").html("");
                
                //loop through array to get article titles and append them to an unordered list
                $.each(articles, function( i, obj ) {
                    //add each article title and link to the list
                    $("#articles").append("<li><a href='"+obj.url+"'</a>"+obj.title+"</a></li>");
                });
            });
        }); 
    });
});