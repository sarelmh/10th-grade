// scripts.js

const users = [];

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    const newUser = { email, password, phone, : selectedClass };
    users.push(newUser);
    alert('تم التسجيل بنجاح!');

    // عرض رابط الدعوة للانضمام إلى مجموعة واتساب
    const welcomeSection = document.getElementById('welcome');
    const whatsappLink = document.getElementById('whatsapp-link');
    whatsappLink.href = ' https://chat.whatsapp.com/FCsP42lklCv2PXyBUVXKaH'; // استبدل YOUR_INVITE_LINK برابط الدعوة لمجموعتك
    welcomeSection.style.display = 'block';

    sessionStorage.setItem('loggedIn', 'true');
    showContent();
});

function showContent() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.id !== 'register' && section.id !== 'home' && section.id !== 'chat') {
                section.style.display = 'none';
            }
        });
    } else {
        showContent();
    }
});

// تحميل وعرض ملفات الأقسام الدراسية
function handleFileUpload(event, displayElementId) {
    event.preventDefault();
    const fileInput = event.target.querySelector('input[type="file"]');
    const files = fileInput.files;
    const displayElement = document.getElementById(displayElementId);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            let element;
            if (file.type.startsWith('image/')) {
                element = document.createElement('img');
                element.src = e.target.result;
            } else if (file.type.startsWith('video/')) {
                element = document.createElement('video');
                element.src = e.target.result;
                element.controls = true;
            } else if (file.type.startsWith('audio/')) {
                element = document.createElement('audio');
                element.src = e.target.result;
                element.controls = true;
            } else if (file.type.endsWith('.pdf')) {
                element = document.createElement('embed');
                element.src = e.target.result;
                element.type = 'application/pdf';
                element.width = '100%';
                element.height = '600px';
            }

            displayElement.appendChild(element);
        };

        reader.readAsDataURL(file);
    }
}

document.getElementById('ar-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'ar-display');
});

document.getElementById('math-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'math-display');
});

document.getElementById('physics-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'physics-display');
});

document.getElementById('chemistry-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'chemistry-display');
});

document.getElementById('biology-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'biology-display');
});

document.getElementById('french-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'french-display');
});

document.getElementById('english-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'english-display');
});

document.getElementById('philosophy-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'philosophy-display');
});

document.getElementById('geography-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'geography-display');
});

document.getElementById('history-upload-form').addEventListener('submit', function(event) {
    handleFileUpload(event, 'history-display');
});