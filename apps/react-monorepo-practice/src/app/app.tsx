import { useTranslation } from 'react-i18next';
import './app.module.css';
import { Form } from '@org/client/components/form';
export function App() {
  const { t, i18n } = useTranslation('global');
  return (
    <div>
      {t('header.chooseLanguage')}
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('np')}>ES</button>
    </div>
  );
}

export default App;
