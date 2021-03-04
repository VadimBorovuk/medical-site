$(document).ready(function(){

    $(".burger__menu-link").each(function (){
        this.click(function (){
            $(".burger-menu").removeClass("active");
            $(".burger-icon").removeClass("active");
        })
    })


    $(".burger-icon").click(function () {
        $(".burger-icon").toggleClass('active')
        $(".burger-menu").toggleClass('active');
    });


    $('ul li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(1).fadeIn(100);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(1).fadeOut(100);
    });
})




// let trigger = document.querySelector('.burger-icon')
// let box = document.querySelector('.burger-menu')
// let btns = document.querySelectorAll('.burger__menu-link')


// trigger.addEventListener('click', function() {
//     this.classList.toggle('active')
//     box.classList.toggle('active');
// });

//
// btns.forEach(item => {
//     item.addEventListener('click', function () {
//         box.classList.remove('active');
//         trigger.classList.remove('active');
//     })
// })

