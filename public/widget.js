define(['jquery'], function ($) {
    return {
        init: function () {
            console.log('AmoCRM Widget Initialized');

            let self = this;

            // Создаем контейнер виджета
            let widgetContainer = `
                <div class="widget-container" style="padding: 10px;">
                    <h3 style="margin-bottom: 5px;">Заметки</h3>
                    <textarea id="note-text" rows="5" style="width: 100%; border: 1px solid #ccc;"></textarea>
                    <button id="save-note" style="margin-top: 10px;">Сохранить</button>
                </div>
            `;

            // Добавляем контейнер в AmoCRM
            self.$wrapper.html(widgetContainer);

            // Загружаем сохраненный текст
            let savedNote = localStorage.getItem('amocrm_widget_note');
            if (savedNote) {
                $('#note-text').val(savedNote);
            }

            // Обработчик кнопки "Сохранить"
            $('#save-note').on('click', function () {
                let noteText = $('#note-text').val();
                localStorage.setItem('amocrm_widget_note', noteText);
                alert('Заметка сохранена!');
            });

            return true;
        },
    };
});
