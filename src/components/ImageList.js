import { Container, Grid } from '@material-ui/core'
import ImageShow from "./ImageShow";


function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return (
    <Container>
      <Grid container spacing={4}>
        {renderedImages}
      </Grid>
    </Container>

  );
}

export default ImageList;

