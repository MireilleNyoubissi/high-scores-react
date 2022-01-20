import React from "react";

function Table(props){

    return (
      <div className="space-div">
        <button type="button" >Click Me</button>
        {props.data.map((list) => (
          <table className="table table-bordered table-responsive-sm ">
            <thead>
              <tr>
                <th scope="row" className="main-heading">
                  High Scores: {list.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {list.scores
                .sort((a, b) => b.s - a.s)
                .map((score) => (
                  <tr>
                    <th>{score.n}</th>
                    <td>{score.s}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ))}
      </div>
    );
}

export default Table;