import type * as React from 'react';
import type { Metadata } from 'next';
import RouterLink from 'next/link';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { appConfig } from '@/config/app';
import { paths } from '@/paths';
import { SplitLayout } from '@/components/auth/split-layout';
import { ResetPasswordButton } from '@/components/auth/supabase/reset-password-button';
import { DynamicLogo } from '@/components/core/logo';

export const metadata = { title: `Recovery link sent | Supabase | Auth | ${appConfig.name}` } satisfies Metadata;

interface PageProps {
  searchParams: Promise<{ email?: string }>;
}

export default async function Page({ searchParams }: PageProps): Promise<React.JSX.Element> {
  const { email } = await searchParams;

  if (!email) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert color="error">Email is required</Alert>
      </Box>
    );
  }

  return (
    <SplitLayout>
      <Stack spacing={4}>
        <div>
          <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
            <DynamicLogo colorDark="light" colorLight="dark" height={32} width={122} />
          </Box>
        </div>
        <Typography variant="h5">Recovery link sent</Typography>
        <Stack spacing={1}>
          <Typography>
            If an account exists with email{' '}
            <Typography component="span" variant="subtitle1">
              &quot;{email}&quot;
            </Typography>
            , you will receive a recovery email.
          </Typography>
          <div>
            <Link component={RouterLink} href={paths.auth.supabase.resetPassword} variant="subtitle2">
              Use another email
            </Link>
          </div>
        </Stack>
        <ResetPasswordButton email={email}>Resend</ResetPasswordButton>
      </Stack>
    </SplitLayout>
  );
}
