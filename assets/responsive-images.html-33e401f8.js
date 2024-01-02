import{_ as n,p as s,q as a,a1 as t}from"./framework-52ca566e.js";const p={},e=t(`<h1 id="picture-tag-in-wordpress" tabindex="-1"><a class="header-anchor" href="#picture-tag-in-wordpress" aria-hidden="true">#</a> Picture tag in Wordpress</h1><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>
<span class="token operator">...</span>

    <span class="token variable">$dir</span> <span class="token operator">=</span> <span class="token function">wp_upload_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">upload_dir</span> <span class="token operator">=</span> <span class="token variable">$dir</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;baseurl&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">findPictureForArtist</span><span class="token punctuation">(</span><span class="token variable">$gallery_ids</span><span class="token punctuation">,</span> <span class="token variable">$title</span><span class="token punctuation">,</span> <span class="token variable">$permalink</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$img_id</span> <span class="token operator">=</span> <span class="token variable">$gallery_ids</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token variable">$img_data</span> <span class="token operator">=</span> <span class="token function">wp_get_attachment_metadata</span><span class="token punctuation">(</span><span class="token variable">$img_id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$img_data</span> <span class="token operator">===</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token variable">$img_data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;file&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 2022/09/...</span>
        <span class="token variable">$path_infos</span> <span class="token operator">=</span> <span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$dir_name</span> <span class="token operator">=</span> <span class="token variable">$path_infos</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;dirname&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$alt_text</span> <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span><span class="token function">strip_tags</span><span class="token punctuation">(</span><span class="token function">get_post_meta</span><span class="token punctuation">(</span><span class="token variable">$img_id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;_wp_attachment_image_alt&#39;</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token variable">$sources</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getSourcesForPicture</span><span class="token punctuation">(</span><span class="token variable">$img_data</span><span class="token punctuation">,</span> <span class="token variable">$dir_name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$figcaption</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getCaptionForPicture</span><span class="token punctuation">(</span><span class="token variable">$title</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$html</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&lt;figure class=&#39;tw-group tw-inline-block tw-relative wrapper-for-image&#39;&gt;&lt;a href=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$permalink</span><span class="token punctuation">}</span></span>&#39;&gt;&lt;picture&gt;
            <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$sources</span><span class="token punctuation">}</span></span>
        &lt;img src=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">upload_dir</span><span class="token punctuation">}</span></span>/<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$img_data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;file&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>&#39; alt=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$alt_text</span><span class="token punctuation">}</span></span>&#39; width=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$img_data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;width&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>&#39; height=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$img_data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;height&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>&#39; /&gt; 
        &lt;/picture&gt;
        <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$figcaption</span><span class="token punctuation">}</span></span>&lt;/a&gt;&lt;/figure&gt;&quot;</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">images</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$html</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">html</span> <span class="token operator">.=</span> <span class="token variable">$html</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">getSourcesForPicture</span><span class="token punctuation">(</span><span class="token variable">$img_data</span><span class="token punctuation">,</span> <span class="token variable">$dir_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$html</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$img_data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sizes&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$img_data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sizes&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;mobile-gallery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">list</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;file&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$file</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;width&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$width</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token variable">$img_data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sizes&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;mobile-gallery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token variable">$html</span> <span class="token operator">.=</span> <span class="token string double-quoted-string">&quot;
                &lt;source media=&#39;(max-width: 1023px)&#39; srcset=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">upload_dir</span><span class="token punctuation">}</span></span>/<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$dir_name</span><span class="token punctuation">}</span></span>/<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$file</span><span class="token punctuation">}</span></span> <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$width</span><span class="token punctuation">}</span></span>w&#39;&gt;
                &quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token variable">$html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">getCaptionForPicture</span><span class="token punctuation">(</span><span class="token variable">$title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;&lt;figcaption style=&#39;
        height: 50%; 
        position: absolute; 
        top: 50%; 
        left: 0; 
        width: 100%; 
        color: white; 
        background: rgb(0,111,124); 
        background: linear-gradient(0deg, rgba(0,111,124,1) 0%, rgba(255,255,255,0) 100%);
        opacity: 0;
        &#39;
        class=&#39;group-hover:tw-animate-show-name group-active:tw-animate-show-name tw-duration-500 tw-transition-all&#39;
        &gt;&lt;div style=&#39;display: flex; justify-content: center;align-items: center;height: 100%;&#39; class=&#39;tw-text-xl&#39;&gt;&quot;</span> <span class="token operator">.</span> <span class="token variable">$title</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;/div&gt;&lt;/figcaption&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-layout" tabindex="-1"><a class="header-anchor" href="#html-layout" aria-hidden="true">#</a> Html Layout</h2><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h2><h3 id="boilerplate" tabindex="-1"><a class="header-anchor" href="#boilerplate" aria-hidden="true">#</a> boilerplate</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>
<span class="token keyword">function</span> <span class="token function-definition function">webp_picture_fix</span><span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">global</span> <span class="token variable">$post</span><span class="token punctuation">;</span>
    <span class="token function">preg_match_all</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/&lt;img(.*?)class=(&#39;|\\&quot;)(.*?)(&#39;|\\&quot;)(.*?)src=(&#39;|\\&quot;)(.*?)(&#39;|\\&quot;)(.*?)&gt;/i&quot;</span><span class="token punctuation">,</span> <span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token variable">$images</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">is_null</span><span class="token punctuation">(</span><span class="token variable">$images</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$i</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$images</span> <span class="token keyword">as</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">//echo $key[$i];</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strpos</span><span class="token punctuation">(</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;size-full&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//echo &quot;hi&quot;;</span>
                <span class="token variable">$slika_ekstenzija</span> <span class="token operator">=</span> <span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token variable">$sewebp</span> <span class="token operator">=</span> <span class="token function">preg_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/\\\\.[^.\\\\s]{3,4}$/&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$slika_ekstenzija</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$webp_slika_src</span> <span class="token operator">=</span> <span class="token variable">$sewebp</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;.webp&quot;</span><span class="token punctuation">;</span>
                <span class="token variable">$replacement</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&lt;picture&gt;&lt;source srcset=&quot;&#39;</span><span class="token operator">.</span><span class="token variable">$webp_slika_src</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;&quot; type=&quot;image/webp&quot; /&gt;&lt;img&#39;</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;class=&#39;</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;src=&#39;</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;&gt;&lt;/picture&gt;&#39;</span><span class="token punctuation">;</span>
                <span class="token variable">$content</span> <span class="token operator">=</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token variable">$images</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$replacement</span><span class="token punctuation">,</span> <span class="token variable">$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token variable">$content</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_filter</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;the_content&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;webp_picture_fix&#39;</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-image-sizes" tabindex="-1"><a class="header-anchor" href="#add-image-sizes" aria-hidden="true">#</a> Add image sizes</h2><p>https://developer.wordpress.org/reference/functions/add_image_size/</p><h3 id="file-formats" tabindex="-1"><a class="header-anchor" href="#file-formats" aria-hidden="true">#</a> file formats</h3><p>avif upload mimes avif not working</p><p>even via upload_mimes not working</p><p>had to install &quot;Lord of the Files: Enhanced Upload Security&quot;</p>`,12),o=[e];function i(l,c){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","responsive-images.html.vue"]]);export{r as default};