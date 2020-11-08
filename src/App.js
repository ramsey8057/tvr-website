import React from 'react'
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import PyramidsImage from './images/pyramids.jpg'
import SaintCatherineImage from './images/saint-catherine.jpg'
import SalahAlDinMosqueImage from './images/salah-al-din-mosque.jpg'

function App() {

    return (
        <>
            <Navbar isDark={false} />
            <div className={'container'}>
                <div className={'row'} style={{marginTop: '50px',}}>
                    <div className={'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'}>
                        <h1 className={'text-center'}>Make Museums Online</h1>
                    </div>
                </div>
            </div>
            <div className={'container mw-100 d-flex justify-content-around'}>
                <div className={'row d-flex justify-content-center'}>
                    <Product image={PyramidsImage} caption={'Egyptian pyramids'} />
                    <Product image={SaintCatherineImage} caption={'Saint Catherine\'s Monastery'} />
                    <Product image={SalahAlDinMosqueImage} caption={'Salah Al-Din Mosque'} />
                </div>
            </div>
        </>
    )

}

export default App;
