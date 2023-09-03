export function Task2() {
  let arrCards = [];

  for (let i = 0; i < 12; i++) {
    arrCards.push(
      <div className="card">
        <img src="/images/card-1.png" alt="card__image"></img>

        <div className="card__info">
          <p>Кресла театральные</p>
          <h3 className="title__card">Театральное кресло Прайм</h3>
          <p>
            Артикул: <span className="articul__number">789-2341</span>
          </p>
          <p>
            от: <span className="price">6 762 </span>р
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="cards">
      <div className="card">
        <div className="img__card">
          <p className="badge__top badge__top-red">Хит продаж</p>
          <p className="badge__bottom">В наличии</p>

          <img src="/images/card-1.png" alt="card__image"></img>
        </div>
        <div className="card__info">
          <p>Кресла театральные</p>
          <h3 className="title__card">Театральное кресло Прайм</h3>
          <p>
            Артикул: <span className="articul__number">789-2341</span>
          </p>
          <p>
            от: <span className="price">6 762 </span>р
          </p>
        </div>
      </div>
      <div className="card">
        <div className="img__card">
          <p className="badge__top badge__top-yellow">Акция</p>
          <p className="badge__bottom">В наличии</p>
          <img src="/images/card-2.png" alt="card__image"></img>
        </div>
        <div className="card__info">
          <p>Кресла театральные</p>
          <h3 className="title__card">Театральное кресло Прайм</h3>
          <p>
            Артикул: <span className="articul__number">789-2341</span>
          </p>
          <p>
            от: <span className="price">6 762 </span>р
          </p>
        </div>
      </div>
      <div className="card">
        <div className="img__card">
          <p className="badge__top badge__top-green">Новинка</p>
          <p className="badge__bottom">В наличии</p>
          <img src="/images/card-1.png" alt="card__image"></img>
        </div>
        <div className="card__info">
          <p>Кресла театральные</p>
          <h3 className="title__card">Театральное кресло Прайм</h3>
          <p>
            Артикул: <span className="articul__number">789-2341</span>
          </p>
          <p>
            от: <span className="price">6 762 </span>р
          </p>
        </div>
      </div>
      {arrCards.map((value) => {
        return value
      })}
    </section>
  );
}
