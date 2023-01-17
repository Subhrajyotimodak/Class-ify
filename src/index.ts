import parser from "./parser";

export default class Classify {
  public static separator = " ";
  public static joiner = " ";
  public static aggregator = ":";
}

export function classify(kwargs?: string | { [key: string]: string }, ...args: string[]) {
  const fromKwargs =
    typeof kwargs !== "undefined"
      ? typeof kwargs === "string"
        ? [kwargs]
        : parser.parseObject(kwargs, Classify.separator, Classify.aggregator, Classify.joiner)
      : undefined;
  const fromArgs = parser.parseArray(args, Classify.joiner);

  if (!fromKwargs) return fromArgs;
  return [fromKwargs, fromArgs].join(Classify.joiner).trim();
}
