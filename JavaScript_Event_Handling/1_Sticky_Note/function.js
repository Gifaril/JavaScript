function addStickyNote(){
    // getting the value of text to put in a sticky note
    const text = document.getElementById("text").value;

    // Generating random rgb formatted colors
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    if (text == ""){
        alert("The note must not be empty");
    }
    else{
        const notes = document.getElementById("notes");
        const note = document.createElement("p");
        const node = document.createTextNode(text);
        note.appendChild(node);
        const newDiv = document.createElement("div");
        newDiv.appendChild(note);
        notes.appendChild(newDiv)

        newDiv.style.width = "350px";
        newDiv.style.height = "180px";
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";
        newDiv.style.backgroundColor = bgColor;
        newDiv.style.margin = "auto auto 50px";
    }
    
    
    

}