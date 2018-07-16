function GetUserDetails() {
    var url = "https://usepa.sharepoint.com/sites/OEI_Development" + "/_api/web/currentuser";
    $.ajax({
        url: url,
        headers: {
            Accept: "application/json;odata=verbose"
        },
        async: false,
        success: function (data) {
            debugger;
            var signId = data.d.Id;
            var signEmail = data.d.Email;
            var signTitle = data.d.Title;
            $('#signId').val(signId);
            $('#signEmail').val(signEmail);
            $('#signTitle').val(signTitle);

        },
        error: function (data) {
            debugger;
            alert("An error occurred. Please try again.");
        }
    });
}

$(document).ready(function () {
    $('#mainEsignContent').append(lightHtml);
});

lightHtml = '<div><div style="display:inline-flex"><input style="width:30px" value="ID"><br/>' +
    '<input value="Title"><br>' +
    '<input style="width:200px"  value="Email"><br></div></div>' +
    '<div><div style="display:inline-flex"><input style="width:30px" type="text" id="signId"><br/>' +
    '<input type="text" id="signTitle"><br>' +
    '<input type="text" style="width:200px" Id="signEmail"><br></div></div>' +
    '<div><img src="/sites/OEI_Development/esign/SiteAssets/check-mark-animated-gif-3.gif" alt="" /></div>'+
    '<input type="button" onclick="GetUserDetails()" style="margin-left:0px" value="e-Sign" />' 
