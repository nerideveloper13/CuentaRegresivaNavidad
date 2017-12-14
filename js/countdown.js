function countdown(){
    var now = new Date();
    if (now.getMonth()==11 && now.getDate()==25){
        $("#countdown").text("");
        $("#until").text("Merry Christmas!");
        $("#count-top").text("Today is Christmas!");
        window.clearInterval(repeatcountdown);
    }
    else{
        if (now.getMonth()==11 && now.getDate()>25){
            var christmas = new Date(now.getFullYear()+1, 11, 25, 0, 0, 0);
        }
        else{
            var christmas = new Date(now.getFullYear(), 11, 25, 0, 0, 0);
        }
        var dif = christmas.getTime()-now.getTime();
        var totsec = Math.floor(dif/1000);
        var totmin = Math.floor(totsec/60);
        var tothours = Math.floor(totmin/60);
        var days = Math.floor(tothours/24);
        var hours = tothours-(days*24);
        var min = totmin-(hours*60+days*24*60);
        var sec = totsec-(min*60+hours*60*60+days*24*60*60);
        $("#days").text(days);
        $("#hours").text(hours);
        $("#mins").text(min);
        $("#secs").text(sec);
    }
}

function start(){
    countdown();
    var repeatcountdown = window.setInterval(countdown, 1000);
}