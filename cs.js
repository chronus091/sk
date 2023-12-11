function o1()
{
   var a=document.getElementById("i1").value;
   var s=document.getElementById("i2").value;
   var x=localStorage.getItem("eml");
   var c=localStorage.getItem("pwd");
   if (a!=x || s!=c)
   {
      alert("Wrong login credentials")
   }
 
   else{
      window.open("Home.html");
   }

}