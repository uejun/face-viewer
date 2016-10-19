import { FaceViewerPage } from './app.po';

describe('face-viewer App', function() {
  let page: FaceViewerPage;

  beforeEach(() => {
    page = new FaceViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
