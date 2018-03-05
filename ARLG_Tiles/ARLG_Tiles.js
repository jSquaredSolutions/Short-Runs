function retrieveListItemsInclude() {
    var clientContext = new SP.ClientContext(_spPageContextInfo.siteServerRelativeUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Project List');
    var camlQuery = new SP.CamlQuery();
    if (window.location.href.search("Home-Active.aspx") == -1) {
        camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='DisplayStatus'/><Value Type='Text'>Archived Page</Value></Eq></Where><OrderBy><FieldRef Name='Acronym' Ascending='True'></FieldRef></OrderBy></Query></View>");
    } else {
        camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='DisplayStatus'/><Value Type='Text'>Active Page</Value></Eq></Where><OrderBy><FieldRef Name='Acronym' Ascending='True'></FieldRef></OrderBy></Query></View>");
    }
    this.collListItem = oList.getItems(camlQuery);
    clientContext.load(collListItem, 'Include(Id, LogoURL, DisplayStatus, StudySiteURL)');
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(
        this, this.onQueryFailed));
}; // end retrieveListItemsInclude

function onQuerySucceeded(sender, args) {
    var listItemInfo = '';
    var listItemEnumerator = collListItem.getEnumerator();

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        $('#logo_content').append('<a target="_blank" href="' + oListItem.get_item('StudySiteURL') + '"><img style="border:none;width:300px;height:75px;margin-bottom:10px;margin-right:10px" src="' +
            oListItem.get_item('LogoURL') + '" /></a>');
    }
}

function onQueryFailed(sender, args) {
    debugger;
};

$(document).ready(function () {
    $('#logo_content').empty();
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', retrieveListItemsInclude);
});