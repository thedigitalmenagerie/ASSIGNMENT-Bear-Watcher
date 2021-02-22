import pageBuilder from './river/pageBuilder';
import printBearCard from './bearForm/bearCard';
import printBearForm from './bearForm/bearForms';
import printAwardedBear from './bearForm/awardBears';
import printTiedBears from './bearForm/tiedBears';
import buttonEvents from './river/buttonEvents';

import '../styles/main.scss';

const init = () => {
  pageBuilder();
  printBearCard();
  printBearForm();
  printAwardedBear();
  printTiedBears();
  buttonEvents();
};

init();
