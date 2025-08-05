import{_ as e,p as n,q as i,a1 as a}from"./framework-52ca566e.js";const t={},s=a(`<h1 id="tar-linux-zip-gzip" tabindex="-1"><a class="header-anchor" href="#tar-linux-zip-gzip" aria-hidden="true">#</a> tar linux zip gzip</h1><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 1: tar (create uncompressed archive) all files and directories in the current working directory recursively into an uncompressed tarball</span>
tar cvf filename.tar *

<span class="token title important"><span class="token punctuation">#</span> 2: Untar (extract uncompressed archive) all files and directories in an uncompressed tarball recursively into the current working directory</span>
tar xvf filename.tar

<span class="token title important"><span class="token punctuation">#</span> 3: tar (create gzipped archive) all files and directories in the current working directory recursively into a tarball compressed with gzip</span>
tar cvzf filename.tar.gz *

<span class="token title important"><span class="token punctuation">#</span> 4: Untar (extract gzipped archive) all files and directories in a tarball compressed with gzip recursively into the current working directory</span>
tar xvf filename.tar.gz # Note: same options as 2 above

<span class="token title important"><span class="token punctuation">#</span> 4.1 Untar (extract gzipped) into specific directory</span>
tar xvf filename.tar.gz -C /path/to/dir


<span class="token title important"><span class="token punctuation">#</span> 5: tar (create bzip2&#39;ed archive) all files and directories in the current working directory recursively into a tarball compressed with bzip2</span>
tar cvjf filename.tar.bz2 * # Note: little &#39;j&#39; in options

<span class="token title important"><span class="token punctuation">#</span> 6: Untar (extract bzip2&#39;ed archive) all files and directories in an tarball compressed with bzip2 recursively into the current working directory</span>
tar xvf filename.tar.bz2 # Note: same options as 2 and 4 above

<span class="token title important"><span class="token punctuation">#</span> 7: tar (create xz&#39;ed archive) all files and directories in the current working directory recursively into a tarball compressed with xz</span>
tar cvJf filename.tar.xz * # Note: capital &#39;J&#39; in options

<span class="token title important"><span class="token punctuation">#</span> 8: Untar (extract xz&#39;ed archive) all files and directories in an tarball compressed with xz recursively into the current working directory</span>
tar xvf filename.tar.xz # Note: same options as 2, 4, and 6 above
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[s];function l(c,d){return n(),i("div",null,r)}const p=e(t,[["render",l],["__file","tar-zip.html.vue"]]);export{p as default};
