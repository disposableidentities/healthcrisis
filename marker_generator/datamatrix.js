class Matrix
{
    constructor(rows,cols,fill)
    {
        this.cols=cols;
        this.rows=rows;
        this.data = '';
        if(typeof fill==='undefined'){
            fill='.';
        }
        for(var i = 0; i < (rows*cols);i++){
            this.data += fill;
        } 
    }
    toString()
    {
	   var reg = new RegExp(".{1,"+this.cols+"}","g");
	   return (this.data.match(reg).join("\n"));
    }

    log()
    {
        var reg = new RegExp(".{1,"+this.cols+"}","g");
        console.log(this.data.match(reg).join("\n")+"\n");
    }
    
    set(row,col,v){
        var pos = row*this.rows + col;
        this.data = this.data.substr(0, pos) + v + this.data.substr(pos + 1);
    }

    get(row,col){
        var pos = row*this.rows + col;
        var c = this.data.substr(pos,1);
        if (c==='.'){return '';}
        return c;
    }

    assigned(row,col){
    //	console.log('assigned '+row+' '+col+': '+ (this.get(row,col)===''?'Y':'N'));
        return this.get(row,col)!=='';
    }
}
 

module.exports = class Datamatrix
{
    constructor() 
    {
     
        this.encoding = [
        '101010011', '101011001', '101001011', '110010101',
        '101101001', '110101001', '100101011', '100101101',
        '100110101', '110100101', '101001101', '101100101',
        '1101011011', '1101101011', '1101101101', '1011011011',
        '1011001001', '1010010011', '1001001011', '1010011001'
        ];
        
          this.lengthRows = [
            10, 12, 14, 16, 18, 20, 22, 24, 26,  // 24 squares et 6 rectangular
            32, 36, 40, 44, 48, 52, 64, 72, 80,  88, 96, 104, 120, 132, 144,
            8, 8, 12, 12, 16, 16];

         this.lengthCols = [
                                10, 12, 14, 16, 18, 20, 22, 24, 26,  // Number of columns for the entire datamatrix
                                32, 36, 40, 44, 48, 52, 64, 72, 80, 88, 96, 104, 120, 132, 144,
                                18, 32, 26, 36, 36, 48];
         this.mappingRows = [
                                8, 10, 12, 14, 16, 18, 20, 22, 24,  // Number of rows for the mapping matrix
                                28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96, 108, 120, 132,
                                6, 6, 10, 10, 14, 14];
         this.mappingCols = [
                                8, 10, 12, 14, 16, 18, 20, 22, 24,  // Number of columns for the mapping matrix
                                28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96, 108, 120, 132,
                                16, 28, 24, 32, 32, 44];
         this.dataCWCount = [
                                3, 5, 8, 12,  18,  22,  30,  36,  // Number of data codewords for the datamatrix
                                44, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 
                                1304, 1558, 5, 10, 16, 22, 32, 49];
         this.solomonCWCount = [
                                5, 7, 10, 12, 14, 18, 20, 24, 28, // Number of Reed-Solomon codewords for the datamatrix
                                36, 42, 48, 56, 68, 84, 112, 144, 192, 224, 272, 336, 408, 496, 620,
                                7, 11, 14, 18, 24, 28];
         this.dataRegionRows = [
                                8, 10, 12, 14, 16, 18, 20, 22, // Number of rows per region
                                24, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 18, 20, 22,
                                6,  6, 10, 10, 14, 14];
         this.dataRegionCols = [
                                8, 10, 12, 14, 16, 18, 20, 22, // Number of columns per region
                                24, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 18, 20, 22,
                                16, 14, 24, 16, 16, 22];
         this.regionRows = [
                                1, 1, 1, 1, 1, 1, 1, 1, // Number of regions per row
                                1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 6, 6, 6,
                                1, 1, 1, 1, 1, 1];
         this.regionCols = [
                                1, 1, 1, 1, 1, 1, 1, 1, // Number of regions per column
                                1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 6, 6, 6,
                                1, 2, 1, 2, 2, 2];
         this.interleavedBlocks = [
                                1, 1, 1, 1, 1, 1, 1, 1, // Number of blocks
                                1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 6, 6, 8, 8,
                                1, 1, 1, 1, 1, 1];
         this.logTab = [
                                -255, 255, 1, 240, 2, 225, 241, 53, 3,  // Table of log for the Galois field
                                38, 226, 133, 242, 43, 54, 210, 4, 195, 39, 114, 227, 106, 134, 28, 
                                243, 140, 44, 23, 55, 118, 211, 234, 5, 219, 196, 96, 40, 222, 115, 
                                103, 228, 78, 107, 125, 135, 8, 29, 162, 244, 186, 141, 180, 45, 99, 
                                24, 49, 56, 13, 119, 153, 212, 199, 235, 91, 6, 76, 220, 217, 197, 
                                11, 97, 184, 41, 36, 223, 253, 116, 138, 104, 193, 229, 86, 79, 171, 
                                108, 165, 126, 145, 136, 34, 9, 74, 30, 32, 163, 84, 245, 173, 187, 
                                204, 142, 81, 181, 190, 46, 88, 100, 159, 25, 231, 50, 207, 57, 147, 
                                14, 67, 120, 128, 154, 248, 213, 167, 200, 63, 236, 110, 92, 176, 7, 
                                161, 77, 124, 221, 102, 218, 95, 198, 90, 12, 152, 98, 48, 185, 179, 
                                42, 209, 37, 132, 224, 52, 254, 239, 117, 233, 139, 22, 105, 27, 194, 
                                113, 230, 206, 87, 158, 80, 189, 172, 203, 109, 175, 166, 62, 127, 
                                247, 146, 66, 137, 192, 35, 252, 10, 183, 75, 216, 31, 83, 33, 73, 
                                164, 144, 85, 170, 246, 65, 174, 61, 188, 202, 205, 157, 143, 169, 82, 
                                72, 182, 215, 191, 251, 47, 178, 89, 151, 101, 94, 160, 123, 26, 112, 
                                232, 21, 51, 238, 208, 131, 58, 69, 148, 18, 15, 16, 68, 17, 121, 149, 
                                129, 19, 155, 59, 249, 70, 214, 250, 168, 71, 201, 156, 64, 60, 237, 
                                130, 111, 20, 93, 122, 177, 150];
         this.aLogTab = [
                                1, 2, 4, 8, 16, 32, 64, 128, 45, 90, // Table of aLog for the Galois field
                                180, 69, 138, 57, 114, 228, 229, 231, 227, 235, 251, 219, 155, 27, 54, 
                                108, 216, 157, 23, 46, 92, 184, 93, 186, 89, 178, 73, 146, 9, 18, 36, 
                                72, 144, 13, 26, 52, 104, 208, 141, 55, 110, 220, 149, 7, 14, 28, 56, 
                                112, 224, 237, 247, 195, 171, 123, 246, 193, 175, 115, 230, 225, 239, 
                                243, 203, 187, 91, 182, 65, 130, 41, 82, 164, 101, 202, 185, 95, 190, 
                                81, 162, 105, 210, 137, 63, 126, 252, 213, 135, 35, 70, 140, 53, 106, 
                                212, 133, 39, 78, 156, 21, 42, 84, 168, 125, 250, 217, 159, 19, 38, 76, 
                                152, 29, 58, 116, 232, 253, 215, 131, 43, 86, 172, 117, 234, 249, 223, 
                                147, 11, 22, 44, 88, 176, 77, 154, 25, 50, 100, 200, 189, 87, 174, 113, 
                                226, 233, 255, 211, 139, 59, 118, 236, 245, 199, 163, 107, 214, 129, 
                                47, 94, 188, 85, 170, 121, 242, 201, 191, 83, 166, 97, 194, 169, 127, 
                                254, 209, 143, 51, 102, 204, 181, 71, 142, 49, 98, 196, 165, 103, 206, 
                                177, 79, 158, 17, 34, 68, 136, 61, 122, 244, 197, 167, 99, 198, 161, 
                                111, 222, 145, 15, 30, 60, 120, 240, 205, 183, 67, 134, 33, 66, 132, 
                                37, 74, 148, 5, 10, 20, 40, 80, 160, 109, 218, 153, 31, 62, 124, 248, 
                                221, 151, 3, 6, 12, 24, 48, 96, 192, 173, 119, 238, 241, 207, 179, 75, 
                                150, 1];
    }
    
       
    array_fill(start,len,value)
    {
	   var res = [];
	   for(var i=start;i<len;i++){
		  res[i]=value;
	   }
	   return res;
    }
    
     getIndex(text, rectangular)
    {
        var dataCodeWords = this.encodeDataCodeWordsASCII(text); // Code the text in the ASCII mode
        var dataCWCount = dataCodeWords.length;
        return this.selectIndex(dataCWCount, rectangular); // Select the index for the data tables
    }
    
    getDigit(text, rectangular, index)
    {
	var dataCodeWords = this.encodeDataCodeWordsASCII(text); // Code the text in the ASCII mode
	var dataCWCount = dataCodeWords.length;
	//var index = this.selectIndex(dataCWCount, rectangular); // Select the index for the data tables
	var totalDataCWCount = this.dataCWCount[index]; // Number of data CW
	var solomonCWCount = this.solomonCWCount[index]; // Number of Reed Solomon CW 
	var totalCWCount = totalDataCWCount + solomonCWCount; // Number of CW      
	var rowsTotal = this.lengthRows[index]; // Size of symbol
	var colsTotal = this.lengthCols[index];
	var rowsRegion = this.regionRows[index]; // Number of region
	var colsRegion = this.regionCols[index];
	var rowsRegionCW = this.dataRegionRows[index];
	var colsRegionCW = this.dataRegionCols[index];
	var rowsLengthMatrice = rowsTotal-2*rowsRegion; // Size of matrice data
	var colsLengthMatrice = colsTotal-2*colsRegion;
	var blocks = this.interleavedBlocks[index];  // Number of Reed Solomon blocks
	var errorBlocks = solomonCWCount / blocks; 
	var dataBlocks = totalDataCWCount / blocks;
	//console.log(dataCodeWords);
	dataCodeWords = this.addPadCW(dataCodeWords, dataCWCount, totalDataCWCount); // Add codewords pads
	//console.log(dataCodeWords);
	
	var g = this.calculSolFactorTable(errorBlocks); // Calculate correction coefficients
	
	dataCodeWords = this.addReedSolomonCW(solomonCWCount, g, totalDataCWCount, dataCodeWords, blocks); // Add Reed Solomon codewords
	//console.log(dataCodeWords);
	
	var codeWordsBits = []; // Calculte bits from codewords
	for (var i=0; i<totalCWCount; i++){
		codeWordsBits[i] = this.getBits(dataCodeWords[i]);
	}
	
	//var datamatrix = array_fill(0, colsLengthMatrice, []);
	//var assigned = array_fill(0, colsLengthMatrice, []);
	
	var datamatrix = new Matrix(rowsLengthMatrice,colsLengthMatrice);
	
	// Add the bottom-right corner if needed
	if ( ((rowsLengthMatrice * colsLengthMatrice) % 8) == 4) {
		datamatrix.set(rowsLengthMatrice-2,colsLengthMatrice-2,1);
		datamatrix.set(rowsLengthMatrice-1,colsLengthMatrice-1,1);
		datamatrix.set(rowsLengthMatrice-1,colsLengthMatrice-2,0);
		datamatrix.set(rowsLengthMatrice-2,colsLengthMatrice-1,0);
	}
	
	// Put the codewords into the matrix
	var datamatrix = this.next(0,rowsLengthMatrice,colsLengthMatrice, codeWordsBits, datamatrix);
	
	// Add the finder pattern
	datamatrix = this.addFinderPattern(datamatrix, rowsRegion, colsRegion, rowsRegionCW, colsRegionCW);
	return datamatrix;
    }
 
    
  
    
    
    champGaloisMult(a, b){  // MULTIPLICATION IN GALOIS FIELD GF(2^8)
        if(!a || !b) return 0;
        return this.aLogTab[(this.logTab[a] + this.logTab[b]) % 255];
    }
    champGaloisDoub(a, b){  // THE OPERATION a * 2^b IN GALOIS FIELD GF(2^8)
        if (!a) return 0;
        if (!b) return a;
        return this.aLogTab[(this.logTab[a] + b) % 255];
    }
    champGaloisSum(a, b){ // SUM IN GALOIS FIELD GF(2^8)
        return a ^ b;
    }
    selectIndex(dataCodeWordsCount, rectangular){ // CHOOSE THE GOOD INDEX FOR TABLES
        if ((dataCodeWordsCount<1 || dataCodeWordsCount>1558) && !rectangular) return -1;
        if ((dataCodeWordsCount<1 || dataCodeWordsCount>49) && rectangular)  return -1;

        var n = rectangular ? 24 : 0;

        while (this.dataCWCount[n] < dataCodeWordsCount) n++;
        return n;
    }
    encodeDataCodeWordsASCII(text) {
        var dataCodeWords = [];
        var n = 0;
        var len = text.length;
        var reg = /[0-9]/;
        for (var i=0; i<len; i++){
            var c = text.charCodeAt(i);
            if (c > 127) {  
                dataCodeWords[n] = 235;
                c -= 127;
                n++;
            } else if ((c>=48 && c<=57) && (i+1<len) && (reg.test(text[i+1]))) {
                c = ((c - 48) * 10) + (text[i+1]*1); // convert to int!
                c += 130;
                i++;
            } else{ 
                c++; 
            }
            dataCodeWords[n] = c;
            n++;
        }
        return dataCodeWords;
    }
    // addPadCW
    addPadCW(tab, from, to){    
        if (from >= to) return tab;
        tab[from] = 129;
        for (var i=from+1; i<to; i++){
            var r = ((149 * (i+1)) % 253) + 1;
            tab[i] = (129 + r) % 254;
        }
        return tab;
    }
   calculSolFactorTable(solomonCWCount){ // CALCULATE THE REED SOLOMON FACTORS
        var g = this.array_fill(0, solomonCWCount+1, 1);
        for(var i = 1; i <= solomonCWCount; i++) {
            for(var j = i - 1; j >= 0; j--) {
                g[j] = this.champGaloisDoub(g[j], i);  
                if(j > 0) g[j] = this.champGaloisSum(g[j], g[j-1]);
            }
        }
        return g;
    }
    addReedSolomonCW(nSolomonCW, coeffTab, nDataCW, dataTab, blocks){ // Add the Reed Solomon codewords
        var temp = 0;
        var j=0;
        var i=0;
        var errorBlocks = nSolomonCW / blocks;
        var correctionCW = [];

        for(var k = 0; k < blocks; k++) {      
            for (i; i < errorBlocks; i++) correctionCW[i] = 0;

            for (i=k; i<nDataCW; i+=blocks){ 
                //if (typeof dataTab[i]==='undefined'){dataTab[i]=0;}
                temp = this.champGaloisSum(dataTab[i], correctionCW[errorBlocks-1]);
                for (j=errorBlocks-1; j>=0; j--){     
                    if ( !temp ) {
                        correctionCW[j] = 0;
                    } else { 
                        correctionCW[j] = this.champGaloisMult(temp, coeffTab[j]);
                    }
                    if (j>0) correctionCW[j] = this.champGaloisSum(correctionCW[j-1], correctionCW[j]);
                }
            }
            // Renversement des blocs calcules
            j = nDataCW + k;
            for (i=errorBlocks-1; i>=0; i--){
                dataTab[j] = correctionCW[i];
                j=j+blocks;
            }
        }
        return dataTab;
    }
    getBits(entier)
    { // Transform integer to tab of bits
        var bits = [];
        var i = 0;
        for (i=0; i<8; i++){
            bits[i] = entier & (128 >> i) ? 1 : 0;
        }
        return bits;
    }
    next(etape, totalRows, totalCols, codeWordsBits, datamatrix){ // Place codewords into the matrix
        var chr = 0; // Place of the 8st bit from the first character to [4][0]
        var row = 4;
        var col = 0;
        do {
            // Check for a special case of corner
            if((row == totalRows) && (col == 0)){
                datamatrix = this.patternShapeSpecial1(datamatrix, codeWordsBits[chr], totalRows, totalCols);  
                chr++;
            } else if((etape<3) && (row == totalRows-2) && (col == 0) && (totalCols%4 != 0)){
                datamatrix = this.patternShapeSpecial2(datamatrix, codeWordsBits[chr], totalRows, totalCols);
                chr++;
            } else if((row == totalRows-2) && (col == 0) && (totalCols%8 == 4)){
                datamatrix = this.patternShapeSpecial3(datamatrix, codeWordsBits[chr], totalRows, totalCols);
                chr++;
            }
            else if((row == totalRows+4) && (col == 2) && (totalCols%8 == 0)){
                datamatrix = this.patternShapeSpecial4(datamatrix, codeWordsBits[chr], totalRows, totalCols);
                chr++;
            }

            // Go up and right in the datamatrix
            do {
                if(	(row < totalRows) && (col >= 0) && 
                      (!datamatrix.assigned(row,col)) ) {
                    datamatrix = this.patternShapeStandard(datamatrix, codeWordsBits[chr], row, col, totalRows, totalCols);
                    chr++;
                }
                row -= 2;
                col += 2;      
            } while ((row >= 0) && (col < totalCols));
            row += 1;
            col += 3;

            // Go down and left in the datamatrix
            do {
                if(	(row >= 0) && (col < totalCols) && 
                      (!datamatrix.assigned(row,col))){
                    datamatrix = this.patternShapeStandard(datamatrix, codeWordsBits[chr], row, col, totalRows, totalCols);
                    chr++;
                }
                row += 2;
                col -= 2;
            } while ((row < totalRows) && (col >=0));
            row += 3;
            col += 1;
        } while ((row < totalRows) || (col < totalCols));
        return datamatrix
    }
    patternShapeStandard(datamatrix, bits, row, col, totalRows, totalCols)
    { // Place bits in the matrix (standard or special case)
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[0], row-2, col-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[1], row-2, col-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[2], row-1, col-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[3], row-1, col-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[4], row-1, col, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[5], row, col-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[6], row, col-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[7], row, col, totalRows, totalCols);
        return datamatrix
    }  
    patternShapeSpecial1(datamatrix, bits, totalRows, totalCols ){
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[0], totalRows-1,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[1], totalRows-1,  1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[2], totalRows-1,  2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[3], 0, totalCols-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[4], 0, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[5], 1, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[6], 2, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[7], 3, totalCols-1, totalRows, totalCols);
        return datamatrix;
    }
    patternShapeSpecial2(datamatrix, bits, totalRows, totalCols ){
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[0], totalRows-3,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[1], totalRows-2,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[2], totalRows-1,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[3], 0, totalCols-4, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[4], 0, totalCols-3, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[5], 0, totalCols-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[6], 0, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[7], 1, totalCols-1, totalRows, totalCols);
        return datamatrix;
    }
    patternShapeSpecial3(datamatrix, bits, totalRows, totalCols ){
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[0], totalRows-3,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[1], totalRows-2,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[2], totalRows-1,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[3], 0, totalCols-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[4], 0, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[5], 1, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[6], 2, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[7], 3, totalCols-1, totalRows, totalCols);
        return datamatrix;
    }
    patternShapeSpecial4(datamatrix, bits, totalRows, totalCols ){
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[0], totalRows-1,  0, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[1], totalRows-1, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[2], 0, totalCols-3, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[3], 0, totalCols-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[4], 0, totalCols-1, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[5], 1, totalCols-3, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[6], 1, totalCols-2, totalRows, totalCols);
        datamatrix = this.placeBitInDatamatrix(datamatrix, bits[7], 1, totalCols-1, totalRows, totalCols);
        return datamatrix;
    }

    placeBitInDatamatrix(datamatrix, bit, row, col, totalRows, totalCols){ // Put a bit into the matrix
        if (row < 0) {
            row += totalRows;
            col += 4 - ((totalRows+4)%8);
        }
        if (col < 0) {
            col += totalCols;
            row += 4 - ((totalCols+4)%8);
        }
        if ( !datamatrix.assigned(row,col) ) {
            datamatrix.set(row,col,bit);
        }
        return datamatrix;

    }
    
    addFinderPattern(datamatrix, rowsRegion, colsRegion, rowsRegionCW, colsRegionCW){ // Add the finder pattern
        var totalRowsCW = (rowsRegionCW+2) * rowsRegion;
        var totalColsCW = (colsRegionCW+2) * colsRegion;
        var i=0;
        var j=0;
        var datamatrixTemp = new Matrix(totalRowsCW+2,totalColsCW+2,0);
        //datamatrixTemp[0] = array_fill(0, totalColsCW+2, 0);

        for (i=0; i<totalRowsCW; i++){
            //datamatrixTemp[i+1] = [];
            //datamatrixTemp[i+1][0] = 0;
            datamatrixTemp.set(i+1,0,0);
            datamatrixTemp.set(i+1,totalColsCW+1,0);
            for (j=0;j<totalColsCW; j++){
                if (i%(rowsRegionCW+2) == 0){
                    if (j%2 == 0){
                        datamatrixTemp.set(i+1,j+1,1);
                    } else { 
                        datamatrixTemp.set(i+1,j+1,0);
                    }
                } else if (i%(rowsRegionCW+2) == rowsRegionCW+1){ 
                    datamatrixTemp.set(i+1,j+1,1);
                } else if (j%(colsRegionCW+2) == colsRegionCW+1){
                    if (i%2 == 0){
                        datamatrixTemp.set(i+1,j+1,0);
                    } else {
                        datamatrixTemp.set(i+1,j+1,1);
                    }
                } else if (j%(colsRegionCW+2) == 0){ 
                    datamatrixTemp.set(i+1,j+1,1);
                } else{
                    datamatrixTemp.set(i+1,j+1,0);
                    datamatrixTemp.set(i+1,j+1,datamatrix.get(i-1-(2*(Math.floor(i/(rowsRegionCW+2)))),j-1-(2*(Math.floor(j/(colsRegionCW+2)))))); // todo : parseInt => ?
                }
            }
        }
        //datamatrixTemp[totalRowsCW+1] = [];
        for (j=0; j<totalColsCW+2; j++){
            datamatrixTemp.set(totalRowsCW+1,j,0);
        }
        return datamatrixTemp;
    }
    


}


