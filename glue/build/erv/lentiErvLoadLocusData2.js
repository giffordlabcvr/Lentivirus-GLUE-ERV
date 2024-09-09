// Load GenBank ERV data from tab file 
var loadResult;
glue.inMode("module/lentiTabularUtility", function() {
	loadResult = glue.tableToObjects(glue.command(["load-tabular", "tabular/erv/erv-side-data.tsv"]));
	//glue.log("INFO", "load result was:", loadResult);
});

_.each(loadResult, function(ervObj) {

	glue.inMode("custom-table-row/locus_data/"+ervObj.sequenceID, function() {
	
	
		glue.command(["set", "field", "scaffold", ervObj.scaffold]);
		glue.command(["set", "field", "start", ervObj.extract_start]);
		glue.command(["set", "field", "end", ervObj.extract_end]);
		glue.command(["set", "field", "orientation", ervObj.orientation]);
		glue.command(["set", "field", "locus_numeric_id", ervObj.locus_numeric_id]);
		glue.command(["set", "field", "structure", ervObj.locus_structure]);
		glue.command(["set", "field", "host_sci_name", ervObj.organism]);
		
	});

	glue.inMode("sequence/fasta-digs-erv/"+ervObj.sequenceID, function() {
	
		glue.command(["set", "field", "name", ervObj.name]);
		glue.command(["set", "field", "full_name", ervObj.sequenceID]);
		glue.command(["set", "field", "species", ervObj.name]);
		glue.command(["set", "field", "length", ervObj.sequence_length]);
		
	});
	
});
