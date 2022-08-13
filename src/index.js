import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


if (module.hot) {
    module.hot.accept();
}

reportWebVitals();

//todo -План
//      -1. Фильтрация стихов по тегам с показом на отдельной странице с новой картинкой в хедере
// -2. Создать меню в хедере
// -3. Сделать дефолтные картинки (для циклов)
// -4. Сделать поиск
// -5. Сделать главную с показом разных рубрик
// -6 Сделать в карточке блок репостов в сети
//  -Доп
// -1. Сделать отдельную страницу для видео с подгрузкой из ютуба
// -2. Сделать показ значка аудио и загрузки аудио в карточке
// -3
