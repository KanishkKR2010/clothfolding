// Example JavaScript to toggle additional details on the features
document.addEventListener("DOMContentLoaded", function() {
    const featureList = document.querySelectorAll("#features li");
    
    featureList.forEach((item) => {
        item.addEventListener("click", function() {
            alert("More details about: " + item.textContent);
        });
    });
});
