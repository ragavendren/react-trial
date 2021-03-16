import {Carousel, CarouselItem, CarouselCaption, } from 'reactstrap';

const CarouselTest = () => {
return (
<Carousel>
  <CarouselItem interval={1000}>
    <img
      className="d-block w-100" alt="First slide"
      src="C:\\Users\\Tnluser\\Downloads\\download1.JPEG"
      
    />
    <CarouselCaption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </CarouselCaption>
  </CarouselItem>
  <CarouselItem interval={500}>
    <img
      className="d-block w-100" alt="Second slide"
      src="C:\\Users\\Tnluser\\Downloads\\download2.JPEG"
      
    />
    <CarouselCaption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </CarouselCaption>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100" alt="Third slide"
      src="C:\\Users\\Tnluser\\Downloads\\download3.JPEG"
      
    />
    <CarouselCaption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </CarouselCaption>
  </CarouselItem>
</Carousel>
);
}
export default CarouselTest;