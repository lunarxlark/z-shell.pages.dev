---
id: intro
title: 🎉 Introduction
sidebar_position: 1
image: /img/logo/501x501.png
description: A Swiss Army Knife for Zsh - Unix shell
keywords: [introduction, zsh, z-shell, zi]
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'

![zi-git-logo](/img/zi-git.png)

<Tabs>
  <TabItem value="gems" label="RubyGems">

Install [RubyGems](https://rubygems.org), [$GEM_HOME](https://guides.rubygems.org/command-reference/#gem-environment) automatically set.

[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node) | [Package Any Gem](https://github.com/z-shell/any-gem)

  </TabItem>
  <TabItem value="node" label="Node">

Install [Node](https://www.npmjs.com) modules, [$NODE_PATH](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders) automatically set.

[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node) | [Package Any Node](https://github.com/z-shell/any-node)

  </TabItem>
  <TabItem value="pip" label="Python">

Install [Python](https://python.org) modules, [$VIRTUALENV](https://docs.python.org/3/tutorial/venv.html) automatically set.

[Annex Bin-Gem-Node](ecosystem/annexes/bin-gem-node)

  </TabItem>
  <TabItem value="rust" label="Rust">

Install [Rust](https://crates.io) packages with [rust annex](ecosystem/annexes/rust).

  </TabItem>
  <TabItem value="github" label="GitHub" default>

Install almost everything from [GitHub](https://github.com):

[Annexes](ecosystem/annexes) | [Packages](ecosystem/packages) | [Meta Plugins](ecosystem/annexes/meta-plugins) | [Gallery of Invocations](gallery/collection)

</TabItem>
</Tabs>

---

- [Turbo mode](getting_started/overview#turbo-mode-zsh--53) that yields **50-80%** faster Zsh startup.

- [Meta plugins](/search?q=meta+plugins) allow to install groups of plugins via a single, friendly label.

- [Packages](/search?q=packages) offload the user from providing long and complex commands.

- [Annexes](/search?q=annexes) allow to extend the plugin manager with new commands.

- Supports [Oh My Zsh](getting_started/overview#oh-my-zsh-prezto) and [Prezto](getting_started/overview#oh-my-zsh-prezto) plugins and libraries ([migration](getting_started/migration)).

- Does not use `$FPATH`, loading multiple plugins don't clutter `$FPATH` with the same number of entries (e.g. 10, 15, or more).
- Code is immune to `KSH_ARRAYS` and other options typically causing compatibility problems.
- Do not require `sudo`, and provides many workarounds (e.g: setting so-called **shims** locally).

Provides reports and statistics about:

- What **aliases**, **functions**, **bindkeys**, **Zle widgets**, **zstyles**, **completions**, **variables**, `$PATH`, and `$FPATH` elements a plugin has set up.
- Allows to quickly familiarize oneself with a new plugin and provides rich and easy-to-digest information that might be helpful on various occasions.
- Supports the unloading of plugins and the ability to list, (un)install, and selectively disable, enable plugin's completions.
- Additional provides functionality to easily create your own plugins (locally/remote).

---

- Docker [playground](https://github.com/z-shell/playground) for the configurations.
- Preview ZI at [asciinema.org](https://asciinema.org/a/459358)
