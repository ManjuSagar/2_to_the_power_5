//cerner_2^5_2022
Array.prototype.forEach.call(document.querySelectorAll('.js-comment-delete button'), function(el, i) {
    el.removeAttribute('data-confirm');
    el.click();
});
