/** @jsx jsx */
import NitaiLuyckx from '../assets/NitaiLuyckx.png';
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        height: '100px'
      }}
      {...rest}
    >
      <Image src={NitaiLuyckx} alt="Nitai Luyckx" 
      style={{ mixBlendMode: 'multiply', height: '200px', width: '200px',  position: 'relative', bottom: '50px', right: '20px'}}/>
    </Link>
  );
}
