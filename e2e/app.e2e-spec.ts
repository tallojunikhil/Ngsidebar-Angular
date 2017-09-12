import { FermatWeek4SideBarPage } from './app.po';

describe('fermat-week4-side-bar App', () => {
  let page: FermatWeek4SideBarPage;

  beforeEach(() => {
    page = new FermatWeek4SideBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
