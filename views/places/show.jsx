const React = require("react");
const Def = require("../default");

function Show({ place }) {
  let comments = (
    <p className="inactive">
      No comments yet!
    </p>
  )

  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )

  if (place.comments.length) {
    let sumRatings = place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / place.comments.length
    rating = (
      <h3>
        {Math.round(averageRating)} stars
      </h3>
    )
    comments = place.comments.map(c => {
      return (
        <div className="border border-2 rounded" key={c.id} style={{
          backgroundColor: '#e9f1f7',
          textAlign: 'left',
          padding: '10px 15px'
        }}>
          <h6><strong>{c.rant ? 'Rant!' : 'Rave!'}</strong></h6>
          <p>{c.content}</p>
          <h6>- {c.author}</h6>
          <h6><strong>Rating: {c.stars}</strong></h6>
        </div>
      )
    })
  }

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
            <h5>
              Located in {place.city}, {place.state}
            </h5>
            <br />
            <h5 className="card-title">Rating</h5>
            <p>{rating}</p>
            <h5 className="card-title">Restaurant Description</h5>
            <h6>{place.showEstablished()}</h6>
            <ul
              className="card-text"
              style={{ listStyleType: "none", marginRight: "30px" }}
            >
              <li>{place.cuisines}</li>
            </ul>
            <div className="edit_delete">
              <a href={`/places/${place.id}/edit`} className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
                Edit
              </a>
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  Delete
                </button>
              </form>
            </div>
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
            {comments}
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
            <h5 className="card-title">Got Your Own Rant or Rave?</h5>
            <form action={`/places/${place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="author">Author</label>
                  <input
                    className="form-control"
                    type="text"
                    id="author"
                    name="author"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="stars">Star Rating</label>
                  <input
                    className="form-control form-range"
                    type="range"
                    id="stars"
                    name="stars"
                    step={0.5}
                    min={0}
                    max={5}
                    required
                    style={{
                      border: 'none'
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="rant">Rant?</label>
                <input
                  className="form-control form-check-input mt-0"
                  type="checkbox"
                  id="rant"
                  name="rant"
                  style={{
                    margin: '8px auto'
                  }}
                />
              </div>
              <div>
                <input className="btn btn-primary" type="submit" value="Add Comment" />
              </div>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = Show;


