import { SignUpBtnClickListener } from './signUpBtnClick';
export function renderRegistrationPage() {
  const container = document.getElementById('container') as HTMLElement;
  container.innerHTML = `
        <div class="SignUp">Sign Up</div>
        <input type="text" value="" id="name" placeholder="Name (Ivan)">
            <div id="radioGender">
                <div class="radioGender_item">
                    <input type="radio" name="gender" id="genderMale" value="Male" checked>
                    <label for="genderMale">Male</label>
                </div>
                <div class="radioGender_item">
                    <input type="radio" name="gender" id="genderFemale" value="Female">
                    <label for="genderFemale">Female</label>
                </div>
            </div>
            <input type="number" value="" id="weight" placeholder="Enter your weight ( 70 )">
                <input type="number" value="" id="height" placeholder="Enter your height ( 170 )">
                <input type="number" value="" id="age" placeholder="20">
                <input type="number" value="" id="activity" placeholder="Trains per week ( 2 )">
                <button class="submit" id="SignUpBtn">Sign Up</button>
        `;
  SignUpBtnClickListener();
}
