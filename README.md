# RealEstateProject
Senior Design Project 2018-2019

-------Github Instructions----- 
Github basically functions as a tree, there's the head (master) and each of us will make a branch from that master. A branch is basically a copy of
  master that you can edit. These branches are how git manages versions. Master should only ever be changed when we're 100% sure the changes won't
  break the program.

How to start: ($: is terminal/command prompt) (fork)
  1. Navigate to parent directory of desired project location
  2. $: git clone https://github.com/Zeus-The-Cat/RealEstateProject.git  
  3. Now there should be a folder titled RealEstateProject, navigate inside
  4. $: git init
  5. $: git remote add origin https://github.com/Zeus-The-Cat/RealEstateProject.git
  6. $: git push --set-upstream origin master

Every time you want to update/add to the project these are the basic steps:
  1. Get any updates from master your local branch doesn't have         (fetch)
  2. Do your coding work, adding files and whatnot
  3. Add those files to your local branch                               (add)
  4. Decide what files to send to master, with comments of changes      (commit)
  5. Send those changes to the master project in Github                 (push)

Instructions Command Line (Windows)
  1. Same as mac let me know if it doesn't work

Instructions Command Line (Mac)
  1. $: git fetch                         (fetch: updates files of local branch) I'd do this before you add/remove anything from your project
  2. Do your programming
  3. $: git add .                         (add)
  4. $: git commit -am "commit message" (commit: "commit message" should be a quick description of the changes made, idc if you do this we can always roll it back)
  5. $: git push                          (push)


Cheat Sheet https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
^^ has some useful tools

  $: git status   (tells you what changes you've made since last push)
  
  $: git log      (shows version history useful to see what other contributors have made)
