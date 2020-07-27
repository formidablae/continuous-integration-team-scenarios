# GitHub Flow

1. Pull in the latest code. Create a branch from `master`. Start working.    
2. Create commits on your new branch. Build and test locally.  
  Pass? Go to the next step. Fail? Fix errors or tests and try again.  
3. Push to your remote repository or remote branch.  
4. Open a pull request. Discuss the changes, add more commits  
  as discussion continues. Make tests pass on the feature branch.  
5. Merge/rebase commits from master. Make tests pass on the merge result.  
6. Deploy from the feature branch to production.
7. If everything is good in production for some period of time, merge changes to master. 

> **GitHub flow** is sometimes used as a nickname to refer to a flavor of trunk-based development  
  when code is deployed straight from feature branches. This list is just an interpretation  
  that I use in my [DevOps courses](http://redpill.solutions).  
  The official tutorial is [here](https://guides.github.com/introduction/flow/).
