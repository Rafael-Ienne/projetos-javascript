import * as io from './io.js';
import{Word} from'./word.js';
import{maxattempts} from './config.js';

function play () {
    io.print("Welcome!")
    let leftattempts=maxattempts;
    const guesses=[];

    const word=new Word();

    while(!word.revealed() && leftattempts>0) {
        io.newline();
        io.print(word.maskedword);

        const letter=io.read("Guess");

        if(!letter || guesses.includes(letter) || letter.length>1) {
            io.print("Ops...try again");
            continue;
        }

        if(word.guess(letter)) {
            io.print("Hit!!!")
        } else {
            io.print("Miss!!")
            leftattempts--;
            io.print("You have "+leftattempts+" chance(s)!")

        }
    }
    if(leftattempts==0) {
        io.print("You lost... the word was "+word.word);
    } else {
        io.print("You ROCK!");
    }
}

play();