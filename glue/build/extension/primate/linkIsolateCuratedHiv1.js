// list the sequences in source ncbi-curated-subtype-a
var listSeqResultA = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-subtype-a'"]);

// extract from the result a list of sequence IDs.
var seqIdsA = glue.getTableColumn(listSeqResultA, "sequenceID");

// for each sequence ID
_.each(seqIdsA, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-subtype-a/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-subtype-a/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'A']);
		
	});

});

// list the sequences in source ncbi-curated-subtype-b
var listSeqResultB = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-subtype-b'"]);

// extract from the result a list of sequence IDs.
var seqIdsB = glue.getTableColumn(listSeqResultB, "sequenceID");

// for each sequence ID
_.each(seqIdsB, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-subtype-b/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-subtype-b/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'B']);
		
	});

});

// list the sequences in source ncbi-curated-subtype-c
var listSeqResultC = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-subtype-c'"]);

// extract from the result a list of sequence IDs.
var seqIdsC = glue.getTableColumn(listSeqResultC, "sequenceID");

// for each sequence ID
_.each(seqIdsC, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-subtype-c/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-subtype-c/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'C']);
		
	});

});

// list the sequences in source ncbi-curated-subtype-d
var listSeqResultD = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-subtype-d'"]);

// extract from the result a list of sequence IDs.
var seqIdsD = glue.getTableColumn(listSeqResultD, "sequenceID");

// for each sequence ID
_.each(seqIdsD, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-subtype-d/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-subtype-d/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'D']);
		
	});

});

// list the sequences in source ncbi-curated-subtype-f
var listSeqResultF = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-subtype-f1'"]);

// extract from the result a list of sequence IDs.
var seqIdsF = glue.getTableColumn(listSeqResultF, "sequenceID");

// for each sequence ID
_.each(seqIdsF, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-subtype-f1/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-subtype-f1/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'F1']);
		
	});

});

// list the sequences in source ncbi-curated-subtype-g
var listSeqResultG = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-subtype-g'"]);

// extract from the result a list of sequence IDs.
var seqIdsG = glue.getTableColumn(listSeqResultG, "sequenceID");

// for each sequence ID
_.each(seqIdsG, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-subtype-g/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-subtype-g/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'G']);
		
	});

});

// list the sequences in source ncbi-curated-subtype-crf01
var listSeqResultCrf01 = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-crf01'"]);

// extract from the result a list of sequence IDs.
var seqIdsCrf01 = glue.getTableColumn(listSeqResultCrf01, "sequenceID");

// for each sequence ID
_.each(seqIdsCrf01, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-crf01/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-crf01/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'CRF01']);
		
	});

});

// list the sequences in source ncbi-curated-subtype-crf02
var listSeqResultCrf02 = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-crf02'"]);

// extract from the result a list of sequence IDs.
var seqIdsCrf02 = glue.getTableColumn(listSeqResultCrf02, "sequenceID");

// for each sequence ID
_.each(seqIdsCrf02, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-crf02/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-crf02/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'M']);
		glue.command(["set", "field", "subtype", 'CRF02']);
		
	});

});

// list the sequences in source ncbi-curated-group-n
var listSeqResultHiv1n = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-group-n'"]);

// extract from the result a list of sequence IDs.
var seqIdsHiv1n = glue.getTableColumn(listSeqResultHiv1n, "sequenceID");

// for each sequence ID
_.each(seqIdsHiv1n, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-group-n/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-group-n/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'N']);
		glue.command(["set", "field", "subtype", 'NULL']);
		
	});

});

// list the sequences in source ncbi-curated-group-o
var listSeqResultHiv1o = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-group-o'"]);

// extract from the result a list of sequence IDs.
var seqIdsHiv1o = glue.getTableColumn(listSeqResultHiv1o, "sequenceID");

// for each sequence ID
_.each(seqIdsHiv1o, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-group-o/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-group-o/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'O']);
		glue.command(["set", "field", "subtype", 'NULL']);
		
	});

});

// list the sequences in source ncbi-curated-group-p
var listSeqResultHiv1p = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-group-p'"]);

// extract from the result a list of sequence IDs.
var seqIdsHiv1p = glue.getTableColumn(listSeqResultHiv1p, "sequenceID");

// for each sequence ID
_.each(seqIdsHiv1p, function(seqId) {
    
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-group-p/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });

	glue.inMode("sequence/ncbi-curated-group-p/"+seqId, function() {
		
		glue.command(["set", "field", "subgenus", 'Primate']);
		glue.command(["set", "field", "species", 'HIV-1']);
		glue.command(["set", "field", "clade", 'P']);
		glue.command(["set", "field", "subtype", 'NULL']);
		
	});

});


