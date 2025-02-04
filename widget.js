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
    saveButton.onclick = function() {
        console.log('Кнопка нажата');
        saveText();
    };
    widgetContainer.appendChild(saveButton);

    // Добавим контейнер на страницу
    document.body.appendChild(widgetContainer);

    // Загружаем текст при загрузке
    loadText();

    // Добавим стили для виджета
    const style = document.createElement('style');
    style.innerHTML = `
      #widget-container {
        padding: 10px;
        border: 1px solid #ccc;
        width: 300px;
      }
      textarea {
        width: 100%;
        height: 100px;
        padding: 10px;
      }
      button {
        margin-top: 10px;
      }
    `;
    document.head.appendChild(style);
};

// Функция для сохранения текста в localStorage
function saveText() {
    const userInput = document.getElementById('user-input').value;
    localStorage.setItem('widgetText', userInput); // Сохраняем в localStorage
    console.log('Сохранено в localStorage:', userInput); // Логирование
    alert('Текст сохранен!');
}

// Функция для загрузки текста из localStorage
function loadText() {
    const savedText = localStorage.getItem('widgetText');
    if (savedText) {
        document.getElementById('user-input').value = savedText; // Восстанавливаем сохраненный текст
        console.log('Загружен текст из localStorage:', savedText); // Логирование
    }
}

