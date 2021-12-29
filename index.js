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
            price:300,
            img:"./assets/Breakfast/eggfirfir.jpg"
        },
        {
            name:"Fetira with eggs",
            price:200,
            img:"./assets/Breakfast/fetiraEgg.jfif"
        },
        {
            name:"Special Full",
            price:200,
            img:"./assets/Breakfast/specialFull.jfif"
        }
    ],
    lunchDinner:[
        {
            name:"Chiken with Rice",
            price:600,
            img:"./assets/Lunch Dinner/chickenRice.jpg"
        },
        {
            name:"Fahsa",
            price:300,
            img:"./assets/Lunch Dinner/fahsa.jpg"
        },
        {
            name:"Mendi",
            price:430,
            img:"./assets/Lunch Dinner/mendi.jpg"
        },
        {
            name:"Tibs",
            price:300,
            img:"./assets/Lunch Dinner/Tibs.jfif"
        }
        
    ],
    juice:[
        {
            name:"Papaya Juice",
            price:100,
            img:"./assets/Juice/papaya.jfif"
        },
        {
            name:"Mango Juice",
            price:120,
            img:"./assets/Juice/mango.jpg"
        },
        {
            name:"Orange Juice",
            price:120,
            img:"./assets/Juice/orange.jfif"
        },
        {
            name:"Pineapple Juice",
            price:100,
            img:"./assets/Juice/Pineapple Juice.jfif"
        }
    ],
    milkshakes:[
        {
            name:"Sanaa Special",
            price:35,
            img:"./assets/Juice/Special Milkshake.jpg"
        },
        {
            name:"Vanilla Milkshake ",
            price:20,
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
        $("#bf-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
    });
    $.each( menu.lunchDinner, function( key,val ) {
        // Add to bf-menu
        $("#ld-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
    });
    $.each( menu.juice, function( key,val ) {
        // Add to bf-menu
        $("#jc-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
    });
    $.each( menu.milkshakes, function( key,val ) {
        // Add to bf-menu
        $("#hd-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
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