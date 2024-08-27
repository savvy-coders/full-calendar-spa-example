import html from "html-literal";

export default state => html`
  <div class="appointment-container">
    <h3>${state.event.title}</h3>
    <div>
      <em>Start: </em><span>${state.event.start.toLocaleString()}</span>
    </div>
    <div><em>End: </em><span>${state.event.end.toLocaleString()}</span></div>
    <button id="delete-appointment" data-id="${state.event.id}">
      Delete Appointment
    </button>
  </div>
`;
