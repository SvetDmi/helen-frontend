import React from "react";
import { useHistory } from "react-router";
import { getNewsblock } from "../utils/api/newsApi";



const AdminEditorNews = ({ handleSubmit }) => {

    const history = useHistory();
    const [time, setTime] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [adress, setAdress] = React.useState('');
    const [link, setLink] = React.useState('');
    const [name, setName] = React.useState('');


    function handleTimeChange(e) {
        setTime(e.target.value);

    }

    function handleTitleChange(e) {
        setTitle(e.target.value);

    }

    function handleAdressChange(e) {
        setAdress(e.target.value);

    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function newsShow() {
        setName("newsshow")
    }

    function newsHide() {
        setName("newshide")
    }


    function onSubmit(e) {
        e.preventDefault();
        handleSubmit({
            name,
            time,
            title,
            adress,
            link
        })
    }


    React.useEffect(() => {
        getNewsblock()
            .then((data) => {
                setTime(data[0].time)
                setTitle(data[0].title)
                setAdress(data[0].adress)
                setLink(data[0].link)
                setName(data[0].name)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [])


    return (

        <div className="page__section editor__container">
            <button type="button" className="button button__close" onClick={history.goBack}></button>
            <form
                name="element"
                action="#"
                method="post"
                className="editor__form editor__form_news"
                noValidate
                onSubmit={onSubmit}>

                <h3 className="text3">Форма загрузки новости в хедер</h3>

                <label className="text_bold ">Дата и время</label>
                <input
                    id="inputTime"
                    type="text"
                    name="time"
                    value={time}
                    // placeholder="Обязательное поле"
                    className="editor__input  editor__input_news"
                    // required minLength="1" maxLength="30"
                    onChange={handleTimeChange} />

                <label className="text_bold ">Название</label>
                <input
                    id="inputTitle"
                    type="text"
                    name="title"
                    value={title}
                    // placeholder="Обязательное поле"
                    className="editor__input editor__input_news"
                    // required minLength="1" maxLength="30"
                    onChange={handleTitleChange} />

                <label className="text_bold  grid1">Адрес</label>
                <input
                    id="inputAdress"
                    type="text"
                    name="title"
                    value={adress}
                    // placeholder="Обязательное поле"
                    className="editor__input editor__input_news "
                    // required minLength="1" maxLength="30"
                    onChange={handleAdressChange} />

                <label className="text_bold  grid1">Ссылка</label>
                <input
                    id="inputLink"
                    type="text"
                    name="link"
                    value={link}
                    // placeholder="Необязательное поле"
                    className="editor__input editor__input_news"
                    // required minLength="1" maxLength="30"
                    onChange={handleLinkChange} />

                <div>

                    <button type="submit"
                        className="button button__save"
                        onClick={newsShow}

                    > Показать новость
                    </button>

                    <button type="submit"
                        className="button button__save"
                        onClick={newsHide}

                    > Скрыть новость
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminEditorNews;