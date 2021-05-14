import {Fragment} from "react";
import Particles from "react-particles-js";
import '../styles/global.css'

function MyApp({Component, pageProps}) {
    return <Fragment>
        {/*<Head>*/}
        {/*    <meta*/}
        {/*        name="viewport"*/}
        {/*        content="width=device-width, initial-scale=1, shrink-to-fit=no"*/}
        {/*    />*/}
        {/*    <title>Mattia D'Argenio</title>*/}
        {/*</Head>*/}
        <div className="absolute w-full h-full">
            <Component {...pageProps} />
        </div>

        <Particles params={{
            "particles": {
                "number": {
                    "value": 30
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    }
                }
            }
        }}/>
    </Fragment>
}

export default MyApp
