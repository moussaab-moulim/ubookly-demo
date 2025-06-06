import type * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

import { Option } from '@/components/core/option';

export function Inputs4(): React.JSX.Element {
  return (
    <Box sx={{ p: 3 }}>
      <Box maxWidth="sm">
        <Grid container spacing={3}>
          <Grid
            size={{
              sm: 6,
              xs: 12,
            }}
          >
            <FormControl fullWidth>
              <InputLabel required>Name</InputLabel>
              <OutlinedInput name="name" />
            </FormControl>
          </Grid>
          <Grid
            size={{
              sm: 6,
              xs: 12,
            }}
          >
            <FormControl fullWidth>
              <InputLabel required>Email address</InputLabel>
              <OutlinedInput name="email" type="email" />
            </FormControl>
          </Grid>
          <Grid
            size={{
              sm: 6,
              xs: 12,
            }}
          >
            <FormControl fullWidth>
              <InputLabel>Phone number</InputLabel>
              <OutlinedInput name="phone" />
            </FormControl>
          </Grid>
          <Grid
            size={{
              sm: 6,
              xs: 12,
            }}
          >
            <FormControl fullWidth>
              <InputLabel required>Country</InputLabel>
              <Select value="">
                <Option value="">Choose a country</Option>
                <Option value="us">United States</Option>
                <Option value="de">Germany</Option>
                <Option value="es">Spain</Option>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            size={{
              sm: 6,
              xs: 12,
            }}
          >
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <OutlinedInput name="state" />
            </FormControl>
          </Grid>
          <Grid
            size={{
              sm: 6,
              xs: 12,
            }}
          >
            <FormControl fullWidth>
              <InputLabel>City</InputLabel>
              <OutlinedInput name="city" />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
