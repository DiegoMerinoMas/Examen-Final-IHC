$.get("header.html", contentToInject => {
    $("#header-placeholders").replaceWith(contentToInject);
});
$.get("footer.html", contentToInject => {
    $("#footer-placeholders").replaceWith(contentToInject);
});


