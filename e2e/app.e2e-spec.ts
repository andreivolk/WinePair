import { WinePairPage } from './app.po';

describe('wine-pair App', () => {
  let page: WinePairPage;

  beforeEach(() => {
    page = new WinePairPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
