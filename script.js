// Capture Button Event Handling
const captureButton = document.getElementById('captureButton');
let captureCount = 0;

captureButton.addEventListener('click', () => {
    captureCount++;
    captureButton.textContent = `Moment Captured ${captureCount}x`;
    captureButton.style.backgroundColor = captureCount % 2 === 0 ? '#d35400' : '#e67e22';
});

captureButton.addEventListener('mouseover', () => {
    captureButton.style.transform = 'scale(1.1)';
});

captureButton.addEventListener('mouseout', () => {
    captureButton.style.transform = 'scale(1)';
});

// Secret Double-Click Action (Shutter Effect)
captureButton.addEventListener('dblclick', () => {
    captureButton.classList.add('shutter');
    captureButton.textContent = 'Shutter Click!';
    setTimeout(() => {
        captureButton.classList.remove('shutter');
        captureButton.textContent = `Moment Captured ${captureCount}x`;
    }, 400);
});

// Portfolio Gallery
const portfolioImage = document.getElementById('portfolioImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = [
    'https://picsum.photos/600/400?image=1',
    'https://picsum.photos/600/400?image=2',
    'https://picsum.photos/600/400?image=3',
    'https://picsum.photos/600/400?image=4'
];
let currentImageIndex = 0;

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    portfolioImage.style.opacity = '0';
    setTimeout(() => {
        portfolioImage.src = images[currentImageIndex];
        portfolioImage.style.opacity = '1';
    }, 300);
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    portfolioImage.style.opacity = '0';
    setTimeout(() => {
        portfolioImage.src = images[currentImageIndex];
        portfolioImage.style.opacity = '1';
    }, 300);
});

// Category Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Booking Form Validation
const form = document.getElementById('bookingForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

nameInput.addEventListener('input', () => {
    nameError.textContent = nameInput.value.trim() ? '' : 'Name is required';
});

emailInput.addEventListener('input', () => {
    emailError.textContent = validateEmail(emailInput.value) ? '' : 'Invalid email format';
});

messageInput.addEventListener('input', () => {
    messageError.textContent = messageInput.value.length >= 10 ? '' : 'Message must be at least 10 characters';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    if (messageInput.value.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        isValid = false;
    }

    if (isValid) {
        alert('Booking request sent successfully!');
        form.reset();
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
    }
});

// Keypress Detection (Spacebar for Shutter)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        captureButton.click();
    }
});