function useFormatData() {
  function formatData(family) {
    let numBlue = family.filter((member) => {
      return member.brush_color === "blue";
    }).length;
    let numGreen = family.filter((member) => {
      return member.brush_color === "green";
    }).length;
    let numPink = family.filter((member) => {
      return member.brush_color === "pink";
    }).length;

    const blue = numBlue;
    const green = numGreen;
    const pink = numPink;

    const itemsObj = {
      blue,
      green,
      pink,
    };

    const itemsArr = Object.entries(itemsObj);
    const boxItems = itemsArr.filter((el) => el[1] > 0);
    boxItems.sort((a, b) => b[1] - a[1]);

    return boxItems;
  }

  return { formatData };
}

export default useFormatData;
