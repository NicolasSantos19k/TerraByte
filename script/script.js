window.revelar = ScrollReveal({reset:true});

//cards//

revelar.reveal('.card-1-animation', {
    duration: 1500,
    distance: '90px',
})
revelar.reveal('.card-2-animation', {
    duration: 1500,
    distance: '90px',
    delay: 200
})
revelar.reveal('.card-3-animation', {
    duration: 1500,
    distance: '90px',
    delay: 400
})
revelar.reveal('.card-4-animation', {
    duration: 1500,
    distance: '90px',
    delay: 600
})

//box//

revelar.reveal('.box-animation', {
    distance: '0px',
    opacity: 0,
    duration: 1500
})

//bairros//

revelar.reveal('.bairro-1-animation', {
    duration: 1500,
    distance: '90px',
    delay: 200,
    origin: 'top'
})
revelar.reveal('.bairro-2-animation', {
    duration: 1500,
    distance: '90px',
    delay: 400
})
revelar.reveal('.bairro-3-animation', {
    duration: 1500,
    distance: '90px',
    delay: 600,
    origin: 'top'
})
revelar.reveal('.bairro-4-animation', {
    duration: 1500,
    distance: '90px',
    delay: 800
})

//clientes//

revelar.reveal('.clientes-1-animation', {
    duration: 1500,
    distance: '90px',
    delay: 200
})
revelar.reveal('.clientes-2-animation', {
    duration: 1500,
    distance: '90px',
    delay: 400
})
revelar.reveal('.clientes-3-animation', {
    duration: 1500,
    distance: '90px',
    delay: 600
})
revelar.reveal('.clientes-4-animation', {
    duration: 1500,
    distance: '90px',
    delay: 800
})

/*olhos*/
  function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.className = 'fa fa-eye-slash showpwd';
    } else {
      x.type = "password";
      el.className = 'fa fa-eye showpwd';
    }
  }