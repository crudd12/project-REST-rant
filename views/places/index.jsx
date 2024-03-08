const React = require("react");
const Def = require("../default");

function index({ places }) {
  let placesFormatted = places.map((place, i) => {
    return (
      <div className="col-sm-6" key={i}>
        <h2 className="text-center">{place.name}</h2>
        <p className="text-center">{place.cuisines}</p>
        <img src={place.pic} className="rounded mx-auto d-block" alt={place.name} width="50%"></img>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
