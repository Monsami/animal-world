
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const img = this.querySelector('img');
        if(img) {
            openLightbox(img.src);
        }
    });
});