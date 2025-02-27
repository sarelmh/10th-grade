// chat.js

document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message');
    const fileInput = document.getElementById('file-input');
    const messagesDiv = document.getElementById('messages');

    const message = messageInput.value;
    const file = fileInput.files[0];

    // إنشاء عنصر لعرض الرسالة
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    // إنشاء عناصر لعرض الملفات (صور، فيديوهات، أصوات)
    if (file) {
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
            }
            messageElement.appendChild(element);
        };
        reader.readAsDataURL(file);
    }

    messagesDiv.appendChild(messageElement);
    messageInput.value = '';
    fileInput.value = '';
});