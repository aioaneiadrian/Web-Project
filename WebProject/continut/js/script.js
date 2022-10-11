function DateHour(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    y=time;
    x=date;
    document.getElementById("indices").innerHTML=y;
    document.getElementById("indices2").innerHTML=x;
}

function Browser()
{
    let browser;
    let userAgent = navigator.userAgent;

    if(userAgent.match(/chrome|chromium|crios/i)){
        browser = "chrome";

    }else if(userAgent.match(/edg/i)){
        browser = "edge";
    }
    else if(userAgent.match(/firefox|fxios/i)){
        browser = "firefox";
    
    }else if(userAgent.match(/opr\//i)){
    browser = "opera";
    } 
     else if(userAgent.match(/safari/i)){
        browser = "safari";
     }
    else{
        browser="No browser detection";
    }

    document.getElementById("browser").innerHTML="Browser: "+ navigator.userAgent + " " +browser;;
}
function locatie()
{
    document.getElementById("locatie").innerHTML = window.location.href;
}

function sistem()
{
    document.getElementById("sistem").innerHTML = navigator.platform;
}
function refresh(){
    window.setInterval(DateHour, 1000);
    window.setInterval(Browser, 1000);
    window.setInterval(locatie, 1000);
    window.setInterval(sistem,1000);
}

function schimbaContinut(numeResursa,jsFisier, jsFunctie)
{
 var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function ()
{

	if ( this.readyState == 4 & this.status == 200)
		{
 		document.getElementById("continut").innerHTML = this.responseText;
         if (jsFisier) {
            var elementScript = document.createElement('script');
            elementScript.onload = function () {
                console.log("hello");
                if (jsFunctie) {
                    window[jsFunctie]();
                }
            };
            elementScript.src = jsFisier;
            document.head.appendChild(elementScript);
        } else {
            if (jsFunctie) {
                window[jsFunctie]();
            }
        }
		}
};

	xhttp.open("GET", numeResursa + '.html', true);
	xhttp.send();
}

var x = null;
var y = null;

function drawOnCanvas(e) {
    
    let canvas = document.getElementById("drawCanvas");
    const context = canvas.getContext('2d');

    if(x == null) {
        x = e.offsetX;
        y = e.offsetY;
    }
    else {
        let xx = e.offsetX;
        let yy = e.offsetY;
 
        let stroke = document.getElementById("stroke");
        let fill = document.getElementById("fill");  
 
        context.lineWidth = 8;
        context.strokeStyle = stroke.value;
        context.fillStyle = fill.value;
 
        context.strokeRect(x, y, xx - x, yy - y);
        context.fillRect(x, y, xx - x, yy - y);

        x = y = null;
        xx = yy = null;
    }
}

