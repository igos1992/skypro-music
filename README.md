# skypro-music

Аналог популярного музыкально приложения

## Урок

Redux. Асинхронность

## Первоначальная оценка

40 час

## Фактически затраченное время

41 час

## Регистрация
Пользователь может зарегистрироваться в приложении

## Авторизация - Стартовый экран
Пользователь может авторизоваться в приложении ("войти") и выйти из него

## Главный экран
Главный экран, на котором отражаются все доступные треки. Во время загрузки показывается экран скелетона.

## Аудиоплеере
Изначально нижний плеер скрыт. Он показывается, только когда пользователь нажимает на любой из треков. При перезагрузке страницы плеер тоже скрыт.
Пользователь может лайкать понравившиеся треки и снимать лайки, если передумал.
Пользователь может управлять воспроизведением музыки (переключать вперед/назад, перемешивать треки, делать цикличность, уменьшать/увеличивать звук)

## Поиск - на всех страницах
Пользователь вводит название трека в строке «Поиск», и происходит фильтрация треков по названию.

## Фильтрация по исполнителю и жанру - только на главной странице
При нажатии на «исполнителю» или «жанру» пользователь видит выпадающее меню
Пользователь может выбрать несколько исполнителей/жанров одновременно, в списке ниже отобразятся только треки выбранных исполнителей/жанров.
Если одновременно выбран и фильтр по жанру и по исполнителю, то отобразятся только треки которые подходят под оба фильтра.

## Сортировка по дате релиза - только на главной странице
Пользователь может сортировать треки тремя способами: по умолчанию (как приходит из апи), от старых к новым и от новых к старым.

## Экраны подборок: «Классическая музыка», «Электронная музыка», «Рок музыка»
В каждой подборке отображается список треков соответствующий названию. Во время загрузки показывается экран скелетона.

## Экран «Мои треки»
Экран с подборкой треков, которые пользователь добавил в избранное (лайкнул). Во время загрузки показывается экран скелетона.

## Лайки на страниах "Главная", "Категории"
Пользователь может лайкать понравившиеся треки. Треки будут добавляться на страницу "Мои треки"

## Дизлайки на страниах "Главная", "Категории", "Мои треки"
Пользователь может поставить дизлайкать трекам. Треки будут удаляться со страницу "Мои треки"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
