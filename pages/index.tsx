import type { NextPage } from 'next'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import { CONTAINER } from './../utils';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Layout title='Website | Home' description='The best description of my website'>
                <section className={CONTAINER}>
                    <div className='text-center py-10'>
                    <h1 className='text-3xl font-semibold'>Hello world</h1>
                    <h2 className='text-xl text-gray-500 font-medium'>Website</h2>
                    </div>
                
                </section>
            </Layout>
        </div>
    )
}

export default Home
