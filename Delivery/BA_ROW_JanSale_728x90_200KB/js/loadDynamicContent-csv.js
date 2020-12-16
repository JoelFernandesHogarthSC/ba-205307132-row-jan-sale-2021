var devDynamicContent;

(function() {
	
	// var _feedName = "205300571_BA_B2M_Retargetting_DCO_MidFunnel_All_Sizes";
	devDynamicContent = {};
	devDynamicContent[_feedName] = [{}];
	
	try {
		Enabler.setDevDynamicContent(devDynamicContent);
	} catch (error) {
		// console.log(error)
	}

	return [devDynamicContent, _feedName];
})();

var dynContent;
function getDevDynamicContent() {
    // console.log("[ loadDynamicContent-csv] getDevDynamicContent")
    
	var parentWindow = window.parent; // console.log("[ loadDynamicContent-csv ] parentWindow >>> ",parentWindow)
	var iframe = window.frameElement; // console.log("[ loadDynamicContent-csv ] iframe >>> ",iframe)
	var iframeAdID = iframe.getAttribute('adID'); // console.log("[ loadDynamicContent-csv] iframeAdID >>>",iframeAdID)
	
	dynContent = parentWindow.setDynamic(parentWindow.csvDataObj.colName,iframeAdID); // console.log("[ loadDynamicContent-csv ] dynContent >>>",dynContent)
    
		dynContent.columnName.forEach(function(item, index, arr){  // loop through column names
			
	        devDynamicContent[_feedName][0][item] = dynContent.data[item]; // ie. devDynamicContent[_feedName][0].frame02_copy01 = "value";

	        // var regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
	        var regexImage = /([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

			if(dynContent.data[item].match(regexImage)) // if images create obj 
			{
				devDynamicContent[_feedName][0][item] = {}
				devDynamicContent[_feedName][0][item].Url = dynContent.data[item];
			}
			else
			{
				devDynamicContent[_feedName][0][item] = dynContent.data[item];
			}

		 });
}
getDevDynamicContent()