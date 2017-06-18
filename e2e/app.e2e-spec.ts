import { Angular2PipesPage } from './app.po';

describe('angular2-pipes App', function() {
  let page: Angular2PipesPage;

  beforeEach(() => {
    page = new Angular2PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
