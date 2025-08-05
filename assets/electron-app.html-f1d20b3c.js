import{_ as e,p as i,q as s,a1 as n}from"./framework-52ca566e.js";const t={},a=n(`<p>build process on windows https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows</p><p>Since npm 5.1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set script-shell &quot;C:\\\\Program Files (x86)\\\\git\\\\bin\\\\bash.exe&quot;  
or (64bit installation)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set script-shell &quot;C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe&quot;
Note that you need to have git for windows installed.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>You can revert it by running:
npm config delete script-shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="is-this-still-relevant" tabindex="-1"><a class="header-anchor" href="#is-this-still-relevant" aria-hidden="true">#</a> is this still relevant?</h2><p>lookup safeboxen build process</p>`,7),l=[a];function d(r,o){return i(),s("div",null,l)}const u=e(t,[["render",d],["__file","electron-app.html.vue"]]);export{u as default};
