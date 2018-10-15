# go to home directory
cd ~
# same as above
cd /Users/sumanmukherjee

# go to root dir
cd /

# Create a file foo.txt
touch ~/code/foo.txt

# list files like foowhatever
ls ~/code/foo*
# list files like whatever.txt
ls ~/code/*.txt
# same as above
ls /Users/sumanmukherjee/code/*.txt

# Add some text to foo.txt
echo 'first line' >> ~/code/foo.txt
echo 'second line' >> ~/code/foo.txt

# Download a file and specify a new filename
curl http://example.com/file.html -o new_file.html

# Get a file from internet on your standard out
curl http://example.com/file.html

# Find file in current dir
# Current dir is represented by ' . ' everywhere whether it's in cp or mv or find etc
# The find command depicted here traverses all nested dirs in the current dir
# and finds the files which end with .txt
find . -type f -name '*.txt'

# similar to above this find command traverses all nested dirs inside the current dir represented by .
# and finds the directories whose names start with foo
find . -type d -name 'foo*'

# Find file in current /Users/sumanmukherjee/code
find /Users/sumanmukherjee/code -type f -name '*.txt'

# Find file in /Users/sumanmukherjee/code dir instead of the current dir named like foo-whatever.txt
find /Users/sumanmukherjee/code -type f -name 'foo*.txt'

# Find dir in current /Users/sumanmukherjee/code
find /Users/sumanmukherjee/code -type d -name 'example*'

# Filter for BCIT in file.txt using grep
cat /Users/sumanmukherjee/code/file.txt | grep 'BCIT'
# This is the same as above only with ~ in place of /Users/sumanmukherjee
cat ~/code/file.txt | grep 'BCIT'

# Get the first 5 lines of file.txt
cat ~/code/file.txt | head -n 5
# Get the first 5 lines of file.txt and put it in head.txt
cat ~/code/file.txt | head -n 5 > head.txt

# Get the last 5 lines of file.txt
cat ~/code/file.txt | tail -n 5
# Get the last 5 lines of file.txt and put it in tail.txt
cat ~/code/file.txt | tail -n 5 > tail.txt

# get the 4th and 5th line of file.txt
cat ~/code/file.txt | head -n 5 | tail -n 2

# Get the 4th and 5th line that matches foo from file.txt
cat ~/code/file.txt | grep 'foo' | head -n 5 | tail -n 2

# Get a file from internet, find text whatever and get the last 10 lines from that search into newtail.txt
curl http://example.com/file.html | grep 'whatever' | tail -n 10 > newtail.txt

# zip up the dir to compressed.zip
zip -r compressed.zip /path/to/dir

# Simple workflow for git
git status
git pull # if you do not have any local changes this should be easy and straight forward
git branch -l # Check what branches you locally have
git checkout -b COURSE-NUMBER-my-branch-name # Create a new branch
git status
git add path_to_file.txt # Adds individual file to git tracking both for modified and new files

# If you have already deleted a file in a branch but git is still tracking it
# you need to remove it from git tracking as well
# To do that use this command below.
# This is usually also how moved files show up in git.
# Git tracks moved files as a file added and a file deleted
git rm path_to_deleted_file.txt

# Git does not track empty dirs by default
# So add a .gitkeep file to that first
touch foo/bar/.gitkeep
git add foo/bar

git status
git commit -m "COURSE-NUMBER : My commit message"
git push origin COURSE-NUMBER-my-branch-name # Push to a branch
git status

# Steps for merging a branch
git checkout master
git pull
git merge -n --no-edit COURSE-NUMBER-my-branch-name
git push origin master

# After merging a branch
git branch -D COURSE-NUMBER-my-branch-name
git push origin :COURSE-NUMBER-my-branch-name
git tag v1.0.0
git push origin v1.0.0

git tag -l # Lists all local tags
git remote -v # Lists the remote git repo url

git tag -d v1.0.0 # Deletes tag locally if you have made some mistake
git push origin :v1.0.0 # Deletes tag from remote if you have made a mistake
