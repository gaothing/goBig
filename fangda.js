$(function(){
	var small=$(".small")[0];
	var big=$(".big")[0];
	var flow=$(".flow")[0];
	var one=$(".one")[0];
	var two=$(".two")[0];
	var slie=$(".slie")[0];
	var ch=one.offsetHeight;
	var cw=one.offsetWidth;
	var fh=parseInt(getStyle(flow,'height'))
	var fw=parseInt(getStyle(flow,'width'))
	var th=parseInt(getStyle(two,"width")) 
	var k=th/fh
	var ss=parseInt(getStyle(small,"width"))
	big.style.width=k*ss+"px"
	console.log()
	hover(one,function(){
		flow.style.display="block";
	},function(){
		flow.style.display="none"
	})
	one.onmousemove=function(e){
		var e=e||window.event;
		var ow=e.offsetX
		var oh=e.offsetY;
		
		var top=oh-fh/2
		var left=ow-fw/2
		if(top<=0){
			top=0;
		}
		if(left<=0){
			left=0;
		}
		if(left>=cw-fw){
			left=cw-fw;
		}
		if(top>=ch-fh){
			top=ch-fh
		}
		flow.style.top=top+"px";
		flow.style.left=left+"px";
		big.style.marginLeft=-k*left+'px';
		big.style.marginTop=-k*top+'px';
	}
})