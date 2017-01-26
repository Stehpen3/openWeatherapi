// JavaScript File
$(document).ready(function(){
    $("#go").click(function(){
     $("#search").val();
     var id= $("#search").val();
        // $("go").hide();
        // alert(id)// use this to test/debug
        var url= "https://api.apixu.com/v1/current.json?key=bbb593aa599e451292b133636171201&q="
        var inputField= "#search"
        var result= url + id
        // alert(result)
        $.getJSON(result,function(response){
            // alert(response)
            console.log(response);
            $("#temperature").append(response.current.temp_f);
            $("#humdity").append(response.current.humdity);
        })
    });
});
