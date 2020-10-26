import {h, Fragment} from 'preact';
import {Helmet} from 'react-helmet';

export default (props) => {

    return (
        <Fragment>
        <Helmet>
            <link rel="stylesheet" href="/index.css" />
        </Helmet>
        <header>
            <a href="#main" class="sr-only focus:not-sr-only">Skip to Content</a>
            <nav class="bg-green-400" >
                <a href="/" class="font-bold text-lg">Recipe Manager</a>
            </nav>
            <main id="#main">
                {props.children}
            </main>
        </header>
        </Fragment>
    )
}