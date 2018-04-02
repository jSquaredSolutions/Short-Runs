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
};

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
    JSOMrun();
  } else {
    /*
    $("#dashboardContent").append(
      "<tr><td>I1</td><td>" +
        parseInt(
          sortedArrayPrescreen.filter(function(x) {
            return x == "I1a";
          }).length +
            sortedArrayPrescreen.filter(function(x) {
              return x == "I1b";
            }).length +
            sortedArrayPrescreen.filter(function(x) {
              return x == "I1c";
            }).length
        ) +
        "</td></tr>"
    );
    $("#dashboardContent").append(
        "<tr><td>I2</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "I2";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>I3</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "I3";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>I4</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "I4";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>I5</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "I5";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>I6</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "I6";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E1</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E1";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E2</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E2";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E3</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E3";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E4</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E4";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E5</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E5";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E6</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E6";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E7</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E7";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E8</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E8";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E9</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E9";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E10</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E10";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E11</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E11";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E12</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E12";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E13</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E13";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E14</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E14";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E15</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E15";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E16</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E16";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E17</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E17";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E18</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E18";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E19</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E19";
            }).length +
          "</td></tr>"
      );
      $("#dashboardContent").append(
        "<tr><td>E20</td><td>" +         
            sortedArrayPrescreen.filter(function(x) {
              return x == "E20";
            }).length +
          "</td></tr>"
      );
  }*/
  runChartwebpart();
}

function onQueryFailed0(sender, args) {
  debugger;
}

$(document).ready(function() {
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", JSOMrun);
});
