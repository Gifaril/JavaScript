
function submit(){
    var list = JSON.parse(localStorage.getItem('list'))
    if (!list){
        list = []
    }
    var title = document.getElementById("title").value;
    var body =  document.getElementById("body").value;
    console.log(list)
    list.push({
        id: list.length,
        title,
        body,
        date: new Date()
    })
    localStorage.setItem("list", JSON.stringify(list))
}