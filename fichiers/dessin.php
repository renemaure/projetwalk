<?php
    $repjs="../systeme/donnees/avatar.json";
	$json = file_get_contents($repjs);
	$des_avat = json_decode($json, true);
?>
<section id="zon_conex">
    <!-- <input type="hidden" id="max_option" value="<?php  echo $des_avat["rept"]["max"];?>"> -->
	<h3 class="titre_from">L'aparence de votre avatar</h3>
    <div class="creat_avatar">
        <div id ="nav_avatar">
            <ul>
                <?php
                    for ($op=3; $op<=$des_avat["rept"]["max"] ; $op++) { 
                      echo"<li class=\"opt_des\" value=\"".$op."\">".$des_avat["rept"]["txt".$op]."</li>"; 
                    }
                ?>
            </ul>
        </div>
        <div id ="zone_img_avatar">
        </div>
        <div id ="couleur">
            <table border=0 summary="">
            <?php
                $col_coul = 1;
                echo"<tr>";
                for ($ph = 1; $ph<=$des_avat["corps"]["nbr_corps"]; $ph++)
                { 
                    if($col_coul == $des_avat["corps"]["col_table"]){
                        echo"</tr><tr>";
                        $col_coul = 1;
                    }
                    echo"<td class=\"carre\" value = \"".$ph."\" style=\"background:#".$des_avat["corps"]["coul_corps"]["coul".$ph]."\"></td>";
                    $col_coul ++;
                }
            ?>
            </table>
        </div>
    </div>
</section>
<section class="separ_monde"> </section>
	<section id="zon_enreg"> 
    <?php
    $indice = rand(1, $des_avat["rept"]["max"]);
    // include("corps.php");
    ?>

	</section>
</section>