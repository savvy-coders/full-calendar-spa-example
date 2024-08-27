/* eslint-disable prettier/prettier */
import html from "html-literal";

export default (links) => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        (element) =>
          `<li><a href="/${element.title}" title="${element.title}" data-navigo>${element.text}</a></li>`
      )}
    </ul>
  </nav>
`;
