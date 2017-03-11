/**
 * Created by vanbu on 10-03-2017.
 */

export class City {

   private _city: String;
   private _person: String;
   private _rank: String;


    get city(): String {
        return this._city;
    }

    set city(value: String) {
        this._city = value;
    }

    get person(): String {
        return this._person;
    }

    set person(value: String) {
        this._person = value;
    }

    get rank(): String {
        return this._rank;
    }

    set rank(value: String) {
        this._rank = value;
    }
}
