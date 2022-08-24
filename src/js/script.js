const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});

menuList.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.progress__bar-counter');
const lines = document.querySelectorAll('.progress__bar-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('.sidepanel').fadeIn();
    } else {
      $('.sidepanel').fadeOut();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            checkb: "required"
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
            },
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        }
    });
  }
 
validateForms('.contacts__form');


  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('form').trigger('reset');
  });
  return false;
});