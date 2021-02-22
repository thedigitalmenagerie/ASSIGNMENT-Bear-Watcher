import competingBears from './competingBears';
import printToDom from '../printToDom';
import printBearCard from '../../bearForm/bearCard';

const getBearFormInfo = (e) => {
  e.preventDefault();

  const bearName = document.querySelector('#bearName').value;
  const bearImgUrl = document.querySelector('#bearImageUrl').value;
  const uniqueIds = competingBears.map((bear) => bear.bearId);
  const attemptCount = 0;
  const catchCount = 0;

  const bearId = uniqueIds.length ? uniqueIds[uniqueIds.length - 1] + 1 : 1;

  const formValidation = () => {
    const domString = `<div class="alert alert-warning alert-dismissible" role="alert"> How are we supposed to enter a nameless bear into a competition?
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    printToDom('#formValidation', domString);
  };

  if (bearName === '') {
    formValidation();
  } else {
    const infoIntoObj = {
      bearName,
      bearImgUrl,
      bearId,
      attemptCount,
      catchCount,
    };
    competingBears.push(infoIntoObj);
  }

  printBearCard(competingBears);
  document.querySelector('#bear-form').reset();
};

const updateAttemptsAndCatches = (e) => {
  e.preventDefault();
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === 'button') {
    const indexfOfBear = competingBears.findIndex((bear) => bear.bearId === targetId);
    if (indexfOfBear !== -1) {
      competingBears[indexfOfBear].catchCount.sort((a, b) => (a.catchCount > b.catchCount ? 1 : -1));
      competingBears[indexfOfBear].attemptCount.sort((a, b) => (a.attemptCount > b.attemptCount ? 1 : -1));
    }
  }
  printBearCard(competingBears);
};

export {
  getBearFormInfo, updateAttemptsAndCatches
};
