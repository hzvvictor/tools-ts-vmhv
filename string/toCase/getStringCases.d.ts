import { OutStringsVariations, StringsVariations } from "./types";
type StringsVariationsResult = {
    plural?: StringsVariations;
    singular?: StringsVariations;
};
declare const getStringCases: (string: string, out?: OutStringsVariations) => StringsVariationsResult;
export default getStringCases;
