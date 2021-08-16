class Box {
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

  get itemsObj() {
    let counts = {};
    for (const color of this.content) {
      counts[color] = counts[color] || 0;
      counts[color] += 1;
    }
    return counts;
  }

  get complexity() {
    let numColors = Object.keys(this.itemsObj).length;
    return numColors;
  }

  get colorOrder() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letter = this.content[0].slice(0, 1);
    let letterPosition = alphabet.indexOf(letter);
    return letterPosition;
  }

  processBox(key) {
    const itemsArr = Object.entries(this.itemsObj);

    let display = {};
    for (const item of itemsArr) {
      const [color, count] = item;
      let isPlural = count > 1 ? true : false;

      switch (this.size) {
        case 4:
          if (isPlural) {
            display[color] = (
              <>
                <i className={`color-${color} ri-focus-3-line`}></i>
                <div>
                  <h3>{count} replacement heads</h3>
                </div>
              </>
            );
          } else {
            display[color] = (
              <>
                <i className={`color-${color} ri-focus-3-line`}></i>
                <div>
                  <h3>{count} replacement head</h3>
                </div>
              </>
            );
          }
          break;
        case 2:
          if (isPlural) {
            display[color] = (
              <>
                <i className={`color-${color} ri-focus-3-line`}></i>
                <div>
                  <h3>{count} brushes</h3>
                  <h3>{count} replacement heads</h3>
                </div>
              </>
            );
          } else {
            display[color] = (
              <>
                <i className={`color-${color} ri-focus-3-line`}></i>
                <div>
                  <h3>{count} brush</h3>
                  <h3>{count} replacement head</h3>
                </div>
              </>
            );
          }
          break;
        default:
          break;
      }
    }

    const processedBox = (
      <div key={key} className="box">
        {display.blue}
        {display.green}
        {display.pink}
      </div>
    );

    return processedBox;
  }
}

export default Box;
