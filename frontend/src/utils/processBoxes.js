export function processBoxes(boxes, MAX_ITEMS) {
  // formats boxes for easier data handling; for example:
  // [[blue, blue, pink], [green, green]] ==> [{blue: 2, pink: 1}, {green: 2}]
  let formattedBoxes = [];
  for (const box of boxes) {
    let boxObj = {};
    for (const color of box) {
      boxObj[color] = boxObj[color] || 0;
      boxObj[color] += 1;
    }
    formattedBoxes.push(boxObj);
  }

  // iterate thru formattedBoxes to process each box with jsx and styling
  let processedBoxes = [];
  for (let i = 0; i < formattedBoxes.length; i++) {
    const { blue, green, pink } = formattedBoxes[i];

    let renderBlue;
    if (blue > 1) {
      renderBlue =
        MAX_ITEMS === 4 ? (
          <h3>{blue} replacement heads</h3>
        ) : (
          <>
            <h3>{blue} brushes</h3>
            <h3>{blue} replacement heads</h3>
          </>
        );
    } else if (blue === 1) {
      renderBlue =
        MAX_ITEMS === 4 ? (
          <h3>{blue} replacement head</h3>
        ) : (
          <>
            <h3>{blue} brush</h3>
            <h3>{blue} replacement head</h3>
          </>
        );
    }

    let renderGreen;
    if (green > 1) {
      renderGreen =
        MAX_ITEMS === 4 ? (
          <h3>{green} replacement heads</h3>
        ) : (
          <>
            <h3>{green} brushes</h3>
            <h3>{green} replacement heads</h3>
          </>
        );
    } else if (green === 1) {
      renderGreen =
        MAX_ITEMS === 4 ? (
          <h3>{green} replacement head</h3>
        ) : (
          <>
            <h3>{green} brush</h3>
            <h3>{green} replacement head</h3>
          </>
        );
    }

    let renderPink;
    if (pink > 1) {
      renderPink =
        MAX_ITEMS === 4 ? (
          <h3>{pink} replacement heads</h3>
        ) : (
          <>
            <h3>{pink} brushes</h3>
            <h3>{pink} replacement heads</h3>
          </>
        );
    } else if (pink === 1) {
      renderPink =
        MAX_ITEMS === 4 ? (
          <h3>{pink} replacement head</h3>
        ) : (
          <>
            <h3>{pink} brush</h3>
            <h3>{pink} replacement head</h3>
          </>
        );
    }

    const processedBox = (
      <div key={i} className="box">
        {renderBlue ? (
          <>
            <i className={`color-blue ri-focus-3-line`}></i>
            <div>{renderBlue}</div>
          </>
        ) : (
          ""
        )}
        {renderGreen ? (
          <>
            <i className={`color-green ri-focus-3-line`}></i>
            <div>{renderGreen}</div>
          </>
        ) : (
          ""
        )}
        {renderPink ? (
          <>
            <i className={`color-pink ri-focus-3-line`}></i>
            <div>{renderPink}</div>
          </>
        ) : (
          ""
        )}
      </div>
    );

    processedBoxes.push(processedBox);
  }

  return processedBoxes;
}
