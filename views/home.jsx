// npm dependency
const React = require("react");
// local file system dependency
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/chimichanga_stockphoto.jpg" alt="Chimichanga" width='50%'/>
          <div>
            Photo by <a href="AUTHOR_LINK">Lauri Patterson</a> on{" "}
            <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
