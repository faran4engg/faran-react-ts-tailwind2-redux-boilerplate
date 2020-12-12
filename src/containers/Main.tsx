import { FC } from 'react';
import { MainProps } from './types';

const Main: FC<MainProps> = ({ children }) => (
  <main className="h-full overflow-y-auto">
    <div className="container grid px-6 mx-auto">{children}</div>
  </main>
);

export default Main;
