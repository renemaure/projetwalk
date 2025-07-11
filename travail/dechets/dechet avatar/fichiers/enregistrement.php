<div id ="enregistrement">

	<p class="gras t3">accès à votre avatar</p> 
	
	<p class="credit centrer t10">votre navigateur doit accepter les cookies, sinon il ne se passera rien!</p> 
		
	<form action="php/trait_index.php" method="post" id ="inscrip_index">	

		<input name="nom_ins" maxlength="40" type="text" value="votre pseudo" id = "nom" onFocus="javascript:this.value=''"> 

 		<input name="passe_ins" maxlength="20" type="text" value="Votre mot de passe" id = "passe" onFocus="javascript:this.value=''">  
 		
    	<input type="hidden" name="locat_ins" value ="index.php">
 
		<input type="submit"value="ok" >	
	
		<input type="button" value="non enregistré" onclick="window.location.href='index.php?util=fichiers/civil&cod=6'">
		  
	</form>
</div>	



	