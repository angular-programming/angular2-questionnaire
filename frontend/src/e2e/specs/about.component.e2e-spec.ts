describe('About', () => {

  beforeEach(async () => {
    return await browser.get('/admin/about');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-about .panel-heading h4')).getText()).toEqual('常见FAQ');
  });

});
