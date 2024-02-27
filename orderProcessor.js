//Adding an array that has the menu items and prices for easy access

menu = {
    "RockinRollNachos":8.99,
    "SoulfulSpinach":8.49,
    "DiscoDip":12.99,
    "RegRumaki":10.99,
    "BohemianRhap":12.99,
    "JoplinJazzy":10.00,
    "SgtPepper":12.49,
    "AvaSunToast":8.99,
    "SunScramBowl":8.49,
    "BanaBoatPan":9.99,
    "PsychVegWrap":11.99,
    "RetroRainbow":12.99,
    "HippyChicken":12.99,
    "WoogieBoogie":15.99,
    "FoxyFett":19.99,
    "PurpleHaze":19.99,
    "DiscoInferno":29.99,
    "StairwaySirloin":39.99,
    "DiscoDiva":9.99,
    "FoxyFizz":12.99,
    "RetroRocket":7.99
}

//Initializing the total value

let total = 0

//This function goes through all of the inputs for the quantity box, and checks to see if they're over 10 or under 0, and then adds the price of the item to the total variable for later use.

function run() {
    console.log('e')
    let total = 0
    m1 = document.getElementById("RockinRollNachos").value
    if (m1>10){
        m1 = 10
        document.getElementById("RockinRollNachos").value = 10;
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("RockinRollNachos").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.RockinRollNachos*m1)
    }


    m1 = document.getElementById("SoulfulSpinach").value
    if (m1>10){
        m1 = 10
        document.getElementById("SoulfulSpinach").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("SoulfulSpinach").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.SoulfulSpinach*m1)
    }


    m1 = document.getElementById("DiscoDip").value
    if (m1>10){
        m1 = 10
        document.getElementById("DiscoDip").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("DiscoDip").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.DiscoDip*m1)
    }


    m1 = document.getElementById("RegRumaki").value
    if (m1>10){
        m1 = 10
        document.getElementById("RegRumaki").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("RegRumaki").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.RegRumaki*m1)
    }


    m1 = document.getElementById("BohemianRhap").value
    if (m1>10){
        m1 = 10
        ocument.getElementById("BohemianRhap").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("BohemianRhap").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.BohemianRhap*m1)
    }


    m1 = document.getElementById("JoplinJazzy").value
    if (m1>10){
        m1 = 10
        document.getElementById("JoplinJazzy").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("JoplinJazzy").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.JoplinJazzy*m1)
    }


    m1 = document.getElementById("SgtPepper").value
    if (m1>10){
        m1 = 10
        document.getElementById("SgtPepper").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("SgtPepper").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.SgtPepper*m1)
    }


    m1 = document.getElementById("AvaSunToast").value
    if (m1>10){
        m1 = 10
        document.getElementById("AvaSunToast").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("AvaSunToast").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.AvaSunToast*m1)
    }
    

    m1 = document.getElementById("SunScramBowl").value
    if (m1>10){
        m1 = 10
        document.getElementById("SunScramBowl").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("SunScramBowl").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.SunScramBowl*m1)
    }


    m1 = document.getElementById("BanaBoatPan").value
    if (m1>10){
        m1 = 10
        document.getElementById("BanaBoatPan").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("BanaBoatPan").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.BanaBoatPan*m1)
    }


    m1 = document.getElementById("PsychVegWrap").value
    if (m1>10){
        m1 = 10
        document.getElementById("PsychVegWrap").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("PsychVegWrap").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.PsychVegWrap*m1)
    }
    

    m1 = document.getElementById("RetroRainbow").value
    if (m1>10){
        m1 = 10
        document.getElementById("RetroRainbow").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("RetroRainbow").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.RetroRainbow*m1)
    }


    m1 = document.getElementById("HippyChicken").value
    if (m1>10){
        m1 = 10
        document.getElementById("HippyChicken").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("HippyChicken").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.HippyChicken*m1)
    }


    m1 = document.getElementById("WoogieBoogie").value
    if (m1>10){
        m1 = 10
        document.getElementById("WoogieBoogie").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("WoogieBoogie").value = 0
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.WoogieBoogie*m1)
    }


    m1 = document.getElementById("FoxyFett").value
    if (m1>10){
        m1 = 10
        document.getElementById("FoxyFett").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("FoxyFett").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.FoxyFett*m1)
    }


    m1 = document.getElementById("PurpleHaze").value
    if (m1>10){
        m1 = 10
        document.getElementById("PurpleHaze").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("PurpleHaze").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.PurpleHaze*m1)
    }


    m1 = document.getElementById("DiscoInferno").value
    if (m1>10){
        m1 = 10
        document.getElementById("DiscoInferno").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("DiscoInferno").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.DiscoInferno*m1)
    }


    m1 = document.getElementById("StairwaySirloin").value
    if (m1>10){
        m1 = 10
        document.getElementById("StairwaySirloin").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("StairwaySirloin").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.StairwaySirloin*m1)
    }


    m1 = document.getElementById("DiscoDiva").value
    if (m1>10){
        m1 = 10
        document.getElementById("DiscoDiva").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("DiscoDiva").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.DiscoDiva*m1)
    }


    m1 = document.getElementById("FoxyFizz").value
    if (m1>10){
        m1 = 10
        document.getElementById("FoxyFizz").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("FoxyFizz").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.FoxyFizz*m1)
    }
    

    m1 = document.getElementById("RetroRocket").value
    if (m1>10){
        m1 = 10
        document.getElementById("RetroRocket").value = 10
        alert('You can only select a maximum of 10 items of each menu item.')
    }
    if (m1<0){
        m1 = 0
        document.getElementById("RetroRocket").value = 0;
        alert('You Cannot Select Less Than 0 Of One Item.')
    }
    if (m1>0){
        total = total + (menu.RetroRocket*m1)
    }

    //Creates variables for HST and total cost.

    hst = total * 0.15
    totalHST = total+hst

    //Rounds off the totals to two decimal places.

    total = (Math.round(total * 100) / 100).toFixed(2);
    hst = (Math.round(hst * 100) / 100).toFixed(2);
    totalHST = (Math.round(totalHST * 100) / 100).toFixed(2);

    //Updating HTML to match the totals.

    document.getElementById("subTotal").innerHTML = `Subtotal: $${total}`
    document.getElementById("hst").innerHTML = `HST: $${hst}`
    document.getElementById("ordTotal").innerHTML = `Order Total: $${totalHST}`
    document.getElementById("prog").innerHTML = 'Your Order is in Progress and Will Be Ready in 20 Minutes.'
}