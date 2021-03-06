
# Описание #

Шаблон проекта веб-приложения (одностраничник).

Серверная часть написана на Javascript на платформе Node.js с использованием micro-web-framework Express.

Клиентская часть также пишется на JavaScript и использует клиентский MVC предоставляемый Ember.

# Установка #

Клонируем репозиторий в свою папку с проектами:

	git clone --depth 2 https://github.com/Chicker/cljs_ember_tem.git <my_project> 
	rm -Rf <my_project>/.git

Затем запустить разрешение зависимостей:

	npm install

# Сборка проекта #

Сборка проекта осуществляется при помощи Grunt.

# Запуск #

1. Запуск сервера

    Задача `grunt server`.
    Запускает Node.js в режиме supervisor и автоматически отслеживает изменения в исходных кодах.

2. Компиляция клиента и автоматическое отслеживание изменений

    `grunt`

# Особенности #

Все JS-зависимости (JQuery, Ember и Handlebars) включаются при помощи
`<script type="text/javascript" ...` в главный и единственный html-файл приложения index.html.
