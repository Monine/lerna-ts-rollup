import { IBarOptions, IBarDoSomeThingOptions } from './types';
export default class Bar {
    options: IBarOptions;
    constructor(options: IBarOptions);
    doSomeThing(options: IBarDoSomeThingOptions): void;
}
