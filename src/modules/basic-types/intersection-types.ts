export const bootstrap = (): void => { 

    type Person = {
        name: string,
        age: number,
    }

   type Employee = {
        departament: string,
   }


   type Customer = {
        wishlist: string[],
   }

   type EmployeeDetails = Person & Employee;

   const employee: EmployeeDetails = {
        name: 'Cicero',
        age: 30,
        departament: 'TI'
   }

   type CustomerDetails = Person & Customer;

   const customer: CustomerDetails = {
        name: 'Maria',
        age: 25,
        wishlist: ['notebook', 'smartphone']
   }

   console.log('Employee:', employee);
   console.log('Customer:', customer);

}