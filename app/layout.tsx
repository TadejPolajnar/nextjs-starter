import type { FC, PropsWithChildren } from 'react';

import '@styles/globals.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
