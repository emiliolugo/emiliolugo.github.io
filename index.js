document.addEventListener("DOMContentLoaded", function() {
    // Find the image element with id 'headshot'
    let headshot = document.getElementById('headshot');
    let info = document.getElementById('info');
    let title = document.getElementById('title');
    let map = document.getElementById('map');
    let projButton = document.getElementById('proj-button');
    // Add a mouseenter event listener to the image element
    headshot.addEventListener('click', function() {
        // Change the image source when hovering over the image
        headshot.classList.add('fade-image');
        setTimeout(function() {
            info.style.visibility = "visible";
            info.classList.add("swipe");
            setTimeout(function() {
                title.style.visibility = "visible";
                title.classList.add("swipe-center");
                setTimeout(function() {
                projButton.style.visibility = "visible";
                projButton.classList.add("fade-in");
                },750);

            }, 750);
        }, 500);
    });
    var repeat = 0;
    

    map.addEventListener('mouseenter', function() {
        var travelElements = document.getElementsByClassName("travel");
        
        if(repeat < 1){
        repeat = 1;
        //Change ? to 0s
        for (var i = 0; i < travelElements.length; i++) {
            travelElements[i].innerHTML = "0";
        }
        //Animations for all 3 things
        var counter = 0;
        var increment = 1;
        var duration = 2000; // Animation duration in milliseconds
        var citynum = document.getElementById('citynum');
        var countrynum = document.getElementById('countrynum');
        var contnum = document.getElementById('contnum');

        var updateCounter = setInterval(function() {
            citynum.innerHTML = counter;
            if (counter < 4)
            {
            countrynum.innerHTML = counter;
            }
            if (counter < 6)
            {contnum.innerHTML = counter;}
            counter += increment;

            // Stop the animation when the counter reaches 100
            if (counter > 100) {
                clearInterval(updateCounter);
                citynum.innerHTML = ("100+");
            }
        }, duration / (100 / increment));}
    });
});
