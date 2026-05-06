const whatsappNumber = "237694783482";

const productsData = [
  {
    id: "lait-vitamine-e",
    name: "Lait hydratant vitamine E",
    category: "soin",
    label: "Soin visage & corps",
    image: "assets/products/lait-hydratant-vitamine-e.png",
    price: null,
    size: "500 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Peaux matures, sèches ou ternes",
    description:
      "Un lait premium pensé pour apporter confort, douceur et éclat au quotidien.",
    benefits: ["Hydrate intensément", "Aide à révéler l’éclat", "Fini doux et soigné"],
    usage: "Appliquer sur peau propre matin et soir, puis masser jusqu’à absorption.",
  },
  {
    id: "lait-sexy-lady",
    name: "Lait Sexy Lady",
    category: "soin",
    label: "Lait signature",
    image: "assets/products/lait-sexy-lady.png",
    price: null,
    size: "500 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Peaux normales à sèches",
    description: "Un soin corps élégant pour une peau hydratée, satinée et lumineuse.",
    benefits: ["Hydratation intense", "Fini satiné", "Parfum féminin"],
    usage: "Utiliser quotidiennement sur le corps, idéalement après la douche.",
  },
  {
    id: "lait-lumiere",
    name: "Lait lumière",
    category: "soin",
    label: "Éclat naturel",
    image: "assets/products/lait-lumiere.png",
    price: null,
    size: "500 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Teints ternes, peaux en manque d’éclat",
    description: "Une texture lumineuse pour sublimer la peau avec un rendu plus uniforme.",
    benefits: ["Effet lumineux", "Peau plus douce", "Routine éclat quotidienne"],
    usage: "Appliquer régulièrement sur les zones souhaitées, en évitant les irritations.",
  },
  {
    id: "lait-clarifiant",
    name: "Lait clarifiant unifiant",
    category: "soin",
    label: "Soin unifiant",
    image: "assets/products/lait-clarifiant-unifiant.png",
    price: null,
    size: "500 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Peaux irrégulières ou en recherche d’uniformité",
    description: "Un lait premium pour accompagner une routine d’éclat et d’uniformité.",
    benefits: ["Aide à unifier", "Hydratation confortable", "Éclat naturel"],
    usage: "Appliquer le soir ou selon conseil personnalisé LB COSMETICS.",
  },
  {
    id: "serum-reparateur",
    name: "Sérum réparateur anti-taches",
    category: "soin",
    label: "Sérum ciblé",
    image: "assets/products/serum-reparateur-anti-taches.png",
    price: null,
    size: "30 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Zones marquées, teint irrégulier",
    description: "Un sérum ciblé pour accompagner les routines anti-taches et éclat.",
    benefits: ["Cible les taches", "Texture légère", "S’intègre facilement à la routine"],
    usage: "Déposer quelques gouttes sur les zones ciblées, puis hydrater.",
  },
  {
    id: "huile-eclat",
    name: "Huile éclat nourrissante",
    category: "soin",
    label: "Huile premium",
    image: "assets/products/huile-eclat-nourrissante.png",
    price: null,
    size: "100 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Visage & corps, peaux sèches",
    description: "Une huile dorée pour nourrir la peau et lui apporter un fini lumineux.",
    benefits: ["Nourrit en profondeur", "Apporte de l’éclat", "Fini élégant"],
    usage: "Chauffer quelques gouttes dans les mains, puis masser sur peau propre.",
  },
  {
    id: "gommage-chevre",
    name: "Gommage lait de chèvre & abricot",
    category: "soin",
    label: "Gommage corps",
    image: "assets/products/gommage-lait-chevre-abricot.png",
    price: null,
    size: "250 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Peaux ternes ou rugueuses",
    description: "Un gommage premium pour une peau plus douce, plus nette et lumineuse.",
    benefits: ["Exfolie en douceur", "Peau douce", "Éclat & pureté"],
    usage: "Utiliser 1 à 2 fois par semaine sur peau humide, puis rincer.",
  },
  {
    id: "creme-reparatrice",
    name: "Crème réparatrice",
    category: "soin",
    label: "Réparation",
    image: "assets/products/creme-reparatrice.png",
    price: null,
    size: "50 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Peaux fragilisées, sèches ou inconfortables",
    description: "Une crème au positionnement premium pour nourrir, protéger et réparer.",
    benefits: ["Nourrit", "Protège", "Répare en profondeur"],
    usage: "Appliquer sur les zones concernées selon le besoin.",
  },
  {
    id: "serum-jaune-dore",
    name: "Sérum jaune doré",
    category: "soin",
    label: "Cure éclat",
    image: "assets/products/serum-jaune-dore.png",
    price: null,
    size: "50 ml",
    availability: "Disponible, prix à confirmer",
    skin: "Teints ternes ou irréguliers",
    description: "Une cure premium de 14 jours pour accompagner l’éclat de la peau.",
    benefits: ["Routine courte", "Éclat visible", "Présentation premium"],
    usage: "Utiliser en cure selon les recommandations LB COSMETICS.",
  },
  {
    id: "savon-super-eclaircissant",
    name: "Savon super éclaircissant",
    category: "savon",
    label: "Pack visage & corps",
    image: "assets/products/savon-super-eclaircissant-box.png",
    price: 27500,
    size: "Pack de 27 savons",
    availability: "Disponible",
    skin: "Visage & corps, tous types de peaux selon tolérance",
    description: "Un pack savon premium pour clientes et revendeuses, avec prix visible.",
    benefits: ["Pack économique", "Prix unique", "Idéal revente ou routine complète"],
    usage: "Utiliser progressivement, puis hydrater la peau après nettoyage.",
  },
  {
    id: "savons-ronds",
    name: "Savons ronds premium",
    category: "savon",
    label: "Savons signature",
    image: "assets/products/savons-ronds-panier.png",
    price: 2000,
    size: "Unité",
    availability: "Disponible",
    skin: "Visage & corps",
    description: "Des savons colorés au rendu boutique, présentés pour l’achat à l’unité.",
    benefits: ["Prix clair", "Format pratique", "Idéal pour tester"],
    usage: "Faire mousser, appliquer, rincer puis hydrater.",
  },
  {
    id: "volume-curl",
    name: "Volume curl premium",
    category: "cheveux",
    label: "Perruque bouclée",
    image: "assets/products/perruque-volume-curl.png",
    price: null,
    size: "Sur demande",
    availability: "Disponible selon stock",
    skin: "Texture bouclée naturelle",
    description: "Une perruque volumineuse pour un look féminin, moderne et affirmé.",
    benefits: ["Volume riche", "Texture visible", "Rendu naturel"],
    usage: "Coiffer délicatement, conserver sur support après utilisation.",
  },
  {
    id: "sleek-lace",
    name: "Sleek lace premium",
    category: "cheveux",
    label: "Perruque lisse",
    image: "assets/products/perruque-sleek-lace.png",
    price: null,
    size: "Sur demande",
    availability: "Disponible selon stock",
    skin: "Lisse brillant",
    description: "Une lace lisse et élégante pour un rendu propre, chic et intemporel.",
    benefits: ["Raie nette", "Brillance miroir", "Look sophistiqué"],
    usage: "Brosser avec soin et protéger de la chaleur excessive.",
  },
  {
    id: "natural-wave",
    name: "Natural wave",
    category: "cheveux",
    label: "Perruque ondulée",
    image: "assets/products/perruque-natural-wave.png",
    price: null,
    size: "Sur demande",
    availability: "Disponible selon stock",
    skin: "Ondulation souple",
    description: "Une texture ondulée premium, idéale pour une allure élégante et naturelle.",
    benefits: ["Ondulations souples", "Fini féminin", "Pose élégante"],
    usage: "Redessiner les ondulations avec les doigts ou une brosse adaptée.",
  },
  {
    id: "silk-straight",
    name: "Silk straight",
    category: "cheveux",
    label: "Cheveux lisses",
    image: "assets/products/cheveux-silk-straight.png",
    price: null,
    size: "Sur demande",
    availability: "Disponible selon stock",
    skin: "Lisse soyeux",
    description: "Une texture lisse premium au fini brillant, idéale pour un look luxe.",
    benefits: ["Brillance soyeuse", "Coupe nette", "Rendu catalogue"],
    usage: "Conserver à plat ou sur support, démêler avec douceur.",
  },
];

const formatPrice = (price) => (price ? `${price.toLocaleString("fr-FR")} FR` : "Prix à confirmer");

const productGrid = document.querySelector("[data-products]");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const filters = document.querySelectorAll("[data-filter]");
const cartPanel = document.querySelector("[data-cart]");
const cartOpen = document.querySelector("[data-cart-open]");
const cartCloseButtons = document.querySelectorAll("[data-cart-close]");
const cartCount = document.querySelector("[data-cart-count]");
const cartList = document.querySelector("[data-cart-list]");
const cartTotal = document.querySelector("[data-cart-total]");
const whatsappOrder = document.querySelector("[data-whatsapp-order]");
const detail = document.querySelector("[data-detail]");
const cart = new Map();
let activeProduct = null;

const productById = (id) => productsData.find((product) => product.id === id);

const buildWhatsAppUrl = (singleProduct) => {
  const lines = ["Bonjour LB COSMETICS, je souhaite commander :"];

  if (singleProduct) {
    lines.push(`- ${singleProduct.name} (${formatPrice(singleProduct.price)})`);
  } else if (cart.size) {
    cart.forEach((quantity, id) => {
      const product = productById(id);
      lines.push(`- ${quantity} x ${product.name} (${formatPrice(product.price)})`);
    });
    lines.push(`Total estimé : ${cartTotal.textContent}`);
  } else {
    lines.push("Je souhaite recevoir un conseil beauté.");
  }

  lines.push("Merci de me confirmer la disponibilité, le prix final et la livraison.");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
};

const renderProducts = () => {
  productGrid.innerHTML = productsData
    .map(
      (product) => `
        <article class="product-card" data-category="${product.category}" data-product="${product.id}">
          <button class="product-open" type="button" data-open-product="${product.id}">
            <img class="product-visual-img" src="${product.image}" alt="${product.name}" />
          </button>
          <div class="product-info">
            <p>${product.label}</p>
            <h3>${product.name}</h3>
            <span>${product.description}</span>
            <dl class="product-meta">
              <div><dt>Format</dt><dd>${product.size}</dd></div>
              <div><dt>Stock</dt><dd>${product.availability}</dd></div>
            </dl>
            <div class="product-buy">
              <strong>${formatPrice(product.price)}</strong>
              <button type="button" data-add="${product.id}">Ajouter</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const renderCart = () => {
  const totalItems = [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
  const total = [...cart.entries()].reduce((sum, [id, quantity]) => {
    const product = productById(id);
    return sum + (product.price || 0) * quantity;
  }, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = total ? formatPrice(total) : "À confirmer";
  whatsappOrder.href = buildWhatsAppUrl();
  cartList.innerHTML = "";

  if (!cart.size) {
    cartList.innerHTML = "<p class=\"empty-cart\">Aucun produit pour l’instant.</p>";
    return;
  }

  cart.forEach((quantity, id) => {
    const product = productById(id);
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <strong>${product.name}</strong>
        <span>${formatPrice(product.price)}</span>
        <div class="quantity">
          <button type="button" data-dec="${id}" aria-label="Réduire">−</button>
          <span>${quantity}</span>
          <button type="button" data-inc="${id}" aria-label="Augmenter">+</button>
        </div>
      </div>
      <button class="remove" type="button" data-remove="${id}" aria-label="Retirer">×</button>
    `;
    cartList.append(row);
  });
};

const addToCart = (id) => {
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  openCart();
};

const openCart = () => {
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
};

const closeCart = () => {
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
};

const openDetail = (id) => {
  const product = productById(id);
  activeProduct = product;
  detail.hidden = false;
  detail.querySelector("[data-detail-image]").src = product.image;
  detail.querySelector("[data-detail-image]").alt = product.name;
  detail.querySelector("[data-detail-category]").textContent = product.label;
  detail.querySelector("[data-detail-title]").textContent = product.name;
  detail.querySelector("[data-detail-description]").textContent = product.description;
  detail.querySelector("[data-detail-price]").textContent = formatPrice(product.price);
  detail.querySelector("[data-detail-usage]").textContent = product.usage;
  detail.querySelector("[data-detail-skin]").textContent = product.skin;
  detail.querySelector("[data-detail-size]").textContent = `${product.size} · ${product.availability}`;
  detail.querySelector("[data-detail-whatsapp]").href = buildWhatsAppUrl(product);
  detail.querySelector("[data-detail-benefits]").innerHTML = product.benefits
    .map((benefit) => `<li>${benefit}</li>`)
    .join("");

  const recommended = productsData
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3);
  detail.querySelector("[data-recommended]").innerHTML = recommended
    .map(
      (item) => `
        <button type="button" class="recommended-card" data-open-product="${item.id}">
          <img src="${item.image}" alt="${item.name}" />
          <span>${item.name}</span>
        </button>
      `,
    )
    .join("");

  detail.scrollIntoView({ behavior: "smooth", block: "start" });
};

renderProducts();
renderCart();
updateHeader();

window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) document.body.classList.remove("menu-open");
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelectorAll(".product-card").forEach((product) => {
      product.classList.toggle(
        "is-hidden",
        filter !== "all" && product.dataset.category !== filter,
      );
    });
  });
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const openButton = event.target.closest("[data-open-product]");
  const incButton = event.target.closest("[data-inc]");
  const decButton = event.target.closest("[data-dec]");
  const removeButton = event.target.closest("[data-remove]");

  if (addButton) addToCart(addButton.dataset.add);
  if (openButton) openDetail(openButton.dataset.openProduct);
  if (incButton) {
    cart.set(incButton.dataset.inc, (cart.get(incButton.dataset.inc) || 0) + 1);
    renderCart();
  }
  if (decButton) {
    const id = decButton.dataset.dec;
    const nextQuantity = (cart.get(id) || 1) - 1;
    if (nextQuantity <= 0) cart.delete(id);
    else cart.set(id, nextQuantity);
    renderCart();
  }
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    renderCart();
  }
});

cartOpen.addEventListener("click", openCart);
cartCloseButtons.forEach((button) => button.addEventListener("click", closeCart));

document.querySelector("[data-detail-close]").addEventListener("click", () => {
  detail.hidden = true;
});

document.querySelector("[data-detail-add]").addEventListener("click", () => {
  if (activeProduct) addToCart(activeProduct.id);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    document.body.classList.remove("menu-open");
  }
});
