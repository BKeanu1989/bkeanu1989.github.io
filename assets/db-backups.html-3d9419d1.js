import{_ as s,p as a,q as n,a1 as e}from"./framework-52ca566e.js";const p={},l=e(`<h1 id="automated-db-backups" tabindex="-1"><a class="header-anchor" href="#automated-db-backups" aria-hidden="true">#</a> Automated DB Backups</h1><h2 id="old" tabindex="-1"><a class="header-anchor" href="#old" aria-hidden="true">#</a> old</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">DB_USER</span><span class="token operator">=</span><span class="token string">&quot;YYY&quot;</span>
<span class="token assign-left variable">DB_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;XXX&quot;</span>
<span class="token assign-left variable">MAIL_NOTIFICATION</span><span class="token operator">=</span><span class="token string">&quot;myemail@gmail.com&quot;</span>
<span class="token assign-left variable">BACKUP_FOLDER</span><span class="token operator">=</span><span class="token string">&quot;/home/db_backups&quot;</span>
<span class="token assign-left variable">NUM_COPIES</span><span class="token operator">=</span><span class="token number">12</span>
<span class="token assign-left variable">DB_NAME</span><span class="token operator">=</span><span class="token string">&quot;DBNAME&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;processing <span class="token variable">\${DB_NAME}</span>&quot;</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">\${BACKUP_FOLDER}</span>/<span class="token variable">\${DB_NAME}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">\${BACKUP_FOLDER}</span>/<span class="token variable">\${DB_NAME}</span>&quot;</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable">\${BACKUP_FOLDER}</span>/<span class="token variable">\${DB_NAME}</span>&quot;</span>
mysqldump <span class="token parameter variable">--opt</span> -u<span class="token variable">\${DB_USER}</span> -p<span class="token variable">\${DB_PASSWORD}</span> <span class="token string">&quot;<span class="token variable">\${DB_NAME}</span>&quot;</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> dump_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%T<span class="token variable">)</span></span>.sql.gz <span class="token operator">||</span> mail <span class="token parameter variable">-s</span> <span class="token string">&quot;error backing up database <span class="token variable">\${DB_NAME}</span>&quot;</span> <span class="token variable">\${MAIL_NOTIFICATION}</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> dump_* <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-gt</span> <span class="token variable">\${NUM_COPIES}</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
	<span class="token assign-left variable">FIRST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-t</span> dump_* <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n1</span><span class="token variable">\`</span></span>
	<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">\${FIRST}</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h3><p>https://tecadmin.net/bash-script-mysql-database-backup/</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token comment">################################################################</span>
<span class="token comment">##</span>
<span class="token comment">##   MySQL Database Backup Script </span>
<span class="token comment">##   Written By: Rahul Kumar</span>
<span class="token comment">##   URL: https://tecadmin.net/bash-script-mysql-database-backup/</span>
<span class="token comment">##   Last Update: Jan 05, 2019</span>
<span class="token comment">##</span>
<span class="token comment">################################################################</span>
 
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/usr/bin:/usr/local/bin
<span class="token assign-left variable">TODAY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%d%b%Y&quot;</span><span class="token variable">\`</span></span>
 
<span class="token comment">################################################################</span>
<span class="token comment">################## Update below values  ########################</span>
 
<span class="token assign-left variable">DB_BACKUP_PATH</span><span class="token operator">=</span><span class="token string">&#39;/backup/dbbackup&#39;</span>
<span class="token assign-left variable">MYSQL_HOST</span><span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span>
<span class="token assign-left variable">MYSQL_PORT</span><span class="token operator">=</span><span class="token string">&#39;3306&#39;</span>
<span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span>
<span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&#39;mysecret&#39;</span>
<span class="token assign-left variable">DATABASE_NAME</span><span class="token operator">=</span><span class="token string">&#39;mydb&#39;</span>
<span class="token assign-left variable">BACKUP_RETAIN_DAYS</span><span class="token operator">=</span><span class="token number">30</span>   <span class="token comment">## Number of days to keep local backup copy</span>
 
<span class="token comment">#################################################################</span>
 
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${DB_BACKUP_PATH}</span>/<span class="token variable">\${TODAY}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Backup started for database - <span class="token variable">\${DATABASE_NAME}</span>&quot;</span>
 
 
mysqldump <span class="token parameter variable">-h</span> <span class="token variable">\${MYSQL_HOST}</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-P</span> <span class="token variable">\${MYSQL_PORT}</span> <span class="token punctuation">\\</span>
   <span class="token parameter variable">-u</span> <span class="token variable">\${MYSQL_USER}</span> <span class="token punctuation">\\</span>
   -p<span class="token variable">\${MYSQL_PASSWORD}</span> <span class="token punctuation">\\</span>
   <span class="token variable">\${DATABASE_NAME}</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token variable">\${DB_BACKUP_PATH}</span>/<span class="token variable">\${TODAY}</span>/<span class="token variable">\${DATABASE_NAME}</span>-<span class="token variable">\${TODAY}</span>.sql.gz
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Database backup successfully completed&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Error found during backup&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
 
 
<span class="token comment">##### Remove backups older than {BACKUP_RETAIN_DAYS} days  #####</span>
 
<span class="token assign-left variable">DBDELDATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%d%b%Y&quot;</span> <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${BACKUP_RETAIN_DAYS}</span> days ago&quot;</span><span class="token variable">\`</span></span>
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">\${DB_BACKUP_PATH}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">cd</span> <span class="token variable">\${DB_BACKUP_PATH}</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">\${DBDELDATE}</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">\${DBDELDATE}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${DBDELDATE}</span>
      <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
 
<span class="token comment">### End of script ####</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Whatever you named your file, you need to make it executable via setting correct permissions</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /backup/my-backup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,8),t=[l];function i(o,c){return a(),n("div",null,t)}const d=s(p,[["render",i],["__file","db-backups.html.vue"]]);export{d as default};
