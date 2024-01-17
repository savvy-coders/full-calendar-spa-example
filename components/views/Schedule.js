import html from "html-literal";

const defaultStartDate = new Date();
const defaultEndDate = new Date();
defaultEndDate.setHours(defaultStartDate.getHours() + 1);

console.log(
  "matsinet-Schedule.js:7-:defaultEndDate.toJSON().substring(0, 16)",
  defaultEndDate.toJSON().substring(0, 16)
);

export default () => html`
  <section id="schedule">
    <form id="schedule-form">
      <h2>Create an Appointment</h2>
      <div>
        <label for="title">Appointment Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Appointment Title"
          required
        />
      </div>
      <div>
        <label for="allDay">All Day Event</label>
        <input type="checkbox" name="allDay" id="allDay" />
      </div>
      <div id="timeInputs">
        <div>
          <label for="start">Start Date/Time</label>
          <input
            id="start"
            name="start"
            type="datetime-local"
            value="${defaultStartDate.toJSON().substring(0, 16)}"
          />
        </div>
        <div>
          <label for="end">End Date/Time</label>
          <input
            id="end"
            name="end"
            type="datetime-local"
            value="${defaultEndDate.toJSON().substring(0, 16)}"
          />
        </div>
      </div>

      <input type="submit" name="submit" value="Schedule" />
    </form>
  </section>
`;
