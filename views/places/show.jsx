const React = require("react");
const Def = require("../default");

function Show({ place, id }) {
  return (
    <Def>
      <main>
        <h1>{place.name}</h1>
        <div
          className="card"
          style={{
            width: "50rem",
            margin: "0 auto",
            backgroundColor: "#eeb78e",
          }}
        >
          <img
            src={`${place.pic}`}
            className="card-img-top"
            alt={`${place.name} Picture`}
          ></img>
          <div className="card-body">
            <h5 className="card-title">Rating</h5>
            <p>Not Rated</p>
            <h5 className="card-title">Restaurant Description</h5>
            <a href={`/places/${id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            <ul
              className="card-text"
              style={{ listStyleType: "none", marginRight: "30px" }}
            >
              <li>{place.cuisines}</li>
              <li>
                Located in {place.city}, {place.state}
              </li>  
            </ul>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "50rem",
            margin: "0 auto",
            marginTop: "15px",
            backgroundColor: "#eeb78e",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">Comments</h5>
            <p>No comments yet!</p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = Show;
