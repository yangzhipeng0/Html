function bijiao (e) {
	switch (e){
		case 1:
		aid='bianse1'
		img='lunbotu1'
			break;
		case 2:
		aid='bianse2'
		img='lunbotu2'
			break;
		case 3:
		aid='bianse3'
		img='lunbotu3'
			break;
		case 4:
		aid='bianse4'
		img='lunbotu4'
			break;
		case 5:
		aid='bianse5'
		img='lunbotu5'
			break;
		case 6:
		aid='bianse6'
			break;
		case 7:
		aid='bianse7'
			break;
		case 8:
		aid='bianse8'
			break;
		case 9:
		aid='bianse9'
			break;
		case 10:
		aid='bianse10'
			break;
		default:
		aid=aid2
			break;
	}
}
function jiancha () {
	if (i>=6) {
		i=1
	}else{
		i=i
	}
}
var i=2;
setInterval(dong ,5000 )
function dong () {
	jiancha(i)
	bijiao(i)
	document.getElementById('lunbotu1').style.display="none";
	document.getElementById('lunbotu2').style.display="none";
	document.getElementById('lunbotu3').style.display="none";
	document.getElementById('lunbotu4').style.display="none";
	document.getElementById('lunbotu5').style.display="none";
	document.getElementById(img).style.display="";
	i++;
//	console.log(i);
}
function yin(e){
	bijiao(e)
document.getElementById('yincang').style.display="none";
document.getElementById('lunbotu-box-caidan').style.background='rgb(105,101,101,.6)';
document.getElementById(aid).style.background='';
}

function bianse(e){
	bijiao(e)
	document.getElementById('yincang').style.display="";
	document.getElementById(aid).style.background='#ff6700';
//	console.log(aid)
//	console.log("鼠标移入")
    this.aid2=aid
};
//var aid=aid2=0


