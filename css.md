# 1. what is css ?
CSS ( cascading style sheets) is used to style html elements. It allows web developers to control the layouts , colors, font, spacing, and responsiveness of a website

# 2. Types of css
    1. inline CSS - applied directly within an HTML tag using style attribute
        <p style="color: blue;">This is a blue paragraph.</p>

    2. Internal CSS - Defined within <style> tag in <head> section
        <style>
            p { color: blue; }
        </style>

    3. External CSS - stored in a separate .css file
        <link rel="stylesheet" href="styles.css">

# 3. What is the difference between em, rem, %, and px in CSS?
    em : relative to the font-size of the parent element
    rem : relative to the root(html) font size.
    % : relative to the parent elment
    px( pixel ) : fixed size unit, does not scale
    Ex. 
        html { font-size: 16px; }
        p { font-size: 2rem; } /* 32px */


# 4. What is the difference between relative, absolute, fixed, and sticky positioning in CSS?
    relative - Positioned relative to its normal position
    absolute - Position relative to the nearest positioned(non-static) ancestor
    fixed - stays fixed relative to the viewport
    sticky - STicky to a posiiton while scrolling within its parent

# 5. What is Flexbox and how does it work?
    Flexbox is a layout model designed for efficient space distribution in a container.
        display: flex; – Defines a flex container.
        justify-content – Aligns items along the main axis.
        align-items – Aligns items along the cross-axis.

    Ex. .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

# 6. difference between flexbox and grid

Feature             Flexbox                            Grid
Axis            One dimensional (row or column)      Two-dimentional(rows&columns)
ALignment       works well for small layouts         best for large scale layouts  
Item control    Control over item order              controls both rows & columns

# 7. WHat the difference between nth-child() and nth-of-type()?
    nth-child(n) – Selects the nth child, regardless of type.
    nth-of-type(n) – Selects the nth child of the same element type.

    Ex. 
        p:nth-child(2) { color: red; } /* Selects the second child */
        p:nth-of-type(2) { color: blue; } /* Selects the second <p> only */

# 8. how does the z-index property work?
    The z-intex controls the stacking order of elements. Higher values appear in front

    Ex. 
    .box1 {
        position: absolute;
        z-index: 1;
    }
    .box2 {
        position: absolute;
        z-index: 2; /* This will be on top */
    }

# 9. WHat is difference between transition and animation in CSS ?
    - transition : Requires a user action(eg. hover) to trigger
    - animation : runs automatically without user action 

    Ex.
    /* Transition */
    .button:hover {
        transition: background-color 0.5s ease;
        background-color: blue;
    }

    /* Animation */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .box {
        animation: fadeIn 2s;
    }


# 10. How do media queries work in CSS ?
    media queries allow for responsive design based onn screen size.
    Ex. 
    @media (max-width: 768px) {
        body {
            background-color: lightgray;
        }
    }

# 11. What are pseudo-classes and pseudo-elements in CSS ?

    Pseudo-classes define a special state of an element (e.g., :hover, :nth-child).
    Pseudo-elements allow styling specific parts of an element (e.g., ::before, ::after).
    Ex. 
    /* Pseudo-class */
    button:hover {
        background-color: blue;
    }

    /* Pseudo-element */
    p::first-letter {
        font-size: 2em;
        color: red;
    }

# 12. What is the difference between max-width, min-width, and width?
    width : sets a fixed width 
    max-width : sets the maximum width an element can have
    min-width : sets the minimum width an element can have

    Ex. 
    .container {
        min-width: 200px;
        max-width: 600px;
        width: 100%;
    }


# 13. How do you create a responsive layout without using media queries?

    Flexbox – flex-wrap: wrap;
    CSS Grid – grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    Viewport Units – width: 100vw;

    Ex. 
    .container {
        display: flex;
        flex-wrap: wrap;
    }

# 14. What is difference ways to hide an element in CSS?
    1. display: none; - removes element from layout(no space taken)
    2. visibility: hidden; - Hides but still takes up space
    3. opacity:0; - makes it invisible but still interactive
    4. position: absolute; left:-9999px - moves off screen


# 15. How can you center a div using CSS?

    1. Using Flexbox:
        .parent {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    2. Using Grid:

        .parent {
            display: grid;
            place-items: center;
        }

    3. Using margin: auto:

        .child {
            width: 200px;
            height: 200px;
            margin: auto;
        }

# 16. What is the difference between overflow: hidden, scroll, auto, and visible?

    hidden – Hides overflowing content.
    scroll – Always shows scrollbars.
    auto – Shows scrollbars only when needed.
    visible – Default; content overflows.

# 17. How does contain property work in CSS?
Answer: The contain property improves performance by limiting rendering within an element.
    Ex. 
    .card {
        contain: content;
    }

