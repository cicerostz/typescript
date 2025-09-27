export const bootstrap = (): void => { 
    
    console.log('String', typeof 'CICER');
    console.log('Number', typeof 123);
    console.log('Boolean', typeof true);
    console.log('Object', typeof { nome: 'CICER' });
    console.log('Array', typeof [1, 2, 3]);
    console.log('Function', typeof function () { });
    console.log('Undefined', typeof undefined);
    console.log('Null', typeof null); // Retorna 'object' por um bug do JavaScript
    console.log('Symbol', typeof Symbol('sym'));
}