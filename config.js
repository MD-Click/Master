const APP_CONFIG = {
    testoLogo: "EXPERIENCE AR",
    colori: { principale: "#c0392b" }
};

const MENU_DATA = {
    food: [
        { 
            // id funge sia da identificatore che da nome visualizzato della categoria
            id: { it: "Specialità", en: "Specialties", es: "Especialidades", fr: "Spécialités", de: "Spezialitäten" }, 
            piatti: [
                { 
                    // Supporto multilingua per il contenuto
                    n: { it: "Salmone al Pepe Rosa", en: "Pink Pepper Salmon", es: "Salmón a la Pimienta Rosa" }, 
                    p: "18€", 
                    d: { it: "Salmone fresco scottato con granella di pepe rosa e asparagi croccanti.", en: "Seared fresh salmon with pink pepper flakes and crispy asparagus." }, 
                    f: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600",
                    m: "Zucca.glb", 
                    glutenFree: true 
                },
                { 
                    // Se non usi l'oggetto lingua, la funzione usa la stringa per tutte le lingue
                    n: "Tartare di Manzo", 
                    p: "22€", 
                    d: "Tartare di fassona con tuorlo marinato e tartufo nero.", 
                    f: "https://images.unsplash.com/photo-1544025162-811114bd4b5e?w=600",
                    m: "Zucca.glb", 
                    glutenFree: true 
                }
            ]
        },
        {
            id: { it: "Primi", en: "First Courses" },
            piatti: [
                {
                    n: { it: "Spaghetti ai Ricci", en: "Sea Urchin Spaghetti" },
                    p: "24€",
                    d: { it: "Spaghetti trafilati al bronzo con polpa di riccio.", en: "Bronze-drawn spaghetti with sea urchin pulp." },
                    f: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600",
                    m: "",
                    a: { it: "Cereali, Pesce", en: "Cereals, Fish" },
                    glutenFree: false
                }
            ]
        }
    ],
    drinks: [
        { 
            id: { it: "Cocktails", en: "Cocktails" }, 
            piatti: [
                { 
                    n: "Virgin Mojito", 
                    p: "7€", 
                    d: { it: "Menta fresca, lime, zucchero di canna e soda.", en: "Fresh mint, lime, brown sugar and soda." }, 
                    f: "", 
                    m: "", 
                    bio: true,
                    analcolico: true 
                }
            ]
        }
    ]
};
