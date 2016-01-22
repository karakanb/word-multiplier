/*

The "multiplyWords" function takes three of the word groups as parameters. This script also generates different versions
of combination, which are included as "broadOrder", "phraseOrder", "exactOrder" and "bmmOrder", and these values came from
HTML chechboxes in this particular example. These combinations can be seen on "keywordmultiplier.net", in order to have a
better understanding. The function returns a string which is ready to be printed on screen.

*/

function multiplyWords(input1, input2, input3){
            var broadOrder  = $("#broad").is(":checked");
            var phraseOrder  = $("#phrase").is(":checked");
            var exactOrder  = $("#exact").is(":checked");
            var bmmOrder  = $("#bmm").is(":checked");
            var strArray1 = input1.split('\n'); //inputs have been splitted line by line.
            var strArray2 = input2.split('\n'); //inputs have been splitted line by line.
            var strArray3 = input3.split('\n'); //inputs have been splitted line by line.
            var result ='';
            
            for (i = 0; i < strArray1.length; i++) { 
                for(j = 0; j < strArray2.length; j++){
                    for(k = 0; k < strArray3.length; k++){
                        if(broadOrder == true){
                            result +=  strArray1[i] + ' ' + strArray2[j] + ' ' + strArray3[k] + '\n';
                        }
                        if(phraseOrder == true){
                            result += '"' + strArray1[i] + ' ' + strArray2[j] + ' ' + strArray3[k] +  '"' + '\n';
                        }
                        if(exactOrder == true){
                            result += '[' + strArray1[i] + ' ' + strArray2[j] + ' ' + strArray3[k] + ']' +'\n';
                        }
                        if(bmmOrder == true){
                            result += '+' + strArray1[i] + ' ' + '+' + strArray2[j] + ' ' + '+' + strArray3[k] + '\n';
                        }
                    }   
                }
            }
            return result;
          }
