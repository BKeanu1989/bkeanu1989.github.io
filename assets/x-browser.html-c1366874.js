import{_ as e,p as t,q as o,a1 as a}from"./framework-52ca566e.js";const i={},s=a('<h1 id="safari-problems" tabindex="-1"><a class="header-anchor" href="#safari-problems" aria-hidden="true">#</a> Safari problems...</h1><p>I developed a custom template for woocommerce products - so it&#39;s Wordpress again. Everything was working fine on my end, so I was quite shocked, it wasn&#39;t working for any Safari Users.</p><p>Safari is the worst thing to debug, if you don&#39;t have any macos system. For some time now Safari is only for Apple devices. But luckily one of my clients (my absolute favorite - we have been working together for quite some time now), sold me one of his recently. Altough it was at my GF&#39;s place... Anyway I digress.</p><p>After I got the mac in my hands I had to setup the development environment again. But with Docker it&#39;s really easy &amp; fast to setup. But locally it was working fine as well. Which kinda made me happy, but I had 0 clues what was causing the error. The devtools didn&#39;t show anything.</p><p>In that case most of the suggestions for debugging stuff like that in Wordpress is to:</p><ul><li>deactivate all plugins</li><li>activate them one by one again</li><li>profit??</li></ul><p>So deactivating all plugins is a no go for my client. So what to do? I was pretty sure it&#39;s not a fault at my part. Luckily over the years I gained a lot of experience working with wordpress. Hummingbird is a pretty nice performance enhancing plugin. It can combine files and therefore serving &#39;more&#39; with less http overhead.</p><p>But it can also lead to some problems, so I went ahead to the Asset Optimization Tab and removed the combination (as mentioned above) for that file.</p><p>3 ... 2 ... 1 It was working again. Only cost me like 8 hours, because I had to drive through the whole city to get the mac.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Check for Hummingbird or any other Optimization Plugin if it fucks up your app.</p></div>',10),n=[s];function r(l,c){return t(),o("div",null,n)}const p=e(i,[["render",r],["__file","x-browser.html.vue"]]);export{p as default};