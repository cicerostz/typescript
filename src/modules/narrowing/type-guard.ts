export const bootstrap = (): void => {

    const zipCodeMask = (value: string): string => {
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        return value;
    }

const zipCode = zipCodeMask('00000000');
console.log(zipCode);

// const zipCode2 = zipCodeMask(00000000);
// console.log(zipCode2);



}

