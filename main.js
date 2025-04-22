$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times'); /*transforme les trois barres du menu en croix et inversement*/
        $('.navbar').toggleClass('nav-toggle');/*fais s'afficher le menu de la triple barre de menu*/
    });

    $(window).on('scroll load', function(){
        if($(window).scrollTop() < 25){
            $('.header').hide();    //masque la barre de menu si on est a la position superieure
        }
        else{
            $('.header').show();
        }
        $('.fa-bars').removeClass('fa-times'); /*transforme les trois barres du menu en croix et inversement*/
        $('.navbar').removeClass('nav-toggle');
    });

    $('.buttons').click(function(){
        var filter = $(this).attr('data-filter');
        if (filter == 'all'){
            $('.filter-image').show();
        }
        else{
            $('.filter-image').not('.'+filter).hide();
            $('.filter-image').filter('.'+filter).show();
        }
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.accordion-header').click(function(){
        $(this).next('.accordion .accordion-body').slideDown();         
        $('.accordion .accordion-header-content span').text('+');
        $(this).children('span').text('-'); 
    });
    $('.accordion-body').click(function(){
        $('.accordion .accordion-body').slideUp();     
        $('.accordion .accordion-header-content span').text('+');
        $(this).children('span').text('-'); 
    });
    $('.accordion-header-title').click(function(){
        $(this).next('.accordion .accordion-body').slideDown();         
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('?'); 
    });

    $('.count').each(function(){
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({countNum : $this.text() }).animate({
            countNum : countTo
        },
        {
             duration:3000,
             step: function(){
                $this.text(Math.floor(this.countNum));
             },
             complete : function(){
                $this.text(this.countNum);
             }
        }


        )
    })

});

//<!-- header section end-->

// Mode sombre
const toggle = document.getElementById("dark-mode-toggle");
const isDark = localStorage.getItem("cea-theme") === "dark";

// Appliquer le thème au chargement
if (isDark) {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️ Mode clair";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("cea-theme", mode);
    toggle.textContent = mode === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";
});
