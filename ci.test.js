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

  it('5. Merge/rebase commits from master. Make tests pass on the merge result.', () => {
    expect(/.*merge.*commits.*tests\s+pass.*/ig.test(fileContents)).toBe(true);
  });

  it('6. Deploy from the feature branch to production.', () => {
    expect(/.*Deploy.*to\s+production.*/ig.test(fileContents)).toBe(true);
  });

  it('7. If everything is good in production for some period of time, merge changes to master.', () => {
    expect(/.*merge.*to\s+master.*/ig.test(fileContents)).toBe(true);
  });

  it('does not contain the sneaky bug', () => {
    expect( /.*sneaky\s+bug.*/gi.test(fileContents)).toBe(false);
  });
  // TODO <= add the tests between these comments

});
