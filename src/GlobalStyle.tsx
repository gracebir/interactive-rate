import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-white: hsl(0, 0%, 100%);
        --color-grey: hsl(217, 12%, 63%);
        --color-medium-grey: hsl(216, 12%, 54%);
        --color-dark-blue: hsl(213, 19%, 18%);
        --color-dark: hsl(210, 24%, 7%);
        --color-blue: hsl(214, 34%, 12%);
        --color-orange: hsl(25, 97%, 53%); 
    }

    *{
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--color-dark);
        color: var(--color-white);
        font-family: 'Overpass' ,sans-serif;
    }
`