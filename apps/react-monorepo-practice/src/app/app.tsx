import { Navbar } from '@org/client//layouts';
import './app.module.css';
import { Form } from '@org/client/components/form';
import { BusinessUnit } from '@org/client/pages';

export function App() {
  return (
    <div>
      <BusinessUnit />
    </div>
  );
}

export default App;
