import type * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

import { ConnectionCard } from '@/components/dashboard/social/connection-card';
import type { Connection } from '@/components/dashboard/social/connection-card';

const connections = [
  {
    id: 'USR-010',
    name: 'Alcides Antonio',
    avatar: '/assets/avatar-10.png',
    commonContacts: 5,
    status: 'not_connected',
  },
  { id: 'USR-003', name: 'Carson Darrin', avatar: '/assets/avatar-3.png', commonContacts: 10, status: 'rejected' },
  { id: 'USR-005', name: 'Fran Perez', avatar: '/assets/avatar-5.png', commonContacts: 8, status: 'pending' },
  { id: 'USR-004', name: 'Penjani Inyene', avatar: '/assets/avatar-4.png', commonContacts: 1, status: 'connected' },
] satisfies Connection[];

export default function Page(): React.JSX.Element {
  return (
    <div>
      <Card>
        <CardHeader title="Connections" />
        <Divider />
        <Input
          fullWidth
          placeholder="Search connections"
          startAdornment={
            <InputAdornment position="start">
              <MagnifyingGlassIcon />
            </InputAdornment>
          }
          sx={{ px: 3, py: 2 }}
        />
        <Divider />
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {connections.map((connection) => (
              <Grid
                key={connection.id}
                size={{
                  md: 6,
                  xs: 12,
                }}
              >
                <ConnectionCard connection={connection} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
