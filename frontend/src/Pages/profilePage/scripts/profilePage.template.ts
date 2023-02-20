import { editSvg } from './editSVG';
export const profileTemplate = `
<div id="profileContainer">
<div class="logo">
        <img id="img" src="https://t4.ftcdn.net/jpg/05/09/59/75/360_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg" alt="">
        <div class="logoInput" id="logo_input">
            <input type="file" id="file">
            <button id="apply">Apply</button>
        </div>
    </div>
    <div class="inputProfileCollection profileInputs">
    <div class="ProfileInputsItem">Name <input class="inputProfileCollection profileInputs" type="text" value="" id="profileNameInput"  disabled></div>
    <div class="ProfileInputsItem">Gender 
    <div class="profileGenderContainer">
    <div class="profileGenderItem">
    <input type="radio" class="profileGenderInput inputProfileCollection" name="gender" id="profileGenderMale" value="Male" disabled>
    <label for="profileGenderMale">
      Male
    </label>
    </div>
    <div class="profileGenderItem">
    <input type="radio" class="profileGenderInput inputProfileCollection" name="gender" id="profileGenderFemale" value="Female" disabled>
    <label  for="profileGenderFemale">
      Female
    </label>
    </div>
    </div>
    </div>
    <div class="ProfileInputsItem">Weight <input class="inputProfileCollection profileInputs" type="number" value="" id="profileWeightInput"  disabled></div>
    <div class="ProfileInputsItem">Height <input class="inputProfileCollection profileInputs" type="number" value="" id="profileHeightInput"  disabled></div>
    <div class="ProfileInputsItem">Age <input class="inputProfileCollection profileInputs" type="number" value="" id="profileAgeInput"  disabled></div>
    <div class="ProfileInputsItem">Activity <input class="inputProfileCollection profileInputs" type="number" value="" id="profileActivityInput"  disabled></div>
    </div>
    <div class="profilesBtns">
    <div id="profileChangeBtn">${editSvg}</div>
    <button id="profileBtnSave" disabled>Save</button>
    </div>

    </div>
`;
