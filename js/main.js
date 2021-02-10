$(document).ready(function(){
    // Intro Carousel
    if($("#intro").length){
        $('#intro .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            items:1
        })
    }

    if($("#new-products").length){
        $('#new-products .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                },
                1500:{
                    items:6
                }
            }
        })

        $("#new-products .product").on("mouseenter",function(){
            $("#zip").css("margin-top","-60px")
        })
        $("#new-products .product").on("mouseleave",function(){
            $("#zip").css("margin","0px")
            console.log("wprk");
        })
    }

    if($("#custome").length){
        $('#custome .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1.5
                },
                600:{
                    items:2.5
                },
                1000:{
                    items:3
                },
                1500:{
                    items:5
                }
            }
        })

        $("#custome .product").on("mouseenter",function(){
            $("#laptops").css("margin-top","-60px")
        })
        $("#custome .product").on("mouseleave",function(){
            $("#laptops").css("margin","0px")
            console.log("wprk");
        })
    }

    if($("#laptops").length){
        $('#laptops .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1.5
                },
                600:{
                    items:2.5
                },
                1000:{
                    items:3
                },
                1500:{
                    items:5
                }
            }
        })
        $("#laptops .product").on("mouseenter",function(){
            $("#desktops").css("margin-top","-60px")
        })
        $("#laptops .product").on("mouseleave",function(){
            $("#desktops").css("margin","0px")
            console.log("wprk");
        })
    }

    if($("#desktops").length){
        $('#desktops .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1.5
                },
                600:{
                    items:2.5
                },
                1000:{
                    items:3
                },
                1500:{
                    items:5
                }
            }
        })
        $("#desktops .product").on("mouseenter",function(){
            $("#gaming").css("margin-top","-60px")
        })
        $("#desktops .product").on("mouseleave",function(){
            $("#gaming").css("margin","0px")
            console.log("wprk");
        })
    }

    if($("#gaming").length){
        $('#gaming .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1.5
                },
                600:{
                    items:2.5
                },
                1000:{
                    items:3
                },
                1500:{
                    items:5
                }
            }
        })

        $("#gaming .product").on("mouseenter",function(){
            $("#pattern").css("margin-top","-60px")
        })
        $("#gaming .product").on("mouseleave",function(){
            $("#pattern").css("margin","0px")
            console.log("wprk");
        })
    }

    if($("#pattern").length){
        $('#pattern .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:5000,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                },
                1500:{
                    items:7
                }
            }
        })
    }
    if($("#testimonial").length){
        $('#testimonial .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            items:1
                
            
        })
    }

    if($("#category").length){
        $("#category .category-item h5").click(function() {
            if($( "#category .category-item i").hasClass("fa-angle-down")){
                $( "#category .category-item i").removeClass("fa-angle-down").addClass("fa-angle-up")
            }
            else{
                $( "#category .category-item i").removeClass("fa-angle-up").addClass("fa-angle-down")
            }
            $( "#category .category-item .list").slideToggle();
        });

        $("#category .price h5").click(function() {
            if($( "#category .price i").hasClass("fa-angle-down")){
                $( "#category .price i").removeClass("fa-angle-down").addClass("fa-angle-up")
            }
            else{
                $( "#category .price i").removeClass("fa-angle-up").addClass("fa-angle-down")
            }
            $( "#category .price .list").slideToggle();
        });

        $("#category .color h5").click(function() {
            if($( "#category .color i").hasClass("fa-angle-down")){
                $( "#category .color i").removeClass("fa-angle-down").addClass("fa-angle-up")
            }
            else{
                $( "#category .color i").removeClass("fa-angle-up").addClass("fa-angle-down")
            }
            $("#category .color .list").slideToggle();
        });
        
        $("#category .filter-name h5").click(function() {
            if($( "#category .filter-name i").hasClass("fa-angle-down")){
                $( "#category .filter-name i").removeClass("fa-angle-down").addClass("fa-angle-up")
            }
            else{
                $( "#category .filter-name i").removeClass("fa-angle-up").addClass("fa-angle-down")
            }
            $("#category .filter-name .list").slideToggle();
        });
    }

    if($(".bottom-header").length){
        console.log("work 1")
        if(window.innerWidth < 991.98){
            $(".navbar-toggler").click(function(){
                console.log("work -2");
                if(!$(".bottom-header .navbar .navbar-collapse").hasClass("show")){
                    $(".user-basket").removeClass("d-flex").addClass("d-none")
                }else{
                    console.log("work-3");
                    $(".user-basket").removeClass("d-none").addClass("d-flex")
                }
            })
            
            

        };
    }
})