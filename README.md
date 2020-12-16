# ba-205307132-row-jan-sale-2021
 
205307132 - BA Row (Rest of the World) Jan Sale 2021 

**HOUL_Legacy Job folder:** (smb://ixll-nas.production.hogarthww.net/HOUL_Legacy/PRINT_and_DIGITAL/British Airways/Online/2020/205307132_ba_row_jan_sale_2021)
---

GIFS saved here -> smb://ixll-nas.production.hogarthww.net/HOUL_Legacy/PRINT_and_DIGITAL/British Airways/Online/2020/205307132_ba_row_jan_sale_2021/Assets/GIFS

### Campaign Information

**3 markets:** 
INDIA : 728x90, 300x250, 300x600, 970x250, 320x50 (GIFS) 
MIDDLE EAST : 728x90, 300x250, 300x600, 970x250 (HTML)
SOUTH AFRICA : 300x250, 300x600, 970x250 (HTML)


**AdServer:** DoubleClick Studio  
**Advertiser:** BritishAirways_Global_Wavemaker  (https://www.google.com/doubleclick/studio/#Advertiser:advertiserId=60091761&ownerId=9837502)
**Campaign:** [205307132_BA_ROW_Jan_Sale_2021](https://www.google.com/doubleclick/studio/#campaign:advertiserId=60091761&campaignId=60260486&ownerId=9837502)  
**Dynamic Profile:** [205307132_BA_ROW_Jan_Sale_2021](https://www.google.com/doubleclick/studio/#ContentManagement/ProfileGuides:id=10028540&pr=10587883&revision=DRAFT)  
**Feed:** [TBC](https://)


---

### Trafficking notes



---

### Creative notes

Local versions for testing and setting up copy/image/Custom CSS for new versions.
Use the querystring to set which loadDynamicContent.js file is in use.



Some notes about the template functionality:

animateText function is used on all text fields and images in the banners so their 'on' animations can set using the copyAnimTypes string as laid out below.

copyAnimTypes and showCopyDelays STRs order is as follows:

		Frame1
0  : F1a_img
1  : F1b_img
2  : F1_icon (& ampersand animation)
3  : F1_1
4  : F1_2
			
		Frame2
5  : F2_1
6  : F2_2
7  : F2_img

		Frame3
8  : F3_1
9  : F3_2
10 : F3_img

		Endframe copy "FLY BRITISH AIRWAYS" (actually called on F1 in case they need it in from start, but currently delayed using showCopyDelays
11 : Fe_1
12 : Fe_2

		Frame4
13 : F4_1
14 : F4_2
15 : F4_price

16:cta


Frame animate 'off' settings can also be overridden, using the CSS overrides. They are all set to fadeOut currently using css animation, but for example, if you
wanted F1 to animate off to top of screen you could add the following CSS:
 #frame01.animateOff {transform: translateY(-250px);transition: transform .5s 0s;opacity: 1;}

 I've set up a version of the 970x250 called ?animTest showing some of these overrides being used.

 The splitText animTypes are buggy if the text field contains childNodes :(


	animateText options:

// fly in whole from left
case 4:

// fly in whole from right
case 5:

// fly in whole from bottom
case 6:

// immediately in whole
case 12:

// fade in whole
case default: (or "f")

// cta anim (fade in and 'pulse')
case 99:

/// animations which have a slow zoom lasting the length of frameDuration after they 'on' ////

// fly in whole from left then zoom - fly off to right
case 10:

// fly in whole from left then zoom - fly off to left
case 10.5:

// fly in whole from right then zoom - fly off to left
case 11:

// fly in whole from right then zoom - fly off to right
case 11.5:

// fly in whole from top then zoom - fly off to bottom
case 13:

// fly in whole from top then zoom - fly off to top
case 13.5:

// fly in whole from bottom then zoom - fly off to top
case 14:

// fly in whole from bottom then zoom - fly off to bottom
case 14.5:


/// SPLIT TEXT ANIMATIONS //////

// flex in 'letters' from top right
case 0:

// flex in 'letters' from bottom right
case 1:

// stagger fly in 'words' from bottom
case 2:

// flicker in 'letters'
case 3:

// stagger fly in 'lines' from left
case 7:

// stagger fade in 'words'
case 8:

// stagger fly in 'lines' from bottom
case 9:



---

### QA notes
Not required as uses already QA'ed builds from *ba-205303199-b2m-tb-2020* campaign
