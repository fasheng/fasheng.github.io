---
layout: post
title: "分享一款适用于 org-mode 的简洁风 LaTeX 简历模板"
date: 2013-09-26 13:17
comments: true
categories: [代码]
tags: [org_mode, latex]
---

<p>
使用 org-mode 导出 LaTeX 简历对我个人而言还是有一定吸引力的，原因之一是
org-mode 同时还可以导出为 html 文件，使得应用范围变得更广。于是自己参考了一些网上资料<sup>[<a id="fnr.1" name="fnr.1" class="footref" href="#fn.1">1</a>]</sup><sup>, </sup><sup>[<a id="fnr.2" name="fnr.2" class="footref" href="#fn.2">2</a>]</sup>编写了一个简单的简历模板，源码可以到<a href="https://github.com/fasheng/fsh_orgmode_latex_cv">这里</a>找到，下面是使用示例及对应 pdf 文件。
</p>

<div class="org-src-container">

<pre class="src src-org"><span style="color: #999988; font-style: italic;">#+LaTeX_HEADER: \usepackage{fsh_orgmode_cv}</span>
<span style="color: #999988; font-style: italic;">#+LaTeX_HEADER: \usepackage{xltxtra,fontspec,xunicode,xeCJK}</span>
<span style="color: #999988; font-style: italic;">#+LaTeX_HEADER: \setCJKmainfont{AR PL New Kai}</span>

<span style="color: #7f7f7f;">#+TITLE:</span> <span style="color: #191970; font-weight: bold;">&#20010;&#20154;&#31616;&#21382;</span>

<span style="color: #990000;">* &#31034;&#20363; &#19968;&#32423;&#26631;&#39064;</span>
<span style="color: #0086b3;">** &#20108;&#32423;&#26631;&#39064;</span>
   *&#20108;&#32423;&#27491;&#25991;*

   &#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;

<span style="color: #0086b3;">** &#20108;&#32423;&#26631;&#39064;</span>
   *&#20108;&#32423;&#27491;&#25991;*

   &#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;
   &#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;&#27491;&#25991;
</pre>
</div>

<p>
<a href="../downloads/20130926_demo_resume_cn.pdf">示例 pdf 下载</a>
</p>
<div id="footnotes">
<h2 class="footnotes">&#33050;&#27880;: </h2>
<div id="text-footnotes">

<div class="footdef"><sup>[<a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a>]</sup> <p class="footpara">
<a href="https://github.com/punchagan/resume">https://github.com/punchagan/resume</a>
</p></div>

<div class="footdef"><sup>[<a id="fn.2" name="fn.2" class="footnum" href="#fnr.2">2</a>]</sup> <p class="footpara">
<a href="http://www.latextemplates.com/template/plasmati-graduate-cv">http://www.latextemplates.com/template/plasmati-graduate-cv</a>
</p></div>


</div>
</div>
