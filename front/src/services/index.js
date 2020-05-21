import axios from 'axios';

let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
});

let Posts = {

    async getAll(searchTerm) {
        let options = {};

        if (searchTerm) {
            options.params = {
                _any: searchTerm,
            };
        }

        let response = await Service.get('/posts', options);
        return response.data.map((doc) => {
            return {
                id: doc._id,
                email: doc.email,
                posted_at: Number(doc.posted_at),
                poslodavac: doc.poslodavac,
                oib: doc.oib,
                brtel: doc.brtel,
                vrsta: doc.vrsta,
                grad: doc.grad,
                satnica: doc.satnica,
                putni: doc.putni,
                datum: doc.datum,
                vrijeme: doc.vrijeme,
                number: doc.number,
                tekst: doc.tekst,
                uploadValue: doc.uploadValue,
                datumk: doc.datumk,
                tipoglasa: doc.tipoglasa,
                url: doc.url,
                status:doc.status,
                aktivanoglas:doc.aktivanoglas,
                napomena:doc.napomena,
                tekst:doc.tekst
            };
        });
    }
}
export { Service, Posts }; 