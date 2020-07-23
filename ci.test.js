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
  it('1. pull latest code', () => {
    expect(/.*pull.*/ig.test(fileContents)).toBe(true);
  });

  it('2. add commits', () => {
    expect(/.*commit.*/ig.test(fileContents)).toBe(true);
  });

  it('3. push to the remote branch with the same name', () => {
    expect(/.*push.*/ig.test(fileContents)).toBe(true);
  });

  it('4. open a pull request and continue working', () => {
    expect(/.*pull\s+request.*/ig.test(fileContents)).toBe(true);
  });
  // TODO <= add the tests between these comments

});
