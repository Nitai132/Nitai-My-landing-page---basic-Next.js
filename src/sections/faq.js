/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
import PatternBG from 'assets/patternBG.png';

const faqs = [
  {
    title: 'How long will it take to create my website?',
    contents: (
      <div style={{ color: 'white' }}>
        Creating a website is a very dynamic bussiness. therefore some websites can take a day or two to create and
        others can take several months.
      </div>
    ),
  },
  {
    title: 'Will you help me also after the website is delopied?',
    contents: (
      <div style={{ color: 'white' }}>
        I will always be there to support you and your website needs no matter how long its been since the website is up.
        weather if cyber attacks, bug fixes, new features to add or anything that comes up your mind, im here for you!
      </div>
    ),
  },
  {
    title: `I already have a website, can you help me make it better?`,
    contents: (
      <div style={{ color: 'white' }}>
        many times you may already have an existing website which you want to improve and im here for you with the best technologies
        to make your existing website a better website
      </div>
    ),
  },
  {
    title: `I dont know anything about web developing, how can i start my website?`,
    contents: (
      <div style={{ color: 'white' }}>
        I am here for you with alot of knowledge and experience and i will be more than happy to share it with you 
        so we can plan and create the best website for you!
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id="Q&A" sx={{
      variant: 'section.faq', backgroundColor: 'primary',
      backgroundImage: `url(${PatternBG})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }}>
      <Container>
        <SectionHeader
          isWhite={false}
          title="Frequently asked questions"
          slogan="Get your questions answered"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
