let elclass = document.getElementById("classlist");

classlist.forEach(student => {
        let div = document.createElement("div");
        
        if(student[3])
                div.innerHTML = student[3] + " ";
        
        div.innerHTML += student[2] == "" ? student[1] : ("<a href=\"" + student[2] + "\">" + student[1] + "</a>");

        div.className = "classlist__item classlist__item_" + student[0];
        
        elclass.appendChild(div);
});