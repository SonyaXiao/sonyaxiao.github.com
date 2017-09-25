 "	(		//basic format;		
			Date.prototype.getFormattedDate = function(pattern){
			    function getFullStr(i){
			        return i>9?""+i:"0"+i;
			    }
			    pattern = pattern.replace(/yyyy/,this.getFullYear())
			        .replace(/MM/,getFullStr(this.getMonth()))
			        .replace(/dd/,getFullStr(this.getDate()))
			        .replace(/hh/,getFullStr(this.getHours()))
			        .replace(/mm/,getFullStr(this.getMinutes()))
			        .replace(/ss/,getFullStr(this.getSeconds()))
					.replace(/xx/,getFullStr(this.getDay()))
				.replace(/nn/,getFullStr(this.getHours()+this.getTimezoneOffset()/60+8))
			    return pattern;
			};
			
			//Week
                        var BeijingHour = "";
                        if ((new Date()).getFormattedDate("nn")>24) Beijinghour = "(new Date()).getFormattedDate("nn")-24";
			var localDay = "";
			if(new Date().getDay()==0) localDay = "Sun.";
            if(new Date().getDay()==1) localDay = "Mon.";
            if(new Date().getDay()==2) localDay = "Tue.";
            if(new Date().getDay()==3) localDay = "Wed.";
			if(new Date().getDay()==4) localDay = "Thur.";
            if(new Date().getDay()==5) localDay = "Fri.";
			if(new Date().getDay()==6) localDay = "Sat.";
			var localMonth = "";
			if(new Date().getMonth()==0) localMonth = "Jan";
            if(new Date().getMonth()==1) localMonth = "Feb";
            if(new Date().getMonth()==2) localMonth = "Mar";
            if(new Date().getMonth()==3) localMonth = "Apr";
			if(new Date().getMonth()==4) localMonth = "May";
            if(new Date().getMonth()==5) localMonth = "Jun";
			if(new Date().getMonth()==6) localMonth = "Jul";
			if(new Date().getMonth()==7) localMonth = "Aug";
            if(new Date().getMonth()==8) localMonth = "Sep";
            if(new Date().getMonth()==9) localMonth = "Oct";
            if(new Date().getMonth()==10) localMonth = "Nov";
			if(new Date().getMonth()==11) localMonth = "Dec";
			//greeting
			var Greet="";
			if(new Date().getHours() < 7 || new Date().getHours() > 23){Greet="Good night~"}
			else if (new Date().getHours() < 12){Greet="Good morning!"}
			else if (new Date().getHours() < 18){Greet="Good afternoon!"}
			else if (new Date().getHours() < 20){Greet="Hello~"}
            else if (new Date().getHours() < 24){Greet="Good evening~"}
			//Message
			var Message="";
			if((new Date()).getFormattedDate("nn") < 7 || (new Date()).getFormattedDate("nn") > 23){Message="Your e-mail would be replied tomorrow."}
			else if ((new Date()).getFormattedDate("nn") < 21){Message ="Your e-mail would be replied soon~"}
            else if ((new Date()).getFormattedDate("nn") < 24){Message ="Your e-mail would be replied tomorrow. In case of an emergency, please call."}
			//span
			var localTime = document.getElementById("lTime");
			var localDate = document.getElementById("lDate");
			var myGreet = document.getElementById("iGreet");
			var myTime = document.getElementById("iTime");
			var myMessage = document.getElementById("iMessage");
			
			localTime.innerHTML = (new Date()).getFormattedDate("hh : mm : ss");
			localDate.innerHTML =localMonth+"-"+(new Date()).getFormattedDate("dd-yyyy")+' '+localDay;
			myGreet.innerHTML = Greet;
			myTime.innerHTML ="It is "+(new Date()).getFormattedDate("nn : mm : ss")+" in Beijing now.";
			myMessage.innerHTML = Message;
			//refresh
			setInterval(function(){localTime.innerHTML = (new Date()).getFormattedDate("hh : mm : ss")}, 1000);
			setInterval(function(){localDate.innerHTML = localMonth+"-"+(new Date()).getFormattedDate("dd-yyyy")+' '+localDay}, 1000);
			setInterval(function(){myGreet.innerHTML = Greet}, 1000);
			setInterval(function(){myTime.innerHTML ="It is "+Beijinghour+(new Date()).getFormattedDate("nn : mm : ss")+" in Beijing now."}, 1000);
			setInterval(function(){myMessage.innerHTML = Message}, 1000);
			
