# How to install & setup neovim under WSL

## Steps
1. install neovim
2. install package manager, here we use PackerSync
3. customize plugin behavior


### Step 1 Install neovim
[Github Neovim](https://github.com/neovim/neovim/wiki/Installing-Neovim)
if you install neovim via sudo apt install neovim

it will get 0.7.2, but if you download the appimage you get 0.9.2, where i dont get any error message so far

#### Step 1.1
uninstall neovim 

## sources
[The primeagent neovim setup](https://www.youtube.com/watch?v=w7i4amO_zaE)

## Important to know
- [] packpath

## Bugs

### rose pine
```txt
packer.nvim: Error running config for rose-pine: [string "..."]:0: Vim(colorscheme):E185: Cannot find color scheme 'rose-pin'
```

### lps
```txt
[lsp-zero] The function .ensure_installed() has been removed.
Use the module mason-lspconfig to install your LSP servers.
```



## Packages/Plugins to install
- [Packer](https://github.com/wbthomason/packer.nvim)
- [Telescope](https://github.com/nvim-telescope/telescope.nvim) 
- [Rose Pine](https://github.com/rose-pine/neovim)
- Treesitter
- Undotree
- [LSP Zero](https://github.com/VonHeikemen/lsp-zero.nvim)
