// Top level 
function findAtypicalConservedSites(refsequence, alignment, feature) {
	
	var codingFeatures = { };
	getAllCodingFeatures(codingFeatures);
	//glue.log("INFO", "RESULT WAS ", codingFeatures);
	
    // Get alignment/constraining master reference pairs
	var alignmentsResult = glue.command(["list","alignment","-w","name = 'AL_Equine'"]);
	var listResult = alignmentsResult["listResult"];
	//glue.log("INFO", "RESULT WAS ", listResult);
	var alignmentsList = listResult["row"];

	// get coding feature codon list for each coding feature in each constraining reference
	var conRefCodingFeatureCodonLists = { };
    getConstrainingRefCodingFeatureCodonList(alignmentsList, codingFeatures, conRefCodingFeatureCodonLists);
	//glue.log("INFO", "RESULT WAS ", conRefCodingFeatureCodonLists);
		
	// get aa frequencies
	var aaFrequencies = { };
    getAaFrequencies(alignmentsList, codingFeatures, conRefCodingFeatureCodonLists, aaFrequencies);
	glue.log("INFO", "RESULT WAS ", aaFrequencies);
	die;
	
    // Compile list of conserved sites
    //getConservedCodonSites(alignmentsList);


}


// Get all coding features
function getAllCodingFeatures (codingFeatures) {		  
		  

	var resultMap = glue.command(["list", "feature","-w", "featureMetatags.name = 'CODES_AMINO_ACIDS'"]);
	var featureList = resultMap["listResult"];
	var codingFeatureList = featureList["row"];
	_.each(codingFeatureList,function(featureObj){

		//glue.log("INFO", "RESULT WAS ", featureObj);	
		var valueArray = featureObj["value"];
		var codingFeatureName = valueArray[0];
		//glue.log("INFO", "NAME WAS ", codingFeatureName)
		codingFeatures[codingFeatureName] = featureObj;
	
	});	

}


// Get codon list for each coding feature in each reference
function getConstrainingRefCodingFeatureCodonList (alignmentsList, codingFeatures, conRefCodingFeatureCodonLists) {		  
		  
    // Iterate through the reference sequences
	_.each(alignmentsList, function(alignmentObj) {

		//glue.log("INFO", "RESULT WAS ", alignmentObj);
		
		// Get reference from reference-alignment pair map
		var alignmentName = alignmentObj["value"][0];
		var parentName    = alignmentObj["value"][1];
		var referenceName = alignmentObj["value"][2];
		
		if (parentName) {
		
			//glue.log("INFO", "Alignment name result was:", alignmentName);
			//glue.log("INFO", "Reference name result was:", referenceName);
			   
			// list all features annotated in this reference 
			// GLUE COMMAND: reference [referenceName] list feature-location
			var refseqFeatures;
			var refseqFeatureLengths = { };
			glue.inMode("/reference/"+referenceName, function() {

				refseqFeatures = glue.tableToObjects(glue.command(["list", "feature-location"]));
				//glue.log("INFO", "RESULT WAS ", refseqFeatures);
	  
			});  

			// iterate through features
			_.each(refseqFeatures, function(featureObj) {
		  
				//glue.log("INFO", "RESULT WAS ", featureObj);		   
				var featureResults = {};
 
				// get feature name sequence
				var featureName = featureObj["feature.name"];
		   
				// If its a coding feature get the codon list
				if (codingFeatures[featureName]) {
			   
					//glue.log("INFO", "Coding feature name result was:", featureName);					  
					glue.inMode("/reference/"+referenceName+"/feature-location/"+featureName, function() {

						var aminoAcidResults = glue.tableToObjects(glue.command(["amino-acid"]));
						//glue.log("INFO", "RESULT WAS ", aminoAcidResults);
				   
						// Store results under reference -> feature
						if (conRefCodingFeatureCodonLists[referenceName]) {
					        
					        conRefCodingFeatureCodonLists[referenceName][featureName] = aminoAcidResults;				   
					   
						}
						else {
				   
							var referenceData = { };
							referenceData[featureName] = aminoAcidResults;
							conRefCodingFeatureCodonLists[referenceName] = referenceData;
				   
						}
	   
					});
   
				}

			});
	
		}
		
	});

}


// Get AA frequencies:
// for all alignments, for each coding feature in constrain reference
// get frequencies at all codon positions in all coding features
function getAaFrequencies (alignmentsList, codingFeatures, conRefCodingFeatureCodonLists, aaFrequencyResults) {		  
		  
    // Iterate through the reference sequences
	_.each(alignmentsList, function(alignmentObj) {

		//glue.log("INFO", "RESULT WAS ", alignmentObj);
		
		// Get reference from reference-alignment pair map
		var alignmentName = alignmentObj["value"][0];
		var referenceName = alignmentObj["value"][2];
		//glue.log("INFO", "Alignment name result was:", alignmentName);
		//glue.log("INFO", "Reference name result was:", referenceName);
				
		// list all features annotated in this reference 
		// GLUE COMMAND: reference [referenceName] list feature-location
		var refseqFeatures;
		var refseqFeatureLengths = { };
		glue.inMode("/reference/"+referenceName, function() {

			refseqFeatures = glue.tableToObjects(glue.command(["list", "feature-location"]));
			glue.log("INFO", "RESULT WAS ", refseqFeatures);
	   
		});  

		// iterate through features
		_.each(refseqFeatures, function(featureObj) {
		   
			//glue.log("INFO", "RESULT WAS ", featureObj);		   
			var featureResults = {};
  
			// get feature name sequence
			var featureName = featureObj["feature.name"];

			glue.log("INFO", "Feature name result was:", featureName);

			if (codingFeatures[featureName]) {
				
				glue.log("INFO", "Coding feature name result was:", featureName);
				
				// Get the codon list for this feature
				var aminoAcidResults = conRefCodingFeatureCodonLists[referenceName][featureName];
	            //glue.log("INFO", "RESULT WAS ", aminoAcidResults);
					
				// Iterate through all positions
				_.each(aminoAcidResults, function(codingPositionObj) {
						
					// Get frequency at each position
					//glue.log("INFO", "RESULT WAS ", codingPositionObj);
					var codonLabel = codingPositionObj["codonLabel"];
					var codonNts = codingPositionObj["codonNts"];
					var aminoAcid = codingPositionObj["aminoAcid"];

					glue.inMode("/alignment/"+alignmentName, function() {

					    var frequencyTable = glue.tableToObjects(glue.command(["amino-acid","frequency","-r",referenceName,"-f",featureName, "-l",codonLabel,codonLabel]));
						glue.log("INFO", "RESULT WAS ", frequencyTable);
						
						// capture frequency
						//aaFrequencyResults[referenceName][featureName][codonLabel] = frequencyTable;
					
					}); 
									
				});
									  	
			}		

		}); 
	
	});

}		  


// Get conserved codon sites
function getConservedCodonSites () {

}

