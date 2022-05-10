/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from 'theme-ui';
import { Link } from 'components/link';
import menuItems from './footer.data';
import PatternBG from 'assets/patternBG.png';

export default function Footer() {
  return (
    <footer id="about" sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))}
        </Box>
      </Container>
      <Text sx={styles.footer.copyright}>
        All right reserved - Design & Developed by Nitai Luyckx
      </Text>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    container: {
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
      margin: 'auto',
      height: '300px',
      backgroundColor: 'primary',
      backgroundImage: `url(${PatternBG})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    },
    footerTopArea: {
      margin: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [20, null, 20],
      
      
    },
    menus: {
      margin: 'auto',
      width: ['50%', null, null, '25%'],
      display: 'flex',
      flexDirection: 'column',
    },

    heading: {
      fontSize: [7, null, null, 7],
      color: 'white',
      fontWeight: '500',
      mb: [3, 4, 5, null, 4],
      lineHeight: '1.35',
      opacity: '80%'
    },

    link: {
      fontSize: ['14px', null, 1],
      color: '#25A0FF',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
    copyright: {
      opacity: '75%',
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['15px 15px'],
      backgroundColor: 'lightgrey',
      color: 'text',
      a: {
        textDecoration: 'none',
        color: 'grey',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'grey',
        },
      },
    },
  },
};
