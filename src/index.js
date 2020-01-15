import {isPrime} from 'mathjs';

const len = glo.length;
for (let i = 0; i < len; i++){
    glo[i] = {...glo[i], ...add1[i], ...add2[i], ...add3[i], ...add4[i], ...add5[i],
    ...add6[i], ...add7[i], ...add8[i], ...add9[i]
    }
    const keys = Object.keys(glo[i]);
    const leng = keys.length;
    for (let j = 0; j < leng; j++){
        glo[i][keys[j]] = glo[i][keys[j]].toString();
    }
    const bool = {};
    bool['test'] = isPrime(i+1);
    glo[i] = {...glo[i], ...bool}
}
console.log(JSON.stringify(glo));