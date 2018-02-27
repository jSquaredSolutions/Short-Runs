/*
https://flow.dcri.org/sites/echo/Publications/Lists/Abstracts/Public.aspx where Current Phase = Presentation
*/


function SubmittedConcepts() {
  var clientContext = new SP.ClientContext(
    _spPageContextInfo.webServerRelativeUrl
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Concept Forms");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml("<View><RowLimit>100</RowLimit></View>");
  this.collListItem = oList.getItems(camlQuery);
  clientContext.load(collListItem)
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded0),
    Function.createDelegate(this, this.onQueryFailed0)
  );
};

function ProposalsInQueue() {
  var clientContext = new SP.ClientContext(
    _spPageContextInfo.webServerRelativeUrl
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Approved Proposals");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml("<View><RowLimit>100</RowLimit></View>");
  this.collListItem = oList.getItems(camlQuery);
  clientContext.load(collListItem)
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded1),
    Function.createDelegate(this, this.onQueryFailed1)
  );
};

function AbstractPresentations() {
  var clientContext = new SP.ClientContext(
    _spPageContextInfo.webServerRelativeUrl
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Abstract Presentations");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml("<View><RowLimit>100</RowLimit></View>");
  this.collListItem = oList.getItems(camlQuery);
  clientContext.load(collListItem)
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded2),
    Function.createDelegate(this, this.onQueryFailed2)
  );
};

function ECHOManuscripts() {
  var clientContext = new SP.ClientContext(
    _spPageContextInfo.webServerRelativeUrl
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Publications Links");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml("<View><RowLimit>100</RowLimit></View>");
  this.collListItem = oList.getItems(camlQuery);
  clientContext.load(collListItem)
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded3),
    Function.createDelegate(this, this.onQueryFailed3)
  );
};

function onQuerySucceeded0(sender, args) {
  debugger;
  $('#Echo_Ticker_Elements > tr').eq(1).children().eq(0).children('strong').empty().html("<font color='#ffffff' face='Calibri' size='5'>" + collListItem.get_count() + "</font>")
  ProposalsInQueue()
}

function onQueryFailed0(sender, args) {
  debugger;
}

function onQuerySucceeded1(sender, args) {
  debugger;
  $('#Echo_Ticker_Elements > tr').eq(1).children().eq(1).children('strong').empty().html("<font color='#ffffff' face='Calibri' size='5'>" + collListItem.get_count() + "</font>")
  ECHOManuscripts();
}

function onQueryFailed1(sender, args) {
  debugger;
}

function onQuerySucceeded2(sender, args) {
  var i = 0;
  var listItemEnumerator = collListItem.getEnumerator();
  while (listItemEnumerator.moveNext()) {
    var oListItem = listItemEnumerator.get_current();
    if (oListItem.get_item("Current_x0020_Phase") == "Presentation") {
      i++;
    }
    debugger;
  };
  $('#Echo_Ticker_Elements > tr').eq(1).children().eq(2).children('strong').empty().html("<font color='#ffffff' face='Calibri' size='5'>" + i + "</font>")
  AbstractPresentations();
}

function onQueryFailed2(sender, args) {
  debugger;
}

function onQuerySucceeded3(sender, args) {
  debugger;
  $('#Echo_Ticker_Elements > tr').eq(1).children().eq(3).children('strong').empty().html("<font color='#ffffff' face='Calibri' size='5'>" + collListItem.get_count() + "</font>")
}

function onQueryFailed3(sender, args) {
  debugger;
}

$(document).ready(function () {
  setTimeout(function () {
    SubmittedConcepts();
  }, 1000);
});