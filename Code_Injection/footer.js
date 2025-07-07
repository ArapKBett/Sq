// This remains the same as it's generic tracking code
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully');
    if (typeof ga === 'function') {
        ga('send', 'pageview');
    }
});
