document.getElementById("convert").addEventListener("click", converts);
        
        function converts(){
            var celcius = document.getElementById("celcius").value;
            var farenheight = (celcius * (9 / 5)) + 32;
            document.getElementById("farenheight").value = farenheight + " \u00B0F";
        }