document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('Added to cart!');
        });
    });
}); 