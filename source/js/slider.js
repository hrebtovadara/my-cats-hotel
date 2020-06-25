
function glideOptions() {
    const perView = getPerViewCount()
    return {
        type: "slider",
        startAt: 0,
        gap: 30,
        focusAt: 0,
        perView
    }
}

var glide = new Glide('.glide', glideOptions()).mount();

glide.on('resize', function () {
    glide.update(glideOptions());
})

function getPerViewCount() {
    if (window.innerWidth >= 1366) {
        return 2.5
    } else if (window.innerWidth >= 768) {
        return 1.5
    } else {
        return 1
    }
}
