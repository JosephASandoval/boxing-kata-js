function useColorCount() {
  function colorCount(family) {
    let blue = family.filter((member) => {
      return member.brush_color === "blue";
    }).length;
    let green = family.filter((member) => {
      return member.brush_color === "green";
    }).length;
    let pink = family.filter((member) => {
      return member.brush_color === "pink";
    }).length;
    return { blue, green, pink };
  }

  return { colorCount };
}

export default useColorCount;
