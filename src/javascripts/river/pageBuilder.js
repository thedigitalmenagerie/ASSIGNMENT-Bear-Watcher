import printToDom from './printToDom';

const pageBuilder = () => {
  let domString = '';
  domString += `<div class="main-container" id="main-container">
  <div class="title-container" id="title-container">
    <h1>Bear Watcher</h1>
    <hr> 
    <div class="formValidation" id="formValidation"></div>
  </div>
    <div class="bottom-container d-flex flex-row justify-content-around" id="bottom-container">
    <div class="form-container d-inline-flex" id=form-container>
    </div>
    <div class="stats-container d-flex flex-row justify-content-evenly" id="stats-container">
      <div class="awards-container" id="awards-container">
      </div>
      <div class="tie-container" id="tie-container">
      </div>
     </div>
    </div>
    <hr> 
    <div class="bear-card-container d-flex flex-row flex-wrap justify-content-around" id="bear-card-container"></div> 
  </div>`;
  printToDom('#body', domString);
};

export default pageBuilder;
