export declare function names(...v: string[]): string;
export declare function check(result: boolean, className: string): string;
export declare function conditionalString(condition: any, value: string): string;
export declare function conditionalValue(condition: any, value: any): any;
export declare function conditionalRun(predicate: () => boolean, call: () => void): () => void;
export declare function buildLogSourceId(appId: string, instanceId: string): string;
export declare function compareDateString(a: string, b: string): number;
export declare function parseDateStringToText(date: string): string;
