var whole = document.getElementById("whole");
var topdiv = /** @class */ (function () {
    function topdiv() {
        var a = document.createElement("div");
        a.innerHTML = "<h3><b>CRICKET 10</b></h3";
        whole.appendChild(a);
    }
    return topdiv;
}());
var middiv = /** @class */ (function () {
    function middiv() {
        var a = document.createElement("div");
        a.setAttribute("class", "row");
        a.setAttribute("id", "middiv");
        var x = document.createElement("div");
        x.setAttribute("class", "col");
        var p11 = document.createElement("p");
        p11.innerHTML = "<h4><b>TEAM 1 SCORE</b><h4>";
        x.appendChild(p11);
        var p12 = document.createElement("p");
        p12.setAttribute("id", "sc1");
        p12.innerHTML = "0";
        x.appendChild(p12);
        var bt1 = document.createElement("button");
        bt1.setAttribute("id", "btn1");
        bt1.setAttribute("onclick", "table_one()");
        bt1.innerHTML = "HIT 1";
        bt1.style.backgroundColor = "blue";
        bt1.style.color = "white";
        x.appendChild(bt1);
        a.appendChild(x);
        var y = document.createElement("div");
        y.setAttribute("id", "timer");
        y.setAttribute("class", "col");
        var p21 = document.createElement("p");
        p21.innerHTML = "<h4><b>TIMER</b></h4>";
        y.appendChild(p21);
        var p22 = document.createElement("p");
        p22.setAttribute("id", "count");
        p22.innerHTML = "0";
        y.appendChild(p22);
        a.appendChild(y);
        var z = document.createElement("div");
        z.setAttribute("class", "col");
        var p31 = document.createElement("p");
        p31.innerHTML = "<h4><b>TEAM 2 SCORE</b><h4>";
        z.appendChild(p31);
        var p32 = document.createElement("p");
        p32.setAttribute("id", "sc2");
        p32.innerHTML = "0";
        z.appendChild(p32);
        var bt2 = document.createElement("button");
        bt2.setAttribute("id", "btn2");
        bt2.setAttribute("onclick", "table_two()");
        bt2.setAttribute("disabled", "true");
        bt2.innerHTML = "HIT 2";
        bt2.style.backgroundColor = "blue";
        bt2.style.color = "white";
        z.appendChild(bt2);
        a.appendChild(z);
        whole.appendChild(a);
    }
    return middiv;
}());
new topdiv();
whole.appendChild(document.createElement("hr"));
new middiv();
whole.appendChild(document.createElement("hr"));
var main = document.createElement("div");
main.setAttribute("id", "main");
main.setAttribute("class", "row");
var table = /** @class */ (function () {
    function table() {
    }
    table.prototype.create = function (id_name) {
        var tbdiv1 = document.createElement("div");
        tbdiv1.setAttribute("class", "col-lg-4");
        var table = document.createElement("table");
        table.setAttribute("class", "table");
        table.setAttribute("id", id_name);
        var tr, td, x;
        for (var row = 0; row < 11; row++) {
            tr = document.createElement("tr");
            for (var col = 0; col < 8; col++) {
                td = document.createElement("td");
                x = id_name + "_" + row.toString() + col.toString();
                td.setAttribute("id", x);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        tbdiv1.appendChild(table);
        main.appendChild(tbdiv1);
    };
    return table;
}());
new table().create("tb1");
var windiv = document.createElement("div");
windiv.setAttribute("class", "col-lg-2");
var genres = document.createElement("button");
genres.setAttribute("onclick", "funresult()");
genres.innerHTML = "GENERATE RESULT";
genres.style.backgroundColor = "blue";
genres.style.color = "white";
var winp1 = document.createElement("p");
winp1.innerHTML = "MATCH WON BY";
var winp2 = document.createElement("p");
winp2.innerHTML = "MAN OF THE MATCH";
windiv.appendChild(genres);
windiv.appendChild(winp1);
windiv.appendChild(winp2);
main.appendChild(windiv);
new table().create("tb2");
whole.appendChild(main);
document.getElementById("tb1_00").innerHTML = "TEAM 1";
document.getElementById("tb1_07").innerHTML = "TOTAL";
for (var i = 1; i <= 6; i++) {
    var z = "tb1_0" + i.toString();
    document.getElementById(z).innerHTML = "B" + i.toString();
}
for (var i = 1; i <= 10; i++) {
    var z = "tb1_" + i.toString() + "0";
    document.getElementById(z).innerHTML = "PLAYER " + i.toString();
}
document.getElementById("tb2_00").innerHTML = "TEAM 2";
document.getElementById("tb2_07").innerHTML = "TOTAL";
for (var i = 1; i <= 6; i++) {
    var z = "tb2_0" + i.toString();
    document.getElementById(z).innerHTML = "B" + i.toString();
}
for (var i = 1; i <= 10; i++) {
    var z = "tb2_" + i.toString() + "0";
    document.getElementById(z).innerHTML = "PLAYER " + i.toString();
}
var timeleft = 60;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        document.getElementById("btn2").removeAttribute("disabled");
        document.getElementById("btn1").setAttribute("disabled", "true");
        clearInterval(downloadTimer);
        repeatTimer();
    }
    document.getElementById("count").innerHTML = (60 - timeleft).toString();
    timeleft -= 1;
}, 1000);
function repeatTimer() {
    var timeleft = 60;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0 || document.getElementById("btn2")["disabled"] == "true") {
            document.getElementById("btn2").setAttribute("disabled", "true");
            clearInterval(downloadTimer);
        }
        document.getElementById("count").innerHTML = (60 - timeleft).toString();
        timeleft -= 1;
    }, 1000);
}
function getRandomInt() {
    var min = Math.ceil(0);
    var max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var r = 1, c = 1, tb1sum = 0, r1sum = 0, max1sum = 0, r1id = 0;
function table_one() {
    if (r == 11) {
        document.getElementById("btn1").setAttribute("disabled", "true");
        document.getElementById("btn2").removeAttribute("disabled");
        clearInterval(downloadTimer);
        repeatTimer();
        return;
    }
    var sc = getRandomInt();
    tb1sum = tb1sum + sc;
    r1sum = r1sum + sc;
    document.getElementById("sc1").innerHTML = tb1sum.toString();
    document.getElementById("tb1_" + r.toString() + c.toString()).innerHTML = sc.toString();
    document.getElementById("tb1_" + r.toString() + "7").innerHTML = r1sum.toString();
    if (sc == 0 || c == 6) {
        if (r1sum > max1sum) {
            max1sum = r1sum;
            r1id = r;
        }
        r = r + 1;
        c = 1;
        r1sum = 0;
    }
    else {
        c = c + 1;
    }
}
var rs = 1, cs = 1, tb2sum = 0, r2sum = 0, max2sum = 0, r2id = 0;
function table_two() {
    if (rs == 11) {
        document.getElementById("btn2").setAttribute("disabled", "true");
        console.log(document.getElementById("btn2")["disabled"]);
        clearInterval(downloadTimer);
        return;
    }
    var sc = getRandomInt();
    tb2sum = tb2sum + sc;
    r2sum = r2sum + sc;
    document.getElementById("sc2").innerHTML = tb2sum.toString();
    document.getElementById("tb2_" + rs.toString() + cs.toString()).innerHTML = sc.toString();
    document.getElementById("tb2_" + rs.toString() + "7").innerHTML = r2sum.toString();
    if (sc == 0 || cs == 6) {
        if (r2sum > max2sum) {
            max2sum = r2sum;
            r2id = rs;
        }
        rs = rs + 1;
        cs = 1;
        r2sum = 0;
    }
    else {
        cs = cs + 1;
    }
}
function funresult() {
    if (tb1sum > tb2sum) {
        console.log(tb1sum);
        console.log(tb2sum);
        winp1.innerHTML += "<br>TEAM 1";
        winp2.innerHTML += "<br>PLAYER " + r1id.toString();
        winp2.innerHTML += "<br>TEAM 1";
        winp2.innerHTML += "<br>" + max1sum.toString();
    }
    else {
        winp1.innerHTML += "<br>TEAM 2";
        winp2.innerHTML += "<br>PLAYER " + r2id.toString();
        winp2.innerHTML += "<br>TEAM 2";
        winp2.innerHTML += "<br>" + max2sum.toString();
    }
}
