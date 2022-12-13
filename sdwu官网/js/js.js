function disptime( )/*动态时间函数*/
{
var time = new Date( ); 
var year = time.getFullYear();
var month = time.getMonth()+1;
var date = time.getDate();  
var hour = time.getHours( );  
var minute = time.getMinutes( );
var second = time.getSeconds( );
 if (minute < 10) 
   minute="0"+minute;
 if (second < 10) 
   second="0"+second;
 document.getElementById("time").innerHTML="现在是"+year+"年"+month+"月"+date+"日"+hour+":"+minute+":"+ second+" ";
}

function refesh(){/*间隔刷新*/ 
    timeid=setInterval("disptime()",1000);
}
function search(){/*弹出 */
	alert("抱歉，暂未开放查询功能！");
}
function change(myid,mode){/*弹出菜单*/
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){
		document.getElementById(myid).style.border="1px solid #eee";
		document.getElementById(myid).style.borderTop="none";
		document.getElementById(myid).parentNode.style.backgroundColor="#fff";
		document.getElementById(myid).parentNode.style.border="1px solid #eee";
		document.getElementById(myid).parentNode.style.borderBottom=" ";
		
	}
	else{
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
	}		
}
function jump ( )/*跳转*/
{
  window.location.href=document.myform.menu1.value; 
}
function over(i){/*选项卡 */
	tabs=document.getElementById("tab-head").children;
	tabs_con=document.getElementById("tab-body").children;
	for(var j=0;j<tabs.length;j++){
		tabs[j].className=" ";
		tabs_con[j].className=" ";
		}
	tabs[i].className="current";
	tabs_con[i].className="current";
}
function changeImg(){/*滚动图片 */
	imgsrc=document.getElementById("img").src
	m=imgsrc.substring(imgsrc.indexOf(".jpg")-1,imgsrc.indexOf(".jpg"))
	m++;
	if(m>=8) m=1;
	document.getElementById("box").style.animation="";
	document.body.scrollTop;/*不加此语句过渡效果只能执行一次 但不明白为什么加上可以反复执行*/
	document.getElementById("box").style.animation="moveA 1s";
	document.getElementById("img").src="img/"+m+".jpg"
	document.getElementById("box").style.animation="moveB 1s";
}
function qiehuan(i){/*切换图片 */
	document.getElementById("box").style.animation="";
	document.body.scrollTop;
	document.getElementById("box").style.animation="moveA 1s";
	document.getElementById("img").src="img/"+i+".jpg"
	document.getElementById("box").style.animation="moveB 1s";
}
function changeImg2(){
	imgsrc=document.getElementById("img2").src
	m=imgsrc.substring(imgsrc.indexOf(".jpg")-1,imgsrc.indexOf(".jpg"))
	m++;
	if(m>=6) m=1;
	document.getElementById("box2").style.animation="";
	document.getElementById("img2").src="img/y"+m+".jpg"
}
function qiehuan2(i){
	document.getElementById("box2").style.animation="";
	document.getElementById("img2").src="img/y"+i+".jpg"
}
function start(){timeid=setInterval("changeImg()",4000)}
function start2(){timeid=setInterval("changeImg2()",3000)}
$(document).ready(function() {/*jq选项卡 */
	$(".row2a ul:eq(1)").hide();
	$(".row2a div span:eq(0)").css({"color":"red","font-weight":"800"});
	$(".row2a div span").mouseover(function(){
		$(".row2a ul").hide();
		$(".row2a div span").css({"color":"black","font-weight":"500"});
		i=$(".row2a div span").index(this);
		$(".row2a ul").eq(i).show();
		$(this).css({"color":"red","font-weight":"800"})
	});
});
$(document).ready(function() {
	$(".row2b ul:eq(1)").hide();
	$(".row2b div span:eq(0)").css({"color":"red","font-weight":"800"});
	$(".row2b div span").mouseover(function(){
		$(".row2b ul").hide();
		$(".row2b div span").css({"color":"black","font-weight":"500"});
		i=$(".row2b div span").index(this);
		$(".row2b ul").eq(i).show();
		$(this).css({"color":"red","font-weight":"800"})
	});
});
window.onload=function(){
	refesh();
	start();
	start2();
	refresh();
}

/* form页面js */
function checkemail(){/*检查邮箱 */
	str=document.getElementById("email").value;
    if(str.length==0) return false;
    else if(str.indexOf("@",0)==-1) return false;
    else if(str.indexOf(".",0)==-1) return false;
    else return true;
}
function refresh(){/*刷新验证码 */
	str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
	a=str.split('');//分割
	str1='';
	//[0,61]随机整数
	for(m=0;m<4;m++){
	i=a.length* Math.random();
	j=Math.floor(i);
	str1+=a[j];
}
	document.getElementById("show").value=str1;
}
function veriy(){/*验证验证码 */
	input=document.getElementById("input").value;//输入验证码
	show=document.getElementById("show").value;//显示验证码
	if(input.toLowerCase()!=show.toLowerCase())
	return false;
	else
	return true;
}
function veriu(){/* 判断是否合法且返回ture or false */
	user=document.getElementById("user").value;
    if(user.length==0) 
    return false;
    else
    return true;
}
function verip(){
	pnumber=document.getElementById("pnumber").value;
	if(pnumber.length!=11)
	return false;
	else
	return true;
}
function veripw1(){
	pword=document.getElementById("pword1").value;
	if(pword.length==0)
	return false;
	else
	return true;
}
function veripw2(){
	pword1=document.getElementById("pword1").value;
	pword2=document.getElementById("pword2").value;
	if(pword1!=pword2)
	return false;
	else
	return true;
}
function veriall(){/* 点击注册整体验证 */
	var k;
	u=veriu();
	if(!u) 
	{
		document.getElementById("veriu").value="用户名不合法";
		return;
	}
	pw1=veripw1();
	if(!pw1)
	{
		document.getElementById("veripw").value="请设置密码";
		return;
	}
	pw2=veripw2();
	if(!pw2)
	{
		document.getElementById("veripw").value="两次密码输入不一致";
		return;
	}
	pn=verip();
	if(!pn)
	{
		document.getElementById("verip").value="手机号格式错误";
		return;
	}
	email=checkemail();
	if(!email)
	{
		document.getElementById("veriu").value="";
		document.getElementById("veriemail").value="邮箱地址不合法";
		return;
	}
	y=veriy();
	if(!y)
	{
		document.getElementById("veriemail").value="";
		document.getElementById("veriy").value="验证码不正确";
        return;
	}
	if(u){
		document.getElementById("veriemail").value=" ";
	}
	if(pw1){
		document.getElementById("veripw").value=" ";
	}
	if(pw2){
		document.getElementById("veripw").value=" ";
	}
	if(pn){
		document.getElementById("verip").value=" ";
	}
	if(email){
		document.getElementById("veriu").value=" ";
	}
	if(y){
		document.getElementById("veriy").value=" ";
	}
	alert("注册成功");
}
function formchecked(){ /*复选框 */
	str=document.form1.username.value+"  ";
		//单选按钮选中
		if(document.form1.myradio[0].checked)
		str+="同学,你好,你选择的性别为男<br>";
		if(document.form1.myradio[1].checked)
		str+="同学，你好，你选择的性别为女<br>";
		//复选框选中
		num=0;
		a=""
		if(document.form1.mybox[0].checked)
		{	a+="哲学  ";
			num++;}
		if(document.form1.mybox[1].checked)
		{	a+="经济学  ";
			num++;}	
		if(document.form1.mybox[2].checked)
		{	a+="法学  ";
			num++;}
		if(document.form1.mybox[3].checked)
		{	a+="教育学  ";
			num++;}	
		if(document.form1.mybox[4].checked)
		{	a+="文学  ";
			num++;}	
		if(document.form1.mybox[5].checked)
		{	a+="历史学  ";
			num++;}	
		if(document.form1.mybox[6].checked)
		{	a+="理学  ";
			num++;}	
		if(document.form1.mybox[7].checked)
		{	a+="工学  ";
			num++;}	
		if(document.form1.mybox[8].checked)
		{	a+="农学  ";
			num++;}	
		if(document.form1.mybox[9].checked)
		{	a+="医学  ";
			num++;}	
		if(document.form1.mybox[10].checked)
		{	a+="管理学  ";
			num++;}
		if(document.form1.mybox[11].checked)
		{	a+="艺术学  ";
			num++;}			
		str+="你选择了"+num+"种专业分类，分别是：<br>"+a+"<br>确认无误后请点击上方注册按钮！";
		document.getElementById("form-result").innerHTML=str;
}