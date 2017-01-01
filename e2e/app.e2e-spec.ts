import { BlakeJsTestPage } from './app.po';

describe('blake-js-test App', function() {
  let page: BlakeJsTestPage;

  beforeEach(() => {
    page = new BlakeJsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
