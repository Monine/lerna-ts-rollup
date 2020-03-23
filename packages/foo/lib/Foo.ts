import { IFooOptions } from './types';
import Bar, { IBarOptions, IBarDoSomeThingOptions } from '@ltr/bar';

export default class Foo {
  public options: IFooOptions;
  private bar: Bar;

  constructor(options: IFooOptions) {
    this.options = Object.assign(
      {
        arg1: 'a',
        arg2: 1,
        arg3: true,
      } as IFooOptions,
      options,
    );

    const barOptions: IBarOptions = { arg5: 5, arg6: false };
    this.bar = new Bar(barOptions);

    this.doSomeThing();

    const barDoSomeThingOptions: IBarDoSomeThingOptions = {
      arg8: 8,
      arg9: true,
    };
    this.bar.doSomeThing(barDoSomeThingOptions);
  }

  private doSomeThing(): void {
    console.log(this.bar);
  }
}
