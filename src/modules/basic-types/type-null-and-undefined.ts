export const bootstrap = ():void  => {

    //NULL
    let title = null;
    console.log('title', title);
    console.log('Title (if)', title ? 'verdadeiro' : 'falso');
    console.log('Tipo NULL', typeof title);

    //UNDEFINED
    let subtitle = undefined;
    console.log('subtitle', subtitle);
    console.log('Subtitle (if)', subtitle ? 'verdadeiro' : 'falso');
    console.log('Tipo UNDEFINED', typeof subtitle);



    type Page = {
        title: string,
        subtitle?: string,
        handlerPage?: () => void
    }

    const page: Page = {
        title: 'Curso de Typescript',
       
    }

     page.handlerPage = ():void => {
            console.log('Executou a função handlerPage !');
        }

    console.log('page subtitle', page.subtitle);
    console.log('page handlerPage', page.handlerPage);
    console.log('Page handlerPage:', page.handlerPage());


};