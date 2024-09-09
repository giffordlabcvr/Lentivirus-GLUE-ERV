
// Get all the SRLV sequences
var srlvData = glue.tableToObjects(glue.command(["list", "sequence", "-s", "rec_blast_subtype", "sequenceID", "source.name", "genotype", "subtype", "rec_blast_subtype","-w", "species = 'srlv'"]));


// Iterate through results
_.each(srlvData, function(resultObj) {

	var sequenceID = resultObj["sequenceID"];
	var sourceName = resultObj["source.name"];	  
	var genotype = resultObj["genotype"];
	var subtype = resultObj["subtype"];
	var rec_blast_subtype = resultObj["rec_blast_subtype"];
		

	// update the sequence table with the results
	if (rec_blast_subtype) {

		var geno_sub_components = rec_blast_subtype.split("");
		var blast_genotype = geno_sub_components[0];
		var blast_subtype = geno_sub_components[1];

		if (genotype == null) {

			//glue.log("INFO", "Null genotype:", sequenceID);
			//glue.log("INFO", "genotype:", blast_genotype);
			glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
				glue.command(["set", "field", "genotype", blast_genotype]);
			});
	
		}
		if (subtype == null) {

			if (blast_subtype) {

				//glue.log("INFO", "Null subtype:", sequenceID);
				//glue.log("INFO", "subtype:", blast_subtype);
				glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
					glue.command(["set", "field", "subtype", blast_subtype]);
				});
				
			}
	
		}

	}
	 
});

