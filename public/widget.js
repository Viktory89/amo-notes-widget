(function() {
    console.log("Виджет загружен!");

    // Функция рендеринга интерфейса
    function renderWidget() {
        let widgetContainer = document.createElement('div');
        widgetContainer.style.padding = "10px";
        widgetContainer.style.border = "1px solid #ccc";
        widgetContainer.style.width = "100%";

        let heading = document.createElement('h2');
        heading.innerText = 'Заметки';
        widgetContainer.appendChild(heading);

        let textarea = document.createElement('textarea');
        textarea.id = 'user-input';
        textarea.rows = 5;
        textarea.style.width = "100%";
        widgetContainer.appendChild(textarea);

        let saveButton = document.createElement('button');
        saveButton.innerText = 'Сохранить';
        saveButton.style.marginTop = "10px";
        saveButton.onclick = saveText;
        widgetContainer.appendChild(saveButton);

        // Добавляем в блок AmoCRM
        let widgetBlock = document.querySelector('.cell-wrapper');
        if (widgetBlock) {
            widgetBlock.innerHTML = ''; // Очищаем перед добавлением
            widgetBlock.appendChild(widgetContainer);
        }

        // Загружаем сохраненный текст
        loadText();
    }

    // Функция сохранения текста
    function saveText() {
        let userInput = document.getElementById('user-input').value;
        localStorage.setItem('widgetText', userInput); // Храним в localStorage
        alert('Текст сохранен!');
    }

    // Функция загрузки сохраненного текста
    function loadText() {
        let savedText = localStorage.getItem('widgetText');
        if (savedText) {
            document.getElementById('user-input').value = savedText;
        }
    }

    // Ждем загрузку AmoCRM и рендерим виджет
    setTimeout(renderWidget, 1000);
})();
