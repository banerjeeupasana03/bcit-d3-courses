#! /usr/bin/env bash
tail -n +3 "${BASH_SOURCE[0]}" && exit 0 # Prints itself and exit

################################################################################
############################### NOTES SECTION ##################################
################################################################################

######### Personal Notes ########
# ~ is home dir
# .sh is shell script file extension. DO NOT double click and run it for now.
# Cmd : command key


######### Paths ########
# relative : path of file/dir relative to the current working dir
#   Examples :
#     foo/bar/blah.txt
#     ./foo/bar/blah.txt
#     blah.txt
#     ../bling/blur/glur.txt
#     ../../bling/blur/glur.txt
#
# absolute : absolute path of file/dir [Starts with a forward slash generally - "/" ]
#   Examples :
#     /home/developer/foo/bar/blah.txt
#     ~/foo/bar/blah.txt
#     ~/blah.txt
#     /home/developer/bling/blur/glur.txt
#     /etc/ssh/ssh_config


######### Key combinations ########
# Up key : takes to previous command in the terminal
# Ctrl+e : brings cursor to the end of the line
# Ctrl+a : brings cursor to the beginning of the line
# Opt+Del : delete a word backwards
# Opt+Right key : move one word forward
# Opt+Left key : move one word backward
# Cmd+Shift+] : navigate tab forward
# Cmd+Shift+[ : navigate tab backward
# Cmd+Shift+l : clears screen
# Cmd+Shift+w : close tabs with confirmation
# Cmd+w : close tabs without confirmation
# Cmd+t : opens new tab
# Cmd+n : opens new file/window
# Ctrl+k : deletes from cursor to th end of the line
# Cmd+/ : comments code in atom editor ( #- comment code, to show that the lines are not executable)
##### In man pages ######:
# gg : top of man pages
# Shift+g : bottom of man pages
# Enter key : scrolls down the page
# q : quit man pages
# /+ " search term" : searches the number of times that search term occurs in that page
#   n : next search term
#   Shift+n : previous search term


################################################################################
################################# COMMANDS SECTION #############################
################################################################################

######### cd : change directory #########
### FORMAT : cd <options> <relative/absolute path>
cd ~ # to change dir to home dir
cd upasana/tutorial_1/ # to change current working dir to a new dir(example)
cd .. # to change dir to parent dir
cd . # remains in the same dir

######### atom : opens atom editor #########
### FORMAT : atom <options> <relative/absolute path>
atom . # opens the present dir that you are working in

######## cat : prints contents of a file but it cannot be edited #########
### FORMAT : cat <options> <relative/absolute path>
cat cheat_sheet.sh # print the contents of the file cheat_sheet.txt
cat -n ~/upasana/tutorial_1/blog_1/application/cheat_sheet.sh # print contents of file with absolute path while showing line numbers

######## tac : prints contents of a file in reverse order but it cannot be edited #########
### FORMAT : tac <options> <relative/absolute path>
tac cheat_sheet.sh # print the contents of the file cheat_sheet.txt in reverse order

######## pwd : display current working dir #########
### FORMAT : pwd
pwd # display the current working dir

######## ls : list files/dirs of dir #########
### FORMAT : ls <options> <relative/absolute path>
ls -lah ~ # lists files and dirs of home dir
ls # lists files and dirs of current working dir
ls tutorial_1/blog_1/application # lists files and dirs of relative path
ls ~/upasana/tutorial_1/blog_1/application # lists files and dirs of absolute path

######## mkdir : creates new dir #########
### FORMAT : mkdir <options> <relative/absolute path>
mkdir -p ~/upasana/test_1/example # creates nested dir structure with absolute path if not present, while retaining the dirs already present
mkdir test_1 # creates dir with relative path

######## touch : creates new file or touches existing file #########
### FORMAT : touch <options> <relative/absolute path>
touch ~/upasana/test_1/example/foo.txt # creates new file with absolute path
touch foo.txt # creates new file with relative path if already in the working dir
touch -a foo.txt # touches a file while changing only the access time

######## tree : lists the dir structure from the given dir #########
tree . # lists structure from current directory (relative path)
tree ~/upasana # lists structure from upasana directory onwards (absolute path)
tree -I 'node_modules' # ignores all the external files downloaded in the node_modules to give a clear tree.

######## mv : moves source to destination #########
mv d1/d2/d3/d4/f2.txt d4/d5 # moves f2.txt to d5 dir retaining the file name
mv d1/d2/d3/d4/f2.txt d4/d5/blah.txt # moves f2.txt to d5 dir renaming it as blah.txt
mv d1/d2/d3/d4 d6/d7 # moves the entire directory and its contents including files etc

######## cp : copies source to destination #########
cp d1/d2/d3/d4/f2.txt d4/d5 # copies f2.txt to d5 dir retaining the file name
cp d1/d2/d3/d4/f2.txt d4/d5/blah.txt # copies f2.txt to d5 dir renaming it as blah.txt
cp -R d1/d2/d3/d4 d6/d7 # copies the entire directory and its contents including files etc

######## rm : removes dirs/files permanently  ######### CAUTION
rm d1/d2/d3/d4/f2.txt # removes the file f2.txt
rm -r d1/d2/d3/d4 # removes everything in d4 dir
rm -rf d1/d2/d3/d4 # FORCEFULLY REMOVES everything in d4 dir

######## echo : writes content #########
echo "upasana mukherjee" # prints the name upasana mukherjee
echo "upasana mukherjee" > d1/d2/d3/d4/f1.txt # overwrites existing contents of f1.txt file with contents of echo command
echo "upasana mukherjee" >> d1/d2/d3/d4/f1.txt # appends contents of echo command to existing contents of f1.txt

######## sort : sorts file content #########
sort d7/d6/d4/f1.txt # sorts content of files
sort -R d7/d6/d4/f1.txt # sorts content of files in reverse

######## wc : word count #########
wc d7/d6/d4/f1.txt # counts lines, words, characters(chars)
wc -c d7/d6/d4/f1.txt # counts characters
wc -w d7/d6/d4/f1.txt # counts words
wc -l d7/d6/d4/f1.txt # counts lines

######## command : tests the path of an executable in your shell #########
command -v npm # prints the path of the npm executable file

######## head : display content from top of file #########
head -n 2 package.json # displays the first two lines of the files
head package.json # displays a default set of lines from the top

######## tail : display content from bottom of file #########
tail package.json # displays a default set of lines from the bottom
tail -n 3 package.json # displays three lines from the bottom
tail -n +5 package.json # displays default numbetr of lines from bottom leaving the first five lines

################################################################################
########################## COMPLICATED COMMANDS SECTION ########################
################################################################################

tac d1/d2/d3/d4/f1.txt >> d1/d2/d3/d4/f2.txt # reverses the content of f1.txt and writes to f2.txt
cat d1/d2/d3/d4/f1.txt | sort # sorts contents of f1.txt alphabetically and prints to stdout
cat d1/d2/d3/d4/f1.txt | wc -l # counts the number of lines in f1.txt
cat d1/d2/d3/d4/f1.txt | cat -n # numbers the content of lines in f1.txt
cat d1/d2/d3/d4/f1.txt | tac # reverses the file and prints in stdout
cat d1/d2/d3/d4/f1.txt | tac | cat -n # reverses and then adds line numbers
cat d1/d2/d3/d4/f1.txt | sort -R # reverse sorts the contents
cat d1/d2/d3/d4/f1.txt | sort -R | cat -n >> d7/d6/d4/f1.txt # reverse sort+ add line number+ write to different file
ls -lah "$(command -v npm)" # sub command starts with '$'and is wrapped within (). Therefore the output of the sub commandis the input of the main command 'ls'.
cat package.json | head -n 6 | tail -n 4 # reads first 6 lines from top then the bottom four lines

########### JAVASCRIPT ###########

cat package.json | jq '.dependencies.express' # jq reads the values of json files and extracts the value of key "dependencies" and then extracts the value of the key "express" within the dependencies object



################################################################################
########################### ALL ABOUT GIT ######################################
################################################################################

git status # shows the current status in your local git repository vs remote git repo, things that need to be committed/ added from recent working device to remote git cloud.
git add COMP_1170/assignments/Upasana_Mukherjee_COMP_1170_Lab_1.html # add the changes to git for tracking new files.
git commit # commits changes to your local git repository
# it opens in Vim editor.
# Steps that follow :
# 1. Type i for insert mode
# 2. type the course name-course number : teh commit message
# 3. Press esc`
# 4. Press :wq
git push origin master # push up the local repo changes to remote repository on branch master.
