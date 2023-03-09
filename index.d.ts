import inArray from './inArray';
import inArrayObjects from './inArrayObjects';
import inDir from './inDir';
import inFile from './inFile';
import inObject from './inObject';
import inRegex from './inRegex';
import inString from './inString';
export { inArray, inArrayObjects, inDir, inFile, inObject, inRegex, inString, };
declare const _default: {
    inArray: {
        keysToObject: typeof import("./inArrayAndObject/keysToObject").default;
        getMaxValue: (arr: number[]) => {
            value: number;
            index: number;
        };
        getArrayOfMostRepeatedLength: (arr: (string | number)[]) => (string | number)[];
        getLengthArrDictionary: (items?: (string | number)[]) => Record<string, number>;
        isSubset: typeof import("./inArray").isSubset;
        removeDuplicates: <T>(arr: T[]) => T[];
        isEmpty: (array: any[]) => boolean;
    };
    inArrayObjects: {
        combine: <T_1>(...arrs: {
            from: any[];
            by: string;
            as: string;
        }[]) => {
            [key: string]: {
                [key: string]: T_1[];
            };
        };
        count: <T_2>(arr: T_2[], property: string, value: any) => number;
        groupByNestedProperty: <T_3>(arr: T_3[], propiedad: string) => {
            [key: string]: T_3[];
        };
        setPropByConstVals: typeof import("./inArrayObjects/setPropByPropValue").default;
        setPropByFilter: typeof import("./inArrayObjects/setPropByFilter").default;
        sortByProperty: <T_4>(arr: T_4[], property: string, descending?: boolean) => T_4[];
    };
    inDir: {
        read: ({ dirPath, recursive }: {
            dirPath: string;
            recursive?: boolean;
        }) => {
            files: string[];
            error?: Error;
        };
        rename: (pathCurrent: string, newName: string) => import("./inDirAndFile/response/response").Response;
        move: (pathCurrent: string, newPath: string) => import("./inDirAndFile/response/response").Response;
        del: (path: string) => import("./inDirAndFile/response/response").Response;
        getStats: typeof import("./inDir").getStats;
    };
    inFile: {
        write: (path: string, content: string, option: "append" | "create" | "overwrite") => import("./inDirAndFile/response/response").Response;
        del: (path: string) => import("./inDirAndFile/response/response").Response;
        move: (pathCurrent: string, newPath: string) => import("./inDirAndFile/response/response").Response;
        rename: (pathCurrent: string, newName: string) => import("./inDirAndFile/response/response").Response;
        getStats: typeof import("./inDir").getStats;
    };
    inObject: {
        getCountByValues: typeof import("./inObject").getCountByValues;
        getMaxValue: (obj: Record<string, number>) => {
            key: string;
            value: number;
        };
        isEmpty: (obj: Record<string, any>) => boolean;
        mapKeys: typeof import("./inObject").mapKeys;
        mergeDeep: typeof import("./inObject").mergeDeep;
        inNestedProperty: {
            get: <T_5>(obj: T_5, property: string) => any;
            set: <T_6>(obj: T_6, property: string | keyof T_6, value: any) => T_6;
        };
    };
    inRegex: {
        isSnakeCase: (string: any) => boolean;
        isCamelCase: (string: string) => boolean;
        isCapitalized: (string: string) => boolean;
        isWord: (string: string) => boolean;
    };
    inString: {
        camelToSnake: (str: string) => string;
        snakeToCamel: (string: string) => string;
        snakeToSnakeCapitalized: (string: string, isFirstCapitalized?: boolean) => string;
    };
};
export default _default;
