<h1 id="skillSwap">Skill Swap</h1>
<h2 id="what-is-skillswap">What is Skill Swap?</h2>
<p>Skill Swap is an online web application in which users are able to log in to trade favors/skills and build their own skills up!</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Skill Swap requires Node.js 12.18+ to run.</p>
<h2 id="installing">Installing</h2>
<p>Skill Swap requires Node.js 12.18+ to run. Install the dependencies and devDependencies then start the server.</p>
<pre><code>npm install
</code></pre>
<h2 id="running-the-tests">Running The Tests</h2>
<p>To run front-end or back-end tests, simply run <code>npm t</code> in the terminal.</p>
<h3 id="get--apiusers">GET  <code>/api/users/</code></h3>
<pre><code>//req.body
    {
	    user_name: String
	    password: String
    }
    // res.body
    {
	   id: Integer
	    first_name: String
	    last_name: String
	    email: String
	    user_name: String
			zip_code: String
    }
</code></pre>
<h3 id="post-apiusers">POST <code>/api/users/</code></h3>
<pre><code>//req.body
{ 
	first_name: String
    last_name: String
    email: String
    password: String
    user_name: String
}
//res.body
{
    id: Integer
    first_name: String
    last_name: String
    email: String
    user_name: String
}
</code></pre>
<h3 id="patch-apiusers">PATCH <code>/api/users/</code></h3>
<pre><code> //req.body
{ 
    first_name: String
    last_name: String
    email: String
    password: String
    user_name: String
}
//res.body
{
    status: 204
}
</code></pre>
<h3 id="delete-apiusers">DELETE <code>/api/users/</code></h3>
<pre><code>     //req.body
{ 
    id: Integer
}
      //res.body
{
	 status: 204
}
</code></pre>


<h2 id="built-withh2">Built With</h2>
<p>
React<br>
Node<br>
Express<br>
JWT<br>
Mocha<br>
Chai<br>
Enzyme<br>

## Authors
Michael Oldacre-Sonali Najera Full Stack

## Acknowledgments</h2>
<p>
A great many thanks goes to All hackers ever</p>
<p></p>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTg4NzY3Nzg4XX0=
-->
