//cambiaremos el siguiente codigo por una estructura Switch

function chainToSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    // Cambia solo el código encima de esta línea
    return answer;
}
  
chainToSwitch(7);


  function chainToSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
    
    switch (val) {
        case "bob":
            answer = "Marley";
            break;

        case 42:
            answer = "The Answer";
            break;

        case 99:
            answer = "Missed me by this much!";
            break;

        case 7:
            answer = "Ate Nine";
            break;
                
        default:
            answer = "c";
            break; 
    }
    // Cambia solo el código encima de esta línea
    return answer;
}
  
chainToSwitch(7);