// Created by iWeb 3.0.4 local-build-20160303

function createMediaStream_id4()
{return IWCreatePhotocast("http://Terrys_MND/Photos_2010_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://Terrys_MND',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://Terrys_MND',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(2,new IWSize(267,267),new IWSize(267,35),new IWSize(314,317),27,27,0,new IWSize(22,22)),new IWPhotoFrame([IWCreateImage('Photos_2010_files/Hardcover_bevel_01.png'),IWCreateImage('Photos_2010_files/Hardcover_bevel_02.png'),IWCreateImage('Photos_2010_files/Hardcover_bevel_03.png'),IWCreateImage('Photos_2010_files/Hardcover_bevel_06.png'),IWCreateImage('Photos_2010_files/Hardcover_bevel_09.png'),IWCreateImage('Photos_2010_files/Hardcover_bevel_08.png'),IWCreateImage('Photos_2010_files/Hardcover_bevel_07.png'),IWCreateImage('Photos_2010_files/Hardcover_bevel_04.png')],null,0,0.600000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photos_2010_files/Photos_2010Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
