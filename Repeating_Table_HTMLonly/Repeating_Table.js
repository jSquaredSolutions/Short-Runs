$(document).ready(function () {
    RepeatingTableObj = {TeamMembers: []} 
    $("#submit1").click(function () {
        /*  myObj = { name: "John", city: "New York" };
          myJSON = JSON.stringify(myObj);
          sessionStorage.setItem("testJSON", myJSON); */ 
        RepeatingTableObj.TeamMembers.push({Name: $('#GOGname').val(), Position: $('#GOGposition').val(), Agency: $('#GOGagency').val(), ArrayLength: RepeatingTableObj.TeamMembers.length});
        var template = "{{#TeamMembers}}<div id='{{ArrayLength}}' onclick='helloWorld(this)' style='border-style:solid;border-color:gray'><ul><li>{{Name}}</li><li>{{Position}}</li><li>{{Agency}}</li></ul></div>{{/TeamMembers}}";
        var Output = Mustache.render(template, RepeatingTableObj);
        document.getElementById('TeamMembersOutput').innerHTML = Output;
    });
});

function helloWorld(elmnt){
    debugger;
    elmnt.remove();
    RepeatingTableObj.TeamMembers.splice(parseInt(elmnt.id),1);
}

