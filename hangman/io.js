import promptSync from "prompt-sync";
const prompt=promptSync();

const print=text=>console.log(text);
const newline=()=>console.log();
const read=text=>prompt(text+"  >>  ");

export{print,newline,read};