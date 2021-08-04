export function createFourRefills(key, color1, color2, color3, boxesArr) {
  let first;
  if (key === 1) {
    first = (
      <div key={boxesArr.length} className="box">
        <i className={`color-${color1} ri-drop-line`}></i>
        <div>
          <h3>1 replacement head</h3>
        </div>
        <i className={`color-${color2} ri-drop-line`}></i>
        <div>
          <h3>1 replacement head</h3>
        </div>
        <i className={`color-${color3} ri-drop-line`}></i>
        <div>
          <h3>2 replacement heads</h3>
        </div>
      </div>
    );
  } else if (key === 2) {
    first = (
      <div key={boxesArr.length} className="box">
        <i className={`color-${color1} ri-drop-line`}></i>
        <div>
          <h3>2 replacement heads</h3>
        </div>
        <i className={`color-${color2} ri-drop-line`}></i>
        <div>
          <h3>2 replacement heads</h3>
        </div>
      </div>
    );
  } else if (key === 3) {
    first = (
      <div key={boxesArr.length} className="box">
        <i className={`color-${color1} ri-drop-line`}></i>
        <div>
          <h3>1 replacement head</h3>
        </div>
        <i className={`color-${color2} ri-drop-line`}></i>
        <div>
          <h3>3 replacement heads</h3>
        </div>
      </div>
    );
  }

  boxesArr.push(first);
}