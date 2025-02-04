{
  "widgets": [
    {
      "id": "notes_widget",
      "version": "1.0.0",
      "author": "Твое имя",
      "name": "Заметки",
      "description": "Простой виджет для заметок в AmoCRM",
      "base_url": "https://amo-notes-widget.onrender.com/", 
      "locations": {
        "dashboard": {
          "url": "widget.js"
        }
      }
    }
  ]
}
// widget.js
window.onload = function() {
    // Создаем элементы для виджета
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'widget-container';
    
    const heading = document.createElement('h2');
    heading.innerText = 'Заметки';
    widgetContainer.appendChild(heading);

    const label = document.createElement('label');
    label.setAttribute('for', 'user-input');
    label.innerText = 'Введите заметку:';
    widgetContainer.appendChild(label);

    const textarea = document.createElement('textarea');
    textarea.id = 'user-input';
    textarea.rows = 5;
    textarea.cols = 40;
    widgetContainer.appendChild(textarea);

    const saveButton = document.createElement('button');
    saveButton.innerText = 'Сохранить';
    saveButton.onclick = saveText;
    widgetContainer.appendChild(saveButton);

    // Добавим контейнер на страницу
    document.body.appendChild(widgetContainer);

    // Загружаем текст при загрузке
    loadText();
};

// Функция для сохранения текста в localStorage
function saveText() {
    const userInput = document.getElementById('user-input').value;
    localStorage.setItem('widgetText', userInput); // Сохраняем в localStorage
    alert('Текст сохранен!');
}

// Функция для загрузки текста из localStorage
function loadText() {
    const savedText = localStorage.getItem('widgetText');
    if (savedText) {
        document.getElementById('user-input').value = savedText; // Восстанавливаем сохраненный текст
    }
}
