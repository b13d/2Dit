export const themesInput = [
  "Выплата неустойки по ДДУ",
  "Компенсация морального вреда",
  "Штраф в размере 50%",
  "Компенсация расходов по аренде жилья",
  "Компенсация убытков по ипотеке",
  "Возмещение иных расходов",
];

export function Task1() {
  let newArr = [];

  themesInput.map((value, index) => {
    newArr.push(
      <div key={index} class="select">
        <select>
          <option value={`${value}`}>{value}</option>
        </select>
      </div>
    );
    return true;
  });

  return (
    <div class="container">
      <section class="main">
        <aside class="main__text">
          <h1 class="main__title">
            На что рассчитывать при
            <br />
            взыскании неустойки по ДДУ?
          </h1>

          <p>
            Когда застройщик нарушает сроки сдачи по ДДУ, вы как дольщик имеете
            право требовать неустойку за просрочку, а также компенсацию убытков,
            вызванных этой просрочкой.
          </p>
          <p>
            Само собой, застройщику невыгодно добровольно выплачивать вам
            компенсацию. Когда дело доходит до суда, суд урезает сумму неустойки
            на основании ст. 333 ГК РФ. Это урезание практически неизбежно.
          </p>
          <p>
            Основная наша задача состоит в том, чтобы взыскать неустойку по ДДУ
            в максимальном размере, т.е. избежать сильного ее урезания. Вот что
            вы можете требовать от застройщика.
          </p>
        </aside>

        <div class="selections">{newArr}</div>
      </section>
    </div>
  );
}
