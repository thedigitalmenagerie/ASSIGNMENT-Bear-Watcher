import pageBuilder from './river/pageBuilder';
import printBearCard from './bearForm/bearCard';
import printBearForm from './bearForm/bearForms';
import buttonEvents from './river/buttonEvents';

import '../styles/main.scss';

const init = () => {
  pageBuilder();
  printBearForm();
  printBearCard();
  buttonEvents();
};

init();
