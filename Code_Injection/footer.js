document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully');
    if (typeof ga === 'function') {
        ga('send', 'pageview');
    }
});
