export const getArrayFromString = (text: string, redundant: string) => {
  const tags = text.replace(redundant, "");
  return (tags && tags.split(",").length) ? tags.split(",") : [];
}

export const removeFromArray = (list: any[], removed: any) => {
  return list.filter((item: any) => {
    return item !== removed;
  });
}

export const pushToArray = (list: any[], added: any) => {
  return [...list, added];
}