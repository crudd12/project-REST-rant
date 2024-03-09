const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Rest-Rant</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav> 
        <div>{html.children}</div>
        <footer className="footer">
            <p>This site was created by Courtney Rudd. To see more of her work checkout: <a href="https://github.com/crudd12">CRUDD GitHub</a></p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Def;
