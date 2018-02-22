/* 

This controls the form that the PC sees after requester submission. The PC can either "Approve" the request or "Request more information". If the PC approves the request,
the IRC chair is notified, if the PC "request more information", the requester is notified to modify the request. 

 */

$(document).ready(function () {
  $.each(
    $(".ms-formtable")
    .children("tbody")
    .children(),
    function (index, value) {
      if ($(this).attr("id") != "idAttachmentsRow") {
        $(this).attr("id", "Row" + index);
      }
    }
  );
  //  $("#s4-ribbonrow").empty();

  $('input[type="text"], input[type="checkbox"], select, input[type="radio"]').prop("disabled", true);
  $('div[contenteditable="true"]').attr('contenteditable', 'false');
  $('#PCfeedback\\_6b84ff05-ac34-445b-8b34-65fe59a63611\\_\\$TextField\\_inplacerte').attr('contentEditable', 'true');

  $("#Row0 > td").empty();
  $("sideNavBox").empty();
  $("#s4-ribbonrow").append("<div></div>");
  $("#Row1 > td")
    .eq(0)
    .empty()
    .append("Recipient (Principal Investigator's Name)");
  $("#Row0 > td")
    .eq(0)
    .empty();
  $("#Row2 > td")
    .eq(0)
    .empty()
    .append("Email");
  $("#Row3 > td")
    .eq(0)
    .empty()
    .append("Phone");
  $("#Row4 > td")
    .eq(0)
    .empty()
    .append("Institution Name");
  $("#Row5 > td")
    .eq(0)
    .empty()
    .append("Institution Type");
  $("#Row6 > td")
    .eq(0)
    .empty()
    .append("Proposal Title");
  $("#Row7 > td")
    .eq(0)
    .empty()
    .append(
      "Study Rationale<br /><span style='font-size: 10px;'>Brief Background and Research Objective.</span><br/><span style='font-size: 10px;'> Provide a rationale and references, if applicable</span>"
    );
  $("#Row8 > td")
    .eq(0)
    .empty()
    .append("Study Populations");
  $("#Row9 > td")
    .eq(0)
    .empty()
    .append("Primary and Secondary Objective(s) / Endpoint(s)");
  $("#Row10 > td")
    .eq(0)
    .empty()
    .append("Other Study Design Considerations (optional)");
  $("#Row11 > td")
    .eq(0)
    .empty()
    .append("Statistical Analysis Plan");
  $("#Row12 > td")
    .eq(0)
    .empty()
    .append("Publication Plan");
  $("#Row13 > td")
    .eq(0)
    .empty()
    .append(
      "Potential Conflicts of Interest (optional)<br /><a target='_blank' href='http://www.icmje.org/recommendations/browse/roles-and-responsibilities/author-responsibilities--conflicts-of-interest.html'>ICMJE COI requirements</a>"
    );
  $("#Row14 > td")
    .eq(0)
    .empty()
    .append("Dataset access time period");
  $("#Row22 > td")
    .eq(0)
    .empty()
    .append("Project Coordinator Feedback");

  $("#Row15").hide(); // Status
  $("#Row16").hide(); // ExpeditedReview
  $("#Row17").hide(); // IRCmembers
  $("#Row18").hide(); // IRCmembers
  $("#Row19").hide(); // AssignedProjectCoordinator 
  $("#Row20").hide(); // AssignedIRCchair 
  $("#Row21").hide(); // TimeStamp
  $("#Row22").hide(); // PCfeedback

  $('[id*="toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem"]').attr(
    "value",
    "Approve"
  );


  $('[id*="toolBarTbl_RightRptControls_ctl01_ctl00_diidIOGoBack"]').parent().attr('id', 'RejectTD');
  $('#RejectTD').empty().append("<input type='button' value='Request More Information' id='rejectButton' /><input type='button' value='Cancel' id='cancelFeedback' style='display:none'/>");



  $("#cancelFeedback").click(function () {
    $("#Row22").hide();
    $('[id*="toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem"]').attr(
      "value",
      "Approve"
    );
    $('[id*="toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem"]').attr(
      "onclick",
      "GrabButtonJSFuncApproved();" + GrabButtonJavaScript
    );
    $("#cancelFeedback").hide();
    $("#rejectButton").show();
  });

  $("#rejectButton").click(function () {
    $("#Row22").show();
    $('[id*="toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem"]').attr(
      "value",
      "Submit Feedback"
    );
    $('[id*="toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem"]').attr(
      "onclick",
      "GrabButtonJSFuncRejected();" + GrabButtonJavaScript
    );
    $("#rejectButton").hide();
    $("#cancelFeedback").show();
  });

  GrabButtonJavaScript = $(
    '[id*="toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem"]'
  ).attr("onclick");
  $('[id*="toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem"]').attr(
    "onclick",
    "GrabButtonJSFuncApproved();" + GrabButtonJavaScript
  );
  GrabButtonJSFuncApproved = function () {
    $("#Status\\_313525de-2dbd-4f2b-bf3d-d6222716d6e8\\_\\$DropDownChoice").val(
      "Approved by PC"
    );
  };
  GrabButtonJSFuncRejected = function () {
    $("#Status\\_313525de-2dbd-4f2b-bf3d-d6222716d6e8\\_\\$DropDownChoice").val(
      "PC requested revise and resubmit"
    );
  };
  $('.ms-propertysheet').hide(); // removes the delete button next to the click to CV
  $('span[dir=ltr]').eq(9).children('a').attr('onclick', '').attr('target', '_blank'); // removes the onclick attr and allow with link to be opened in a new window
  $('.ms-toolbar').eq(17).hide(); // removes the footer (created by version info etc)
  setTimeout(function () {
    $('a[title=Browse]')[0].click();
  }, 500);
}); // end doc ready