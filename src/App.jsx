import React from 'react';
import { useTranslation } from 'react-i18next';
import Generator from './components/Generator';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1>{t('title')}</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('hi')}>हिं</button>
      </div>
      <Generator />
    </div>
  );
}
