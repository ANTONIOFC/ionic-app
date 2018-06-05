import { TabOneModule } from './tab-one.module';

describe('TabOneModule', () => {
  let tabOneModule: TabOneModule;

  beforeEach(() => {
    tabOneModule = new TabOneModule();
  });

  it('should create an instance', () => {
    expect(tabOneModule).toBeTruthy();
  });
});
