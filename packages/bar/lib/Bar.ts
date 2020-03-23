import { BarOptions, BarDoSomeThingOptions } from './types';

export default class Bar {
  public options: BarOptions;

  constructor(options: BarOptions) {
    this.options = Object.assign(
      {
        arg4: 'a',
        arg5: 5,
        arg6: true,
      } as BarOptions,
      options,
    );
  }

  public doSomeThing(options: BarDoSomeThingOptions): void {
    console.log(options);
  }
}
