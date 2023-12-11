function f1()
{
   var a=document.getElementById("q1").value;
   var s=/^[A-Za-z]+$/;
   if(a=="")
   {
      document.getElementById("w1").innerHTML="Please fill out this field";
      return true;
   }
   else if(!s.test(a))
   {
      document.getElementById("w1").innerHTML="Please enter valid name";
      return true;
   }
   else{
      document.getElementById("w1").innerHTML="";
      return false;
   }
}
function f2()
{
   var a=document.getElementById("q2").value;
   var s=/^[A-Za-z0-9._]+@[a-z]+.[a-z]+$/;
   if(a=="")
   {
      document.getElementById("w2").innerHTML="Please fill out this field";
      return true;
   }
   else if(!s.test(a))
   {
      document.getElementById("w2").innerHTML="Please enter valid email";
      return true;
   }
   else{
      document.getElementById("w2").innerHTML="";
      return false;
   }
}
function f3()
{
   var a=document.getElementById("q3").value;
   var s=/^\d{10}$/;
   if(a=="")
   {
      document.getElementById("w3").innerHTML="Please fill out this field";
      return true;
   }
   else if(!s.test(a))
   {
      document.getElementById("w3").innerHTML="Please enter valid phone number";
      return true;
   }
   else{
      document.getElementById("w3").innerHTML="";
      return false;
   }
}
function f4()
{
   var a=document.getElementById("q4").value;
   var s=/^\d{6}$/;
   if(a=="")
   {
      document.getElementById("w4").innerHTML="Please fill out this field";
      return true;
   }
   else if(!s.test(a))
   {
      document.getElementById("w4").innerHTML="Enter only numbers 6 chracters long";
      return true;
   }
   else{
      document.getElementById("w4").innerHTML="";
      return false;
   }
}
function f5()
{
   var a=document.getElementById("q5").value;
   var z=document.getElementById("q4").value;
   if(a=="")
   {
      document.getElementById("w5").innerHTML="Please fill out this field";
      return true;
   }
   else if(a!=z)
   {
      document.getElementById("w5").innerHTML="Password not matching";
      return true;
   }
   else{
      document.getElementById("w5").innerHTML="";
      return false;
   }
}
function f6()
{
   var a=document.getElementById("q2").value;
   var s=document.getElementById("q4").value;
   localStorage.setItem("eml",a);
   localStorage.setItem("pwd",s);
   if(f1())
   {
      window.location.href="#q1";
   }
   else if(f2())
   {
      window.location.href="#q2";
   }
   else if(f3())
   {
      window.location.href="#q3";
   }
   else if(f4())
   {
      window.location.href="#q4";
   }
   else if(f5())
   {
      window.location.href="#q5";
   }
   else{
      window.open("log.html");
   }

}

