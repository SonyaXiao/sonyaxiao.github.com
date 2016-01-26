			//basic format;		
			Date.prototype.getFormattedDate = function(pattern){
			    function getFullStr(i){
			        return i>9?""+i:"0"+i;
			    }
			    pattern = pattern.replace(/yyyy/,this.getFullYear())
			        .replace(/MM/,getFullStr(this.getMonth()+1))
			        .replace(/dd/,getFullStr(this.getDate()))
			        .replace(/hh/,getFullStr(this.getHours()))
			        .replace(/mm/,getFullStr(this.getMinutes()))
			        .replace(/ss/,getFullStr(this.getSeconds()))
					.replace(/tdd/,new Date().getDay())
			    return pattern;
			};
			
			//Week
			var Myday = "";
			if(new Date().getDay()==0) Myday = "Sunday";
            if(new Date().getDay()==1) day = "Monday";
            if(new Date().getDay()==2) weekDay = "Tuesday";
            if(new Date().getDay()==3) weekDay = "Wednesday";
			if(new Date().getDay()==4) weekDay = "Thursday";
            if(new Date().getDay()==5) weekDay = "Friday";
			if(new Date().getDay()==6) weekDay = "Saturday";
			//greeting
			var Word="";
			if(new Date().getHours() < 7 || new Date().getHours() > 23){Word="I'm probabily sleeping";}
			else if (new Date().getHours() < 20){Word="Work hours! Your e-mail would be replied soon~";}
            else if (new Date().getHours() < 24){Word="I'm off work now. Your e-mail would be replied tomorrow. For imergency, Please call.";}
			//span
			var localTimeSpan = document.getElementById("localTime");
			var localDateSpan = document.getElementById("localDate");
			var localWordSpan = document.getElementById("localWord");
			localTimeSpan.innerHTML = (new Date()).getFormattedDate("hh : mm : ss");
			localDateSpan.innerHTML = (new Date()).getFormattedDate("yyyy/MM/dd")+' '+Myday;
			localWordSpan.innerHTML = Word;
			//refresh
			setInterval(function(){
						localTimeSpan.innerHTML = (new Date()).getFormattedDate("hh : mm : ss");
			}, 1000);
			setInterval(function(){
						localDateSpan.innerHTML = (new Date()).getFormattedDate("yyyy/MM/dd")+' '+Myday;
			}, 1000);
			setInterval(function(){
						localWordSpan.innerHTML = Word;
			}, 1000);
