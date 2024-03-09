document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const imageUrl = reader.result;
            addImageToGallery(imageUrl);
        }
        reader.readAsDataURL(file);
    }
});

function addImageToGallery(imageUrl) {
    const gallery = document.getElementById('image-gallery');
    const img = document.createElement('img');
    img.src = imageUrl;
    gallery.appendChild(img);
}
