// set up text to print, each item in array is new line
var aText = new Array(
    "Le monde est touché par une épidémie. Il y a un an, un virus mortel s'est propagé à travers le monde.",
    "", 
    "Vous faites partie de la minorité qui n'a pas encore été contaminée.",
    "",
    "",
    "Réveillé par l’orage, vous consultez votre smartphone dans l’espoir de trouver de bonnes nouvelles.",
    "",
    "Vous remarquez une notification dans votre boîte mail, un de vos amis vous a envoyé plusieurs fichiers.",
    "",
    "Il vous explique qu’il a trouvé des indices concernant la provenance du virus.",
    "",
    "",
    "Afin d'obtenir plus d'informations sur le virus, il vous demande de l'aider",
    "",
    "à identifier le laboratoire d'origine du virus."
    );
    var iSpeed = 20; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();