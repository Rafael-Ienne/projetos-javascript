const generateintrandom=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const getrandomelement=array=>array[generateintrandom(0,array.length-1)];

const isequalarrays=(a,b)=>{
    if(a.length !== b.length) {
        return false;
    }

    const sorteda=[...a].sort();
    const sortedb=[...b].sort();

    return sorteda.every((e,i)=>e===sortedb[i]);
}

export {getrandomelement,isequalarrays};