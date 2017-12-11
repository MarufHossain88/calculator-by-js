var btnElement=document.getElementById('btn');
btnElement.onclick=function () {
    var firstnamevalue=document.getElementById('firstName').value;
    var lastnamevalue=document.getElementById('lastName').value;
    var fullname=firstnamevalue+' '+lastnamevalue;
    document.getElementById('fullName').value=fullname;
};


var btnElement=document.getElementById('add');
btnElement.onclick=function () {
    var firstnumbervalue=Number(document.getElementById('firstNumber').value);
    var secondnumbervalue=Number(document.getElementById('secondNumber').value);
    var result=firstnumbervalue+secondnumbervalue;
    document.getElementById('Result').value=result;
};


var btnElement=document.getElementById('sub');
btnElement.onclick=function () {
    var firstnumbervalue=document.getElementById('firstNumber').value;
    var secondnumbervalue=document.getElementById('secondNumber').value;
    var result=firstnumbervalue-secondnumbervalue;
    document.getElementById('Result').value=result;
};


var btnElement=document.getElementById('mul');
btnElement.onclick=function () {
    var firstnumbervalue=document.getElementById('firstNumber').value;
    var secondnumbervalue=document.getElementById('secondNumber').value;
    var result=firstnumbervalue*secondnumbervalue;
    document.getElementById('Result').value=result;
};

var btnElement=document.getElementById('div');
btnElement.onclick=function () {
    var firstnumbervalue=document.getElementById('firstNumber').value;
    var secondnumbervalue=document.getElementById('secondNumber').value;
    var result=firstnumbervalue/secondnumbervalue;
    document.getElementById('Result').value=result;
};

var btnElement=document.getElementById('mod');
btnElement.onclick=function () {
    var firstnumbervalue=document.getElementById('firstNumber').value;
    var secondnumbervalue=document.getElementById('secondNumber').value;
    var result=firstnumbervalue%secondnumbervalue;
    document.getElementById('Result').value=result;
};




var btnElement=document.getElementById('Reset');
btnElement.onclick=function () {
    var firstnumbervalue= document.getElementById('firstNumber').value=" ";
    var secondnumbervalue= document.getElementById('secondNumber').value=" ";
    var resultvalue=document.getElementById('Result').value=" ";
    document.getElementById('Reset').value=reset;
};




var btnElement=document.getElementById('Reset1');
btnElement.onclick=function () {
    var firstnamevalue=document.getElementById('firstName').value=" ";
    var lastnamevalue=document.getElementById('lastName').value=" ";
    var fullname=document.getElementById('fullName').value=" ";
    document.getElementById('Reset1').value=reset;
};