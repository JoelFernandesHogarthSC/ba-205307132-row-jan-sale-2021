// JS to set banners content to dynamic content loaded from DoubleClick

// create var to provide easy access to dynamic data
var _dynamicData = dynamicContent[_feedName][0];

function setDynamicContent()
{
    // set banner copy
    frame01_copy01.innerHTML = _dynamicData.frame01_copy01;
    frame01_copy02.innerHTML = _dynamicData.frame01_copy02;
    frame02_copy01.innerHTML = _dynamicData.frame02_copy01;
    frame02_copy02.innerHTML = _dynamicData.frame02_copy02;
    frame03_copy01.innerHTML = _dynamicData.frame03_copy01
    frame03_copy02.innerHTML = _dynamicData.frame03_copy02
    frame04_copy01.innerHTML = _dynamicData.frame04_copy01
    frame04_copy02.innerHTML = _dynamicData.frame04_copy02
    
    endframe_copy01.innerHTML = _dynamicData.endframe_copy01;
    endframe_copy02.innerHTML = _dynamicData.endframe_copy02;

    copy_frame04_from.innerHTML = _dynamicData.copy_frame04_from;
    copy_frame04_currency.innerHTML = _dynamicData.copy_frame04_currency;
    copy_frame04_price.innerHTML = _dynamicData.copy_frame04_price;
    copy_frame04_pp.innerHTML = _dynamicData.copy_frame04_pp;
    copy_frame04_package.innerHTML = _dynamicData.copy_frame04_package;
    copy_frame04_ends.innerHTML = _dynamicData.copy_frame04_ends;

    // set terms copy
    terms_frame01.innerHTML = _dynamicData.terms_frame01;
    terms_frame02.innerHTML = _dynamicData.terms_frame02;
    terms_frame03.innerHTML = _dynamicData.terms_frame03;
    terms_frame04.innerHTML = _dynamicData.terms_frame04;
    
    // set cta copy
    cta_copy.innerHTML = _dynamicData.cta_copy;
   

    // set time to wait on each frame
    var arrFrameWaits = _dynamicData.frameTimes.split(",");
    if(arrFrameWaits.length === _arrFrameWaits.length)
    {
        for(var i = 0; i < _arrFrameWaits.length; i++)
        {
            _arrFrameWaits[i] = Number(arrFrameWaits[i].trim());
        }
    }

    // hide any unneeded middle frames
    if(_arrFrameWaits[1] === 0) {frame02.style.display = "none";}
    if(_arrFrameWaits[2] === 0) {frame03.style.display = "none";}


    // get copy delays for each frame
    _arrShowCopyDelays = getNumArrayData(_arrShowCopyDelays, _dynamicData.showCopyDelays);
    
    // get animType for each copy
    _arrCopyAnimTypes = getNumArrayData(_arrCopyAnimTypes, _dynamicData.copyAnimTypes);

    // create array of objects to define when to show logos
    _arrLogoBA01Frames = getBoolArrayData(_arrLogoBA01Frames, _dynamicData.logoBA01Frames);
    _arrLogoObjs.push({lofoRef:logo_ba_01, arrFrames:_arrLogoBA01Frames, ifShowing:false});

    _arrLogoBA02Frames = getBoolArrayData(_arrLogoBA02Frames, _dynamicData.logoBA02Frames);
    _arrLogoObjs.push({lofoRef:logo_ba_02, arrFrames:_arrLogoBA02Frames, ifShowing:false});

    _arrLogoPartnersFrames = getBoolArrayData(_arrLogoPartnersFrames, _dynamicData.logoPartnersFrames);
    _arrLogoObjs.push({lofoRef:logo_partners, arrFrames:_arrLogoPartnersFrames, ifShowing:false});

    _arrLogoBA01Frames = getBoolArrayData(_arrLogoBA01Frames, _dynamicData.logoExtraFrames);
    _arrLogoObjs.push({lofoRef:logo_extra, arrFrames:_arrLogoBA01Frames, ifShowing:false});


    // set dynamic exit
    _exitUrl_default = _dynamicData.Exit_URL.Url;

    // set looping props
    var arrLooping = _dynamicData.loopingProps.split(",");
    if(arrLooping.length === 3)
    {
        _totalLoops = Number(arrLooping[0].trim());
        _endFrameDelay = Number(arrLooping[1].trim());
        if(arrLooping[2].trim() === "true")
        {
            _useReplayBtn = true;
        }
        else
        {
            _useReplayBtn = false;
        }
    }

    // general CSS overrides:
    if(_dynamicData.css_overrides.length > 0)
    {
        var cssOverride = _dynamicData.css_overrides;
        var head = document.head;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(cssOverride));
        head.appendChild(style);
    }

    // SET AND LOAD ALL DYNAMIC IMAGES - note due to Safari not firing onload for images with same url we need to just colled the unique images
    var _allDynamicImages = [logo_ba_01,logo_ba_02,logo_partners,logo_extra,btnReplay,frame01_icon,frame01a_img,frame01b_img,frame01_frame,frame02_img,frame03_img];

    var _arrDynamicImagePaths = [_dynamicData.img_logo_ba_01.Url, _dynamicData.img_logo_ba_02.Url, _dynamicData.img_logo_partners,_dynamicData.img_logo_extra.Url,
                                    _dynamicData.img_replayBtn.Url,_dynamicData.frame01_icon.Url,_dynamicData.frame01a_img.Url,_dynamicData.frame01b_img.Url,_dynamicData.frame01_frame.Url,_dynamicData.frame02_img.Url,_dynamicData.frame03_img.Url];

    var _allDynamicImagesUnique = [];
    var _allDynamicImagePathsUnique = [];

    for(var i = 0; i <_arrDynamicImagePaths.length; i++)
    {
        if(_allDynamicImagePathsUnique.indexOf(_arrDynamicImagePaths[i]) === -1)
        {
            if(_arrDynamicImagePaths[i] != "images/noImage.png") // as this noImage will have aleredy been loaded by html (safari gives issue if this is not checked for)
            {
                _allDynamicImagePathsUnique.push(_arrDynamicImagePaths[i]);
                _allDynamicImagesUnique.push(_allDynamicImages[i]);
            }
        }
    }

    var _numImagesLoaded = 0;
    for(var i = 0; i < _allDynamicImagesUnique.length; i++)
    {
        _allDynamicImagesUnique[i].onload = function()
        {
            _numImagesLoaded++;
            if(_numImagesLoaded === _allDynamicImagesUnique.length) // only once all images are loaded
            {
                // Start Ad
                startAd();
            }
        };
    }

    // set dynamic images
    logo_ba_01.src = _dynamicData.img_logo_ba_01.Url;
    logo_ba_02.src = _dynamicData.img_logo_ba_02.Url;
    logo_partners.src = _dynamicData.img_logo_partners.Url;
    logo_extra.src = _dynamicData.img_logo_extra.Url;
    
    btnReplay.src = _dynamicData.img_replayBtn.Url;
    frame01_icon.src = _dynamicData.frame01_icon.Url;
    frame01a_img.src = _dynamicData.frame01a_img.Url;
    frame01b_img.src = _dynamicData.frame01b_img.Url;
    frame01_frame.src = _dynamicData.frame01_frame.Url;
    frame02_img.src = _dynamicData.frame02_img.Url;
    frame03_img.src = _dynamicData.frame03_img.Url;
}

/*
* function sets the position of a dynamic element
*/
function setPosition(element, strPos)
{
    var arrPos = strPos.split(",");

    if(arrPos.length === 2)
    {
        if(isNumeric(arrPos[0]) === true && isNumeric(arrPos[1]) === true)
        {
            element.style.left = arrPos[0].trim() + "px";
            element.style.top = arrPos[1].trim() + "px";
        }
    }
}


/*
* function gets the contents of an numeric array
*/
function getNumArrayData(arrTarget, strSource)
{
    var arr = strSource.split(",");

    if(arr.length === arrTarget.length)
    {
        var valsOK = true;
        for(var i = 0 ; i < arr.length; i++)
        {
            arr[i] = Number(arr[i].trim());
        }

        if(valsOK === true)
        {
            arrTarget = arr;
        }
    }

    return arrTarget;
}


/*
* function gets the contents of an boolean array
*/
function getBoolArrayData(arrTarget, strSource)
{
    var arr = strSource.split(",");

    if(arr.length === arrTarget.length)
    {
        for(var i = 0 ; i < arr.length; i++)
        {
            if(arr[i].trim() == "true")
            {
                arr[i] = true;
            }
            else
            {
                arr[i] = false;
            }
        }
        arrTarget = arr;
    }

    return arrTarget;
}

/*
* function checks if number
*/
function isNumeric(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}


