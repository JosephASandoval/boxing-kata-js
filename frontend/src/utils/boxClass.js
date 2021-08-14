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
}
