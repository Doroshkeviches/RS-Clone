//TODO Delete after adding routing
export interface component {
  selector?: string;
  template: string;
}

export const headerTemplate: component = { //TODO Delete active-link
  template: `
<header class="header">
  <div class="container">
    <nav class="header__menu">
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <a href="#Goals" class="header__menu-link">Goals</a>
        </li>
        <li class="header__menu-item">
          <a href="#Workout" class="header__menu-link active-link">Workout</a> 
        </li>
        <li class="header__menu-item">
          <a href="#Calculator" class="header__menu-link">Calculator</a>
        </li>
        <li class="header__menu-item">
          <a href="#Statistics" class="header__menu-link">Statistics</a>
        </li>
        <li class="header__menu-item">
          <a href="#Profile" class="header__menu-link">Profile</a>
        </li>
      </ul>
    </nav>
  </div>
</header>`
}
