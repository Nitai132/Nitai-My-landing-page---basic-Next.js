/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/core-feature/fullstack.jpg';
import Editing from 'assets/core-feature/react-hexagon.png';
import Speed from 'assets/feature/nodeJS.jpg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'Full Stack from end to end',
    text:
      'I am using advanced methodologies to give an accurate answer to your development needs. Transparency is a top value, it is important for me to provide you with regular updates throughout all stages of the project.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: 'Front end development',
    text:
      'I am using advanced front end technologies such as React an Angular to update existing applications and develop new Internet and mobile systems. Together, we will go over your source code and work on the path to success.',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Back end development',
    text:
      'Developing code on the side that you do not see is an important thing because there all the logic goes on behind the scenes. This part of development also includes databse managment and real-time applications. I will be happy to share my Back-end knowledge with you.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          isWhite={true}
          slogan="A Quality developer"
          title="I am developing with new technologies as i am always up to date and learning what is coming out of the market. A strong developer who knows what he is doing at any given moment."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
