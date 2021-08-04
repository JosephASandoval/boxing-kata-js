function useFormateData() {
  function formateData(family, boxType) {
    let divisor;
    if (boxType === "starter") {
      divisor = 2;
    } else if (boxType === "refill") {
      divisor = 4;
    }

    let blue = family.filter((member) => {
      return member.brush_color === "blue";
    }).length;
    let green = family.filter((member) => {
      return member.brush_color === "green";
    }).length;
    let pink = family.filter((member) => {
      return member.brush_color === "pink";
    }).length;

    const blueGroup = Math.floor(blue / divisor);
    const greenGroup = Math.floor(green / divisor);
    const pinkGroup = Math.floor(pink / divisor);
    const blueRemainder = blue % divisor;
    const greenRemainder = green % divisor;
    const pinkRemainder = pink % divisor;

    const dataObj = {
      blueGroup,
      greenGroup,
      pinkGroup,
      blueRemainder,
      greenRemainder,
      pinkRemainder,
    };

    const dataArr = Object.entries(dataObj);
    const filteredDataArr = dataArr.filter((el) => el[1] > 0);

    return filteredDataArr;
  }

  return { formateData };
}

export default useFormateData;
