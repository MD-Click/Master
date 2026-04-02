const APP_CONFIG = {
    testoLogo: "IL MIO RISTORANTE",
    colori: { principale: "#000000" }
};

const MENU_DATA = {
    food: [
        { 
            id: "Antipasti", 
            piatti: [
                { 
                    n: "Tagliere Misto", 
                    p: "15€", 
                    d: "Selezione di salumi e formaggi locali.", 
                    f: "link_foto.jpg", 
                    m: "Zucca.glb", // Il tuo modello 3D
                    a: "Lattosio, Glutine" // Allergeni
                }
            ]
        },
        { 
            id: "Primi", 
            piatti: [ /* altri piatti qui */ ]
        }
    ],
    drinks: [
        { 
            id: "Cocktails", 
            piatti: [
                { 
                    n: "Mojito", 
                    p: "8€", 
                    d: "Menta, lime, zucchero, rum.", 
                    f: "foto_mojito.jpg", 
                    analcolico: false, // Per il filtro analcolico
                    a: "Nessuno" 
                }
            ]
        }
    ]
};
