import React from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <main className={c('App__main')}>
      {/* <BpkCalendar /> */}
      <BpkButton onClick={() => alert("It runs!")}>Continue</BpkButton>
    </main>
  </div>
);

export default App;