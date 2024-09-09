
var allResults = [];

glue.inMode("module/blastGenotyperSrlv", function(){

	 //var blastRecogniserResult = glue.command(["recognise","sequence","-w", "sequenceID = 'KP975033'"]);
	 var blastRecogniserResult = glue.command(["recognise","sequence","-a"]);
	 glue.log("INFO", "Result was:", blastRecogniserResult);

     recogniserResult = blastRecogniserResult["blastSequenceRecogniserResult"];


     // Iterate through rows updating rec_segment field   
     var tableRows = recogniserResult["row"];

	 _.each(tableRows, function(rowObj)  {

		var valueObj = rowObj["value"];
		var querySequenceId = valueObj[0];
		var recogniserLineage = valueObj[1];
		var direction = valueObj[2];

		var idElements = querySequenceId.split('/');
		var sourceName = idElements[0];
		var sequenceID = idElements[1];
	    glue.log("INFO", "Got subtype '"+recogniserLineage+"' for sequence: '"+sequenceID+"'");
		
		var result = {};
		result["sourceName"] = sourceName;
		result["sequenceID"] = sequenceID;
		result["recogniserLineage"] = recogniserLineage;

        allResults.push(result);

 	 
	 });

});


//glue.log("INFO", "Result was:", allResults);
_.each(allResults, function(resultObj)  {

	 // update the sequence table with the results
	 
	 var sourceName = resultObj["sourceName"];	 
	 var sequenceID = resultObj["sequenceID"];	 
	 var recogniserLineage = resultObj["recogniserLineage"];
	 	 
	 glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
	 
	 	 if (recogniserLineage) {
		 	glue.command(["set", "field", "rec_blast_subtype", recogniserLineage]);
 	 	 }
 	 
	 });
	 
});

