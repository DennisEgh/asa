/* template_9xi94j8 service_u8d17mo d4_eGziFVhGB_BmRW*/

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
  
    emailjs
      .sendForm(
        'service_u8d17mo',
        'template_9xi94j8',
        event.target,
        'd4_eGziFVhGB_BmRW'
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on dennisaryaneghtedari@gmail.com "
        );
      });
  }
  
  let isModalOpen = false;
  function toggleModal() {
     
      if (isModalOpen) {
          isModalOpen = false;
          return document.body.classList.remove("modal--open")
      }
      isModalOpen = true;
      document.body.classList += " modal--open"
  
  }
  
  
  
  
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
     document.body.classList.remove('modal--open')
    }
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* const text = document.querySelector(".title");
  const strText = text.textContent;
  const splitText = strText.split("");
  
  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
  
  let char = 0;
  let timer = setInterval(onTick, 100);
  
  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }
  
  function complete() {
    clearInterval(timer);
    timer = null;
  }
  */
  
  window.addEventListener('scroll', reveal);
  
  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
  
    for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 1;
  
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }
  