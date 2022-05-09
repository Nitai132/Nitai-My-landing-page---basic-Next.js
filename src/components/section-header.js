import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'darkred' : 'lightgrey',
          opacity: isWhite ? 0.7 : 1,
          paddingBottom: '40px',
          fontFamily: 'Brush Script MT',
          
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'darkyellow' : 'grey',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
