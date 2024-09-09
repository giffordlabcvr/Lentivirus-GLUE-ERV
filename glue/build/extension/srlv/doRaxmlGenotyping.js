  
var allResults = [];

glue.inMode("module/srlvMaxLikelihoodGenotyper", function(){

	 var genotyperResult = glue.command(["genotype","sequence","-w", "species = 'SRLV'"]);
	 glue.log("INFO", "Segment recogniser result was:", genotyperResult);  
	 doe;

     genotyperResult = genotyperResult["blastSequenceRecogniserResult"];     
     
     var tableRows = genotyperResult["row"];

	 _.each(tableRows, function(rowObj)  {

		var valueObj = rowObj["value"];
		var querySequenceId = valueObj[0];
		var recogniserLineage = valueObj[1];
		var direction = valueObj[2];

		var idElements = querySequenceId.split('/');
		var sourceName = idElements[0];
		var sequenceID = idElements[1];
	    glue.log("INFO", "Got value '"+recogniserLineage+" - "+direction+"' for sequence: '"+sequenceID+"'");
		
		var result = {};
		result["sourceName"] = sourceName;
		result["sequenceID"] = sequenceID;
		result["recogniserLineage"] = recogniserLineage;

        allResults.push(result);

 	 
	 });

});

//glue.log("INFO", "Genotyper results were:", allResults);
_.each(allResults, function(resultObj)  {

	 // update the sequence table with the results
	 
	 var sourceName = resultObj["sourceName"];	 
	 var sequenceID = resultObj["sequenceID"];	 
	 var recogniserLineage = resultObj["recogniserLineage"];
	 	 
	 glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
	 
	 	 if (recogniserLineage) {
		 	glue.command(["set", "field", "rec_subtype", recogniserLineage]);
 	 	 }
 	 
	 });
	 
});
