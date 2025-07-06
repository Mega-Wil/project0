window.addEventListener('pageshow', function () {
    document.querySelectorAll('.search-input').forEach(input => {
        input.value = '';
    });
}); 