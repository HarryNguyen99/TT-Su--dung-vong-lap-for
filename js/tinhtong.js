function result() {
    let number = document.getElementById("num").value;
    let total = 0;
    let i = 1;
    for (; i <= number; i += 1) {
        total = total + i;
    }
    document.getElementById("result1").innerHTML = "Tổng dãy số = " + total;
}