/**
 * Created by muyuruhai on 29/07/15.
 */

var amdAnimation = (function(){
    var me = {};
    var tl = new TimelineMax({paused:true});
    var tl1 = new TimelineMax({paused:true});
    var pageAnimation = {
        page1:function(){
//                起始页
            tl.clear();
            tl1.clear();
            var amdlogo = $('.page1 .amdlogo');
            var ld = $('.page1 .ld');
            var cjlogo = $('.page1 .cjlogo');
            var btxt1 = $('.p1-btxt1');
            var page1 = $(".page1");
            var _3d = $('#p1-3dlogo');
            var _ftxt1 = $(".p1-ftxt1");
            var _ftxt2 = $(".p1-ftxt2");
            tl.to(page1,2,{alpha:1})
                .fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut},0)
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,2,{alpha:0,x:-100},{alpha:1,x:0,ease:Back.easeInOut})
                .fromTo(_ftxt1,1,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(_ftxt2,2,{alpha:0},{alpha:1,ease:Strong.easeInOut});
            tl1.fromTo(_3d,6,{y:-1000,rotationX:720},{y:0,rotationX:0,ease:Back.easeInOut})
                .fromTo(_3d,4,{rotationY:0,rotationZ:0},{rotationY:360,rotationZ:360,ease:Power0.easeNone});
            tl.restart();
            tl1.restart();

        },
        page2:function(){
//                猎人
            tl.clear();
            var amdlogo = $('.page2 .amdlogo');
            var ld = $('.page2 .ld');
            var cjlogo = $('.page2 .cjlogo');
            var btxt1 = $('.page2 .btxt1');
            var btxt2 = $('.page2 .btxt2');
            var ttxt1 = $('.page2 .ttxt1');
            var ttxt2 = $('.page2 .ttxt2');
            var bgfire = $('.page2 .bg_fire');
            var hlogo = $('.page2 .hlog1');
            var qrcode = $('.page2 .qrcode');
            var ftxt = $('.page2 .ftxt');
            var card = $('.page2 .card');
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut},0)
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(btxt2,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo([ttxt1,ttxt2],0.6,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo(hlogo,0.5,{scale:1},{scale:1.2,repeat:1,yoyo:true,ease:Strong.easeIn});
            TweenMax.fromTo(bgfire,3,{scale:0,alpha:0},{scale:1,alpha:1,ease:Back.easeInOut});
            TweenMax.fromTo(bgfire,25,{rotation:0},{rotation:360,repeat:-1,ease:Power0.easeNone,clearProps:"z-index"});
            TweenMax.fromTo(hlogo,0.5,{alpha:0,scale:3},{alpha:1,scale:1,ease:Back.easeInOut});
            TweenMax.fromTo(hlogo,25,{rotation:0},{rotation:-360,repeat:-1,ease:Power0.easeNone,clearProps:"z-index"});
            tl.restart();
        },
        page3:function(){
//                三联屏
            tl.clear();
            var amdlogo = $('.page3 .amdlogo');
            var ld = $('.page3 .ld');
            var cjlogo = $('.page3 .cjlogo');
            var btxt1 = $('.page3 .btxt1');
            var btxt2 = $('.page3 .btxt2');
            var ttxt1 = $('.page3 .ttxt1');
            var ttxt2 = $('.page3 .ttxt2');
            var qrcode = $('.page3 .qrcode');
            var ftxt = $('.page3 .ftxt');
            var card = $('.page3 .card');
            var bgimg = $('.page3 .bg_bimg');
            var s1 = $('.page3 .sight1');
            var s2 = $('.page3 .sight2');
            var s3 = $('.page3 .sight3');
            var s4 = $('.page3 .sight4');
            var s5 = $('.page3 .sight5');
            var monitor = $('.page3 .monitor');
            var product = $('.page3 .product');
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(btxt2,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo([ttxt1,ttxt2],0.6,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo(product,1,{alpha:0,rotation:0,scale:4},{alpha:1,rotation:360,scale:1})
                .fromTo(product,1,{scale:1.4},{scale:1,ease:Back.easeInOut});
            var arr = [s1,s2,s3,s4,s5];
            TweenMax.staggerFromTo(arr,1,{y:-1000*Math.random(),x:-1000,scale:3},{y:0,x:0,scale:1,ease:Elastic.easeInOut},0.3);
            TweenMax.fromTo(bgimg,4,{alpha:0},{alpha:1});
            TweenMax.fromTo(bgimg,0.4,{y:-20,x:-20},{y:0,x:0,repeat:5});
            tl.restart();
        },
        page4:function(){
//                过山车
            tl.clear();
            var amdlogo = $('.page4 .amdlogo');
            var ld = $('.page4 .ld');
            var cjlogo = $('.page4 .cjlogo');
            var btxt1 = $('.page4 .btxt1');
            var btxt2 = $('.page4 .btxt2');
            var ttxt1 = $('.page4 .ttxt1');
            var ttxt2 = $('.page4 .ttxt2');
            var qrcode = $('.page4 .qrcode');
            var ftxt = $('.page4 .ftxt');
            var card = $('.page4 .card');
            var bgimg = $('.page4 .bg_bimg');
            var bgimg1 = $('.page4 .bg_bimg1');
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(btxt2,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo([ttxt1,ttxt2],0.6,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut});
            var bgtl = new TimelineMax();
            bgtl.to(bgimg1,1,{x:-200})
                .to(bgimg1,1,{x:50})
                .to(bgimg1,1,{x:0})
                .fromTo(bgimg,4,{alpha:0,scale:3,rotation:960},{alpha:1,scale:1,rotation:0});
            tl.restart();
        },
        page5:function(){
//                狙击手
            var page = '.page5';
            tl.clear();
            var amdlogo = $(page + ' .amdlogo');
            var ld = $(page +' .ld');
            var cjlogo = $(page +' .cjlogo');
            var btxt1 = $(page +' .btxt1');
            var btxt2 = $(page +' .btxt2');
            var ttxt1 = $(page +' .ttxt1');
            var ttxt2 = $(page +' .ttxt2');
            var qrcode = $(page +' .qrcode');
            var ftxt = $(page +' .ftxt');
            var card = $(page +' .card');
            var bgimg = $(page +' .bg_bimg');
            var bgimg1 = $(page +' .bg_bimg1');
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(btxt2,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo([ttxt1,ttxt2],0.6,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut});
            TweenMax.fromTo(bgimg,10,{alpha:0},{alpha:1,clearProps:"z-index"});
            TweenMax.fromTo(bgimg1,2,{alpha:0,scale:3},{alpha:1,scale:1});
            TweenMax.fromTo(bgimg1,3,{rotationY:0},{rotationY:360,repeat:-1,ease:Power0.easeNone});
//                tl.restart();
        },
        page6:function(){
//                女神
            var page = '.page6';
            tl.clear();
            var amdlogo = $(page + ' .amdlogo');
            var ld = $(page +' .ld');
            var cjlogo = $(page +' .cjlogo');
            var btxt1 = $(page +' .btxt1');
            var btxt2 = $(page +' .btxt2');
            var ttxt1 = $(page +' .ttxt1');
            var ttxt2 = $(page +' .ttxt2');
            var qrcode = $(page +' .qrcode');
            var ftxt = $(page +' .ftxt');
            var card = $(page +' .card');
            var bgimg = $(page +' .bg_bimg');
            var bgimg1 = $(page +' .bg_bimg1');
            var overlay = $(page +' .mOverlay');
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(btxt2,0.3,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo([ttxt1,ttxt2],0.6,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut});
            TweenMax.fromTo(bgimg,3,{alpha:0},{alpha:1});
            var td = new TimelineMax();
            td.fromTo(bgimg,3,{alpha:0},{alpha:1})
                .fromTo(overlay,0.5,{alpha:0,height:0,width:1},{alpha:1,height:204,width:1})
                .fromTo(overlay,0.5,{width:1},{width:360})
                .fromTo(bgimg1,0.5,{alpha:0},{alpha:1});
            tl.restart();
        },
        page7:function(){
            var page = '.page7';
            tl.clear();
            var amdlogo = $(page + ' .amdlogo');
            var ld = $(page +' .ld');
            var cjlogo = $(page +' .cjlogo');
            var btxt1 = $(page +' .btxt1');
            var ttxt1 = $(page +' .ttxt1');
            var ttxt2 = $(page +' .ttxt2');
            var qrcode = $(page +' .qrcode');
            var ftxt = $(page +' .ftxt');
            var card = $(page +' .card');
            var bgimg = $(page +' .bg_bimg');
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,1,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo([ttxt1,ttxt2],1,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut});
            TweenMax.fromTo(bgimg,5,{alpha:0},{alpha:1});
            tl.restart();
        },
        page8:function(){
            var page = '.page8';
            tl.clear();
            var amdlogo = $(page + ' .amdlogo');
            var ld = $(page +' .ld');
            var cjlogo = $(page +' .cjlogo');
            var btxt1 = $(page +' .btxt1');
            var ttxt1 = $(page +' .ttxt1');
            var ttxt2 = $(page +' .ttxt2');
            var qrcode = $(page +' .qrcode');
            var ftxt = $(page +' .ftxt');
            var card = $(page +' .card');
            var si = $(".p8-si");
            var sm = $(".p8-sm");
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,0.6,{alpha:0,scale:3},{alpha:1,scale:1,ease:Elastic.easeInOut})
                .fromTo([ttxt1,ttxt2],0.6,{alpha:0,scale:3},{alpha:1,scale:1,ease:Elastic.easeInOut})
                .staggerFromTo(si,0.5,{alpha:0,scale:3},{alpha:1,scale:1,ease:Elastic.easeInOut},0.3)
                .to(si,0.3,{alpha:0.3})
                .to(sm,0.5,{scale:1.5,alpha:1,x:40,y:-70,ease:Elastic.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut});

            tl.restart();
        },
        page9:function(){
            var page = '.page9';
            tl.clear();
            var amdlogo = $(page + ' .amdlogo');
            var ld = $(page +' .ld');
            var cjlogo = $(page +' .cjlogo');
            var btxt1 = $(page +' .btxt1');
            var ttxt1 = $(page +' .ttxt1');
            var ttxt2 = $(page +' .ttxt2');
            var qrcode = $(page +' .qrcode');
            var ftxt = $(page +' .ftxt');
            var card = $(page +' .card');
            var bgimg1 = $(".p9-bimg1");
            var bgimg2 = $(".p9-bimg2");
            tl.fromTo(amdlogo,1,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,2,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,2,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,1,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo([ttxt1,ttxt2],1,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo([qrcode,ftxt,card],1,{alpha:0},{alpha:1,ease:Back.easeInOut});
            TweenMax.fromTo(bgimg1,5,{alpha:0},{alpha:1});
            TweenMax.fromTo(bgimg2,1,{x:-500},{x:0,ease:Back.easeInOut});
            tl.restart();
        },
        page10:function(){
            var page = '.page10';
            tl.clear();
            var amdlogo = $(page + ' .amdlogo');
            var ld = $(page +' .ld');
            var cjlogo = $(page +' .cjlogo');
            var btxt1 = $(page +' .btxt1');
            var btxt2 = $(page +' .btxt2');
            var ttxt1 = $(page +' .ttxt1');
            var qrcode = $(page +' .qrcode');
            var ftxt = $(page +' .ftxt');
            var card = $(page +' .card');
            var bgimg = $(page +' .bg_bimg');
            var p10_si = $(".p10-si");
            var ftxt1 = $(".p10-ftxt1");
            tl.fromTo(amdlogo,0.5,{y:-100},{y:0,ease:Back.easeInOut})
                .fromTo(ld,1,{alpha:0,rotation:0,scale:3},{alpha:1,rotation:720,scale:1,ease:Back.easeInOut},0)
                .fromTo(cjlogo,1,{y:-100,rotationY:0},{y:0,rotationY:720,ease:Back.easeInOut},"-=1")
                .fromTo(btxt1,0.5,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(btxt2,0.5,{alpha:0},{alpha:1,ease:Strong.easeInOut})
                .fromTo(ttxt1,1,{alpha:0},{alpha:1,ease:Back.easeInOut})
                .fromTo(ftxt1,1.5,{y:1000,alpha:0},{y:0,alpha:1})
                .fromTo(bgimg,3,{y:-1000,rotationY:980,alpha:0},{y:0,rotationY:0,alpha:1,ease:Back.easeInOut},0);
            TweenMax.staggerFromTo(p10_si,0.2,{alpha:0},{alpha:1},0.1);
            TweenMax.fromTo(p10_si,5,{rotationY:0},{rotationY:360,repeat:-1,ease:Power0.easeNone});
            tl.restart();
        }
    };
    me.play = function(pageIndex){
        if (pageAnimation['page'+pageIndex]){
            pageAnimation['page'+pageIndex]();
        }
    };
    return me;
}());