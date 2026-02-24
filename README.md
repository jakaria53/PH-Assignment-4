1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is:

*** getElementById("id")**

     Selects a single element

     Searches using the ID name

     Since ID is unique, it returns only one element

*** getElementsByClassName("class")**

    Selects elements by class name

     Returns multiple elements if they have the same class

    Returns an HTMLCollection

*** querySelector("css selector")**

Uses CSS selector format

Returns the first element that matches

Can select by id, class, or tag

**querySelectorAll("css selector")**

Also uses CSS selector format

Returns all elements that match the selector

Returns a NodeList


# 2️.How to create and insert a new element into the DOM?

In my project I did this inside renderInterview() and renderRejected().

Example from my code:

let div = document.createElement("div");
div.className = "job-card";

Here I created a new div.

Then I added content:

div.innerHTML = `
  <h2 class="name">${job.jobName}</h2>
`;

Then I inserted it into the page:

filteredSection.appendChild(div);

# 3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling -

Click
Event first goes to button
Then goes to parent
Then body
Then document
This is Event Bubbling. It means event goes from bottom to top.

Example: document.getElementById("parent").addEventListener("click", () => { console.log("Parent clicked"); });

document.getElementById("child").addEventListener("click", () => { console.log("Child clicked"); });

# 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation means —
Not setting a separate listener on the child element
Setting a listener on the parent
Then checking with event.target

# Why is it useful?

We don’t need to add separate event listeners to every child element.

It improves performance because we use only one event listener.

It works for dynamically created elements (elements added later using JavaScript).

It keeps the code cleaner and easier to manage

# 5.Difference between preventDefault() and stopPropagation()
* preventDefault()

It stops the default behavior of an element.

Example:
If I had a form:

<form>

Normally form reloads page when submitted.

If I use:

event.preventDefault();

It stops page reload.

* stopPropagation()

It stops event bubbling.

Example:
If I click button inside main,
and I use:

event.stopPropagation();

The event will NOT go up to parent.