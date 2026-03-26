// --- CONFIGURAZIONE SPECIFICA DEL CLIENTE ---
const APP_CONFIG = {
    tipoLogo: "testo",
    testoLogo: "MAESTRO", 
    urlLogoImmagine: "",
    sfondo: {
        tipo: "colore",
        colore: "#f8f8f8",
        immagine: "" 
    },
    colori: {
        principale: "#c5a059",
        testo: "#1a1a1a",
        pulsanteAR: "#1a1a1a"
    }
};

const UI_TRANSLATIONS = {
    it: { home: "← Home", cat: "← Categorie", ar: "VEDI IN 3D", food: "CIBO", drinks: "BEVANDE" },
    en: { home: "← Home", cat: "← Categories", ar: "VIEW IN 3D", food: "FOOD", drinks: "DRINKS" },
    es: { home: "← Inicio", cat: "← Categorías", ar: "VER EN 3D", food: "COMIDA", drinks: "BEBIDAS" },
    fr: { home: "← Accueil", cat: "← Catégories", ar: "VOIR EN 3D", food: "NOURRITURE", drinks: "BOISSONS" },
    de: { home: "← Home", cat: "← Kategorien", ar: "IN 3D ANSEHEN", food: "ESSEN", drinks: "GETRÄNKE" },
    sv: { home: "← Hem", cat: "← Kategorier", ar: "VISA I 3D", food: "MAT", drinks: "DRYCKER" },
    pl: { home: "← Start", cat: "← Kategorie", ar: "ZOBACZ W 3D", food: "JEDZENIE", drinks: "NAPOJE" },
    zh: { home: "← 首页", cat: "← 分类", ar: "3D 视图", food: "餐饮", drinks: "饮料" }
};

const MENU_DATA = {
    food: [
        { 
            id: "principali", 
            nome: { it: "Platos Principales", en: "Main Courses" }, 
            foto: "https://images.unsplash.com/photo-1512058560566-427a19db01cc?w=400",
            piatti: [
                { 
                    n: { it: "Paella de Marisco", en: "Seafood Paella" }, 
                    p: "18.50€", 
                    d: { it: "Cocinada a leña con marisco fresco.", en: "Wood-fired with fresh seafood." }, 
                    a: "🦐, 🐚, 🐟", 
                    f: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600",
                    m: "test.glb" 
                }
            ]
        }
    ],
    drinks: [
        { 
            id: "vini", 
            nome: { it: "Vini Bianchi", en: "White Wines" }, 
            foto: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
            piatti: [{ n: "Albariño D.O.", p: "22.00€", d: "Vino fresco Galiziano.", a: "🍷", f: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600", m: "" }]
        }
    ]
};
