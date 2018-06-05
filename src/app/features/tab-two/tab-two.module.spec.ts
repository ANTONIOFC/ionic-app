import { TabTwoModule } from './tab-two.module';

describe('TabTwoModule', () => {
  let tabTwoModule: TabTwoModule;

  beforeEach(() => {
    tabTwoModule = new TabTwoModule();
  });

  it('should create an instance', () => {
    expect(tabTwoModule).toBeTruthy();
  });
});
