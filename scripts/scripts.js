
    let wordbank = [
        "aesthetic",
        "brilliant",
        "cultivated",
        "cultured",
        "decorative",
        "dramatic",
        "elegant",
        "exquisite",
        "fine",
        "graceful",
        "grand",
        "harmonious",
        "ideal",
        "imaginative",
        "musical",
        "pictorial",
        "poetic",
        "refined",
        "rhythmical",
        "sensitive",
        "stimulating",
        "stunning",
        "stylish",
        "sublime",
        "tasteful",
        "unique",
        "wild",
        "wondrous"
    ]

    var startWord = wordbank[Math.floor(Math.random()*wordbank.length)];

    window.document.onload = animate(startWord, startWord.length);

    function animate(word, len){
          if(word != ""){
              document.getElementById("animated-text").innerHTML += word.charAt(0);
              setTimeout(function(){animate(word.substring(1), len)}, 500);
          }

          else if(len != -1){
              let s = document.getElementById("animated-text").innerHTML;
              document.getElementById("animated-text").innerHTML = s.substring(0, s.length-1);
              len -= 1;
              setTimeout(function(){animate("", len)}, 200);
          }

          else{
              var newWord = wordbank[Math.floor(Math.random()*wordbank.length)];
              setTimeout(function(){animate(newWord, newWord.length)}, 500)
          }
    }

    function aboutClick(){
        document.getElementById("contact").style.display = "none"
        document.getElementById("projects").style.display = "none"
        document.getElementById("about").style.display = "block"
    }

    function contactClick(){
        document.getElementById("contact").style.display = "block"
        document.getElementById("projects").style.display = "none"
        document.getElementById("about").style.display = "none"
    }

    function projectsClick(){
        document.getElementById("contact").style.display = "none"
        document.getElementById("projects").style.display = "block"
        document.getElementById("about").style.display = "none"
    }