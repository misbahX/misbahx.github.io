const select = (el, all=false) => {
    el = el.trim()
    if ( all ) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el);
    }
}

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
}

// navbar active with scroll
let list = select('.list__items', true);
const navbarLinkActive = () => {
    let position = window.scrollY + 200;
    list.forEach(li => {
        if (!li.hash) return
        let section = select(li.hash);
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
}

// loader
const loading = select('.operlay');
console.log(loading)
window.addEventListener('load', function() {
    loading.style.display = "none";
})


onscroll(document, navbarLinkActive);
window.addEventListener('load', navbarLinkActive);

// ketika di scroll sticky active
window.addEventListener('scroll', function() {
    let header = select('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// when skill clicked
const navLink = select('.nav-link', true)

navLink.forEach(nav => {
    nav.addEventListener('click', function() {
        nav.classList.toggle('active')

        let tabNavLink = this.parentElement;
        let tabThis = tabNavLink.querySelector('.tab-pane');
        
        if (this.className === 'nav-link active') {
            tabThis.classList.add('active')
        } else {
            tabThis.classList.remove('active')
        }
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = select(".services__modal", true);
const modalBtns = select(".services__button", true);
const modalCloses = select(".services__modal-close", true);

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
  console.log(modalViews[modalClick]);
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});


// function kirim pesan whatsapps
const btn = select('.btn-kirim-wa', false);
const inputNama = select('.nama-kirim-wa'),
      inputPesan = select('.pesan-kirim-wa');

btn.addEventListener('click', function() {
  let nama = inputNama.value;
  let pesan = inputPesan.value;
  let parameter = `Halo, saya ${nama}, ${pesan}`;

  window.open('https://api.whatsapp.com/send?phone=6285641054319&text='+parameter);
})


// navigasi mobile active 
const togle = select('.toggle'),
    navMenuMobile = select('.nav-menu-mobile')
togle.addEventListener('click', function() {
    navMenuMobile.classList.toggle('active');
})
