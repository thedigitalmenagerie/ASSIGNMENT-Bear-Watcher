import { getBearFormInfo, updateAttemptsAndCatches } from './data/stats';

const buttonEvents = () => {
  document.querySelector('#submit-btn').addEventListener('click', getBearFormInfo);
  document.querySelector('#bear-card-container').addEventListener('click', updateAttemptsAndCatches);
};

export default buttonEvents;
