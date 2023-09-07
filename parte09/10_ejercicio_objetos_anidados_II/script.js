let letraNombre = { 
    a: {
    masculino: 'La bestia',
    femenino: 'La bestia' },
    b: {
    masculino: 'Agente',
    femenino: 'Agente' },
    c: {
    masculino: 'Gigante',
    femenino: 'Gigante' },
    d: {
    masculino: 'Pokemon',
    femenino: 'Pokemon' },
    e: {
    masculino: 'Dragón',
    femenino: 'Dragón' },
    f: {
    masculino: 'Alien',
    femenino: 'Alien' },
    g: {
    masculino: 'Fantasma',
    femenino: 'Fantasma', },
    h: {
    masculino: 'Doctor',
    femenino: 'Doctora' },
    i: {
    masculino: 'Genio',
    femenino: 'Genia' },
    j: {
    masculino: 'Chico',
    femenino: 'Chica' },
    k: {
    masculino: 'Príncipe',
    femenino: 'Princesa' },
    l: {
     masculino: 'Hombre',
    femenino: 'Mujer' },
    m: {
    masculino: 'Gatito',
    femenino: 'Gatita' },
    n: {
    masculino: 'Borracho',
    femenino: 'Borracha' },
    o: {
    masculino: 'Rey',
    femenino: 'Reina' },
    p: {
    masculino: 'Robot',
    femenino: 'Robot' },
    q: {
    masculino: 'Científico',
    femenino: 'Científica' },
    r: {
    masculino: 'Samurai',
    femenino: 'Samurai' },
    s: {
    masculino: 'Mole',
    femenino: 'Mole' },
    t: {
    masculino: 'Loco',
    femenino: 'Loca' },
    u: {
    masculino: 'Vigilante',
    femenino: 'Vigilante' },
    v: {
    masculino: 'Guerrero',
    femenino: 'Guerrera' },
    w: {
    masculino: 'León',
    femenino: 'Leona'
    
     }, x: {
    femenino: 'Ángel' },
    y: {
    masculino: 'Tigre',
    femenino: 'Tigresa' },
    z: {
    masculino: 'Saiyajin',
    femenino: 'Saiyajin' },
    };
/////////////////////////////////////////////////////////
    let letraApellido = { 
        a: {
    masculino: 'indestructible',
    femenino: 'indestructible' },
    b: {
    masculino: 'maravilla', femenino: 'maravilla'
    }, c: {
    masculino: 'radiactivo',
    femenino: 'radiactiva' },
    d: {
    masculino: 'volador', femenino: 'voladora'
    }, e: {
    masculino: 'mágico',
    femenino: 'mágica' },
    f: {
    masculino: 'salvaje', femenino: 'salvaje'
    }, g: {
    masculino: 'vengador',
    femenino: 'vengadora' },
    h: {
    masculino: 'letal',
    masculino: 'Ángel',
    
     femenino: 'letal' },
    i: {
    masculino: 'poderoso', femenino: 'poderosa'
    }, j: {
    masculino: 'amoroso',
    femenino: 'amorosa' },
    k: {
    masculino: 'oscuro', femenino: 'oscura'
    }, l: {
    masculino: 'fantástico',
    femenino: 'fantástica' },
    m: {
    masculino: 'invencible', femenino: 'invencible'
    }, n: {
    masculino: 'valiente',
    femenino: 'valiente' },
    o: {
    masculino: 'superveloz', femenino: 'superveloz'
    }, p: {
    masculino: 'invisible',
    femenino: 'invisible' },
    q: {
    masculino: 'mutante', femenino: 'mutante'
    }, r: {
    masculino: 'tóxico',
    femenino: 'tóxica' },
    s: {
    masculino: 'sexy', femenino: 'sexy'
    },
    
     t: {
    masculino: 'asesino', femenino: 'asesina'
    }, u: {
    masculino: 'karateka',
    femenino: 'karateka' },
    v: {
    masculino: 'galáctico', femenino: 'galáctica'
    }, w: {
    masculino: 'carismático',
    femenino: 'carismática' },
    x: {
    masculino: 'violento', femenino: 'violenta'
    }, y: {
    masculino: 'nocturno',
    femenino: 'nocturna' },
    z: {
    masculino: 'venenoso', femenino: 'venenosa'
    } };

    /////////////////////////////////////////////////////////

    let fechaNacimiento = { 0: {
    masculino: 'del espacio',
    femenino: 'del espacio' },
    1: {
    masculino: 'de la justicia', femenino: 'de la justicia'
    }, 2: {
    masculino: 'de Marvel',
    femenino: 'de Marvel' },
    3: {
    masculino: 'de las tinieblas', femenino: 'de las tinieblas'
    
    }, 4: {
    masculino: 'de fuego',
    femenino: 'de fuego' },
    5: {
    masculino: 'de la noche', femenino: 'de la noche'
    }, 6: {
    masculino: 'del futuro',
    femenino: 'del futuro' },
    7: {
    masculino: 'de acero', femenino: 'de acero'
    }, 8: {
    masculino: 'exterminador',
    femenino: 'exterminadora' },
    9: {
    masculino: 'de otro planeta', femenino: 'de otro planeta'
    }, };

    
    let nombre = prompt("Cual es tu nombre?");
    let apellido = prompt("Cual es tu primer apellido");
    let fecha = prompt("en que año naciste?");

    
    let superNombre = ""
    let primeraLetraNombre = nombre[0];
    if (primeraLetraNombre >= "a" && primeraLetraNombre <= "m") {
        superNombre = letraNombre[primeraLetraNombre].masculino
    }
    else {
        superNombre = letraNombre[primeraLetraNombre].femenino
    }


    let superApellido = ""
    let ultimaLetraApellido = apellido[apellido.length - 1];
    if (ultimaLetraApellido >= "a" && ultimaLetraApellido <= "m") {
        superApellido = letraApellido[ultimaLetraApellido].masculino
    }
    else {
        superApellido = letraApellido[ultimaLetraApellido].femenino
    }


    let superFecha = ""
    let ultimoNumeroFecha = fecha[fecha.length -1];
    if (ultimoNumeroFecha >= 0 && ultimoNumeroFecha <=5){
        superFecha = fechaNacimiento[ultimoNumeroFecha].masculino
    }
    else {
        superFecha = fechaNacimiento[ultimoNumeroFecha].femenino
    }

    
    console.log(superNombre +" "+ superApellido +" "+ superFecha);
   