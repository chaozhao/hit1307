function checkform() 
{
			if ( document.testform.firstname.value == "")
			{
			   alert('error');
			   return false;
			}
			else
			   {
			   alert('ok');
			   return true;
		}
	return false;
}		
		function notEmpty()
		{
			alert("test"); 
			var el = document.getElementById(¡°firstname¡±);
			if (el.value == "")
			{ 
			alert("Enter your first name!"); 
			return false;
			}		
			else
			{
			reture true;
			alert("good!"); 
			}
		}
		
		function test()
		{
		alert('Enter your first name!'); 
			var el = document.getElementById(¡°firstname¡±);
			if (el.value == "")
			{ 
			alert("Enter your first name!"); 		
			}
		}
