
    var typed =  new Typed(".floating" , {
        strings: ["Hello !","Hola ! ","Bonjour !"],
        typeSpeed: 175,
        backSpeed: 175,
        loop: true  
    })
    
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () =>{
            //change the theme of web side
            document.body.classList.toggle('dark');
        });