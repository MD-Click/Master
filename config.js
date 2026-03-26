// --- CONFIGURAZIONE GRAFICA ---
const APP_CONFIG = {
    tipoLogo: "testo", // o "immagine"
    testoLogo: "TRATTORIA PRO", 
    colori: { principale: "#c0392b", testo: "#1a1a1a" }
};

// --- DATI DEL MENU ---
const MENU_DATA = {
    food: [
        { 
            id: "piatti", 
            piatti: [
                { 
                    n: "Tartare di Salmone", 
                    p: "14€", 
                    d: "Salmone fresco abbattuto, servito con granella di pistacchio, avocado e riduzione al lime.", 
                    a: "Pesce, Frutta a guscio", 
                    f: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
                    m: "modelli/test.glb", // Il file .glb deve esistere in questa cartella!
                    glutenFree: true 
                },
                { 
                    n: "Tagliata di Manzo", 
                    p: "20€", 
                    d: "Controfiletto di manzo grigliato (300g) servito con rucola, grana e pomodorini.", 
                    a: "Latte", 
                    f: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600",
                    m: "", 
                    glutenFree: true 
                }
            ]
        }
    ],
    drinks: [
        { 
            id: "cocktails", 
            piatti: [
                { 
                    n: "Mojito Premium", 
                    p: "8€", 
                    d: "Menta fresca, lime, zucchero di canna, rum bianco e soda.", 
                    a: "", 
                    f: "", // Non serve per i drink, verranno mostrati come "solo testo"
                    m: "", 
                    bio: true,
                    analcolico: false
                },
                { 
                    n: "Spremuta d'Arancia Bio", 
                    p: "5€", 
                    d: "Arance fresche bio di stagione spremute al momento.", 
                    a: "", 
                    f: "",
                    m: "", 
                    bio: true,
                    analcolico: true
                }
            ]
        }
    ]
};
