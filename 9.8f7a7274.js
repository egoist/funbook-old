webpackJsonp([9],{55:function(n,s){n.exports={date:"2017-04-14T10:51:23.000Z",content:'<p>Vue supports server-side rendering seamlessly and FunBook uses Vue under the hood, so it couldn’t be easier to use Vue SSR to serve your book or generate static web pages.</p>\n<p>The simplest solution to use Vue SSR so far is using <a href="https://github.com/ream/ream">Ream</a>, basically you  only need to export a vue-router instance in your entry file and it’s all set:</p>\n<pre><code class="language-js"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">\'./my-vue-router\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> router <span class="token punctuation">}</span>\n</code></pre>\n<p>Similarly, when you’re using Ream with FunBook, just export <code>book.open()</code>, FunBook will automatically return <code>router</code> and other necessary data in this method:</p>\n<pre><code class="language-js"><span class="token comment" spellcheck="true">// src/index.js</span>\n<span class="token keyword">import</span> FunBook <span class="token keyword">from</span> <span class="token string">\'funbook\'</span>\n<span class="token keyword">import</span> <span class="token string">\'funbook/dist/funbook.css\'</span>\n\n<span class="token keyword">const</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment" spellcheck="true">// ...add chapters</span>\n<span class="token comment" spellcheck="true">// ...add pages</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> book<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<p>Then run <code>ream dev</code> in your project.</p>\n'}}});
//# sourceMappingURL=9.8f7a7274.js.map