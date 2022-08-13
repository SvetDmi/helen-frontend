import avatar2 from "../images/avatar2.png";

export default function Autor() {
  return (
    <section className="page__section">
      <div className="autor">
        <h2 className="title">Здравствуйте! </h2>
        <p className="text text6__autor">
          Меня зовут Елена, но я взяла творческий псевдоним Хелен, потому что,
          так звучит польское имя моей Ленинградской бабушки, в честь которой
          меня назвали. И это отдельная блокадная история…
        </p>
        <p className="text text6__autor">
          Благодаря стихам я научилась писать и читать до школы. Азам
          стихосложения научил меня в детстве двоюродный дед - фронтовой
          корреспондент, член союза писателей УССР (Украинской советской
          социалистической республики - Семен Журахович, он же был моим
          критиком. Затем было вступление в Юношескую секцию Дальневосточного
          Отделения Союза Писателей СССР, под руководством Сигарева Евгения
          Игнатьевича, где я состояла еще несколько лет после возвращения в
          родной Ленинград.
        </p>
        <p className="text text6__autor">
          Дальше были 90-е годы. Недолгие сосуществования то там, то сям в
          окололитературной среде Ленинграда, Литвы, Петербурга. Однако жизнь
          плохо с этим сочеталась. Лишь в 2008 году, вступив в Международную
          ассоциацию поэтов-публицистов, я обрела наконец стабильность
          существования в поэтической среде.
        </p>
        <p className="text text6__autor">
          В ранние годы мои стихи публиковались в различных периодических
          изданиях. Выпущено несколько личных сборников стихов: "Разнолетие"
          (2008 г.), "Размышления о..." (2012 г.), "Любви, как вечности,
          страницы" (2013 г.), "Полвека стихов" (2021 г.). С 2009 по 2014 годы
          входила в редакционный совет серии сборников "Поэзия в ИТМО", в
          которых в том числе публиковались мои произведения. В 2003 году был
          выпущен сценарий стихотворной пьесы "Сценография любви", которая была
          поставлена в Учебном театре Санкт-Петербургской государственной
          академии театрального искусства (современное название Российский
          государственный институт сценических искусств). По просьбам друзей из
          театральной среды неоднократно писала песни для спектаклей.
        </p>
        <p className="text text6__autor">
          Весь мой путь, как личный, так и служебный, вся моя жизнь, пронизаны
          стихами, как венами - тело, как реками - земля.
        </p>

        <div className="autor__bottom">
          <div className="autor__text-conteiner">
            <p className="text text6__autor">
              Сейчас мне больше 55, темп и многие параметры жизни изменились,
              время подвести некие итоги и выходить на другой уровень мысли,
              чувства, осязания… или стареть. Я выбираю первое.
            </p>
            <p className="text text6__autor"> Сегодня я решаю – КТО Я?! </p>
            <p className="text text6__autor">
              {" "}
              Кто я и зачем, по итогу этих лет, дел и стихов.{" "}
            </p>
            <p className="text text6__autor">
              {" "}
              Знаете, по-моему самое главное, вы, люди рядом со мной.
            </p>
            <p className="text text6__autor"> Я вас люблю! </p>
            <p className="text text6__autor">
              {" "}
              Я люблю мой Ленинград-Петербург, как будто он живой организм,
              сущность. Для меня это именно так!{" "}
            </p>
            <p className="text text6__autor">
              {" "}
              Я люблю жизнь, как таковую, я просто люблю жить!{" "}
            </p>
            <p className="text text6__autor"> «И надеюсь, что это взаимно». </p>
          </div>
          <div className="autor__img-conteiner">
            <img className="autor__img" src={avatar2} alt="Фото автора" />
          </div>
        </div>
      </div>
    </section>
  );
}