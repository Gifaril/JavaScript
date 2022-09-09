function passvalues()
{
    var diary=document.getElementById("diary").value;
    localStorage.setItem("textvalue",diary);
    return false;
}