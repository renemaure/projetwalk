

 <table id="avatar_table">
        <thead>
          <tr>
            		<th class="caret"></th>
					 <th class="centrer">ID</th>
					 <th>Nom de l'avatar</th>
					 <th>final création</th>
					 <th>image définie</th>
					 <th>physique</th>
					 <th>Intellect</th>
					 <th>Charisme</th>
					 <th>Pwalk</th>
					 <th>fin tirage</th>
<!-- 					 <th></th>
					 <th></th>
					 <th></th> -->
			</tr>
        </thead>
        <tbody>
<?php  	while($data = mysql_fetch_assoc($resultat))
		{
?>
		    <tr class="severity5">
					 <td class="caret"</td>
					 <td class="tdnum"><?php echo($data["id"]); ?></td>
					 <td><?php echo($data["nom"]); ?></td>
					 <td><?php echo($data["final"]); ?></td>
					 <td><?php echo($data["image"]); ?></td>
					 <td class="tdnum"><?php echo($data["physique"]); ?></td>
					 <td><?php echo($data["intellect"]); ?></td>
					 <td><?php echo($data["charisme"]); ?></td>
					 <td><?php echo($data["pwalk"]); ?></td>
					 <td><?php echo($data["fincaract"]); ?></td>
			</tr>
	<?php } ?>
		</tbody>
</table>
	
</div>