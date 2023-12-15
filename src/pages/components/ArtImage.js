import React from 'react';
import { Label, Image, Grid } from 'semantic-ui-react';

export default function ArtImage({ src, children, onClick }) {
  console.log('ArtImage src:', src);
  return (
    <Grid.Column>
      <Image src={src} onError={() => console.log(`Failed to load image: ${src}`)} />
      <Label color='blue' icon='angle right' content={children} onClick={onClick} />
      
    </Grid.Column>
  );
}