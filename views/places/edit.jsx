const React = require("react");
const Def = require("../default");

function Edit() {
  return (
    <h1>edit stub route</h1>

    //   return (
    //     <Def>
    //       <main>
    //         <h1>Edit</h1>
    //         <form action={`/places/${i}?_method=PUT`} method="POST">
    //           <div className="form-group">
    //             <label htmlFor="name">Place Name</label>
    //             <input
    //               className="form-control"
    //               type="text"
    //               id="name"
    //               name="name"
    //               required
    //               // defaultValue={place.name}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="pic">Place Picture</label>
    //             <input className="form-control" type="url" id="pic" name="pic" />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="city">Place City</label>
    //             <input className="form-control" type="text" id="city" name="city" />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="state">Place State</label>
    //             <input
    //               className="form-control"
    //               type="text"
    //               id="state"
    //               name="state"
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="cuisines">Place Cuisines</label>
    //             <input
    //               className="form-control"
    //               type="text"
    //               id="cuisines"
    //               name="cuisines"
    //               required
    //             />
    //           </div>
    //           <br />
    //           <input type="submit" className="btn btn-primary" />
    //         </form>
    //       </main>
    //     </Def>
  );
}

module.exports = Edit;
