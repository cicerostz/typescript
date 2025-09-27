export const bootstrap = (): void => {
  // const title: symbol = Symbol('HOME');
  // const pageTitle: symbol = Symbol('HOME');

  // if('HOME' === 'HOME') {
  //     console.log('São iguais');
  // } else {
  //     console.log('São diferentes');
  // }

  const titleSymbol = Symbol('title');

  const Page = {
    title: 'HOME',
    [titleSymbol]: 'HOME',
  };


    console.log('Page title:', Page.title);
    console.log('Page title with symbol:', Page[titleSymbol]);

    console.log(Page);

};
