window.onload=function(){
        let num = document.getElementById('num'); 
        let t = setInterval(function(){
            if(num.innerText<=1){
                window.clearInterval(t);
                location.replace('index.html');
            }
            num.innerText-=1;
        	
        },1000);

}
