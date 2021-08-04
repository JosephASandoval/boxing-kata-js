function useCreateRefillBoxesData() {
  function createRefillBoxesData(family) {
    let blue = family.filter((member) => {
      return member.brush_color === "blue";
    }).length;
    let green = family.filter((member) => {
      return member.brush_color === "green";
    }).length;
    let pink = family.filter((member) => {
      return member.brush_color === "pink";
    }).length;

    const blueQuad = Math.floor(blue / 4);
    const greenQuad = Math.floor(green / 4);
    const pinkQuad = Math.floor(pink / 4);
    const blueRemainder = blue % 4;
    const greenRemainder = green % 4;
    const pinkRemainder = pink % 4;

    const dataObj = {
      blueQuad,
      greenQuad,
      pinkQuad,
      blueRemainder,
      greenRemainder,
      pinkRemainder,
    };

    const dataArr = Object.entries(dataObj);
    const filteredDataArr = dataArr.filter((el) => el[1] > 0);

    return filteredDataArr;
  }

  return { createRefillBoxesData };
}

export default useCreateRefillBoxesData;
