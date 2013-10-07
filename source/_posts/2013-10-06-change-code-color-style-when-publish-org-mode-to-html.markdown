---
layout: post
title: "设置 org-mode 导出为 html 时的代码高亮风格"
date: 2013-10-06 18:06
comments: true
categories: [代码]
tags: [org_mode, export, html, Q_A]
---

<p>
结合 org-mode 与 octopress 来写博客还是挺方便的，只是遇到一个代码高亮的问题，原因是 org-mode 导出为 html 时通过 <strong>htmlize</strong> 来格式化代码，而代码风格依赖于 emacs 的外观主题，个人 emacs 常用的是暗系风格主题，但博客主题风格与之相反，这样导出的代码区块部署到博客页面会不太协调。解决办法也挺简单，为 <code>org-publish</code> 添加 defadvice，在发布博客前设置一个与页面协调的主题即可，个人觉得主题 github<sup>[<a id="fnr.1" name="fnr.1" class="footref" href="#fn.1">1</a>]</sup> 挺不错，代码如下：
</p>

<div class="org-src-container">

<pre class="src src-elisp">(<span style="color: #a020f0; font-weight: bold;">defadvice</span> <span style="color: #990000;">org-publish</span> (around fsh-org-publish-advice
                                        (project <span style="color: #445588;">&amp;optional</span> force async) activate)
  <span style="color: #dd1144;">"Change theme before publishing, for getting a good html code highlight style through</span>
<span style="color: #dd1144;">htmlize."</span>
  (<span style="color: #a020f0; font-weight: bold;">let</span> ((thems custom-enabled-themes))
      (<span style="color: #a020f0; font-weight: bold;">dolist</span> (theme thems)
        (disable-theme theme))
      (load-theme 'github)
      ad-do-it
      (disable-theme 'github)
      (<span style="color: #a020f0; font-weight: bold;">dolist</span> (theme thems)
        (enable-theme theme))
      ))
</pre>
</div>
<div id="footnotes">
<h2 class="footnotes">&#33050;&#27880;: </h2>
<div id="text-footnotes">

<div class="footdef"><sup>[<a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a>]</sup> <p class="footpara">
<a href="https://github.com/dudleyf/color-theme-github">https://github.com/dudleyf/color-theme-github</a>
</p></div>


</div>
</div>
