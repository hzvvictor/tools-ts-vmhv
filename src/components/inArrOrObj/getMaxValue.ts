import inArray from "../inArray";
import inObject from "../inObject";
const getMaxValue = (arrOrObj: number[] | Record<string, number>): { value: number; index: string | number } => {
  if (Array.isArray(arrOrObj)) {
    const { value, index } = inArray.getMaxValue(arrOrObj);
    return { value, index };
  } else {
    const { value, index } = inObject.getMaxValue(arrOrObj);
    return { value, index };
  }
};

export default getMaxValue