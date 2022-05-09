/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/core-feature/react-hexagon.png';
import Winner from 'assets/feature/angularjs.png';
import Cloud from 'assets/feature/nodeJS.jpg';
import Setting from 'assets/feature/mongoDB.png';
import Design from 'assets/feature/mySQL.png';
import Chat from 'assets/feature/socketIO.png';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'React.js',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Angular',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'Node.js',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'MongoDB',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'mySQL',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Socket.io',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          isWhite={true}
          slogan="Quality Technologies"
          title="Meet the exciting technologies i will use to create your website"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
