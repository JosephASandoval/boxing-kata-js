export function createOneRefill(key, color1, color2, color3, boxesArr) {
  let first;
  if (key) {
    first = (
      <div key={boxesArr.length} className="box">
        <i className={`color-${color1} ri-drop-line`}></i>
        <div>
          <h3>1 replacement head</h3>
        </div>
      </div>
    );
  }

  boxesArr.push(first);
}
