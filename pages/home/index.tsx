import { CroctProvider, Personalization } from '@croct/plug-react'
import Head from 'next/head'
import { Component } from 'react'
import styles from '../../styles/main.module.css'
import OnboardingPage from '../components/OnboardingPage'
import { DataUtil } from '../utils/DataUtil'

export default class Home extends Component {

    constructor(props) {
        super(props)       
    }
 
    render() {
        return (
            <div className={styles.container}>

                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://cdn.croct.io/js/v1/app/00000000-0000-0000-0000-000000000000/custom.js"></script>
                </Head>

                <main className={styles.main}>
                    <CroctProvider appId="00000000-0000-0000-0000-000000000000">

                        <Personalization expression="'other' if user's persona is 'marketer' else 'marketers'" initial={'other'}>
                            {(job: string) => <OnboardingPage banner={DataUtil.getBanner(job).banner}></OnboardingPage>}
                        </Personalization>

                    </CroctProvider>
                </main>              

            </div>
        )
    }
}


