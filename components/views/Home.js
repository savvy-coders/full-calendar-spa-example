import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default state => html`
  <section id="jumbotron">
    <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
    <a href="" onClick="alert('Hello! You clicked the Button!')"
      >"Call to Action Button"</a
    >
  </section>
  <h3>
    Temperature in ${state.weather.city} is
    ${kelvinToFahrenheit(state.weather.temp)}F. It feels like
    ${kelvinToFahrenheit(state.weather.feelsLike)}F.
  </h3>
`;
