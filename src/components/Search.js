import React from "react";

function Search({ handleFilterCards, handleClearSearch, cards }) {
    const [search, setSearch] = React.useState("");
    const [datatype, setDatatype] = React.useState("text");

    function handleFilter(e) {
        console.log(e.target.dataset)
        setDatatype(e.target.dataset.type)
    }

    const filterCards = () => {
        handleFilterCards(cards, search, datatype)
    }

    const clearSearch = () => {
        setSearch('')
        setDatatype('text')
        handleClearSearch()
    }

    return (
        <div className="search">
            <div className="search__input-field">
                <input
                    className="search__input"
                    placeholder="Введите слова, название или год"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className="search__btn"
                    onClick={() => filterCards(cards, search, datatype)}
                >
                    Поиск
                </button>

                <button
                    className="search__btn"
                    onClick={() => clearSearch(search, datatype)}                >
                    Очистить
                </button>
            </div>
            <div className="search__filter">
                <label>
                    <input
                        className="search-round"
                        name="type"
                        type="radio"
                        data-type="text"
                        onChange={handleFilter}
                        checked={datatype === "text"}
                    />
                    <span className="search-round">Текст</span>
                </label>
                <label>
                    <input
                        className="search-round"
                        name="type"
                        type="radio"
                        data-type="title"
                        onChange={handleFilter}
                        checked={datatype === "title"}
                    />
                    <span className="search-round">Название</span>
                </label>
                <label>
                    <input
                        className="search-round"
                        name="type"
                        type="radio"
                        data-type="wrote"
                        onChange={handleFilter}
                        checked={datatype === "wrote"}
                    />
                    <span className="search-round">Год</span>
                </label>
            </div>
        </div>
    );
}

export { Search };