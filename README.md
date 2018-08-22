# pays_preposition
Traduire le nom d'un pays avec le nom précédé de sa preposition : "au, en, à, à la, sans preposition"
Librairie réquis : jquery

utilisé pays_preposition en appelant la fonction parseCountry(DomSelection)
# exemple
<label id="mada">Madagascar</label>

après appel de parseCountry($("#mada")), le résultat sera "à Madagascar"

pays_preposition prend en compte les pays d'exception tels que la Cuba, La jamaîque, Madagascar
