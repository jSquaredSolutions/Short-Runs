$(document).ready(function () {
    RepeatingTableObj = {TeamMembers: []} 
    $("#submit1").click(function () {
        /*  myObj = { name: "John", city: "New York" };
          myJSON = JSON.stringify(myObj);
          sessionStorage.setItem("testJSON", myJSON); */ 
          

    
          

        RepeatingTableObj.TeamMembers.push({Name: $('#GOGname').val(), Position: $('#GOGposition').val(), Agency: $('#GOGagency').val()});
        var template = "{{#TeamMembers}}<b>{{name}}</b>{{/TeamMembers}}";
        var Output = Mustache.render(template, RepeatingTableObj);
        document.getElementById('TeamMembersOutput').innerHTML = Output;
    });
});