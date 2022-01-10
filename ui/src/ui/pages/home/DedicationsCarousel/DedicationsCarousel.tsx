import { Carousel } from 'react-responsive-carousel';
import useDedications from '../../../../hooks/useDedications';
import { Dedication } from '../../../components';
import { Container } from './DedicationsCarousel.styles';

const CAROUSEL_INTERVAL = 10000;

const DedicationsCarousel = () => {
  const { dedications } = useDedications();

  if (dedications.length === 0) {
    return null;
  }

  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        interval={CAROUSEL_INTERVAL}
        renderArrowNext={() => null}
        renderArrowPrev={() => null}
        renderIndicator={() => null}
        showStatus={false}
      >
        {dedications.map((dedication) => (
          <Dedication
            author={dedication.author}
            key={`dedication.${dedication.id}`}
            message={dedication.message}
          />
        ))}
      </Carousel>
    </Container>
  );
};

export default DedicationsCarousel;
