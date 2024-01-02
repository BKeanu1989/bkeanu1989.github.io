import{_ as r,M as o,p as s,q as l,R as e,t as n,N as t,a1 as i}from"./framework-52ca566e.js";const d={},h=i('<h1 id="how-to-install-setup-neovim-under-wsl" tabindex="-1"><a class="header-anchor" href="#how-to-install-setup-neovim-under-wsl" aria-hidden="true">#</a> How to install &amp; setup neovim under WSL</h1><h2 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h2><ol><li>install neovim</li><li>install package manager, here we use PackerSync</li><li>customize plugin behavior</li></ol><h3 id="step-1-install-neovim" tabindex="-1"><a class="header-anchor" href="#step-1-install-neovim" aria-hidden="true">#</a> Step 1 Install neovim</h3>',4),c={href:"https://github.com/neovim/neovim/wiki/Installing-Neovim",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"it will get 0.7.2, but if you download the appimage you get 0.9.2, where i dont get any error message so far",-1),p=e("h4",{id:"step-1-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-1-1","aria-hidden":"true"},"#"),n(" Step 1.1")],-1),m=e("p",null,"uninstall neovim",-1),_=e("h2",{id:"sources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sources","aria-hidden":"true"},"#"),n(" sources")],-1),v={href:"https://www.youtube.com/watch?v=w7i4amO_zaE",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="important-to-know" tabindex="-1"><a class="header-anchor" href="#important-to-know" aria-hidden="true">#</a> Important to know</h2><ul><li>[] packpath</li></ul><h2 id="bugs" tabindex="-1"><a class="header-anchor" href="#bugs" aria-hidden="true">#</a> Bugs</h2><h3 id="rose-pine" tabindex="-1"><a class="header-anchor" href="#rose-pine" aria-hidden="true">#</a> rose pine</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>packer.nvim: Error running config for rose-pine: [string &quot;...&quot;]:0: Vim(colorscheme):E185: Cannot find color scheme &#39;rose-pin&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="lps" tabindex="-1"><a class="header-anchor" href="#lps" aria-hidden="true">#</a> lps</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[lsp-zero] The function .ensure_installed() has been removed.
Use the module mason-lspconfig to install your LSP servers.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="packages-plugins-to-install" tabindex="-1"><a class="header-anchor" href="#packages-plugins-to-install" aria-hidden="true">#</a> Packages/Plugins to install</h2>`,8),f={href:"https://github.com/wbthomason/packer.nvim",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/nvim-telescope/telescope.nvim",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/rose-pine/neovim",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"Treesitter",-1),w=e("li",null,"Undotree",-1),S={href:"https://github.com/VonHeikemen/lsp-zero.nvim",target:"_blank",rel:"noopener noreferrer"};function y(N,P){const a=o("ExternalLinkIcon");return s(),l("div",null,[h,e("p",null,[e("a",c,[n("Github Neovim"),t(a)]),n(" if you install neovim via sudo apt install neovim")]),u,p,m,_,e("p",null,[e("a",v,[n("The primeagent neovim setup"),t(a)])]),g,e("ul",null,[e("li",null,[e("a",f,[n("Packer"),t(a)])]),e("li",null,[e("a",b,[n("Telescope"),t(a)])]),e("li",null,[e("a",k,[n("Rose Pine"),t(a)])]),x,w,e("li",null,[e("a",S,[n("LSP Zero"),t(a)])])])])}const V=r(d,[["render",y],["__file","neovim.html.vue"]]);export{V as default};
