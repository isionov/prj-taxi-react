# Приложение, разработанное в рамаках курса по React: Taxi

## Описание

Учебное приложение для заказа такси. Доступный функционал:

- авторизация
- заполнение платежных данных (сохраняются в LocalStorage)
- выбор начально и конечного пунктов маршрута из предоставленных сервером
- Построение маршрута на карте

использовал unit тесты для проверки логики, редьюсеров, саг.
Можно попробовать https://fast-fortress-98720.herokuapp.com/taxi
[Сервер](https://loft-taxi.glitch.me/) для этого проекта - удаленный на сервисе [glitch](https://glitch.com/)
Данные для авторизации:
Логин: test@test.com
Пароль: 123123

## Технологии

- React
- Redux
- Redux-Saga
- Material-UI
- Redux-Form
- CSS modules
- React-Router
- Redux-Actions
- Create-React-App
- Jest
- API MapBox

## Доступные команды

1. yarn - установка зависимостей
2. yarn start - запустить встроенный сервер и следить за изменениями файлов
3. yarn build - собрать проект в папку `build`
4. yarn test - запустить тесты

## Как развернуть

### Склонируйте репозиторий и перейдите в папку проекта

git clone https://github.com/isionov/prj-taxi-react.git

### Установите модули локально

npm install | yarn install

### Запустите сборку проекта. По умолчанию проект откроется на http://localhost:3000/

npm start | yarn start
