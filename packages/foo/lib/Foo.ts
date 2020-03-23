import { FooOptions } from './types';
import Bar, { BarOptions, BarDoSomeThingOptions } from '@ltr/bar';

export default class Foo {
  public options: FooOptions;
  private bar: Bar;

  constructor(options: FooOptions) {
    this.options = Object.assign(
      {
        arg1: 'a',
        arg2: 1,
        arg3: true,
      } as FooOptions,
      options,
    );

    const barOptions: BarOptions = { arg5: 5, arg6: false };
    this.bar = new Bar(barOptions);

    this.doSomeThing();

    const barDoSomeThingOptions: BarDoSomeThingOptions = {
      arg8: 8,
      arg9: true,
    };
    this.bar.doSomeThing(barDoSomeThingOptions);
  }

  private doSomeThing(): void {
    console.log(this.bar);
  }
}
