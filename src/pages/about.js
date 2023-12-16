import React from 'react';
import useAppState from '../useHooks/useAppState';
import { Grid, Image } from 'semantic-ui-react';
import styles from '@/styles/About.module.css';

export default function About() {
    const appState = useAppState();


    return (
        <>
        <div className={styles.container} >
        <Grid columns='1' centered>
            <h1 className={styles.title}>About the Founders</h1>
                <Grid.Row 
                 className={styles.images} columns='3' centered>
                    <Grid.Column>
                        <Image className={styles.image} src='/aboutImage1.png' centered/>
                    </Grid.Column>
                    <Grid.Column>
                    <Image className={styles.image} src='/aboutImage2.jpg' centered />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className={styles.description}>
                    <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Scelerisque varius morbi enim nunc. Purus in massa tempor nec feugiat. Quis enim lobortis scelerisque fermentum dui faucibus. Risus viverra adipiscing at in tellus integer. Elementum tempus egestas sed sed. Eget sit amet tellus cras. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Praesent semper feugiat nibh sed. Sapien pellentesque habitant morbi tristique senectus et netus.

                    Feugiat sed lectus vestibulum mattis. Facilisis magna etiam tempor orci eu. Euismod lacinia at quis risus sed vulputate odio ut. Id donec ultrices tincidunt arcu non. Massa ultricies mi quis hendrerit dolor magna eget est. Pulvinar neque laoreet suspendisse interdum consectetur libero. At quis risus sed vulputate odio ut enim. Cursus sit amet dictum sit amet justo. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Massa sapien faucibus et molestie ac feugiat sed lectus. Facilisis mauris sit amet massa. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.

                    Est sit amet facilisis magna etiam. Eget dolor morbi non arcu risus quis varius quam. Felis imperdiet proin fermentum leo vel orci porta non. Sit amet risus nullam eget felis eget nunc. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Eu facilisis sed odio morbi quis. Mus mauris vitae ultricies leo integer malesuada. Tellus orci ac auctor augue mauris. Lectus urna duis convallis convallis tellus id. In massa tempor nec feugiat. At volutpat diam ut venenatis tellus in metus. Montes nascetur ridiculus mus mauris. Arcu non odio euismod lacinia. Posuere urna nec tincidunt praesent semper feugiat nibh. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Magna etiam tempor orci eu.
                    </h4>
                </Grid.Row>
            </Grid>
        </div>
        </>
    )
}