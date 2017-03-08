import { EASYWebPage } from './app.po';

describe('easy-web App', function() {
  let page: EASYWebPage;

  beforeEach(() => {
    page = new EASYWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
