<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let globalId = 1;
        function markasDone(id){
            elm = document.getElementById(id)
            elm.children[2].innerHTML = "Done!";
        }
        function creatChild(title,description,id){
            const child = document.createElement("div");
            const firstgrandparent = document.createElement("div");
            firstgrandparent.innerHTML = title;
            const secondgrandparent = document.createElement("div");
            secondgrandparent.innerHTML = description;
            const thirdgrandparent = document.createElement("button");
            thirdgrandparent.innerHTML = "Mark as Done";
            thirdgrandparent.setAttribute("onclick",`markasDone(${id})`)
            child.appendChild(firstgrandparent);
            child.appendChild(secondgrandparent);
            child.appendChild(thirdgrandparent);
            child.setAttribute("id",id);
            return child;
        }
        function todo(){
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const parent = document.getElementById("todos");
            parent.appendChild(creatChild(title,description,globalId++));
                
        }
    </script>
    <input type="text" placeholder="Title" id="title"><br><br>
    <input type="text" placeholder="Description" id="description"><br><br>
    <button type="submit" onclick="todo()">Add todo</button>
    <div id="todos">

    </div>
</body>
</html>
