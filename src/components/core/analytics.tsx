'use client';

import * as React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GTMProvider, useGTMDispatch } from 'react-gtm-hook';

export interface PageViewTrackerProps {
  children: React.ReactNode;
}

function PageViewTracker({ children }: PageViewTrackerProps): React.JSX.Element {
  const dispatch = useGTMDispatch();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    dispatch({ event: 'page_view', page: pathname });
  }, [dispatch, pathname, searchParams]);

  return <React.Fragment>{children}</React.Fragment>;
}

export interface AnalyticsProps {
  children: React.ReactNode;
}

/**
 * This loads GTM and tracks the page views.
 *
 * If GTM ID is not configured, this will no track any event.
 */
export function Analytics({ children }: AnalyticsProps): React.JSX.Element {
  const id = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  if (!id) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <GTMProvider config={{ id }}>
      <PageViewTracker>{children}</PageViewTracker>
    </GTMProvider>
  );
}
