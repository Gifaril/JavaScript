const lines = document.querySelectorAll(".line");
const button = document.getElementsByClassName("btn")[0];


button.addEventsListener("click", saveEdit);
lines.forEache(line => {
    line.setattribute("maxlength",line.offsetWidth/15);
})