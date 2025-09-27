export const bootstrap = ():void  => {
    
    console.log('Int max safe:', Number.MAX_SAFE_INTEGER);
    console.log('Int min safe:', Number.MIN_SAFE_INTEGER);

    let bigIntNumber: bigint = 900719925474199156346734634673463467656464364363463463463463463463463463463463463463463463463463463463463463437367346346346346346346346n; // BigInt literal
    console.log('Atribuição com o sufixo n:', bigIntNumber.toString());

    let bigIntNumber2 = BigInt('9007199254741991'); // Using the BigInt function
    console.log('Atribuição com o construtor BigInt:', bigIntNumber2);

}