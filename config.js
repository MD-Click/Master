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
                    f: "https://images.selex-insegne.stormreply.com/mediaObject/OLD/tagliere/original/tagliere.jpg", 
                    m: "Zucca.glb", 
                    a: "Lattosio",
                    sg: true, // true se è Senza Glutine
                    v: false  // true se è Vegetariano
                },
                { 
                    n: "Caprese Bufala", 
                    p: "12€", 
                    d: "Mozzarella di bufala campana DOP e pomodorini.", 
                    f: "foto_caprese.jpg", 
                    a: "Lattosio",
                    sg: true,
                    v: true // È vegetariano
                }
            ]
        },
        { 
            id: "Primi", 
            piatti: [ 
                { 
                    n: "Spaghetti al Pomodoro", 
                    p: "10€", 
                    d: "Pasta trafilata al bronzo, pomodoro San Marzano.", 
                    f: "foto_spaghetti.jpg", 
                    a: "Glutine",
                    sg: false,
                    v: true
                }
            ]
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
                    analcolico: false, 
                    a: "Nessuno" 
                },
                { 
                    n: "Virgin Mojito", 
                    p: "6€", 
                    d: "Menta, lime, zucchero, soda.", 
                    f: "foto_virgin.jpg", 
                    analcolico: true, 
                    a: "Nessuno" 
                }
            ]
        }
    ]
};
