import { TabThreeModule } from './tab-three.module';

describe('TabThreeModule', () => {
  let tabThreeModule: TabThreeModule;

  beforeEach(() => {
    tabThreeModule = new TabThreeModule();
  });

  it('should create an instance', () => {
    expect(tabThreeModule).toBeTruthy();
  });
});
