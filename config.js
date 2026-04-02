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
                    f: "https://www.lilvienna.com/wp-content/uploads/Recipe-Classic-Italian-Caprese-Salad.jpg", 
                    a: "Lattosio",
                    sg: true,
                    v: true // È vegetariano
                },
                { 
                    n: "Lasagna Bolognese", 
                    p: "19€", 
                    d: "Piatto tipico italiano con pasta fresca.", 
                    f: "https://www.giallozafferano.it/images/229-22941/Lasagne-alla-Bolognese_650x433_wm.jpg",  
                    a: "Lattosio",
                    sg: true, // true se è Senza Glutine
                    v: true  // true se è Vegetariano
            ]
        },
        { 
            id: "Primi", 
            piatti: [ 
                { 
                    n: "Spaghetti al Pomodoro", 
                    p: "10€", 
                    d: "Pasta trafilata al bronzo, pomodoro San Marzano.", 
                    f: "https://media-assets.lacucinaitaliana.it/photos/6411f3da3d6fc4cae3c3892b/16:9/w_3300,h_1856,c_limit/photo-07201503701.jpg", 
                    a: "Glutine",
                    sg: false,
                    v: true
                },
                { 
                    n: "Tortellini Emiliani", 
                    p: "11€", 
                    d: "Pasta fatta in casa.", 
                    f: "https://d2sj0xby2hzqoy.cloudfront.net/kenwood_italy/attachments/data/000/010/046/medium/tortellini-brodo.jpg", 
                    a: "Glutine",
                    sg: false,
                    v: false
                }
            ]
        },
         {
             id: "Secondi", 
            piatti: [ ]
        },
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
