import React from 'react';
import styles from '@/styles/Contact.module.css';
import { Grid, Button, Form } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function Contact() {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    // let fullName = 'Kiersten Foulk';
    // let email = 'email@iu.edu';

    const router = useRouter();

    function contactFormSubmit(e) {
        e.preventDefault();
    
        if (fullName !== '' && email !== '') {
            router.push('/contact/successful');
        } else {
            router.push('/contact/unsuccessful');
        }
    }

    function updateContactInfo(e) {
        if(e.currentTarget.name === 'fullName') {
            // fullName = e.currentTarget.value;
            setFullName(e.currentTarget.value);
        }
        if(e.currentTarget.name === 'email') {
            // email = e.currentTarget.value;
            setEmail(e.currentTarget.value);
        }
    }

    return (
        <>
            <div className={styles.contactForm}>
            <Form className={styles.form} onSubmit={contactFormSubmit} >
                <h1>Contact</h1>
                <div className={styles.formField}>
                    <label>Full Name:</label>
                    <input name='fullName' type='text' placeholder='Kiersten Foulk' onChange={updateContactInfo} value={fullName} className={styles.input}/>
                </div>
                <div className={styles.formField}>
                    <label>Email:</label>
                    <input name='email' type='email' placeholder='email@iu.edu' onChange={updateContactInfo} value={email}/>
                </div>
                
                    <Button className={styles.submitButton} type='submit' value='Send Contact'>Submit Info</Button>
                
            </Form>
            </div>
        </>
    ) 
    
}
