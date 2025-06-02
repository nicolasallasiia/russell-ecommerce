const productos = [
  // Cervezas
  { id: 1, nombre: "IPA", precio: 500, imagen: "/images/ipa.jpg", categoria: "cervezas" },
  { id: 2, nombre: "Stout", precio: 600, imagen: "/images/stout.jpg", categoria: "cervezas" },
  { id: 3, nombre: "Red Ale", precio: 550, imagen: "/images/redale.jpg", categoria: "cervezas" },
  { id: 4, nombre: "Lager", precio: 450, imagen: "/images/lager.jpg", categoria: "cervezas" },
  { id: 5, nombre: "Blonde Ale", precio: 520, imagen: "/images/blondeale.jpg", categoria: "cervezas" },
  { id: 6, nombre: "Porter", precio: 580, imagen: "/images/porter.jpg", categoria: "cervezas" },

  // Tragos
  { id: 7, nombre: "Mojito", precio: 800, imagen: "/images/mojito.jpg", categoria: "tragos" },
  { id: 8, nombre: "Margarita", precio: 850, imagen: "/images/margarita.jpg", categoria: "tragos" },
  { id: 9, nombre: "Negroni", precio: 900, imagen: "/images/negroni.jpg", categoria: "tragos" },
  { id: 10, nombre: "Martini", precio: 950, imagen: "/images/martini.jpg", categoria: "tragos" },
  { id: 11, nombre: "Daiquiri", precio: 870, imagen: "/images/daiquiri.jpg", categoria: "tragos" },
  { id: 12, nombre: "Whiskey Sour", precio: 920, imagen: "/images/whiskeysour.jpg", categoria: "tragos" },
  { id: 13, nombre: "Gin Tonic", precio: 880, imagen: "/images/gintonic.jpg", categoria: "tragos" },
  { id: 14, nombre: "Caipirinha", precio: 840, imagen: "/images/caipirinha.jpg", categoria: "tragos" },
  { id: 15, nombre: "Piña Colada", precio: 910, imagen: "/images/pinacolada.jpg", categoria: "tragos" },
  { id: 16, nombre: "Bloody Mary", precio: 930, imagen: "/images/bloodymary.jpg", categoria: "tragos" },
  { id: 17, nombre: "Mai Tai", precio: 950, imagen: "/images/maitai.jpg", categoria: "tragos" },
  { id: 18, nombre: "Long Island Iced Tea", precio: 980, imagen: "/images/longisland.jpg", categoria: "tragos" },
  { id: 19, nombre: "Campari", precio: 870, imagen: "/images/campari.jpg", categoria: "tragos" },
  { id: 20, nombre: "Caipiroska de Frutos Rojos", precio: 850, imagen: "/images/caipiroskafr.jpg", categoria: "tragos" },
  { id: 21, nombre: "Carpano Rosso", precio: 900, imagen: "/images/carpanorosso.jpg", categoria: "tragos" },
  { id: 22, nombre: "Fernet Branca", precio: 700, imagen: "/images/fernet.jpg", categoria: "tragos" },
  { id: 23, nombre: "Jägermeister", precio: 800, imagen: "/images/jagger.jpg", categoria: "tragos" },
  { id: 24, nombre: "Limonada", precio: 750, imagen: "/images/limonada.jpg", categoria: "tragos" },

  // Menú
  { id: 25, nombre: "Picada Frita", precio: 1200, imagen: "/images/picadafrita.jpg", categoria: "menu" },
  { id: 26, nombre: "Picada Salame", precio: 2000, imagen: "/images/picadasalame.jpg", categoria: "menu" },
  { id: 27, nombre: "Hamburguesa", precio: 1500, imagen: "/images/hamburguesa.jpg", categoria: "menu" },
  { id: 28, nombre: "Sandwich", precio: 1900, imagen: "/images/sandwich.jpg", categoria: "menu" },
  { id: 29, nombre: "Sandwich Milanesa", precio: 2000, imagen: "/images/sandwichmilanesa.jpg", categoria: "menu" },
  { id: 30, nombre: "Chicken Fingers", precio: 600, imagen: "/images/chickenfingers.jpg", categoria: "menu" },
  { id: 31, nombre: "Pizza Pepperoni", precio: 1200, imagen: "/images/pizzapepperoni.jpg", categoria: "menu" },
  { id: 32, nombre: "Papas Fritas", precio: 500, imagen: "/images/papasfritas.jpg", categoria: "menu" },
  { id: 33, nombre: "Pizza Champiñones", precio: 1200, imagen: "/images/pizzachampinones.jpg", categoria: "menu" },
  { id: 34, nombre: "Empanadas", precio: 800, imagen: "/images/empanadas.jpg", categoria: "menu" },
  { id: 35, nombre: "Bastones de Muzzarella", precio: 700, imagen: "/images/bastonesmuzzarella.jpg", categoria: "menu" },
  { id: 36, nombre: "Aros de Cebolla", precio: 600, imagen: "/images/aroscebolla.jpg", categoria: "menu" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === id));
    }, 1000);
  });
};

export const getProductsByCategory = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoria));
    }, 1000);
  });
};
