import { Fragment, useState } from "react";
import { createGrid, markDiagonal } from "./grid";

function App() {
  const [grid, setGrid] = useState(createGrid(7));

  function handleClick(row: number, column: number) {
    console.log(`Clicked on row ${row}, column ${column}`);
    setGrid(markDiagonal(grid, [row, column]));
  }
  console.log(grid);
  return (
    <div className="app">
      <h1>Interactive Grid</h1>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${grid.length}, 1fr)` }}
      >
        {grid.map((row, i) => {
          return (
            <Fragment key={i}>
              {row.map((value, j) => {
                return (
                  <div
                    onClick={() => handleClick(i, j)}
                    key={j}
                    className="cell"
                    data-selected={value === 2}
                    data-active={value === 1}
                  ></div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;
