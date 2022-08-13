import { NavLink } from "react-router-dom";

function MainMenu({ onPoemsClick, onSeriesClick, onAutorClick }) {

    return (
        <nav className="menu__first">

            <NavLink id='1' to="/about" className="title menu__link"
                activeClassName="menu__link_active" onClick={onAutorClick}>Об авторе</NavLink>
            <NavLink id='2' to="/poems" className="title menu__link"
                activeClassName="menu__link_active" onClick={onPoemsClick}>Стихи</NavLink>
            <NavLink id='4' to="/serieslist" className="title menu__link"
                activeClassName="menu__link_active" onClick={onSeriesClick}>Циклы</NavLink>
            {/* <NavLink id='5' to="/media" className="title menu__link"
                activeClassName="menu__link_active" onClick={onMediaClick}>Заметки</NavLink> */}
        </nav>
    )
}

export default MainMenu;
