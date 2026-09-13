document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("messagePopup").style.display = "block";

    setTimeout(function() {
        document.getElementById("messagePopup").style.display = "none";
    }, 3000);

});