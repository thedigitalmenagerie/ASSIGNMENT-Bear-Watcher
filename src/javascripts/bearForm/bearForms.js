import printToDom from '../river/printToDom';

const printBearForm = () => {
  let domString = '';
  domString += `<form id="bear-form">
    <h3 class="text-center">Bear Entry</h3>
    <div class="mb-3">
      <label for="name" class="form-label">Bear Name</label>
      <input type="text" class="form-control" id="bearName" required>
    </div>
    <div class="mb-3">
      <label for="imageUrl" class="form-label">Image Url  </label>
      <input type="url" class="form-control" id="bearImageUrl" required>
    </div>
    <button type="submit" class="btn" id="submit-btn">Compete!</button>
  </form>`;
  printToDom('#form-container', domString);
};

export default printBearForm;
