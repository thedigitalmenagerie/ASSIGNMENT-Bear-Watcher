import printToDom from '../river/printToDom';

const printAwardedBear = () => {
  let domString = '';
  domString += `<div class="card mb-3" style="max-width: 400px;" id="awarded-bears">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F1401377%252F6f9514a7-155c-4cc8-9e1a-09fa97d9f271.webp%252F950x534__filters%253Aquality%252880%2529.webp?signature=CnZlunekuBsZptUkQgCR59GtZ7Y=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com" alt="bear" class="card-image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Fattest Bear</h5>
        <p class="card-text">Gold</p>
      </div>
    </div>
  </div>`;
  printToDom('#awards-container', domString);
};

export default printAwardedBear;
