// Created by iWeb 3.0.4 local-build-20160303

function createMediaStream_id4()
{return IWCreatePhotocast("http://Terrys_MND/Photos_2009_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://Terrys_MND',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://Terrys_MND',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(185,185),new IWSize(185,35),new IWSize(218,235),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-1,1,2,183),url:'Photos_2009_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Photos_2009_files/stroke_1.png'},{rect:new IWRect(1,-1,183,2),url:'Photos_2009_files/stroke_2.png'},{rect:new IWRect(184,-1,2,2),url:'Photos_2009_files/stroke_3.png'},{rect:new IWRect(184,1,2,183),url:'Photos_2009_files/stroke_4.png'},{rect:new IWRect(184,184,2,2),url:'Photos_2009_files/stroke_5.png'},{rect:new IWRect(1,184,183,2),url:'Photos_2009_files/stroke_6.png'},{rect:new IWRect(-1,184,2,2),url:'Photos_2009_files/stroke_7.png'}],new IWSize(185,185)),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Photos_2009_files/Photos_2009Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
