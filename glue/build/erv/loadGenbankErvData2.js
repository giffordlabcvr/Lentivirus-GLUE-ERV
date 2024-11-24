var refconDataPath = "tabular/erv/erv-refseqs-side-data.tsv";
var source_name = 'ncbi-curated-erv';

// Load the refcon data and store relationships between locus and viral taxonomy
var ervRefseqResultMap = {};
get_refcon_data(ervRefseqResultMap, refconDataPath);
//glue.log("INFO", "RESULT WAS ", ervRefseqResultMap);


// Load EVE data from tab file 
var loadResult;
glue.inMode("module/lentiTabularUtility", function() {
	loadResult = glue.tableToObjects(glue.command(["load-tabular", "tabular/erv/erv-curated-side-data.tsv"]));
	// glue.log("INFO", "load result was:", loadResult);
});

_.each(loadResult, function(ervObj) {


	if (ervObj.empty_site != 'yes') { // Skip empty sites

		glue.inMode("custom-table-row/locus_data/"+ervObj.sequenceID, function() {
	
			//glue.log("INFO", "Entering locus data for sequence:", ervObj.sequenceID);

			//glue.command(["set", "field", "locus_name", ervObj.locus_name]);
			glue.command(["set", "field", "scaffold", ervObj.scaffold]);
			glue.command(["set", "field", "host_sci_name", ervObj.organism]);
			glue.command(["set", "field", "orientation", '+']);
			glue.command(["set", "field", "start", 1]);
			glue.command(["set", "field", "end", ervObj.sequence_length]);
			
			var locus_numeric_id = ervObj.locus_numeric_id;
			if (locus_numeric_id != 'NK') {
			
				glue.command(["set", "field", "locus_numeric_id", ervObj.locus_numeric_id]);
						
			}
		
		});
	
		// Does an alignment exist for this locus ID
		//glue.log("INFO", "Getting taxonomic data for sequence:", ervObj.sequenceID);

		// Get the taxonomy 
		var ervRefConObj = ervRefseqResultMap[ervObj.locus_numeric_id];
		//glue.log("INFO", "LOADED REFCON INFO ", ervRefConObj);
	
		glue.inMode("sequence/"+source_name+"/"+ervObj.sequenceID, function() {

			glue.command(["set", "field", "full_name", ervObj.name]);
			//glue.command(["set", "field", "length", ervObj.sequence_length]);
			glue.command(["set", "field", "species", ervObj.name]);			
		});
				
	}

});



// get a list of sequence IDs from a given source in an alignment
function get_refcon_data(resultMap, refconDataPath) {

  // Load EVE reference data from tab file 
  var loadResult;
  glue.inMode("module/lentiTabularUtility", function() {
	  loadResult = glue.tableToObjects(glue.command(["load-tabular", refconDataPath]));
	  // glue.log("INFO", "load result was:", loadResult);
  });

  _.each(loadResult, function(ervObj) {

	  var locus_numeric_id = ervObj.locus_numeric_id;
	  //glue.log("INFO", "Setting locus data for EVE reference:", ervObj.sequenceID);
	  resultMap[locus_numeric_id] = ervObj;
	
  });
  
}

