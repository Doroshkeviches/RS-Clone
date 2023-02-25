import githubImg from '../../Assets/github.png';
import rsImg from '../../Assets/rs.png';

export const footerTemplate = `
  <footer class="footer">
    <div class="footer__wraper">
      <h4 class="footer__year">2023</h4>
      <a href="https://github.com/Doroshkeviches" class="footer__link">
        <img src="${githubImg}" alt="github" class="footer__link-img">
        <h5 class="footer__link-name">Doroshkeviches</h5>
      </a>
      <a href="https://github.com/RetiredHedgehog" class="footer__link">
        <img src="${githubImg}" alt="github" class="footer__link-img">
        <h5 class="footer__link-name">RetiredHedgehog</h5>
      </a>
      <a href="https://github.com/inanimate631" class="footer__link">
        <img src="${githubImg}" alt="github" class="footer__link-img">
        <h5 class="footer__link-name">inanimate631</h5>
      </a>
      <a href="https://rs.school/js/" class="footer__link">
        <img src="${rsImg}" alt="github" class="footer__link-img--rs">
      </a>
    </div>
  </footer>
`;
