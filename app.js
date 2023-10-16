    require('colors');
    const math = require('./modules/math');
    
    require('colors');
    
    console.clear();
    
    const main = async() =>{
    
    console.log("******************************".green)
    console.log("*".green , " FUNCIONES MATEMATICAS ".bgBlue, "  *".green)
    console.log("******************************".green)
    console.log("******************************".blue)
        const firstNumber= math.random(10)
        const secondNumber= math.random(10)
    console.log("*".blue, "NUMEROS GENERADOS : ".green + `${firstNumber}, ${secondNumber}`.cyan + "   *".blue)
        console.log("*                            *".blue)
        console.log("*".blue, `SUMA: ( ${firstNumber}+${secondNumber} )= `.yellow +`${math.add(firstNumber,secondNumber)}`.red + "           *".blue);
        console.log("*".blue, `RESTA: ( ${firstNumber}-${secondNumber} )= `.yellow +`${math.substract(firstNumber,secondNumber)}`.red +"          *".blue);
        console.log("*".blue, `MULTIPLICACION: ( ${firstNumber}*${secondNumber} )= `.yellow +`${math.multiply(firstNumber,secondNumber)}`.red + " *".blue);
        console.log("*".blue, `DIVISION: ( ${firstNumber}/${secondNumber} )= `.yellow +`${math.divide(firstNumber,secondNumber)}`.red + "       *".blue);
        console.log("******************************".blue)
    }
    main()
    
    