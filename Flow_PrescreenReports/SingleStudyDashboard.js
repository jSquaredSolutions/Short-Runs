/* 
This script is used to access a specific study (see line 14), unlike PrescreenDashboard.js that will
iterate over all list specified in the PrescreenArray. 
This script is not responsible for "rendering" the chart
*/

function JSOMrun() {
  var clientContext = new SP.ClientContext(
    _spPageContextInfo.webServerRelativeUrl
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("LF030"); // Add the name of the list here
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml("<View><RowLimit>4999</RowLimit></View>"); 
  this.collListItem = oList.getItems(camlQuery);
  clientContext.load(collListItem);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded0),
    Function.createDelegate(this, this.onQueryFailed0)
  );
}

function onQuerySucceeded0(sender, args) {
  var i = 0;
  var listItemEnumerator = collListItem.getEnumerator();
  while (listItemEnumerator.moveNext()) {
    var oListItem = listItemEnumerator.get_current();
    if (
      oListItem.get_item("Failed_x0020_Code") !== "undefined" && // Find out if the column Failed_x0020_Code is blank, if it is not add it to the array sortedArrayPrescreen
      oListItem.get_item("Failed_x0020_Code") !== null
    ) {
      sortedArrayPrescreen.push(oListItem.get_item("Failed_x0020_Code").$c_1);
    }
  }
};

function onQueryFailed0(sender, args) {
  debugger; // if the query fails the breakpoint will stop here and you can view what is happening in the browser dev tools
};

$(document).ready(function() {
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", JSOMrun); // don't start this script until the SP.ClientContext has loaded
  $('#CodeTotals').empty();
  $('#RotationLoader2').attr("css", { display: "block" });
  $('#layoutsTable > tbody > tr > td').eq(0).css('width','0.95%');
});
