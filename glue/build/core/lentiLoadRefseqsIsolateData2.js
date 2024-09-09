// Load ERV data from tab file 
var loadResult;
glue.inMode("module/lentiTabularUtility", function() {
	loadResult = glue.tableToObjects(glue.command(["load-tabular", "tabular/core/lenti-core-reference-data.tsv"]));
	//glue.log("INFO", "load result was:", loadResult);
});


_.each(loadResult, function(refSeqObj) {

    //glue.log("INFO", "refSeqObj was:", refSeqObj);
	glue.inMode("custom-table-row/isolate_data/"+refSeqObj.sequenceID, function() {
	
		glue.command(["set", "field", "host_sci_name", refSeqObj.host_sci_name]);
		glue.command(["set", "field", "host_common_name", refSeqObj.host_common_name]);
		glue.command(["set", "field", "country", refSeqObj.country]);
		glue.command(["set", "field", "isolate", refSeqObj.isolate]);

	});

	glue.inMode("sequence/ncbi-refseqs-core/"+refSeqObj.sequenceID, function() {
	
		glue.command(["set", "field", "species", refSeqObj.name]);
		glue.command(["set", "field", "full_name", refSeqObj.full_name]);
		glue.command(["set", "field", "subgenus", refSeqObj.subgenus]);
		
		if (refSeqObj.clade) {
			glue.command(["set", "field", "clade", refSeqObj.clade]);
		}
		if (refSeqObj.subtype) {
			glue.command(["set", "field", "subtype", refSeqObj.subtype]);	
		}
		if (refSeqObj.genotype) {
			glue.command(["set", "field", "genotype", refSeqObj.genotype]);
		}
		
	});

});
