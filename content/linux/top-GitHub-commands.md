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
| {{< rawhtml >}}
<a class="roll" target="_blank" href="https://gist.github.com/gwenf/19e5748a5391929e8e938a22c8a4b3f2">
  <span data-attr="Top GitHub Commands">Top GitHub Commands</span>
</a>
{{< /rawhtml >}}|

&nbsp;

<!-- Git Commands
============

_A list of my commonly used Git commands_

*If you are interested in my Git aliases, have a look at my `.bash_profile`, found here: https://github.com/joshnh/bash_profile/blob/master/.bash_profile*

--

### Getting & Creating Projects

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |

### Basic Snapshotting

| Command | Description |
| ------- | ----------- |
| `git status` | Check status |
| `git add [file-name.txt]` | Add a file to the staging area |
| `git add -A` | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes |
| `git rm -r [file-name.txt]` | Remove a file (or folder) |

### Branching & Merging

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (the asterisk denotes the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create a new branch |
| `git branch -d [branch name]` | Delete a branch |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git checkout -b [branch name]` | Create a new branch and switch to it |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it |
| `git branch -m [old branch name] [new branch name]` | Rename a local branch |
| `git checkout [branch name]` | Switch to a branch |
| `git checkout -` | Switch to the branch last checked out |
| `git checkout -- [file-name.txt]` | Discard changes to a file |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git merge [source branch] [target branch]` | Merge a branch into a target branch |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |

### Sharing & Updating Projects

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to your remote repository |
| `git push -u origin [branch name]` | Push changes to remote repository (and remember the branch) |
| `git push` | Push changes to remote repository (remembered branch) |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git pull` | Update local repository to the newest commit |
| `git pull origin [branch name]` | Pull changes from remote repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Add a remote repository |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repository's origin branch to SSH |

### Inspection & Comparison

| Command | Description |
| ------- | ----------- |
| `git log` | View changes |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff [source branch] [target branch]` | Preview changes before merging | -->