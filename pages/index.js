import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


//import container
import {Container,Row,Col,Card} from 'react-bootstrap'







const Home = () =>
{
    
    return(
      
      <Head>
        
        
          <div className={styles.container}>
            <h1>
              Hello 
            </h1>
          </div>
        
          
        
      </Head>
      
    );
}





export default Home;