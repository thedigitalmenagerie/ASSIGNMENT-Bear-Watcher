import { competingBears } from './competingBears';
import printToDom from '../printToDom';
import printBearCard from '../../bearForm/bearCard';

const getBearFormInfo = (e) => {
  e.preventDefault();

  const bearName = document.querySelector('#bearName').value;
  const bearImgUrl = document.querySelector('#bearImageUrl').value;
  const uniqueIds = competingBears.map((bear) => bear.bearId);
  const attemptCount = 0;
  const catchCount = 0;
  const attemptTimeStamp = '';
  const catchTimeStamp = '';
  const fatBearAward = Math.max(...competingBears.map((infoIntoObj) => infoIntoObj.catchCount), '');

  const bearId = uniqueIds.length ? uniqueIds[uniqueIds.length - 1] + 1 : 0;

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
      attemptTimeStamp,
      catchTimeStamp,
      fatBearAward,
    };
    competingBears.push(infoIntoObj);
  }
  printBearCard(competingBears);
  document.querySelector('#bear-form').reset();
};

const getTimeStamp = () => {
  const getDateNow = new Date();
  const year = getDateNow.getFullYear();
  const month = (getDateNow.getMonth() + 1).toString().padStart(2, '0');
  const day = getDateNow.getDate().toString().padStart(2, '0');
  const hours = getDateNow.getHours().toString().padStart(2, '0');
  const minutes = getDateNow.getMinutes().toString().padStart(2, '0');
  const seconds = getDateNow.getSeconds().toString().padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};

const updateAttemptsAndCatches = (e) => {
  e.preventDefault();
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === 'button') {
    const indexfOfBear = competingBears.findIndex((bear) => bear.bearId === targetId);
    if (indexfOfBear !== -1) {
      const updateAAndC = [
        function one() {
          competingBears[indexfOfBear].attemptCount += 1;
          competingBears[indexfOfBear].attemptTimeStamp = getTimeStamp();
        },
        function two() {
          competingBears[indexfOfBear].catchCount += 1;
          competingBears[indexfOfBear].catchTimeStamp = getTimeStamp();
        }
      ];
      const randomFrom = updateAAndC[Math.floor(Math.random() * updateAAndC.length)];
      randomFrom();
    }
  }
  printBearCard(competingBears);
};

export {
  getBearFormInfo, updateAttemptsAndCatches, getTimeStamp,
};
