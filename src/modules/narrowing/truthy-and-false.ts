export const bootstrap = (): void => {
   
    const movies = ['Star Wars', 'Matrix', 'Avatar'];

    const movie = movies.find(item => item.includes('Star Wars'));

    console.log(typeof movie);

    //type guard
    if (movie) {
        console.log(movie.toUpperCase());
    } else {
        console.warn('Movie not found!');
     
    }

    //falsy
    console.log(false ? 'truthy' : 'falsy');
    console.log(0 ? 'truthy' : 'falsy');
    console.log(-0 ? 'truthy' : 'falsy');
    console.log(0n ? 'truthy' : 'falsy');
    console.log('' ? 'truthy' : 'falsy');
    console.log(null ? 'truthy' : 'falsy');
    console.log(undefined ? 'truthy' : 'falsy');
    console.log(NaN ? 'truthy' : 'falsy');

    //truthy
    console.log(true ? 'truthy' : 'falsy');
    console.log({} ? 'truthy' : 'falsy');
    console.log([] ? 'truthy' : 'falsy');
    console.log(function () { } ? 'truthy' : 'falsy');
    console.log((x: number) => x + 1 ? 'truthy' : 'falsy');
    console.log(42 ? 'truthy' : 'falsy');
    console.log(-42 ? 'truthy' : 'falsy');
    console.log(3.14 ? 'truthy' : 'falsy');
    console.log(-3.14 ? 'truthy' : 'falsy');
    console.log(2n ? 'truthy' : 'falsy');
    console.log("0" ? 'truthy' : 'falsy');
    console.log("false" ? 'truthy' : 'falsy');
    console.log(new Date() ? 'truthy' : 'falsy');
    console.log(Infinity ? 'truthy' : 'falsy');
    console.log(-Infinity ? 'truthy' : 'falsy');
}