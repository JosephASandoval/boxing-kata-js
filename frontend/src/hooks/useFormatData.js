function useFormatData() {
  function formatData(family) {
    let blue = family.filter((member) => {
      return member.brush_color === "blue";
    }).length;
    let green = family.filter((member) => {
      return member.brush_color === "green";
    }).length;
    let pink = family.filter((member) => {
      return member.brush_color === "pink";
    }).length;

    const dataObj = {
      blue,
      green,
      pink,
    };

    const dataArr = Object.entries(dataObj);
    const sortedDataArr = dataArr.sort((a, b) => b[1] - a[1]);

    return sortedDataArr;
  }

  return { formatData };
}

export default useFormatData;
