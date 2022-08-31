// To-top
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixedNav) {
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('block');
  });
  
  // Klik di luar hamburger
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.remove('block');
    }
  });
  
  // Darkmode toggle
  const darkToggle = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');
  const toggleDark = document.querySelector('#toggle-dark');
  const toggleLight = document.querySelector('#toggle-light');
  const darkButton = document.querySelector('.dark-button');
  const geo = document.querySelector('#geografis');
  const btm = document.querySelector('#batam');
  
  darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
      html.classList.add('dark');
      html.classList.remove('light');
      localStorage.theme = 'dark';
      toggleLight.classList.remove('hidden');
      toggleDark.classList.add('hidden');
      darkButton.classList.remove('dark-switch');
      darkButton.classList.add('light-switch');
      geo.classList.add('bg-dark');
      geo.classList.remove('bg-light');
      btm.classList.add('bg-dark');
      btm.classList.remove('bg-light');

    } else {
      html.classList.add('light');
      html.classList.remove('dark');
      localStorage.theme = 'light';
      toggleLight.classList.add('hidden');
      toggleDark.classList.remove('hidden');
      darkButton.classList.remove('light-switch');
      darkButton.classList.add('dark-switch');
      geo.classList.add('bg-light');
      geo.classList.remove('bg-dark');
      btm.classList.add('bg-light');
      btm.classList.remove('bg-dark');
    }
  });
  
  // toggle sesuai mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    toggleLight.classList.remove('hidden');
    darkButton.classList.add('light-switch');
    geo.classList.add('bg-dark');
    geo.classList.remove('bg-light');
    btm.classList.add('bg-dark');
    btm.classList.remove('bg-light');
  } else {
    darkToggle.checked = false;
    toggleDark.classList.remove('hidden');
    darkButton.classList.add('dark-switch');
    geo.classList.add('bg-light');
    geo.classList.remove('bg-dark');
    btm.classList.add('bg-light');
    btm.classList.remove('bg-dark');
  }

  // scroll
  window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".transisi");
    
    for(let i = 0; i < elements.length; i++){
        let heightWindow = window.innerHeight;
        let topElement = elements[i].getBoundingClientRect().top;
        if(topElement < heightWindow - 200){
            elements[i].classList.add("kembali");
        }else{
            elements[i].classList.remove("kembali");
        }
    }
  })