import{_ as s,p as n,q as a,a1 as e}from"./framework-52ca566e.js";const t={},i=e(`<h1 id="snippets" tabindex="-1"><a class="header-anchor" href="#snippets" aria-hidden="true">#</a> Snippets</h1><h2 id="ssh-sftp" tabindex="-1"><a class="header-anchor" href="#ssh-sftp" aria-hidden="true">#</a> ssh &amp; sftp</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// create <span class="token function">ssh</span> key
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-f</span> ~/.ssh/nameOfPrivateKey




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scp-kinda-deprecated" tabindex="-1"><a class="header-anchor" href="#scp-kinda-deprecated" aria-hidden="true">#</a> scp (kinda deprecated)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">scp</span> example.txt user@192.168.1.100:/path/to/remote/directory

// <span class="token keyword">if</span> connection closed, try <span class="token parameter variable">-O</span>
<span class="token function">scp</span> <span class="token parameter variable">-O</span> example.txt user@192.168.1.100:/path/to/remote/directory


<span class="token function">scp</span> <span class="token parameter variable">-i</span> /path/to/private/key example.txt user@192.168.1.100:/path/to/remote/directory

// recursivly copy contents of folders
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /local-directory user@remoteIP:/remote-directory

// <span class="token parameter variable">-P</span> <span class="token keyword">for</span> not using standard port
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">2222</span> /local-path/file username@remoteIP:/remote-path

// from remote to <span class="token builtin class-name">local</span>
<span class="token function">scp</span> username@remoteHost:/remote/dir/file.txt /local/dir/


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">--verbose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker-compose.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>      <span class="token key atrule">WORDPRESS_DEBUG</span><span class="token punctuation">:</span> <span class="token string">&#39;1&#39;</span>
      <span class="token key atrule">WORDPRESS_CONFIG_EXTRA</span><span class="token punctuation">:</span>
        define( &#39;WP_DEBUG_DISPLAY&#39;<span class="token punctuation">,</span> false );
        define( &#39;WP_DEBUG_LOG&#39;<span class="token punctuation">,</span> true );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wordpress" tabindex="-1"><a class="header-anchor" href="#wordpress" aria-hidden="true">#</a> Wordpress</h2><h3 id="wordpress-custom-post-types" tabindex="-1"><a class="header-anchor" href="#wordpress-custom-post-types" aria-hidden="true">#</a> Wordpress Custom Post Types</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>
<span class="token doc-comment comment">/**
 * Have WordPress match postname to any of our public post types (post, page, race).
 * All of our public post types can have /post-name/ as the slug, so they need to be unique across all posts.
 * By default, WordPress only accounts for posts and pages where the slug is /post-name/.
 * <span class="token keyword">@source</span> https://kellenmace.com/remove-custom-post-type-slug-from-permalinks/
 * <span class="token keyword">@param</span> <span class="token parameter">$query</span> The current query.
 */</span>
<span class="token keyword">function</span> <span class="token function-definition function">gp_add_cpt_post_names_to_main_query</span><span class="token punctuation">(</span> <span class="token variable">$query</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Bail if this is not the main query.</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span> <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">is_main_query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Bail if this query doesn&#39;t match our very specific rewrite rule.</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span> <span class="token keyword">isset</span><span class="token punctuation">(</span> <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token property">query</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;page&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Bail if we&#39;re not querying based on the post name.</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">empty</span><span class="token punctuation">(</span> <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token property">query</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// error_log(&quot;we are at the end &amp; it should remove prefix&quot;);</span>
	<span class="token comment">// Add CPT to the list of post types WP will include when it queries based on the post name.</span>
	<span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">set</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;post_type&#39;</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;page&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;POST_TYPE&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add_action</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;pre_get_posts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;gp_add_cpt_post_names_to_main_query&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[i];function o(c,l){return n(),a("div",null,p)}const d=s(t,[["render",o],["__file","index.html.vue"]]);export{d as default};
