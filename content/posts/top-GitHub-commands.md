---
title: Top GitHub Commands
summary: Top GitHub Commands
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - GitHub
tags:
  - GitHub
  - linux
keywords:
  - Linux
  - GitHub
toc: true
autonumbering: false
author: helper4
thumbnail: images/linux.svg
date: 2022-08-15T22:38:59+02:00

---



### **repo** 
> repository

### clone 
> bring a repo down from the internet (remote repository like Github) to your local machine

### add 
> track your files and changes with Git

### commit 
> save your changes into Git

### push 
> push your changes to your remote repo on Github (or another website)

### pull 
> pull changes down from the remote repo to your local machine

### status 
> check to see which files are being tracked or need to be commited

### init 
> use this command inside of your project to turn it into a Git repository and start using Git with that codebase


### Top GitHub Commands 

```text
1. git config –global user.name “[name]” 
    - sets author name

    git config –global user.email “[email address]” 
    - sets author email id
```
```text
2. git init [repository name] 
    - start new repository
```
```text
3. git clone [url] 
    - obtain a repository from an existing URL.
```
```text
4. git add [file] 
    - adds a file to the staging area.
```
```text
5. git commit -m “[ Type in the commit message]” 
    - records or snapshots the file permanently in the version history.

    git commit -a 
    - commits any files you’ve changed since then.&commits any files you’ve added
```
```text
6. git diff 
    - shows the file differences which are not yet staged.

    git diff –staged 
    - differences between the files in the staging area and the latest version present.

    git diff [first branch] [second branch] 
    - differences between the two branches mentioned.
```
```text
7. git reset [file] 
    - unstages the file, but it preserves the file contents.

    git reset [commit] 
    - undoes all the commits after the specified commit and preserves the changes locally.

    git reset –hard [commit] 
    - discards all history and goes back to the specified commit.
```
```text
8. git status 
    - command lists all the files that have to be committed.
```
```text
9. git rm [file] 
    - deletes the file from your working directory and stages the deletion.
```
```text
10. git log 
    - used to list the version history for the current branch.

      git log –follow[file] 
      - lists version history for a file, including the renaming of files also.
```
```text
11. git show [commit] 
    - shows the metadata and content changes of the specified commit.
```
```text
12. git tag [commitID] 
    - used to give tags to the specified commit.
```
```text
13. git branch
    - lists all the local branches in the current repository.

      git branch [branch name] 
      - creates a new branch.

      git branch -d [branch name] 
      - deletes the feature branch.
```
```text
14. git checkout [branch name] 
    - used to switch from one branch to another

      git checkout -b [branch name] 
      - creates a new branch and also switches to it.
```
```text
15. git merge [branch name] 
    - merges the specified branch’s history into the current branch.
```
```text
16. git remote add [variable name] [Remote Server Link] 
    - used to connect your local repository to the remote server.
```
```text
17. git push [variable name] master
    - sends the committed changes of master branch to your remote repository.

      git push [variable name] [branch] 
      - sends the branch commits to your remote repository.

      git push –all [variable name] 
      - pushes all branches to your remote repository.

      git push [variable name] :[branch name] 
      - deletes a branch on your remote repository.
```
```text
18. git pull [Repository Link] 
    - fetches and merges changes on the remote server to your working directory.
```
```text
19. git stash save
    - stores all the modified tracked files.
```
```text
20. git stash pop
    - restores the most recently stashed files.

      git stash list
      - lists all stashed changesets.

      git stash drop
      - discards the most recently stashed changeset.
```
&nbsp;
| **Reference:**  |
| :--- |
| {{< a_blank title="Top GitHub Commands" url="https://gist.github.com/gwenf/19e5748a5391929e8e938a22c8a4b3f2" >}} |

&nbsp;
