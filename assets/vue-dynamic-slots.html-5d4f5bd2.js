import{_ as n,p as s,q as a,a1 as e}from"./framework-52ca566e.js";const t={},p=e(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Icons navigation icons</p><p>vue script setup attr instead of props</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// const props = defineProps&lt;{</span>
<span class="token comment">//    &#39;items&#39;: NavItem[],</span>
<span class="token comment">//    &#39;abc&#39;: string,</span>
<span class="token comment">// //    &#39;rightItems&#39;:   </span>
<span class="token comment">// }&gt;()</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Array <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>NavItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="side-note" tabindex="-1"><a class="header-anchor" href="#side-note" aria-hidden="true">#</a> side note</h2><p>use v-once more</p>`,6),o=[p];function i(c,r){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","vue-dynamic-slots.html.vue"]]);export{d as default};
