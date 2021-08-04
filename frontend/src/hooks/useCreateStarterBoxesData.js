function useCreateStarterBoxesData() {
  function createStarterBoxesData(family) {

    let blue = family.filter((member) => {
      return member.brush_color === "blue";
    }).length;
    let green = family.filter((member) => {
      return member.brush_color === "green";
    }).length;
    let pink = family.filter((member) => {
      return member.brush_color === "pink";
    }).length;

    const blueDouble = Math.floor(blue / 2);
    const greenDouble = Math.floor(green / 2);
    const pinkDouble = Math.floor(pink / 2);
    const blueRemainder = blue % 2;
    const greenRemainder = green % 2;
    const pinkRemainder = pink % 2;

    const dataObj = {
      blueDouble,
      greenDouble,
      pinkDouble,
      blueRemainder,
      greenRemainder,
      pinkRemainder,
    };

    const dataArr = Object.entries(dataObj);
    const filteredDataArr = dataArr.filter((el) => el[1] > 0);

    return filteredDataArr;
  }

  return { createStarterBoxesData };
}

export default useCreateStarterBoxesData;
