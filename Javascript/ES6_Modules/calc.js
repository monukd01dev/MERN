//1. named export

function genericMultiply(a,b){
    return a*b;
}

// export const multBy3 = genericMultiply.bind(null,3);

// export const multBy2 = genericMultiply.bind(null,2);

// export const multBy11 = genericMultiply.bind(null,11);

// export const multBy9 = genericMultiply.bind(null,9);


const multBy3 = genericMultiply.bind(null,3);

const multBy2 = genericMultiply.bind(null,2);

const multBy11 = genericMultiply.bind(null,11);

const multBy9 = genericMultiply.bind(null,9);

export {
    multBy11,
    multBy2,
    multBy3,
    multBy9
}