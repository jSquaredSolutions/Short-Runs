PrescreenArray = [
  "LF030",
  "LF052",
  "LF055",
  "LF057",
  "LF058",
  "LF059",
  "LF060",
  "LF061",
  "LF064",
  "LF065",
  "LF066",
  "LF069",
  "LF070",
  "LF071",
  "LF072",
  "LF075",
  "LF076",
  "LF077",
  "LF078",
  "LF079",
  "LF080",
  "LF084",
  "LF086",
  "LF088",
  "LF120",
  "LF121",
  "LF122",
  "LF200",
  "LF300",
  "LF301",
  "LF400",
  "LF520",
  "LF522",
  "LF620",
  "LF623",
  "LF700",
  "LF722",
  "LF723",
  "LF808",
  "LF920"
];
PrescreenArrayInt = 0;
loadingPercentage = 0;
sortedArrayPrescreen = [];

/*
  var clientContext = new SP.ClientContext(
    _spPageContextInfo.webServerRelativeUrl
  );
  sortedArrayPrescreen.filter(function(x){return x=="E1"}).length
  */

function JSOMrun() {
  var clientContext = new SP.ClientContext(
    _spPageContextInfo.webServerRelativeUrl
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle(PrescreenArray[PrescreenArrayInt]);
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
      oListItem.get_item("Failed_x0020_Code") !== "undefined" &&
      oListItem.get_item("Failed_x0020_Code") !== null
    ) {
      sortedArrayPrescreen.push(oListItem.get_item("Failed_x0020_Code").$c_1);
    }
  }
  if (PrescreenArrayInt < 39) {
    PrescreenArrayInt++;
    loadingPercentage = loadingPercentage + 2;
    $("#pertCounter").empty();
    $("#pertCounter").append(loadingPercentage +" % Complete");
    JSOMrun();
  } else {
    $("#pertCounter").empty();
    $("#RotationLoader2").hide();
    runChartwebpart();  
  }
}

function onQueryFailed0(sender, args) {
  debugger;
}

$(document).ready(function() {
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", JSOMrun);
  $('#CodeTotals').empty();
  $('#layoutsTable > tbody > tr > td').eq(0).css('width','0.95%');
});
