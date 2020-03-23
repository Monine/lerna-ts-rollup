import { IBarOptions, IBarDoSomeThingOptions } from './types';

export default class Bar {
  public options: IBarOptions;

  constructor(options: IBarOptions) {
    this.options = Object.assign(
      {
        arg4: 'a',
        arg5: 5,
        arg6: true,
      } as IBarOptions,
      options,
    );
  }

  public doSomeThing(options: IBarDoSomeThingOptions) {
    console.log(options);
  }
}
