export interface component {
  selector?: string;
  template: string;
}
export const nutritionCalculator: component = {
  template: `
<div id="calculateNutritionContainer">
            <div class="leftContainer">
                <div class="search_container">
                    <input type="text" name="Search" placeholder="Apple" id="leftContainerInputSearch">
                    <label id="leftContainerSearchBtn" class="left_container_search_button" for="Search">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><rect width="50" height="50" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                    </label>
                </div>
                <div class="leftContainerItems" id="leftContainerItems">
                </div>
            </div>
            <div class="rightContainer">
                <div class="calculator_container">
                    <div class="calculator_header_text">
                        <div class="calculator_aim">
                            <div class="calculator_aim_text">Aim</div>
                            <div id="aim">2500</div>
                        </div>
                    </div>
                    <div id="progress_Container">
                        <div id="progress"></div>
                        <div id="progress_background"></div>
                    </div>
                    <div id="calculator_footer_text">
                        <div class="calculator_footer_text_nutrition">
                            <p>Kcal</p>
                            <p id="calculator_footer_text_kcal">0</p>
                        </div>
                        <div class="calculator_footer_text_nutrition">
                            <p>Protein</p>
                            <p id="calculator_footer_text_protein">0</p>
                        </div>
                        <div class="calculator_footer_text_nutrition">
                            <p>Fat</p>
                            <p id="calculator_footer_text_fat">0</p>
                        </div>
                        <div class="calculator_footer_text_nutrition">
                            <p>Carbohydrate</p>
                            <p id="calculator_footer_text_carbohydrate">0</p>
                        </div>
                    </div>
                </div>
                <div id="total_container">
                    
                </div>
            </div>
        </div>
`,
};
