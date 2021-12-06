function mymul(){
  var a=document.getElementById('number').value;
  var b=document.getElementById('numbers').value;
  document.getElementById('result').innerHTML=(a*b);
}
function mydiv(){
  var a=document.getElementById('number').value;
  var b=document.getElementById('numbers').value;
  if(b==0 || a==0){
    alert("Please enter the valid numbers");
  }
  document.getElementById('result').innerHTML=(a/b);
}
