// Default images (local paths)
const defaultImages = [
    '../img/WhatsA4.21_9424a526.jpg',
    '../img/WhatsA6c20e16d.jpg',
    '../img/WhatsAp.05.52_25a938c3.jpg',
    '../img/WhatsAp21dfad6e.jpg',
    '../img/WhatsApp04.14.20_316ae0b0.jpg',
    '../img/WhatsAp_6e1bef76.jpg',
    '../img/greatPose.jpg',
    '../img/galleryStaring.jpg',
    '../img/makeawish.jpg',
    '../img/glasHapp.jpg',
    '../img/tiob.jpg',
    '../img/sibil.jpg',
    '../img/sibli.jpg',
    '../img/sibloi.jpg',
    '../img/tioCaffee.jpg'
    // Add more default image paths here if needed
];

// Function to add images to the gallery
function addImagesToGallery(imageUrls) {
    const gallery = document.getElementById('image-gallery');
    imageUrls.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        gallery.appendChild(img);
    });
}

// Add default images to the gallery
addImagesToGallery(defaultImages);

// Event listener for adding new images
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

// Function to add a single image to the gallery
function addImageToGallery(imageUrl) {
    const gallery = document.getElementById('image-gallery');
    const img = document.createElement('img');
    img.src = imageUrl;
    gallery.appendChild(img);

    // Save the image URL to local storage
    const images = JSON.parse(localStorage.getItem('userImages')) || [];
    images.push(imageUrl);
    localStorage.setItem('userImages', JSON.stringify(images));
}

// Function to load user's images from local storage
function loadUserImages() {
    const images = JSON.parse(localStorage.getItem('userImages')) || [];
    addImagesToGallery(images);
}

// Load user's images when the page loads
loadUserImages();
