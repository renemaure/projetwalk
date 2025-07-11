<?php   $tabblog = file("bin/maxblog.txt");  ?>
  
<script type="text/javascript">
  
var urla = "<?php echo(trim($tabblog[1])); ?>.php"; 
  
<?php if (isset($_COOKIE['nom'])) {	
 		
	 include ("recup_donne_avatar.php"); ?> 
  
var nmavt = "<?php echo($lireinfo[1]); ?>";

<?php } ?>

var elemid = "<?php echo(trim($tabblog[3])); ?>";

var avtpl = <?php echo($lireinfo[0]); ?>;

 </SCRIPT>
  


