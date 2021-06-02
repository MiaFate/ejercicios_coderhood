//3. Jugadores sospechosos
//En nuestro juego online tenemos un array de usuarios sospechosos
// que están usando un item que fue prohibido, obtener la lista
//de IDs de usuarios que en su inventario tengan dicho item.
// El item prohibido se llama "Katana de fuego".
const jugadores = [
    {
      ID: "1",
      clase: "mago",
      nivel: 35,
      inventario: ["Manzana", "Poción de maná", "Vara mágica"],
    },
    {
      ID: "2",
      clase: "ladron",
      nivel: 65,
      inventario: ["Daga", "Katana de fuego", "Poción de vida"],
    },
    {
      ID: "4",
      clase: "curandero",
      nivel: 73,
      inventario: ["Vara mágica", "Armadura ligera"],
    },
    {
      ID: "3",
      clase: "espadachin",
      nivel: 36,
      inventario: ["Casco de hierro", "Katana de fuego", "Pocíón de velocidad"],
    },
    {
      ID: "5",
      clase: "mago",
      nivel: 26,
      inventario: ["Carta de PecoPeco", "Oridecon", "Poción de concentración"],
    },
  ];

  function obtenerId(jugador) {
    return jugador.ID;
  }
  function tieneKatana(jugador) {
    return jugador.inventario.includes("Katana de fuego");
  }
  const arr = jugadores.filter(tieneKatana).map(obtenerId);
  
  console.log(arr);