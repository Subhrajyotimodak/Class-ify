import Classify, { classify } from "../src/index";

test("Passing Empty values", () => {
  expect(classify({})).toBe("");
});

test("Passing Key value params", () => {
  expect(
    classify({
      sm: "text-slate-200 w-20 h-40",
      md: "bg-black h-300 w-0",
    }),
  ).toBe("sm:text-slate-200 sm:w-20 sm:h-40 md:bg-black md:h-300 md:w-0");
});

test("Passing string Array", () => {
  expect(classify("text-slate-200", "w-20", "h-40")).toBe("text-slate-200 w-20 h-40");
});

test("Passing both types of values", () => {
  expect(
    classify(
      {
        sm: "text-slate-200 w-20 h-40",
        md: "bg-black h-300 w-0",
      },
      "text-slate-200",
      "w-20",
      "h-40",
    ),
  ).toBe("sm:text-slate-200 sm:w-20 sm:h-40 md:bg-black md:h-300 md:w-0 text-slate-200 w-20 h-40");
});

test("Changing separators, joiners and aggregators", () => {
  Classify.separator = " ";
  Classify.aggregator = "+";
	Classify.joiner = "=";
  expect(
    classify(
      {
        sm: "text-slate-200 w-20 h-40",
        md: "bg-black h-300 w-0",
      },
      "text-slate-200",
      "w-20",
      "h-40",
    ),
  ).toBe("sm+text-slate-200=sm+w-20=sm+h-40=md+bg-black=md+h-300=md+w-0=text-slate-200=w-20=h-40");
});
