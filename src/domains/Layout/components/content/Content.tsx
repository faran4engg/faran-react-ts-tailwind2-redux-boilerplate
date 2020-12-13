import { FC } from 'react';
import { ContentProps } from './types';

const Content: FC<ContentProps> = ({ children }) => (
  <main className="h-full overflow-y-auto">
    <div className="container grid px-6 mx-auto">{children}</div>
  </main>
);

export default Content;
