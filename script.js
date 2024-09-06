// Collection of images and videos
const mediaCollection = [
    'media/20240505_220424.jpg',
    'media/20240630_213123.jpg',
    'media/20240702_173424.jpg',
    'media/20240702_173426.jpg',
    'media/20240702_174351.jpg',
    'media/20240702_174409.jpg',
    'media/20240702_205418.jpg',
    'media/20240704_102605.jpg',
    'media/20240704_102607.jpg',
    'media/20240704_102621.jpg',
    'media/20240704_102623.jpg',
    'media/20240704_113258(0).jpg',
    'media/20240704_113300.jpg',
    'media/IMG-20240211-WA0023.jpg',
    'media/IMG-20240211-WA0024.jpg',
    'media/IMG-20240211-WA0027.jpg',
    'media/IMG-20240508-WA0009.jpg',
    'media/IMG-20240508-WA0013.jpg',
    'media/IMG-20240620-WA0001.jpg',
    'media/IMG-20240620-WA0002.jpg',
    'media/IMG-20240620-WA0003.jpg',
    'media/IMG-20240620-WA0005.jpg',
    'media/IMG-20240620-WA0007.jpg',
    'media/IMG-20240620-WA0008.jpg',
    'media/IMG-20240620-WA0009.jpg',
    'media/IMG-20240620-WA0010.jpg',
    'media/IMG-20240620-WA0011.jpg',
    'media/IMG-20240620-WA0012.jpg',
    'media/IMG-20240620-WA0013.jpg',
    'media/IMG-20240620-WA0014.jpg',
    'media/IMG-20240702-WA0105.jpg',
    'media/IMG-20240702-WA0106.jpg',
    'media/IMG-20240702-WA0107.jpg',
    'media/IMG-20240702-WA0108.jpg',
    'media/IMG-20240702-WA0119.jpg',
    'media/IMG-20240702-WA0136.jpg',
    'media/IMG-20240704-WA0045.jpg',
    'media/IMG-20240704-WA0045.jpg',
    'media/IMG-20240704-WA0048.jpg',
    'media/IMG-20240708-WA0158.jpg',
    'media/P7090177.jpg',
    'media/P7090183.jpg',
    'media/P7090241.jpg',
    'media/P7090242.jpg',
    'media/P7090271.jpg',
    'media/P7090272.jpg',
    'media/P7090273.jpg',
    'media/Screen_Recording_20240517_220033_Instagram.mp4',
    'media/Screenshot_20240702_140331_Gallery.jpg',
    'media/Screenshot_20240702_140352_Gallery.jpg',
    'media/Screenshot_20240702_141305_Gallery.jpg',
    'media/Screenshot_20240702_141320_Gallery.jpg',
    'media/Screenshot_20240702_141339_Gallery.jpg',
    'media/Screenshot_20240702_141414_Gallery.jpg',
    'media/Screenshot_20240702_141606_Gallery.jpg',
    'media/Screenshot_20240702_141910_Gallery.jpg',
    'media/Screenshot_20240702_141919_Gallery.jpg',
    'media/Screenshot_20240702_142121_Gallery.jpg',
    'media/Screenshot_20240702_142249_Gallery.jpg',
    'media/Snapchat-25721576.mp4',
    'media/Snapchat-43299055.jpg',
    'media/Snapchat-148558135.jpg',
    'media/Snapchat-256811469.jpg',
    'media/Snapchat-458981200.jpg',
    'media/Snapchat-572243041.jpg',
    'media/Snapchat-591248537.jpg',
    'media/Snapchat-609410953.jpg',
    'media/Snapchat-796328127.jpg',
    'media/Snapchat-937077977-1.jpg',
    'media/Snapchat-1011400522.jpg',
    'media/Snapchat-1035329385.jpg',
    'media/Snapchat-1115729425.jpg',
    'media/Snapchat-1298348067.jpg',
    'media/Snapchat-1423320303.jpg',
    'media/Snapchat-1464727168.jpg',
    'media/Snapchat-1511984831.jpg',
    'media/Snapchat-1673981410.mp4',
    'media/Snapchat-1704639472.jpg',
    'media/Snapchat-1710181779.jpg',
    'media/Snapchat-1805858133.jpg',
    'media/Snapchat-1914531543.jpg',
    'media/Snapchat-1962828438.jpg',
    'media/VID-20240820-WA0001.mp4'
];

const petals = document.querySelectorAll('.petal');
const endMessage = document.getElementById('end-message');
const restartButton = document.getElementById('restart-button');
let petalsPulledOut = 0;

// Array to keep track of which petals are pulled out
const petalStates = [false, false, false, false, false, false];

function handlePetalClick(event) {
    const petal = event.target;
    const index = Array.from(petals).indexOf(petal);

    if (!petalStates[index]) {
        // Mark this petal as pulled out
        petalStates[index] = true;
        petalsPulledOut++;
        petal.style.display = 'none';

        // Show media when petal is clicked
        const media = getRandomMedia();
        displayMedia(media);

        // Check if all petals are pulled out
        if (petalsPulledOut === petals.length) {
            showEndMessage();
        }
    }
}

function getRandomMedia() {
    const randomIndex = Math.floor(Math.random() * mediaCollection.length);
    return mediaCollection[randomIndex];
}

function displayMedia(media) {
    const mediaDisplay = document.getElementById('media-display');
    mediaDisplay.innerHTML = '';

    if (media.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = media;
        video.controls = true;
        mediaDisplay.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = media;
        mediaDisplay.appendChild(img);
    }
    mediaDisplay.style.display = 'block';
}

function showEndMessage() {
    endMessage.style.display = 'block';
}

function restart() {
    petals.forEach(petal => {
        petalStates.fill(false);
        petal.style.display = 'block'; // Reset petal states
    });
    petalsPulledOut = 0;
    endMessage.style.display = 'none';
    document.getElementById('media-display').innerHTML = '';
    document.getElementById('media-display').style.display = 'none'; // Clear media display
}

// Attach event listeners to petals
petals.forEach(petal => {
    petal.addEventListener('click', handlePetalClick);
});

// Attach event listener to restart button
restartButton.addEventListener('click', restart);

