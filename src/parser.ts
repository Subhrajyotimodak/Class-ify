const parseArray = (arr: string[], joiner: string) => arr.join(joiner);
const parseObject = (obj: { [key: string]: string }, splitter: string, agg: string, joiner: string) => {
  const keys = Object.keys(obj);
  let classes: string[] = [];
  for (const key of keys) {
    const value = obj[key];
    const subclasses = value.split(splitter);
    const newSubClasses = subclasses.map((clx) => `${key}${agg}${clx}`).join(joiner);
    classes = [...classes, newSubClasses];
  }
  return classes.join(joiner);
};

export default {
  parseArray,
  parseObject,
};
