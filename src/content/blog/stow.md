---
title: "Managing Your Dotfiles With GNU Stow"
description: "Dotfiles can be a pain when backing them up and/or integrating them into a new system, in this blog post we will learn how to manage them with GNU Stow"
pubDate: "Mar 03 2024"
heroImage: "/GNU.png"
tags: ["Linux","Dotfiles"]
---

## What Are Dotfiles?

Dotfiles refer to files on UNIX operating systems that begin with a dot in their name, indicating that they are hidden by default. These files primarily serve as configuration files for various programs, tools, and projects.


## Why Is Managing Dotfiles Necessary?

Creating optimal dotfiles tailored to one's daily workflow demands considerable time and effort. Therefore, it's essential to adopt effective strategies for managing and preserving these configurations. Doing so ensures that they remain accessible and consistent across different machines and systems.


## Managing Your Dotfiles

There are several tools that manage your dotfiles. Here are some popular options:
- [DotBot](https://github.com/anishathalye/dotbot): Dotbot is a tool for bootstrapping dotfile repositories. It provides a simple configuration format and allows you to define installation tasks for each dotfile.

- [YADM](https://github.com/TheLocehiliosan/yadm): YADM (Yet Another Dotfiles Manager) is a Git-based dotfiles manager that offers features like templating, encryption, and support for managing multiple branches.

- [chezmoi](https://github.com/twpayne/chezmoi): chezmoi is a powerful dotfiles manager that supports templating, encryption, and integration with version control systems like Git.

All those tools are great for managing dotfiles and bootstrapping, but as an advocate for simplicity and a fan of GNU, I have chosen to use GNU Stow.


## What Is GNU Stow and how to set it up?

GNU Stow is Symlink manager that makes it easy to manage packages that are scattered across your directory tree in one place. It organizes your configurations into separate packages and creates symlinks to install them in the appropriate locations. After Setting it up, editing either files the actual file or the symlink doesn't result in conflict as editing the symlink changes the file itself with it and vice verca.


### Installation

GNU Stow pretty much exists in every UNIX system's main package manager without adding any additional library just install package called `stow`

I use arch, so:

```zsh
➜ sudo pacman -S stow
```

if your distro's package manager doesnt offer it or you're using macos. you can use [homebrew](https://brew.sh/).

#### Homebrew

```zsh
➜ brew install stow
```

### Setting It up


To get Started, Create your main dotfiles folder you can create it any where u want but i prefer it to be in the home directory.

```zsh
➜ mkdir -p ~/dotfiles/config 
➜ cd ~/dotfiles
```

Now let's copy, for example, our nvim configuration directory. Then, we'll rename it to avoid any conflicts.

```zsh
➜ cp ~/.config/nvim/ ~/dotfiles/config
➜ mv ~/.config/nvim ~/.config/nvim.bak
```

Stow treats each set of files and directories, which would be installed in a specific directory, for example, nvim, as a package. When you stow a package for a target directory X, Stow creates symlinks in directory X that point to the files and directories within the package.

```zsh
➜ stow config -v -R -t ~/.config
```

This command tells Stow to first delete any existing symlink of the config package using the -R or `--restow` option. Then, it creates a symlink in the target directory ~/.config specified by -t or `--target=TARGET_DIR`. The -v flag enables verbose mode, providing detailed logs of the operations performed by Stow.

Deleting a symlink is as simple as adding the -D or `--delete` option, followed by the package name and the target directory. This option unstows the specified package, deleting the symlinks with it.

```zsh
➜ stow -D config -t ~/.config 
```

This command will first unstow the package, which is nvim, and then delete the symlinks associated with that package.

## Conclusion

In conclusion, GNU Stow offers a straightforward and efficient solution for managing dotfiles. By leveraging Stow, users can organize their configurations in an online repository and deploy them across multiple machines with ease. With its simple command-line interface and ability to create symlinks intelligently, Stow streamlines the setup process and ensures consistency in configurations.
