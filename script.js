//your JS code here. If required.
// multiple of any number means the when we divide that number 
// respective multiple the remainder will be zero.

for (let i=1; i<101; i++){
	if(i % 3 == 0){
		alert("Fizz");
	}
	else if(i % 5 == 0){
		 alert("Buzz");
	}
	else if(i % 15 == 0){
		 alert("FizzBuzz");
	}
	else{
	    alert(i);
	}
}