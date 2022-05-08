test = "abcdefghijklmnopqrstuvwxyz"
console.log(test.search("bc"));


function onload() {
    let score = 0;
    sco = document.getElementById("edittext");
    sco.innerHTML = score;

}

function readTextFile() {




    exists = false;
    edittext = document.getElementById("edittext");
    rl = document.getElementById("randomLetter");
    rj = document.getElementById("rj");
    file = "words.txt";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                //alert(allText);
                words = allText.split('\n');
                console.log(words);

                words.forEach(e => {

                    if (e.toLowerCase() == edittext.value.toLowerCase() && e != "") {
                        console.log(edittext.value + "!= " + rl.innerHTML);
                        if (edittext.value.search(rl.innerHTML) != -1) {
                            //correct anwser
                            console.log("Correct :" + edittext.value.search(rl.innerHTML));
                            rj.innerHTML = "Correct";
                            rj.style.color = "green";

                            // give random nummber
                            var letters = 'abcdefghijklmnopqrstuvwxyz';
                            document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 1;;
                            let l1 = Math.floor(Math.random() * 26);
                            let l2 = Math.floor(Math.random() * 26);
                            if (l1 == l2) {
                                l2 = Math.floor(Math.random() * 26);
                            }
                            document.getElementById("randomLetter").innerHTML = letters[l1] + letters[l2];

                        }

                        exists = true;
                    }

                });
                if (exists == false) {
                    rj.innerHTML = "incorrect";
                    rj.style.color = "red";

                }
            }
        }
    }
    rawFile.send(null);
}

function ranomLetterGive() {
    document.getElementById("startBtn").innerHTML = "Restart";
    document.getElementById("score").innerHTML = "0";
    document.getElementById("randomLetter").style.color = "red";
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    let l1 = Math.floor(Math.random() * 26);
    let l2 = Math.floor(Math.random() * 26);
    if (l1 == l2) {
        l2 = Math.floor(Math.random() * 26);
    }
    document.getElementById("randomLetter").innerHTML = letters[l1] + letters[l2];
}