'use client';

import type * as React from 'react';
import Box from '@mui/material/Box';
import { useColorScheme } from '@mui/material/styles';

export interface ThumbnailProps {
  imageDark: string;
  imageLight: string;
}

export function Thumbnail({ imageDark, imageLight }: ThumbnailProps): React.JSX.Element {
  const { colorScheme } = useColorScheme();

  return (
    <Box sx={{ position: 'relative', pt: 'calc(300 / 500 * 100%)' }}>
      <Box
        alt="Thumbnail"
        component="img"
        src={colorScheme === 'dark' ? imageDark : imageLight}
        sx={{ height: 'auto', left: 0, position: 'absolute', top: 0, width: '100%' }}
      />
    </Box>
  );
}
