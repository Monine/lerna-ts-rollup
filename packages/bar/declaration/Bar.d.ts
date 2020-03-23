import { BarOptions, BarDoSomeThingOptions } from './types';
export default class Bar {
    options: BarOptions;
    constructor(options: BarOptions);
    doSomeThing(options: BarDoSomeThingOptions): void;
}
