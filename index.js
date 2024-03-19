document.addEventListener("DOMContentLoaded", function() {
    
    // Find the image element with id 'headshot'
    let headshot = document.getElementById('headshot');
    let info = document.getElementById('info');
    let title = document.getElementById('title');
    let map = document.getElementById('map');
    let projButton = document.getElementById('proj-button');
    let resume = document.getElementById('resume');
    // Add a mouseenter event listener to the image element
    headshot.addEventListener('click', function() {
        // Change the image source when hovering over the image

        headshot.style.backgroundColor = "#2B3035";
        headshot.classList.add('fade-image');
        setTimeout(function() {
            info.style.visibility = "visible";
            info.classList.add("fade-left-across");
            setTimeout(function() {
                title.style.visibility = "visible";
                title.classList.add("fade-left");
                setTimeout(function() {
                projButton.style.visibility = "visible";
                projButton.classList.add("fade-in");
                setTimeout(function(){
                    resume.style.visibility = "visible";
                    resume.classList.add("fade-in");
                },500);
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

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || html.clientHeight) &&
          rect.right <= (window.innerWidth || html.clientWidth)
        );
      }
            // Function to handle scrolling and add swipe class to elements in viewport
        function handleScroll() {
            var hobby = document.getElementById("hobbies");
            var projInfo = document.querySelectorAll('.proj-text');
            var contact = document.getElementById('contact');
            var job = document.getElementById('job-opps');
            var contactInfo = document.getElementsByClassName('contact-sources');
            
            
            projInfo.forEach(function(element) {
                if (isInViewport(element)) {
                    element.classList.add('fade-left');
                }
            });
            if(isInViewport(hobby))
            {
                hobby.classList.add('fade-up');
            }
            if(isInViewport(contact))
            {
                contact.classList.add('fade-left');
            }
            if(isInViewport(contact))
            {
                setTimeout(function(){job.classList.add('fade-right');
                setTimeout(function(){
                    document.getElementById('connect').classList.add('fade-left');
                    setTimeout(function(){
                        for (var i = 0; i < contactInfo.length; i++) {
                            (function(index) {
                                setTimeout(function() {
                                    contactInfo[index].classList.add('fade-up');
                                }, 250 * index); // Apply a different delay for each iteration
                            })(i);
                        }

                    },1000)
                },1000)},1000)

                
                
            }
        }
    
        // Attach event listener for scroll event
        window.addEventListener('scroll', handleScroll);
    
        // Initially call the function to add swipe class to elements in viewport on page load
        window.addEventListener('load', handleScroll);
    
});
