---
title: Three Fancy Bash Directory Jumpers to "Avoid The Path"
slug: fancy-bash-directory-jumpers
authors: [nick]
tags: [bash, directory jumper, cd, change directory]
date: 2023-05-12
description: Avoid typing the path when changing directories in the terminal. These directory jumpers can help you quickly and easily change directories and are just fun to customize.
keywords:
  [bash, directory jumper, bash alias, cd command, change directory linux]
---

import {BlogFooter} from '@site/src/components/common/blog-footer'

Hello All, Thanks for Joining!

Today, I'd love to share a quick little bash script that helps you change directories quickly and easily. We will be trying our hardest to "Avoid The Path", meaning we won't be typing out lengthy paths when changing directories.

As developers, we are constantly jumping into and out of directories, spinning up environments in different locations, or even to grabbing a quick reference from another project. Doing such tasks from the command line usually provides power that a GUI just might not have, making it worth the effort to stay in the terminal.

So, let's take a look at some fancy ways to "avoid the path"!

~![Avoid The Path](https://res.cloudinary.com/the-devoyage/image/upload/v1684007203/cd_DesktopDevelopmentOrganizationProject_1_ao2lhc.png)

<!--truncate-->

## Three Levels of Fancy Bash Directory Jumpers

### The Least Fancy

For the longest of time I was happy with the simplest solution, a quick bash alias. The number of projects on my computer were few in numbers, so this solution made a ton of sense.

Setting an alias is quick and easy. Simply add the alias to your bash profile, which is a file in the home directory of your computer. This file name might differ depending on your shell and configuration. That being said, some of the most common names for these settings files are `.bashrc`, `.bash_profile`, or even `.bash_aliases`.

```
# .bashrc
# Typing "DEV" into the command line will now change directories
# to a specified path.

alias DEV=`cd ~/Desktop/DEV`
```

You'll need to source the file that was changed, which will tell the shell that something new is available. You can do this by restarting the terminal or simply running `source .bashrc`, inserting the appropriate file name. Once sourced, your new alias will be ready to use.

```
nickisyourfan@system76:~$ DEV
nickisyourfan@system76:~/Desktop/DEV$
```

In the terminal, you can now use your alias from any directory to jump back to your development directory.

Avoid The Path - Win!

### A Little Fancy

As time passes, you'll accumulate numerous projects in your development directory. It's the nature of the beast. And, as a developer you'll eventually find yourself sitting on the couch late at night trying to avoid doing the work you need to do in favor of writing a new function to help you improve your existing and perfectly fine way of jumping between directories.

We can convert our alias into a function that is callalble from the command line. It's extreemly easy and can even take in an arguments!

Our function below will be called just like the bash alias above, simply type the given name, in our case `DEV`. This time it's going to take an optional second word/argument, which is the name of the folder of where you are changing to. For example, `DEV my-project`.

```bash
# .bashrc

function DEV() {
  # If argument is not provided, go to the dev directory.
  # Else go to the nested directory.
  if [ -z "$1" ]; then
    cd ~/Desktop/DEV
  else
    cd ~/Desktop/DEV/$1
  fi
}
```

Now we can jump into any project from any location by typing two words.

Source the file, then use the command and let's try it out.

```
nickisyourfan@system76:~$ DEV my-project
nickisyourfan@system76:~/Desktop/DEV/my-project$
```

Avoid the Path -- Win!

### A Bit Fancier

I know what you are thinking... We can do better!

I hope you are not in the middle of something important, because here is where procrastination becomes really hard to resist.

Our current script makes it easy to jump into our development directory and even somewhat into nested directories one level deep. If you are like me, some projects get organized into the nested folders, meaning that my projects directory is now several levels deep. The previous script just is not cut out to handle my directories structured like this.

Let's use some common functions to support finding of nested directories. This time, we take a more dynamic approach.

```bash
function DEV() {
  # Set your variables such as the directory to search and how many levels deep to search.
  local directory=~/Desktop/DEV
  local levels_deep=4

  # If no args provided, cd into the directory.
  if [ -z "$1" ]; then
    cd $directory
    return
  fi

  # Find all the directories that match the name provided in the argument.
  directories=($(find $directory -maxdepth $levels_deep -type d -name $1))

  # If only one result, cd into that directory.
  # Else ask the user which directory they really want to go to.
  if [ ${#directories[@]} -eq 1 ]; then
    cd ${directories[0]}
  elif [ ${#directories[@]} -gt 1 ]; then
    echo "Which directory do you want to go to?"
    for i in ${!directories[@]}; do
      echo "$i. ${directories[$i]}"
    done
    read -p "Enter a number: " choice
    cd ${directories[$choice]}
  else
    echo "Directory does not exist"
  fi
}
```

Now we can jump to any directory... from anywhere... with ease!

Source the file and run the command just like before.

```
nickisyourfan@system76:~$ DEV my-project
```

Notice, I have two folders called `my-project`. It will ask me which one I want to change into before changing the directory for me.

```
Which directory do you want to go to?
0. /home/nickisyourfan/Desktop/DEV/@the-devoyage/my-project
1. /home/nickisyourfan/Desktop/DEV/my-project
Enter a number: 0
nickisyourfan@system76:~/Desktop/DEV/@the-devoyage/my-project$
```

Avoid the Path - Win!

### The Most Fancy

To top off the script we are going to add an additional function that enable some super sweet auto complete.

Imagine... the name of the project you want to cd into is on the tip of your tongue but you just can't remember it's name. Instead of using the old trusty `ls` command and reading the dozens of incomplete projects, we can enable some tab completion to help us remember the name of the project/directory we are looking for.

Start by typing in the command, then press tab to get some suggestions.

```
nickisyourfan@system76:~/Desktop/DEV/@the-devoyage/subgraph$ DEV my-proj
my-project                         my-project-1                    my-project-2
```

Auto complete is as simple as adding one more function to your bash profile.

```bash
function _dev_completion() {
  local cur=${COMP_WORDS[COMP_CWORD]}
  local directory=~/Desktop/DEV
  local levels_deep=4
  local subdirs=$(find "$directory" -maxdepth "$levels_deep" -type d -printf '%f\n')
  local options=$(echo "$subdirs" | grep "^$cur")

  COMPREPLY=( $(compgen -W "$options" -- "$cur") )
  return 0
}
```

Following the previous DEV function, call the newly added function.

```bash
function DEV() {
  # Logic to find and switch folders.
}
complete -F _dev_completion DEV
```

## A Great Friday Night

Thanks for joining me to procrastinate my Friday night away. It's been a fun time expanding and sharing this little directory jumper. It's far from perfect but it is easy to configure and gets the job done. Let me know what you'd add to up the fancy.

<BlogFooter />
