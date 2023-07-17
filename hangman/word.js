import { dictionary,maskchar } from './config.js';
import {getrandomelement,isequalarrays} from './util.js';

class Word {
    #word;
    #foundletters;

    constructor() {
    this.#word=getrandomelement(dictionary).toUpperCase();
    this.#foundletters=[];
    }

    get word(){
        return this.#word;
    }

    get maskedword() {
        return [...this.#word]
        .map(e=>this.#foundletters.includes(e) ? e: maskchar)
        .reduce((p,c)=>p+" "+c)
    }

    guess(letter) {
        letter=letter.toUpperCase();

        if(this.#word.indexOf(letter) > -1) {
            if(!this.#foundletters.includes(letter)) {
                this.#foundletters.push(letter);
            }
            return true;
        }
        return false;
    }
    revealed() {
        return isequalarrays(this.#foundletters,[...new Set(this.#word) ]);
    }
}

export{Word};