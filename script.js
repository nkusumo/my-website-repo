const images = document.getElementsByTagName('img');

function changeOpacity(image) {
    let opacityPct = parseInt(image.style.opacity);
    if (opacityPct > 0.1) {
        image.style.opacity = "0.1";
    }
    else {
        image.style.opacity = "1";
    }
}

for (let i=0; i < images.length; i++) {
    images[i].addEventListener('click', function() { changeOpacity(images[i]) });
}