$(window).scroll(function()
    {
     if ($(this).scrollTop() > 50) {
       $('.appheader-content').addClass('fixed-header');
    } else {
       $('.appheader-content').removeClass('fixed-header');
    }
    });

$(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('section').each(function(i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
                if ($(this).position().top <= windscroll + 1) {
                    $('.navigation-menu ul li a.active-menu').removeClass('active-menu');
                    $('.navigation-menu ul li a').eq(i).addClass('active-menu');
                }
            });

        } else {

            $('.navigation-menu ul li a .active').removeClass('active-menu');
            $('.navigation-menu ul li:first a').addClass('active-menu');
        }

        }).scroll();



/*--------------------------------------course review----------------------*/

// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}



$(document).ready(function()
    {
       $('.c_like button').click(function()
        {
            if($(this).hasClass('dislike'))
            {
                $(this).removeClass('dislike');
                $(this).addClass('liked');
            }
            else
            {
                $(this).removeClass('liked');
                $(this).addClass('dislike');
            }
        });
    });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
wow = new WOW(
        {
         boxClass: 'wow',      
         animateClass:'animated', 
         offset: 0,          
         mobile: false,       
        live: true        
        })
wow.init();

$(document).ready(function()
    {
        $('.humber-menu').click(function()
            {
                $('.mobile_side_menu').toggleClass('showmenu');
            });
        $('button.menu_close_btn').click(function()
            {
                $('.mobile_side_menu').removeClass('showmenu');
            });
    });