import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="page__section">
        <div className="footer__block">
          <p className="text text6__autor">
            Сайт создан{" "}
            <a
              href="mailto:svedlana2012@gmail.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              ©SvetDmi
            </a>
          </p>
          <p className="text text6__autor">
            Все права на стихи принадлежат{" "}
            <a
              href="mailto:helenklo@gmail.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              ©Хелен
            </a>{" "}
            и охраняются{" "}
            <a
              href="http://www.consultant.ru/document/cons_doc_LAW_64629/0b318126c43879a845405f1fb1f4342f473a1eda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              законом{" "}
            </a>
          </p>
        </div>

        <p className="text text7__footer">
          Разрешены репосты стихов на личные страницы в соцсетях в
          некоммерческих целях с обязательным указанием автора и ссылки на сайт
          ("Автор Хелен Кловская. helen.spb.ru"). Во всех остальных случаях
          требуется согласие автора - связь по{" "}
          <a
            href="mailto:helenklo@gmail.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            почте.
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
