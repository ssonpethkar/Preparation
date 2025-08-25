# HTML - 
  - HTML stands for hyper text markup language 
  - it is standard language used to create and design document on a world wide web 
  - HTML structures web content and allows inclusion of text, images, link and other elements

# HTML tags : 
  - HTML tags are building blocks of HTML 
  - they are used to create elements and structure content on a web page.

# 1. 🔥 What are semantic HTML elements? Give examples.
  - Semantic elements are the element that clearly describes their meaning in a human and machine readable way.
  - improves accessibility, SEO, and readability 
  - Ex. <header> <footer> <article><section><aside><nav>

# 2. 🔥 Difference between `<div>`, `<section>`, and `<article>`
  - <div> : generic container, no meaning 
  - <section> : Groups related content , like chapter/topic 
  - <article> : self-contained content, reusable outside context

# 3. What are void elements? Give examples.
  - elements that do not have closing tags and cannot contain content
  - Ex. <img>,<br>,<hr>,<meta>,<link>,<input>

# 4. Difference between inline, block, and inline-block elements.
  - block : starts on new line, full width(<div>,<p>,<h1> to <h6>)
  - inline : does not start new line, takes content width (<span>,<a>,<img>)
  - inline-block : behaves like inline but accepts width/height(<button>, <input>)

# 5. What is the difference between `<link>` and `<a>` tags?
  - <link> : define relation with external resources (eg.css), NON clickable
  - <a> : Creates a hyperlink for navigation. Clickable

# 6. Explain the purpose of the `alt` attribute in `<img>`.
  - Provides alternative text when image fails to load 
  - Helps screen readers (accessibility)
  - used bt search engine SEO


# 7. Difference between `<script>`, `<noscript>`, and `<script async/defer>`.

# 8. What’s the difference between `<ol>`, `<ul>`, and `<dl>`?
  <ol> : ordered list
  <ul> : unordered list
  <dl> : description list 

# 9. What are global attributes in HTML?
  - Attributes can be applied on any element 
  - Ex. id, class, style, title, lang, hidden 

# 10. Difference between `<span>` and `<label>`.
# 11. 🔥 Difference between HTML and XHTML.
  HTML : 
    - More forgiving, non case sensitive, ca omit tags 

  XHTML : 
    - Stricter, XML based, requires well formed syntax, lowercase tags, attributes must be quoted, self closing tag like <br/>

# 12. What’s the difference between `localStorage`, `sessionStorage`, and cookies?
  localstorage : 
    - stored data permanently in browser (until cleared)

  sessionstorage:
    - stores data only for current tab/session, cleared on close

  cookies:
    - small, sent with every HTTP request, often used for auth 

# 13. Difference between `<iframe>` and `<embed>`.
  <iframe> : Embeds another HTML page inside the current page 
  <embed> : Embeds external resources ( audio, video, PDFs, flash)

# difference between <div> and <span>
  <div>: 
    - block level element 
    - it accepts allign attribute 
    - it is best to attach it to a section of a web page
    - This tag is should bw used to wrap a section for highlighting that section
  <span>
    - inline element 
    - it doesn't accept allign attribute 
    - it is best to attach a CSS to a small section of a line in a web page
    - This tag is should be used to wrap any specific word that you want to highlight in your web page

# . How do you create a hyperlink that opens in a new tab?
  To open a link in a new tab, use the target attribute with the value _blank:
    - <a href="https://www.example.com/" target="_blank">Visit Example</a>

# What are the different values of the target attribute in <a>?
  <a href="https://www.example.com/" target="_blank">Visit Example</a>
  - _blank → Opens in new tab.
  - _self → Default, opens in the same tab.
  - _parent → Opens in parent frame.
  - _top → Opens in full window, breaking out of frames.

# What is the difference between absolute URL and relative URL in links?
  - Absolute URL: Full path including protocol.
    <a href="https://www.google.com">Google</a>
  - Relative URL: Path relative to current page.
    <a href="/about.html">About</a>

# How do you create an email or phone link using <a>?
  email : <a href="mailto:someone@example.com">Send Email</a>
  phone : <a href="tel:+1234567890">Call Us</a>

# How do you make a link open a file download instead of navigating?
  <a href="resume.pdf" download>Download Resume</a>

# What’s the difference between <button> and <a> for navigation?
  <a> → For navigation to URLs.
  <button> → For actions (form submit, JS events).
  Interviewers may ask: When should you use <a> vs <button>?

# What security issue can happen with target="_blank"? How to prevent it?

  Issue: The new tab can access window.opener, leading to tabnabbing attacks.
  Fix: Add rel="noopener noreferrer".
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">Secure Link</a>


# 14. What is the purpose of ARIA roles in HTML?
# 15. Difference between `<canvas>` and `<svg>`.
  <canvas> → Pixel-based, best for dynamic/drawings (games, charts).
  <svg> → Vector-based, best for icons/logos, scales without losing quality.

# What are data attributes in HTML (data-*)?
  - Custom attributes to store extra data.
  - Example:
    <button data-id="123" data-user="sati">Click</button>

# Inline → style="" inside element.
  - Internal → Inside <style> tag in HTML.
  - External → Linked with <link> (best practice).

# 16. What are meta tags? How are they used for SEO and responsive design?
  - **Meta tags** are HTML elements that provide **metadata** (information about the webpage) but are not displayed on the page.
  - They go inside the `<head>` section and help **search engines, browsers, and social platforms** understand the content

  Examples of Meta Tags
    # 1. **For SEO (Search Engine Optimization):**

    ```html
    <meta name="description" content="Interview questions and answers for HTML, CSS, and Tailwind.">
    <meta name="keywords" content="HTML, CSS, Tailwind, interview, frontend">
    <meta name="author" content="Sati Shuntriksa">
    ```

    * `description` → Short summary shown in search results (boosts CTR).
    * `keywords` → Old SEO practice, mostly ignored today by Google.
    * `author` → Defines content author.


    # 2. **For Responsive Design:**

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

    * Ensures the page is **mobile-friendly**.
    * `width=device-width` → Makes page width adapt to device screen.
    * `initial-scale=1.0` → Sets initial zoom level.

    # 3. **For Character Encoding:**
    ```html
    <meta charset="UTF-8">
    ```

    * Ensures the browser correctly displays special characters (like é, ü, अ, 漢字).

    # 4. **For Social Media (Open Graph & Twitter Cards):**

    ```html
    <meta property="og:title" content="HTML Interview Guide">
    <meta property="og:description" content="Top HTML interview questions and answers.">
    <meta property="og:image" content="thumbnail.jpg">
    <meta name="twitter:card" content="summary_large_image">
    ```

    * Used by **Facebook, Twitter, LinkedIn** for previews.

    # 🔹 **In short:**
    * **SEO:** Helps search engines rank and display your page properly.
    * **Responsive Design:** Ensures proper scaling on mobile devices.
    * **Usability:** Improves accessibility, sharing previews, and browser rendering.



# 17. Explain `contenteditable`, `draggable`, and `hidden` attributes.
# 18. What is the difference between `<template>` and `<slot>`?
# 19. 🔥 How does the browser parse and render HTML?
# 20. What’s the difference between Shadow DOM and Light DOM?
# 21. How does HTML5 handle offline storage?
# 22. Explain Progressive Enhancement vs Graceful Degradation in HTML.
# 23. What is the difference between Microdata, JSON-LD, and RDFa?
