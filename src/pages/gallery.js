import React, { useEffect, useState } from 'react';
import useAppState from './useAppState';
import { Reveal, Image, Grid, Header } from 'semantic-ui-react';
import ArtImage from './components/ArtImage';

function Gallery() {
  const appState = useAppState();
  const [randomPage, setRandomPage] = useState(1);
  const [randomSeed, setRandomSeed] = useState(Math.floor(Math.random() * 1000));

  useEffect(() => {

    // Generate a random page number between 1 and 100
    const newRandomPage = Math.floor(Math.random() * 100) + 1;
    setRandomPage(newRandomPage);

    // Generate a new random seed
    const newRandomSeed = Math.floor(Math.random() * 1000);
    setRandomSeed(newRandomSeed);

    fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&order=RANDOM&limit=10&fields=id,title,image_id&page=${newRandomPage}&seed=${newRandomSeed}`)
      .then((r) => r.json())
      .then((r) => {
        const iiifBaseUrl = r.config.iiif_url;
        console.log('API Response:', r);
        const artGalleryData = r.data.map((artwork) => 

        ({
          id: artwork.id,
          title: artwork.title,
          image_id: artwork.image_id,
          image: `${iiifBaseUrl}/${artwork.image_id}/full/843,/0/default.jpg`,
        }));
        console.log('Constructed Image URLs:', artGalleryData.map((artwork) => artwork.image));
        appState.updateAppState({ artGallery: artGalleryData });
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <>
      <Header as='h1'>Gallery</Header>
      <Grid columns={5}>
        {appState.artGallery.map((art) => {
          console.log('Rendering ArtImage for:', art.title);
          return (
            <ArtImage key={art.id} src={art.image}>
              {art.title}
            </ArtImage>
          );
        })}
      </Grid>
    </>
  );
}

export default Gallery;