
function add() {
    var inp1 = document.getElementById("t1").value;
    var inp2 = document.getElementById("t2").value;
    var result = parseInt(inp1) + parseInt(inp2);
    document.getElementById('p1').innerHTML = "the addition of two number is " + result;
}
function sub() {
    var inp1 = document.getElementById("t1").value;
    var inp2 = document.getElementById("t2").value;
    var result = parseInt(inp1) - parseInt(inp2);
    document.getElementById('p1').innerHTML = "the substraction of two number is " + result;
}
function mul() {
    var inp1 = document.getElementById("t1").value;
    var inp2 = document.getElementById("t2").value;
    var result = parseInt(inp1) * parseInt(inp2);
    document.getElementById('p1').innerHTML = "the multiplication of two number is " + result;
}
function div() {
    var inp1 = document.getElementById("t1").value;
    var inp2 = document.getElementById("t2").value;
    var result = parseInt(inp1) / parseInt(inp2);
    document.getElementById('p1').innerHTML = "the division of two number is " + result;
}
function mod() {
    var inp1 = document.getElementById("t1").value;
    var inp2 = document.getElementById("t2").value;
    var result = parseInt(inp1) % parseInt(inp2);
    document.getElementById('p1').innerHTML = "the MOD of two number is " + result;
}