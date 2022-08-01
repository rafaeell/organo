import { Fragment } from 'react';
import './Banner.css';

function Banner() {
    return (
        <Fragment>
            <header className='banner'>
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
            </header>
            {/* <h1>Organo</h1> */}
        </Fragment>
    );
}


export default Banner;