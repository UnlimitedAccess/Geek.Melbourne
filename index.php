<html>
<head>
	<meta content="Geek.Melbourne" property="og:title" />
	<meta content="website" property="og:type" />
	<meta content="Crowd sourced community to help like minded geeks find all the unique and interesting activities around Melbourne." property="og:description" />
	<meta content="http://geek.melbourne/demo/images/fbprev.png" property="og:image" />      
	<meta content="http://geek.melbourne/demo/" property="og:url" />
	<link rel='stylesheet' href='lib/cupertino/jquery-ui.min.css' />
	<link rel='stylesheet' href='style.css' />
	<link href='lib/fullcalendar.css' rel='stylesheet' />
	<link href='lib/fullcalendar.print.css' rel='stylesheet' media='print' />
	<script src='lib/moment.min.js'></script>
	<script src='lib/jquery.min.js'></script>
	<script src='lib/fullcalendar.min.js'></script>
	<script type="text/javascript" language="javascript" src="geek.js"></script>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<title>Geek.Melbourne - Curated Melbourne</title>
</head>
<body onload="engineStart()">
	<div id="frame">
	<noscript>
		<div>
			<p>This website uses Javascript. Your browser either doesn't support Javascript or you have it
				turned off.
			</p>
			<p>To login please use a Javascript enabled browser.</p>
		</div>
	</noscript>
	<div id="site-header">
		<div id="site-nav"></div>
	</div>

	<div id="main">
		<div id='script-warning'>
		<code>php/get-events.php</code> must be running.
		</div>
		<div id='loading'>loading...</div>
	</div>

	<div id="site-footer">
		<div id="footer-nav"></div>
	</div>
	</div>
</body>
</html>