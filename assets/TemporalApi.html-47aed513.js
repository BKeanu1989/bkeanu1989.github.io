import{_ as p,M as o,p as i,q as l,R as n,t as s,N as e,a1 as t}from"./framework-52ca566e.js";const c={},r=n("h1",{id:"temporal-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#temporal-api","aria-hidden":"true"},"#"),s(" Temporal Api")],-1),u=n("p",null,"Working with times & dates is hard. There are leap years, handling of daylight saving times, timezones, formats etc.",-1),d={href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"},k=n("ul",null,[n("li",null,"date-fns"),n("li",null,"Day.js"),n("li",null,"Luxon")],-1),m={href:"https://github.com/tc39/proposal-temporal",target:"_blank",rel:"noopener noreferrer"},h={href:"https://tc39.es/proposal-temporal/docs/",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-bash“ line-numbers-mode" data-ext="bash“"><pre class="language-bash“"><code>npm install temporal-polyfill

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f={href:"https://codesandbox.io/s/keen-meitner-s0joku?file=/src/index.js",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>Let&#39;s work on some use cases:</p><ul><li>[x] diff</li><li>[ ] time ago</li><li>[ ] adding / subtract of time</li><li>[ ] formats</li></ul><h2 id="difference" tabindex="-1"><a class="header-anchor" href="#difference" aria-hidden="true">#</a> Difference</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> christmas <span class="token operator">=</span> Temporal<span class="token punctuation">.</span>PlainDateTime<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
  <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2021</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hour</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> newYear <span class="token operator">=</span> Temporal<span class="token punctuation">.</span>PlainDate<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2023</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> diff <span class="token operator">=</span> christmas<span class="token punctuation">.</span><span class="token function">until</span><span class="token punctuation">(</span>newYear<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> diff2 <span class="token operator">=</span> newYear<span class="token punctuation">.</span><span class="token function">since</span><span class="token punctuation">(</span>christmas<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> diff3 <span class="token operator">=</span> christmas<span class="token punctuation">.</span><span class="token function">until</span><span class="token punctuation">(</span>newYear<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">smallestUnit</span><span class="token operator">:</span> <span class="token string">&#39;day&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">roundingMode</span><span class="token operator">:</span> <span class="token string">&#39;floor&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>diff<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// P372DT6H</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>diff2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// P373D</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>diff3<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// P372D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The return value always begins with a &#39;P&#39;. xxx Days</p><p>T begins the time stamp. H = hours</p><h2 id="adding-or-subtracting" tabindex="-1"><a class="header-anchor" href="#adding-or-subtracting" aria-hidden="true">#</a> Adding or subtracting</h2><h2 id="timezones" tabindex="-1"><a class="header-anchor" href="#timezones" aria-hidden="true">#</a> Timezones</h2>`,8);function g(y,_){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,u,n("p",null,[s("In the past as far as my knowledge goes almost everybody used "),n("a",d,[s("Moment.js"),e(a)]),s(" Now there are better alternatives like:")]),k,n("p",null,[s('And now there is a new kid on the horizon which might even gets to be implement into javascript itself. Like "Math" for example the '),n("a",m,[s("Temporal Api"),e(a)]),s(" is in a proposal state as off now (2022-09-01). "),n("a",h,[s("Temporal Docs"),e(a)]),s(" But we can still work with via using the polyfill.")]),v,n("p",null,[s("Link to "),n("a",f,[s("codesandbox"),e(a)])]),b])}const x=p(c,[["render",g],["__file","TemporalApi.html.vue"]]);export{x as default};
