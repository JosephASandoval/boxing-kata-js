export class Box {
  constructor(size, content = []) {
    this._size = size;
    this.content = content;
  }

  get size() {
    return this._size;
  }

  get length() {
    return this.content.length;
  }

  get colorCount() {
    let counts = {};
    for (const color of this.content) {
      counts[color] = counts[color] || 0;
      counts[color] += 1;
    }
    return counts;
  }

  get complexity() {
    let counts = this.colorCount;
    let numColors = Object.keys(counts).length;
    return numColors;
  }

  get colorOrder() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letter = this.content[0].slice(0, 1);
    let letterPosition = alphabet.indexOf(letter);
    return letterPosition;
  }

  processBox(key) {
    const { blue, green, pink } = this.colorCount;

    let renderBlue;
    if (blue > 1) {
      renderBlue =
        this.size === 4 ? (
          <h3>{blue} replacement heads</h3>
        ) : (
          <>
            <h3>{blue} brushes</h3>
            <h3>{blue} replacement heads</h3>
          </>
        );
    } else if (blue === 1) {
      renderBlue =
        this.size === 4 ? (
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
        this.size === 4 ? (
          <h3>{green} replacement heads</h3>
        ) : (
          <>
            <h3>{green} brushes</h3>
            <h3>{green} replacement heads</h3>
          </>
        );
    } else if (green === 1) {
      renderGreen =
        this.size === 4 ? (
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
        this.size === 4 ? (
          <h3>{pink} replacement heads</h3>
        ) : (
          <>
            <h3>{pink} brushes</h3>
            <h3>{pink} replacement heads</h3>
          </>
        );
    } else if (pink === 1) {
      renderPink =
        this.size === 4 ? (
          <h3>{pink} replacement head</h3>
        ) : (
          <>
            <h3>{pink} brush</h3>
            <h3>{pink} replacement head</h3>
          </>
        );
    }

    const processedBox = (
      <div key={key} className="box">
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
    return processedBox;
  }
}
