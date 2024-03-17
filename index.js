document.addEventListener("DOMContentLoaded", function() {
    // Find the image element with id 'headshot'
    let headshot = document.getElementById('headshot');
    let info = document.getElementById('info');
    let title = document.getElementById('title');
    // Add a mouseenter event listener to the image element
    headshot.addEventListener('click', function() {
        // Change the image source when hovering over the image
        
            headshot.classList.add('fade-image')
            setTimeout(function() {
        info.style.visibility = "visible";
        info.classList.add("swipe");
        setTimeout(function() {
            title.style.visibility = "visible";
            title.classList.add("swipe-center");
        }, 750); }, 500);
        
    });
});

