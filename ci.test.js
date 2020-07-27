var fs = require('fs'); 

describe('CI sequence', () => {

  var fileContents;
  beforeEach(() => {
    fileContents = fs.readFileSync('ci.md', 'utf8');
  });

  it('the list has a header', () => {
    expect(/.*#.*/ig.test(fileContents)).toBe(true);
  });

  // TODO add the tests between these comments =>

  // TODO <= add the tests between these comments

});
