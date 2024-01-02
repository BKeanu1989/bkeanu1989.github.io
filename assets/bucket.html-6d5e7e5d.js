import{_ as i,M as a,p as l,q as u,R as n,t as p,N as s,V as e,a1 as r}from"./framework-52ca566e.js";const d={},k=r(`<p>https://stevenklambert.com/writing/comprehensive-guide-building-packaging-electron-app/</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span>
      <span class="token string">&#39;api&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">send</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">channel<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// allow only specific channels</span>
          <span class="token keyword">const</span> validChannels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;toMain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;foo-bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>validChannels<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">receive</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">channel<span class="token punctuation">,</span> func</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> validChannels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;fromMain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar-baz&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>validChannels<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Deliberately strip event as it includes \`sender\` </span>
            ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="docker-wp-wp-cli" tabindex="-1"><a class="header-anchor" href="#docker-wp-wp-cli" aria-hidden="true">#</a> Docker Wp /Wp Cli</h1><p>https://mklasen.com/adding-and-using-wp-cli-in-a-docker-compose-setup/ https://stackoverflow.com/questions/40905761/how-do-i-mount-a-host-directory-as-a-volume-in-docker-compose - mounts &amp; volumes</p><h2 id="app-provide-vue-3" tabindex="-1"><a class="header-anchor" href="#app-provide-vue-3" aria-hidden="true">#</a> App Provide Vue 3</h2><p>https://vuejs.org/guide/components/provide-inject.html#app-level-provide</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token comment">/* key */</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* value */</span> <span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-character-encodings" tabindex="-1"><a class="header-anchor" href="#php-character-encodings" aria-hidden="true">#</a> Php Character Encodings</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token function">mb_list_encodings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$chr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token function">mb_convert_encoding</span><span class="token punctuation">(</span><span class="token variable">$post_content</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UTF-8&#39;</span><span class="token punctuation">,</span> <span class="token variable">$chr</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot; : &quot;</span><span class="token operator">.</span><span class="token variable">$chr</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>   
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>open office calc
open with Windows Latin Encoding
save as new file with encoding via &#39;save&#39; interface 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),v={id:"degit",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#degit","aria-hidden":"true"},"#",-1),h={href:"https://github.com/Rich-Harris/degit",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"boilerplate installs via user/repo link. can bis used as",-1),g=n("div",{class:"language-zh line-numbers-mode","data-ext":"zh"},[n("pre",{class:"language-zh"},[n("code",null,`npx degit
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-zh line-numbers-mode","data-ext":"zh"},[n("pre",{class:"language-zh"},[n("code",null,`degit user/repo

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-zh line-numbers-mode","data-ext":"zh"},[n("pre",{class:"language-zh"},[n("code",null,`npx degit https://github.com/huibizhang/template-vite-vue-ts-tailwind-v3 tailwind-vue3

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(x,y){const o=a("ExternalLinkIcon"),t=a("CodeGroupItem"),c=a("CodeGroup");return l(),u("div",null,[k,n("h2",v,[m,p(),n("a",h,[p("degit"),s(o)])]),b,g,s(c,null,{default:e(()=>[s(t,{title:""},{default:e(()=>[f]),_:1}),s(t,{title:"example 1"},{default:e(()=>[_]),_:1})]),_:1})])}const C=i(d,[["render",w],["__file","bucket.html.vue"]]);export{C as default};