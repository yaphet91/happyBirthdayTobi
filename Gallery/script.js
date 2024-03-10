// Default media (local paths)
const defaultMedia = [
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
    '../img/tioCaffee.jpg',
    // Add default video paths here if needed
    '../BdTio/img/VID-20240215-WA0001.mp4',
];


// Function to add media to the gallery
function addMediaToGallery(mediaUrls) {
    const gallery = document.getElementById('media-gallery');
    mediaUrls.forEach(mediaUrl => {
        const media = typeof mediaUrl === 'string' ? createMediaElement(mediaUrl) : createMediaElementFromBlob(mediaUrl);
        gallery.appendChild(media);
    });
}

// Function to create media element from URL
function createMediaElement(url) {
    const element = url.endsWith('.mp4') ? 'video' : 'img';
    const media = document.createElement(element);
    media.src = url;
    if (element === 'video') {
        media.controls = true; // Add controls for videos
    }
    return media;
}

// Function to create media element from Blob
function createMediaElementFromBlob(blob) {
    const reader = new FileReader();
    const media = document.createElement('video');
    reader.onload = function(event) {
        media.src = event.target.result;
        media.controls = true; // Add controls for videos
    };
    reader.readAsDataURL(blob);
    return media;
}


// Add default media to the gallery
addMediaToGallery(defaultMedia);

// Event listener for adding new media
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const mediaUrl = reader.result;
            addSingleMediaToGallery(mediaUrl); // Use the correct function here
        }
        reader.readAsDataURL(file);
    }
});


// Function to add a single media to the gallery
function addSingleMediaToGallery(mediaUrl) {
    const gallery = document.getElementById('media-gallery');
    const element = mediaUrl.endsWith('.mp4') ? 'video' : 'img';
    const media = document.createElement(element);
    media.src = mediaUrl;
    media.controls = true; // Add controls for videos
    gallery.appendChild(media);

    // Save the media URL to local storage
    const mediaList = JSON.parse(localStorage.getItem('userMedia')) || [];
    mediaList.push(mediaUrl);
    localStorage.setItem('userMedia', JSON.stringify(mediaList));
}

// Function to load user's media from local storage
function loadUserMedia() {
    const mediaList = JSON.parse(localStorage.getItem('userMedia')) || [];
    addMediaToGallery(mediaList);
}

// Load user's media when the page loads
loadUserMedia();
