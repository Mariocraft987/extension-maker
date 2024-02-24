var script;

function changeTitle() {
    let title = document.getElementById('name').value;
    if (title != "" || title != " ") {
        document.getElementById('told').innerHTML = "<h3>"+title+"</h3>"
        document.title = "Extension - "+title

script = '(function(Scratch) {'
script =+    'const variables = {};'
script =+    'class Extension {'
script =+    'getInfo() {'
script =+    'return {'
script =+    '"id": "extensionID"',
script =+    '"name": "'+title+'",'

document.getElementById('code').innerHTML = script

    }else{
        title = "unnamed extension"
        document.getElementById('told').innerHTML = "<h3>Unamed</h3>"
        document.title = "Extension Maker"
        document.getElementById('code').innerHTML = "Nothing Yet!";
    }
}

function addCommand() {
    console.log("clicked!")
}

function addReporter() {
    console.log("clicked!")
}

function addBoolean() {
    console.log("clicked!")
}

function addCondition() {
    console.log("clicked!")
}
