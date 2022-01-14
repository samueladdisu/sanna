// Insert Menu Items here
// {
//     name: `Food Name`,
//     price: `food price`,
//     img: `assets/menu/the-image-name.jpg`
// }
var menu = {    
    breakfast:[
        {
            name:"Egg Firfir",
            img:"./assets/Breakfast/eggfirfir.jpg"
        },
        {
            name:"Fetira with eggs",
            img:"./assets/Breakfast/fetiraEgg.jfif"
        },
        {
            name:"Special Full",
            img:"./assets/Breakfast/specialFull.jfif"
        }
    ],
    lunchDinner:[
        {
            name:"Chiken with Rice",
            img:"./assets/Lunch Dinner/chickenRice.jpg"
        },
        {
            name:"Fahsa",
            img:"./assets/Lunch Dinner/fahsa.jpg"
        },
        {
            name:"Mendi",
            img:"./assets/Lunch Dinner/mendi.jpg"
        },
        {
            name:"Tibs",
            img:"./assets/Lunch Dinner/Tibs.jfif"
        }
        
    ],
    juice:[
        {
            name:"Papaya Juice",
            img:"./assets/Juice/papaya.jfif"
        },
        {
            name:"Mango Juice",
            img:"./assets/Juice/mango.jpg"
        },
        {
            name:"Orange Juice",
            img:"./assets/Juice/orange.jfif"
        },
        {
            name:"Pineapple Juice",
            img:"./assets/Juice/Pineapple Juice.jfif"
        }
    ],
    milkshakes:[
        {
            name:"Sanaa Special",
            img:"./assets/Juice/Special Milkshake.jpg"
        },
        {
            name:"Vanilla Milkshake ",
            img:"./assets/Juice/Vanilla Milkshake.jfif"
        },
    ]
        
}

populate();

$(window).scroll(function () {
    $(".intro-pic").css("background-position","50% " + ($(this).scrollTop() / 2.5) + "px");
    $(".about-us-pic").css("background-position","50% " + ($(this).scrollTop() / 2.5) + "px");
    $(".res-section").css("background-position","100% " + ($(this).scrollTop() / 4) + "px");
});

// Menu selection underlines
$(".select").click( function () {
    if ( !$(this).hasClass("selected") ) {
        $(".select").removeClass("selected");
        $(this).addClass("selected")
    }
})

// Display different Menus
$(".select").click(function () { 
    $(".menu").css("display", "none");
    switch ( $(this).attr("id") ) {
        case "bf":
            $("#bf-menu").css("display", "flex");
            break;
        case "ld":
            $("#ld-menu").css("display", "flex");
            break;
        case "jc":
            $("#jc-menu").css("display", "flex");
            break;
        case "hd":
            $("#hd-menu").css("display", "flex");
            break;
        default:
            break;
    }
});

function populate () {
    $.each( menu.breakfast, function( key,val ) {
        // Add to bf-menu
        $("#bf-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p></div>')
    });
    $.each( menu.lunchDinner, function( key,val ) {
        // Add to bf-menu
        $("#ld-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p></div>')
    });
    $.each( menu.juice, function( key,val ) {
        // Add to bf-menu
        $("#jc-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p></div>')
    });
    $.each( menu.milkshakes, function( key,val ) {
        // Add to bf-menu
        $("#hd-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p></div>')
    }); 
}

$("#open").on('click', function(){
    $(".mob-nav-menu").removeClass("hide");
})

$("#close").on('click', function(){
    $(".mob-nav-menu").addClass("hide");
})


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})