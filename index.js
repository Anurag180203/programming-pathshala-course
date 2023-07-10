a=0;
btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    x = document.getElementById("input");
    y = document.getElementById("list");
    z = document.createElement("li");
    z.innerHTML = x.value;
    z.id = a++;
    z.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("clicked");
        this.style.textDecoration = "line-through";
    })
    z.addEventListener("dblclick", function (event) {
        event.preventDefault();
        console.log("clicked");
        y.removeChild(this);
    })
    y.appendChild(z);
    x.value = "";
});