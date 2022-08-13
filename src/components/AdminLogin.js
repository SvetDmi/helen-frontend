import React from "react";

function AdminLogin({onLogin}) {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onSubmit(e) {
        e.preventDefault();
        onLogin(login, password)
    }

    const onLoginChange = (e) => {
        setLogin(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <section className="page__section">
            <form
                name="admin"
                action="#"
                method="post"
                className="popup__container"
                noValidate
                onSubmit={onSubmit}
            >
                <h3>Введите логин и пароль администратора</h3>
                <input
                    type="text"
                    name="login"
                    autoComplete="username"
                    value={login || ''}
                    placeholder="Логин"
                    className="editor__input"
                    onChange={onLoginChange}
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    value={password || ''}
                    placeholder="Пароль"
                    className="editor__input"
                    onChange={onPasswordChange}
                />

                <button type="submit"
                        className="button button__save"

                > Сохранить
                </button>

            </form>
        </section>
    )
}

export default AdminLogin;
