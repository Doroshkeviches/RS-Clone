import i18n from 'i18next';

export const headerTemplate = `
  <header class="header">
    <div class="container">
      <nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <a href="#Goals" class="header__menu-link">${i18n.t(
              'header.goals'
            )}</a>
          </li>
          <li class="header__menu-item">
            <a href="#Workout" class="header__menu-link">${i18n.t(
              'header.workout'
            )}</a> 
          </li>
          <li class="header__menu-item">
            <a href="#Calculator" class="header__menu-link">${i18n.t(
              'header.calculator'
            )}</a>
          </li>
          <li class="header__menu-item">
            <a href="#Statistics" class="header__menu-link">${i18n.t(
              'header.statistics'
            )}</a>
          </li>
          <li class="header__menu-item">
            <a href="#Profile" class="header__menu-link">${i18n.t(
              'header.profile'
            )}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>`; //TODO Delete active-link
