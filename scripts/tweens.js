/*
Copyright (c)  2012   John King
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function Tween(name)
{
	this.name=name;
	this.title;
	this.shapes={};
	this.groups={};
	this.copy={shapes:{},groups:{}};
	this.translate={active:false,repeat:1,yoyo:false};
	this.rotate={active:false,twtime:60,repeat:1,yoyo:false};
	this.mirror={active:false,twtime:60,repeat:1,yoyo:false};
	this.linestyles={active:false,twtime:60,repeat:1,yoyo:false};
	this.linecolour={active:false,twtime:60,repeat:1,yoyo:false};
	this.fillcolour={active:false,twtime:60,repeat:1,yoyo:false};
	this.gradfill={active:false,twtime:60,repeat:1,yoyo:false};
	this.shadow={active:false,twtime:60,repeat:1,yoyo:false};
	this.ptime; //time over path from sprite.ptime;
	
	//methods
	this.setAniStage=setAniStage;
	this.copytween=copytween;
	this.drawtween=drawtween;
	this.getShape=getShape;
	this.tweenruntime=tweenruntime;
	//this.setLengths=setLengths;
	//this.setTimes=setTimes;
	//this.saveTween=saveTween;
	//this.restoreTween=restoreTween;
	//this.TweenToText=TweenToText;
	this.copy.getShape=getShape;
}

function copytween(theatre)
{
	theatre+="stage";
	var tween=new Tween("SUBTR"+(NCOUNT++));
	tween.title=this.title;
	elementShapeCopy(this.groups,tween.groups,tween.shapes,0,$(theatre));
	var shape=tween.getShape();
	shape.name="A"+shape.name;
	elementShapeCopy(this.copy.groups,tween.copy.groups,tween.copy.shapes,0,$(theatre));
	var copy=tween.getShape();
	copy.name="B"+shape.name;
	tween.translate.active=this.translate.active;
	tween.translate.twtime=this.translate.twtime;
	tween.translate.repeat=this.translate.repeat;
	tween.translate.yoyo=this.translate.yoyo;
	tween.rotate.active=this.rotate.active;
	tween.rotate.twtime=this.rotate.twtime;
	tween.rotate.repeat=this.rotate.repeat;
	tween.rotate.yoyo=this.rotate.yoyo;
	tween.mirror.active=this.mirror.active;
	tween.mirror.twtime=this.mirror.twtime;
	tween.mirror.repeat=this.mirror.repeat;
	tween.mirror.yoyo=this.mirror.yoyo;
	tween.linestyles.active=this.linestyles.active;
	tween.linestyles.twtime=this.linestyles.twtime;
	tween.linestyles.repeat=this.linestyles.repeat;
	tween.linestyles.yoyo=this.linestyles.yoyo;
	tween.linecolour.active=this.linecolour.active;
	tween.linecolour.twtime=this.linecolour.twtime;
	tween.linecolour.repeat=this.linecolour.repeat;
	tween.linecolour.yoyo=this.linecolour.yoyo;
	tween.fillcolour.active=this.fillcolour.active;
	tween.fillcolour.twtime=this.fillcolour.twtime;
	tween.fillcolour.repeat=this.fillcolour.repeat;
	tween.fillcolour.yoyo=this.fillcolour.yoyo;
	tween.gradfill.active=this.gradfill.active;
	tween.gradfill.twtime=this.gradfill.twtime;
	tween.gradfill.repeat=this.gradfill.repeat;
	tween.gradfill.yoyo=this.gradfill.yoyo;
	tween.shadow.active=this.shadow.active;
	tween.shadow.twtime=this.shadow.twtime;
	tween.shadow.repeat=this.shadow.repeat;
	tween.shadow.yoyo=this.shadow.yoyo;

	return tween;
}

function drawtween()
{
	var shape=this.getShape();
	var copy=this.copy.getShape();
	shape.draw();
	copy.draw();
	shape.Canvas.ctx.restore();
	shape.Canvas.ctx.save();
}

function savetween(tweendata)
{
	var tweenarray=tweendata.split(",");
	var filmname=tweenarray[0];
	var topname=tweenarray[1];
	var tweenname=tweenarray[2];
	if(filmname=="nofilm!!!!")
	{
		if(topname=="nosprite!!!!")
		{
			var tween=TWEENS[tweenname];
		}
		else
		{
			var toptween=TWEENS[topname];
			var tween=toptween.getTween(tweenname).tween;
		}
	}
	else
	{
		var film=FILMS[filmname];
		var toptween=film.getFlel(topname);
		var tween=toptween.getTween(tweenname).tween;
	}
	$("twbuttons").style.visibility="hidden";
	closedone();
}

function tweenruntime(mx)
{
	mx=1;
	return mx;
}