
// Delete isolate table rows 
 var resultListRefseqs = glue.tableToObjects(glue.command(["list", "custom-table-row", "isolate_data"]));	 

 _.each(resultListRefseqs,function(resultObj) {

	var sequenceID = resultObj["id"];
	
    var resultListSrlv = glue.tableToObjects(glue.command(["list", "sequence", "sequenceID", "source.name", "-w", "source.name like '%-srlv%'"]));	 
    _.each(resultListSrlv,function(resultObj) {

	   var srlvSequenceID = resultObj["sequenceID"];
	   glue.log("INFO", "Got ID:", srlvSequenceID);
	   if (srlvSequenceID == sequenceID) {
   
		 glue.log("INFO", "Deleting isolate data table for:", sequenceID);
		 glue.command(["delete", "custom-table-row", "isolate_data", sequenceID]);				
	   	   
	   }	
	});
});

