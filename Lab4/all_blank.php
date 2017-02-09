<html><head>
	<title>All Blank etc.</title>
	<link rel="stylesheet" type="text/css" href="jack.css">
</head>
<body>
<?php
	$name = "Jack";
	if(isset($_GET['name'])){
		$name = $_GET['name'];
	}
	
	for($i = 0 ; $i < 200 ; ++$i){
		print "<p>All work and no play makes $name a dull person.</p>\n";
	}
	?>
	</body>
</html>


