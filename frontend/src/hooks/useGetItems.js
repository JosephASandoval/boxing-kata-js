function useGetItems() {
  function getItems(family) {
    let itemsObj = {};
    for (const member of family) {
      itemsObj[member.brush_color] = itemsObj[member.brush_color] || 0;
      itemsObj[member.brush_color] += 1;
    }

    const itemsArr = Object.entries(itemsObj);
    itemsArr.sort((a, b) => b[1] - a[1]);

    return itemsArr;
  }

  return { getItems };
}

export default useGetItems;
