function useFormatData() {
  function formatData(family, MAX_ITEMS) {
    let numBlue = family.filter((member) => {
      return member.brush_color === "blue";
    }).length;
    let numGreen = family.filter((member) => {
      return member.brush_color === "green";
    }).length;
    let numPink = family.filter((member) => {
      return member.brush_color === "pink";
    }).length;

    // console.log(`numBlue = ${numBlue}`);
    // console.log(`numGreen = ${numGreen}`);
    // console.log(`numPink = ${numPink}`);

    const blueGroup = Math.floor(numBlue / MAX_ITEMS);
    const greenGroup = Math.floor(numGreen / MAX_ITEMS);
    const pinkGroup = Math.floor(numPink / MAX_ITEMS);
    const blue = numBlue % MAX_ITEMS;
    const green = numGreen % MAX_ITEMS;
    const pink = numPink % MAX_ITEMS;

    const dataObj = {
      blueGroup,
      greenGroup,
      pinkGroup,
      blue,
      green,
      pink,
    };

    const dataArr = Object.entries(dataObj);
    const filteredDataArr = dataArr.filter((el) => el[1] > 0);

    return filteredDataArr;
  }

  return { formatData };
}

export default useFormatData;
