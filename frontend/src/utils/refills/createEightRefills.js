export function createEightRefills(key, color1, color2, color3, boxesArr) {
  let first;
  if (key) {
    first = (
      <div key={boxesArr.length} className="box">
        <i className={`color-${color1} ri-focus-3-line`}></i>
        <div>
          <h3>2 replacement heads</h3>
        </div>
        <i className={`color-${color2} ri-focus-3-line`}></i>
        <div>
          <h3>2 replacement heads</h3>
        </div>
      </div>
    );
  }

  boxesArr.push(first);

  let second;
  if (key) {
    second = (
      <div key={boxesArr.length} className="box">
        <i className={`color-${color2} ri-focus-3-line`}></i>
        <div>
          <h3>1 replacement head</h3>
        </div>
        <i className={`color-${color3} ri-focus-3-line`}></i>
        <div>
          <h3>3 replacement heads</h3>
        </div>
      </div>
    );
  }

  boxesArr.push(second);
}
