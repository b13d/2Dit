import React from "react";

export function Task4() {
  const hanldeSubmit = async (event) => {
    event.preventDefault();

    const formElement = document.getElementById("form1");

    const formData = new FormData(formElement);

    console.log(formData.get("name"));
    console.log(formData.get("telephone"));
    console.log(formData.get("email"));

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      let result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="form__section">
      <h1 className="text-[70px] font-bold text-[white]">Оставите заявку</h1>
      <p className="text-[white] mb-5 text-[18px] tracking-wider">
        И наш специалист свяжется с вами
      </p>
      <form
        id="form1"
        method="post"
        className="grid gap-6 grid-cols-3 grid-rows-2"
        onSubmit={(e) => hanldeSubmit(e)}
      >
        <input
          name="name"
          required
          className="px-4 border border-[white] text-[white] placeholder:text-[white] bg-[#ffffff15]"
          type="text"
          placeholder="Ваше имя"
        />
        <div className="relative">
          <span className="input__tel__flag"></span>
          <input
            name="telephone"
            required
            className="px-4 pl-10 border w-full h-full  border-[white] text-[white] placeholder:text-[white] bg-[#ffffff15]"
            type="tel"
            placeholder="+7(___)___-__-__"
          />
        </div>
        <input
          name="email"
          required
          className="px-4 border border-[white] text-[white] placeholder:text-[white] bg-[#ffffff15]"
          type="email"
          placeholder="Эл.почта"
        />
        <p className="text-[white] text-[14px] max-w-[700px] col-span-2">
          Нажимая кнопку, я принимаю{" "}
          <span className="cursor-pointer underline text-[#EB7979]">
            пользовательское соглашение
          </span>
          , соглашаюсь с политикой конфиденциальности, условиями пользования
          сайтом, передачей и обработкой моих персональных данных
        </p>
        <button className="btn__form bg-[white] text-[black]" type="submit">
          Оформить заявку
        </button>
      </form>
    </section>
  );
}
