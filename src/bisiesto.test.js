import bisiesto from "./bisiesto.js";

describe("Saber si es un Año Bisiesto", () => {
  it("Todos los años divisibles por  400 SON años bisiestos", () => {
    expect(bisiesto(2000)).toEqual(true);
  });

  it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos", () => {
    expect(bisiesto(1700)).toEqual(false);
  });
});
