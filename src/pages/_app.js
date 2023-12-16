import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Menu, Icon, Image } from 'semantic-ui-react';
import Link from 'next/link';
import { AppProvider } from '../useHooks/useAppState'
import styles from '@/styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Menu className={styles.menuContainer}>
        <Menu.Item className={styles.menuItem} as={Link} href='/'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item className={styles.menuItem}  as={Link} href='/gallery'>
          <Icon name='list' />
          Gallery
        </Menu.Item>
        <Menu.Item className={styles.menuItem}  as={Link} href='/about'>
          <Icon name='info' />
          About
        </Menu.Item>
        <Menu.Item className={styles.menuItem} as={Link} href='/contact'>
          <Icon name='pin' />
          Contact
        </Menu.Item>
        {/* <div>
          <Image
            src='../../randomlogo.png'
            alt='Random Logo'
            background-color='white'
            width={80}
            height={80}
            padding={50}
            // priority="true"
            className={styles.logo}  as={Link} href='/'/>
        
        </div> */}
      </Menu>
      <div>
          <Image
            src='../../randomlogo.png'
            alt='Random Logo'
            width={100}
            height={80}
            // priority="true"
            className={styles.logo}  
            as={Link} 
            href='/'
            loading='eager'
            />
            
        
        </div>
      <Component {...pageProps} />
    </AppProvider>
  );
}