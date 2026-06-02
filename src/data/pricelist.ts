export interface PriceListItem {
    name: string;
    price: string | number;
    description?: string;
    category?: string;
}

export const priceList: PriceListItem[] = [
    {
        name: "Polișare automobil",
        price: "de la 150€",
        category: "Exterior",
        description: "Polișarea automobilului este un proces care implică îndepărtarea zgârieturilor, a petelor și a altor imperfecțiuni de pe suprafața vopselei. Acest proces poate fi realizat manual sau cu ajutorul unor mașini speciale de polișat. Polișarea automobilului nu numai că îmbunătățește aspectul estetic al mașinii, dar și protejează vopseaua împotriva deteriorării ulterioare."
    },
    {
        name: "Protectie ceramica pentru automobil",
        price: "de la 150€",
        category: "Exterior",
        description: "Protecția ceramică pentru automobil este un tratament avansat care oferă o protecție durabilă împotriva zgârieturilor, petelor și altor daune. Aceasta formează un strat protector pe suprafața vopselei, care ajută la menținerea aspectului nou al mașinii pentru o perioadă mai lungă de timp."
    },
    {
        name: "Curătare chimică",
        price: "de la 120€",
        category: "Interior",
        description: "Curățarea chimică este un proces care implică utilizarea unor substanțe chimice speciale pentru a îndepărta murdăria, petele și alte impurități de pe suprafața vopselei."
    },
    {
        name: "Polisare faruri",
        price: "de la 50€",
        category: "Exterior",
        description: "Polisarea farurilor implică îndepărtarea zgârieturilor și imperfecțiunilor de pe suprafața farurilor, îmbunătățind vizibilitatea și aspectul estetic."
    },
    {
        name: "Protectie elemente interior si exterior",
        price: "de la 80€",
        category: "Full",
        description: "Aplicarea unor tratamente speciale pentru a proteja materialele interioare și exterioare împotriva uzurii, petelor și altor daune."
    },
    {
        name: "Detailing si spălare motor",
        price: "de la 40€",
        category: "Motor",
        description: "Curățarea și întreținerea motorului pentru a menține performanța și aspectul acestuia, inclusiv îndepărtarea murdăriei și protecția împotriva coroziunii."
    },
    {
        name: "Protectie ceramica pentru geamuri",
        price: "de la 40€",
        category: "Exterior",
        description: "Tratament ceramic care formează un strat protector pe suprafața geamurilor, menținând transparența și aspectul estetic."
    },
    {
        name: "Protectie ceramica pentru jante",
        price: "de la 50€",
        category: "Exterior",
        description: "Protecție ceramică avansată pentru jante, formând un strat durabil împotriva zgârieturilor, petelor și deteriorărilor."
    },
    {
        name: "Carnauba WAX",
        price: "de la 40€",
        category: "Exterior",
        description: "Ceară naturală din palmier de carnauba, oferind protecție și strălucire durabilă pentru vopseaua automobilului."
    },
    {
        name: "Spălare profesionala",
        price: "de la 30€",
        category: "Full",
        description: "Curățarea completă a exteriorului și interiorului mașinii folosind produse și echipamente specializate."
    },
    {
        name: "Refacerea tapiteriei interioare din piele",
        price: "de la 100€",
        category: "Interior",
        description: "Repararea și restaurarea tapițeriei din piele, îndepărtând zgârieturile și petele și aplicând tratamente de protecție."
    },
    {
        name: "Ozonarea salonului automobilului",
        price: "de la 20€",
        category: "Interior",
        description: "Eliminarea mirosurilor neplăcute, bacteriilor și impurităților din interiorul mașinii folosind tratament cu ozon."
    }
];
