function openbox(id) {
    var all = document.querySelectorAll(".block-of-text");
    for (var i = 0; i < all.length; i++) {
        if (all[i].id == id) {
            all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
        } else {
            all[i].style.display = 'none';
        }
    }
}










