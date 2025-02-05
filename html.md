# 1. HTML : ( hypertext markup language)
    it is the standard language for creating web pages. it provides the structure of a webpage using elements like headings, paragraphs, images and links 

# 2. What are the different types of HTML elements?

HTML elements are categorized as:
    Block-level elements – Take up the full width (e.g., <div>, <p>, <h1>).
    Inline elements – Only take up as much space as needed (e.g., <span>, <a>, <strong>).
    Empty elements – Do not have closing tags (e.g., <img>, <br>, <input>).

# 3. 3. What is the difference between HTML and XHTML?
✅ Answer:

Feature	        HTML	                            XHTML
Syntax	        Less strict	                    More strict
Tags	        Can be uppercase/lowercase	    Must be lowercase
Closing Tags	Optional for some elements	    Required for all elements
Attributes	    No quotes needed	            Must use quotes

# 4. semantic HTML elements
Semantic HTML elements are used to define the structure and meaning of content on a web page. They provide a clear understanding of the content and its purpose, making it easier for search engines, screen readers, and other tools to understand the content.


# 5. What is the difference between <div> and <span>?
    <div> – Block-level, used for layout structuring.
    <span> – Inline, used for styling text inside elements.


# 6. What is the difference between <b> and <strong>?

    <b> (Bold) – Only makes text bold (visual effect).
    <strong> (Important) – Adds emphasis (affects SEO & screen readers).

# 7. What is the difference between id and class attributes?

    id – Unique identifier (used only once per page).
    class – Can be reused for multiple elements.

# 8. What is the difference between absolute, relative, and root-relative URLs?

    Absolute URL: Full web address (e.g., https://example.com/page.html).
    Relative URL: Based on the current location (e.g., page.html).
    Root-relative URL: Starts from the root of the website (e.g., /images/photo.jpg).

    Ex. 
        <a href="https://example.com/about.html">Absolute URL</a>
        <a href="about.html">Relative URL</a>
        <a href="/about.html">Root-Relative URL</a>

# 9. What are the different types of lists in HTML?
✅ Answer:
    Ordered List (<ol>) – Numbered list.
    Unordered List (<ul>) – Bullet points.
    Definition List (<dl>) – Describes terms.

# 10. What is the difference between target="_blank" and rel="noopener noreferrer" in links?
✅ Answer:

target="_blank" – Opens link in a new tab.
rel="noopener noreferrer" – Prevents security risks when opening new tabs.


## advance HTML 
# 11. What is the difference between <picture> and <img> elements?
    <picture> – Allows for multiple image sources and responsive images.
    <img> – A single image source.

# 12. What is the difference between <source> and <track> elements?
    <source> – Specifies a media source (e.g., video or audio).
    <track> – Specifies a text track (e.g., subtitles or captions).

# 13. What is the difference between <canvas> and <svg> elements?
    <canvas> – A 2D drawing context (e.g., graphics or animations).
    <svg> – A vector graphics element (e.g., logos or icons).

# 14. What is the difference between <video> and <audio> elements?
    <video> – Plays video content.
    <audio> – Plays audio content.

# 15. What is the difference between <embed> and <object> elements?
    <embed> – Embeds external content (e.g., Flash or Java).
    <object> – Embeds external content (e.g., Flash or Java) with more control.

# 16. What is the purpose of the <meta> tag?
✅ Answer:
    The <meta> tag provides metadata about the HTML document.

# 17. What is the difference between <iframe>, <frame>, and <frameset>?
✅ Answer:
    <iframe> → Embeds another webpage inside a webpage.
    <frameset> → Used to divide a page into sections (deprecated in HTML5).
    <frame> → Defines sections inside a <frameset> (deprecated in HTML5).

# 18. What is the difference between <input type="button"> and <button>?
✅ Answer:
    <input type="button"> – Cannot contain inner HTML, only used for simple buttons.
    <button> – Can contain HTML (text, images, etc.).

15. How does the <canvas> element work?
✅ Answer:
    The <canvas> element is used for drawing graphics using JavaScript.

    Ex. 
        <canvas id="myCanvas" width="200" height="100"></canvas>
        <script>
            let canvas = document.getElementById("myCanvas");
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = "blue";
            ctx.fillRect(10, 10, 100, 50);
        </script>

