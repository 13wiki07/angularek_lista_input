export class Miejsce {
    private _opis: string;
    private _ranking: number;
    private _url: string;

    public constructor(opis: string, rank: number, url: string) {
        this._opis = opis;
        this._ranking = rank;
        this._url = url;
    }

    public getOpis() {
        return this._opis;
    }

    public getRank() {
        return this._ranking;
    }

    public getUrl() {
        return this._url;
    }
}