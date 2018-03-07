/* This .js file can look at the URL string and tell if it's a home.aspx page, or a archived.aspx page (line 8)
To make this funtion on a page in a content editor web part simple add the following: 
Edit page > edit web part > edit html >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="/sites/arlg/SiteAssets/ARLG_Tiles.js">
</script><div id="logo_content"></div>
​​​​​​​​​​​*/

function retrieveListItemsInclude() {
    var clientContext = new SP.ClientContext(_spPageContextInfo.siteServerRelativeUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Project List');
    var camlQuery = new SP.CamlQuery();
    // In the below CAML query we are looking the the Active Page : Catagory
    camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='DisplayStatus'/><Value Type='Text'>Active Page</Value></Eq></Where><OrderBy><FieldRef Name='Acronym' Ascending='True'></FieldRef></OrderBy></Query></View>");    
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