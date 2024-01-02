import{_ as n,p as s,q as a,a1 as e}from"./framework-52ca566e.js";const t={},o=e(`<h1 id="error-handling-in-node" tabindex="-1"><a class="header-anchor" href="#error-handling-in-node" aria-hidden="true">#</a> Error Handling in node</h1><p>https://www.youtube.com/watch?v=xBICbUafQrw&amp;list=PLZt48JdgNiJFCMgxT-xR3zkIy9x2NJKqF&amp;index=1</p><p>https://www.joyent.com/node-js/production/design/errors</p><p>It&#39;s quite easy to extend the Error Class in NodeJs.</p><p>For example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ApplicationError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SomeCustomError</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationError</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SomeCustomError</span><span class="token punctuation">(</span><span class="token string">&#39;Some custom error message&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[o];function c(r,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","error-handling.html.vue"]]);export{d as default};
