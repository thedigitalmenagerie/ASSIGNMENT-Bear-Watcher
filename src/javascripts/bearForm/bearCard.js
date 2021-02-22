import competingBears from '../river/data/competingBears';
import printToDom from '../river/printToDom';

const printBearCard = () => {
  let domString = '';
  competingBears.forEach((item) => {
    domString += `<div class="card mb-3" style="max-width: 400px;" id=${item.bearId}>
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.bearImgUrl}" alt="bear" class="card-image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><small>${item.bearName}</small></h5>
        <p class="card-text"><small>Attempts: ${item.attemptCount} Catches: ${item.catchCount}</small></p>
        <p class="card-text"><small class="text-muted">Last attempt: Last caught:</small></p>
      <button type="button" class="btn" id="catch-btn">Catch!</button>
      </div>
    </div>
    </div>
    </div>`;
  });
  printToDom('#bear-card-container', domString);
};

export default printBearCard;
