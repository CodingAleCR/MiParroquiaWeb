import React from 'react'
import Button from 'material-ui/Button';
import CustomParallax from '../custom/CustomParallax';
import { withTheme } from 'material-ui/styles';
import bgChurch from '../../images/bgChurch.jpg'
import bgCandles from '../../images/bgCandles.jpg'
import bgToledoTown from '../../images/bgToledoTown.jpg'
import Features from './Features';
import Headline from './Headline';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';

function Home() {
    const mainParallaxBtn = <Button variant="raised" color="secondary">Empezar Ya</Button>

    const headlines = {
        main : {
            header: "Conociendo mi parroquia...",
            subheader: "Puedes revisar los acontecimientos de la parroquia, conocer sus templos e incluso revisar los horarios de Eucaristías en ellos.",
        },
        secondary: {
            subheader: '',
        },
        footer: {
            subheader: ''
        }
    }

    return (
        <div>
            <Navigation type='landing' />
            <CustomParallax
                image={bgChurch}
                header={headlines.main.header}
                subheader={headlines.main.subheader}
                button={mainParallaxBtn} />
            <Features />
            <CustomParallax
                image={bgToledoTown}
                subheader='“En la era de la globalización, estamos asistiendo a un aumento de la desorientación, de la soledad...
                                Es importante, por eso, saber dialogar, entrando también, aunque no sin discernimiento, en los ambientes
                                creados por las nuevas tecnologías, en las redes sociales, para hacer visible una presencia, una presencia
                            que escucha, dialoga, anima.” - Mensaje del Santo Padre Francisco para la XLVIII Jornada Mundial de las Comunicaciones Sociales.' />
            <Headline />
            <CustomParallax
                image={bgCandles}
                subheader=' "Comunicar significa, por tanto, tomar conciencia de que somos humanos, hijos de Dios.
                            Me gusta definir este poder de la comunicación como proximidad" - Mensaje del Santo Padre Francisco para la XLVIII Jornada Mundial de las Comunicaciones Sociales.' />
            <Footer />
        </div>
    )
}

export default withTheme()(Home);