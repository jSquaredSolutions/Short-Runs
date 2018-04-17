/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_1ad17951dc6d4268ae1034e122896ec9(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_1ad17951dc6d4268ae1034e122896ec9.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Default_Custom.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'RefinableString00':['RefinableString00'], 'KeywordOWSTEXT':['KeywordOWSTEXT'], 'URL':['URL'], 'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'EditorOWSUSER':['EditorOWSUSER'], 'LastModifiedTime':['LastModifiedTime'], 'CollapsingStatus':['CollapsingStatus'], 'DocId':['DocId'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'KeywordOWSTEXT':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
); 
        if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
            var id = ctx.ClientControl.get_nextUniqueId();
            var itemId = id + Srch.U.Ids.item;
            var hoverId = id + Srch.U.Ids.hover;
			var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default_HoverPanel_Custom.js";
            $setResultItem(itemId, ctx.CurrentItem);
			if(ctx.CurrentItem.IsContainer){
				ctx.CurrentItem.csr_Icon = Srch.U.getFolderIconUrl();
			}
			ctx.currentItem_ShowHoverPanelCallback = Srch.U.getShowHoverPanelCallback(itemId, hoverId, hoverUrl);
            ctx.currentItem_HideHoverPanelCallback = Srch.U.getHideHoverPanelCallback();
            debugger;
ms_outHtml.push(''
,'            <div id="', $htmlEncode(itemId) ,'" style="width: 100%; display: table;" name="Item" data-displaytemplate="DefaultItem" class="ms-srch-item" onmouseover="', ctx.currentItem_ShowHoverPanelCallback ,'" onmouseout="', ctx.currentItem_HideHoverPanelCallback ,'">'
,'                <div style="display: table-row">'
,'                    <div style="display:table-cell;width:25%;max-width:25;word-wrap:break-word">', ctx.CurrentItem.Description ,'</div> <!-- title in this case is the "Name" Column in the KB list -->'
,'                    <div style="display:table-cell;width:25%;max-width:25;word-wrap:break-word">', ctx.CurrentItem.Description ,'</div>'
,'                    <div style="display:table-cell;width:25%;max-width:25;word-wrap:break-word">', ctx.CurrentItem.Description ,'</div> <!-- this is of course the path the file -->'
,'                    <div style="display:table-cell;width:25%;max-width:25;word-wrap:break-word">', ctx.CurrentItem.Description ,'</div> <!-- This is the description of the document library itself -->                                           '
,'                    <div id="', $htmlEncode(hoverId) ,'" class="ms-srch-hover-outerContainer"></div>'
,'                </div>'
,'            </div>     '
,'            '
);                    
        } 
ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_1ad17951dc6d4268ae1034e122896ec9() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Default", DisplayTemplate_1ad17951dc6d4268ae1034e122896ec9);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Default_Custom.js", DisplayTemplate_1ad17951dc6d4268ae1034e122896ec9);
}

}
RegisterTemplate_1ad17951dc6d4268ae1034e122896ec9();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Default_Custom.js"), RegisterTemplate_1ad17951dc6d4268ae1034e122896ec9);
}