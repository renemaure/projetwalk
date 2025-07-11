<div id ="suivit">
<?php include("php/recup_donne_avatar.php"); ?>

<p class="t10 l20"> <span class="gras">nom  de votre avatar: </span> <?php echo($lireinfo[1]); ?> </p>

<?php
if ($lireinfo[2] == 0)
{
?>
<p class="ab v15 l250"><a href="index.php?util=fichiers/etape1&cod=2">pour terminer votre avatar</a></p>
<?php
}
?>
</div>