import{_ as t,M as l,p,q as i,R as n,t as s,N as e,a1 as c}from"./framework-52ca566e.js";const o={},u=n("h1",{id:"plugin-development-form",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-development-form","aria-hidden":"true"},"#"),s(" Plugin Development Form")],-1),r={href:"https://codex.wordpress.org/Shortcode_API",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"We'll be using:",-1),k={href:"https://wppb.me/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://hub.docker.com/_/wordpress",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="setup-wordpress-instance" tabindex="-1"><a class="header-anchor" href="#setup-wordpress-instance" aria-hidden="true">#</a> Setup Wordpress Instance</h2><p>Following snippet is an boilerplate for seting up Wordpress instances</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> db
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> exampleuser
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> examplepass
      <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> exampledb
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> wordpress<span class="token punctuation">:</span>/var/www/html

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> exampledb
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> exampleuser
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> examplepass
      <span class="token key atrule">MYSQL_RANDOM_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;1&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db<span class="token punctuation">:</span>/var/lib/mysql

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We will change it to fit our needs.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3001<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> formhost
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> formuser
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> formpass
      <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> formdb
      <span class="token key atrule">WORDPRESS_DEBUG</span><span class="token punctuation">:</span> <span class="token string">&#39;1&#39;</span>
      <span class="token key atrule">WORDPRESS_CONFIG_EXTRA</span><span class="token punctuation">:</span>
        define( &#39;WP_DEBUG_DISPLAY&#39;<span class="token punctuation">,</span> false );
        define( &#39;WP_DEBUG_LOG&#39;<span class="token punctuation">,</span> true );
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./wordpress/wp<span class="token punctuation">-</span>content/plugins/geschlossen<span class="token punctuation">-</span>form<span class="token punctuation">:</span>/var/www/html/wp<span class="token punctuation">-</span>content/plugins/geschlossen<span class="token punctuation">-</span>form

  <span class="token key atrule">formhost</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> formdb
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> formuser
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> formpass
      <span class="token key atrule">MYSQL_RANDOM_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;1&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db<span class="token punctuation">:</span>/var/lib/mysql

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We changed the port, added debug functionality &amp; added our plugin.</p>`,6);function _(h,y){const a=l("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[s("We are developing a form for inclusion via "),n("a",r,[s("shortcode"),e(a)]),s(". It will make an api call to save the entered data on a remote server.")]),d,n("ul",null,[n("li",null,[n("a",k,[s("Boilerplate"),e(a)])]),n("li",null,[n("a",v,[s("TailwindCss"),e(a)])]),n("li",null,[n("a",m,[s("Docker"),e(a)])])]),b])}const S=t(o,[["render",_],["__file","plugin-dev-rave.html.vue"]]);export{S as default};
