exports.init = function(SARAH,config) {
  var path = require('path');
  var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
  var process=JarvisIANircmd + ' filldelete "' + dir + '\\minuteur\\memoire\\*.*"'﻿
  var exec = require('child_process').exec;                       
  exec(process)
console.log('mis à zéro des minuteurs')
}

exports.action = function(data){

var path = require('path');var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');var exec = require('child_process').exec; 

var reponse1=JarvisIA.reco
var rgxp = /minuteur (.+)/i; var reponse1 = reponse1.match(rgxp)

try{
 var reponse1=reponse1[1]; var reponse1=" "+reponse1+" ";
}
catch(err){reponse1=""}
console.log('la reponse : '+reponse1)

//mise en forme
var reponse=reponse1.replace(new RegExp(' une ', 'ig')," 01 ")//protection une par 01
var reponse=reponse.replace(new RegExp(' trente ', 'ig')," 30 ")//protection une par 01
var reponse=reponse.replace(new RegExp(" un quart d'heure ", 'ig')," 1500 ")//protection 
var reponse=reponse.replace(new RegExp(" trois quart d'heure ", 'ig')," 4500 ")//protection 
var reponse=reponse.replace(new RegExp(" une demi-heure ", 'ig'),"3000 ")//protection 
var reponse=reponse.replace(new RegExp(' 2 ', 'ig')," 02 ")
var reponse=reponse.replace(new RegExp(' 3 ', 'ig')," 03 ")
var reponse=reponse.replace(new RegExp(' 4 ', 'ig')," 04 ")
var reponse=reponse.replace(new RegExp(' 5 ', 'ig')," 05 ")
var reponse=reponse.replace(new RegExp(' 6 ', 'ig')," 06 ")
var reponse=reponse.replace(new RegExp(' 7 ', 'ig')," 07 ")
var reponse=reponse.replace(new RegExp(' 8 ', 'ig')," 08 ")
var reponse=reponse.replace(new RegExp(' 9 ', 'ig')," 09 ")
var reponse1=reponse
console.log(reponse)

//on enleve les mots on garde les chiffres
var reponse=reponse.replace(new RegExp('[^0-9]', 'ig'),"")
 console.log(reponse)
 
//si vide alors lecture
 if(reponse==""){

            try{
            var files = fs.readdirSync(path.resolve('%CD%', './plugins/minuteur/memoire').replace('\\%CD%', ''),"utf8")
            var file=files
            var files = JSON.stringify(files)
            console.log(files)

                if(file.length==0){
                    JarvisIASpeech("pas de minuteur|tu est sur que tu avais programmé un minuteur ?|j'ai rien en mémoire")
                }  

                    for (count=0;count<file.length;count++){
                        
                         var  file1=file[count];console.log("trouvé : "+file1)
                         var files=file1.replace(new RegExp('.json', 'ig'),"")

                         var date = new Date();
                         var heures=date.getHours()*60*60000
                         var  minutes=date.getMinutes()*60000
                         var secondes=date.getSeconds()*1000
                         var timemaintenant=heures+minutes+secondes
                                                
                         var lecture = fs.readFileSync(path.resolve('%CD%', './plugins/minuteur/memoire/'+file1).replace('\\%CD%', ''),'utf-8')
                         var tempsfin=(JSON.parse(lecture)[3]-timemaintenant)/60000    ;console.log("il reste "+tempsfin)       
                         

            JarvisIASpeech("minuteur "+files+" il reste "+Math.floor(tempsfin)+ " minutes " + Math.floor(((tempsfin-Math.floor(tempsfin))*60)) + " secondes ")
               }                     
            }//fin try
            catch(err){JarvisIASpeech("je n'ai pas compris");return };//
 return 
}//fin if reponse

//calcul
if(reponse.length==1){
	
    if(reponse1.search("minute")>-1){var tempsreveil=reponse*60000// que minute//8minute
    var tempsname=reponse+" minute "
    }
    if(reponse1.search("minutes")>-1){var tempsreveil=reponse*60000// que minute//8minute
    var tempsname=reponse+" minute "
    }
}

if(reponse.length==1){
	
    if(reponse1.search("seconde")>-1){var tempsreveil=reponse*1000// que minute//8minute
    var tempsname=reponse+" seconde "
    }
if(reponse1.search("secondes")>-1){var tempsreveil=reponse*1000// que minute//8minute
    var tempsname=reponse+" secondes "
    }
}

if(reponse.length==2){
	if(reponse1.search("minute")>-1){var tempsreveil=reponse*60000//que minute//18minutes
    var tempsname=reponse+" minute "
    }
    if(reponse1.search("minutes")>-1){var tempsreveil=reponse*60000//que minute//18minutes
    var tempsname=reponse+" minutes "
    }
}

if(reponse.length==2){
	if(reponse1.search("seconde")>-1){var tempsreveil=reponse*1000//que minute//18minutes
    var tempsname=reponse+" seconde "
    }
    if(reponse1.search("secondes")>-1){var tempsreveil=reponse*1000//que minute//18minutes
    var tempsname=reponse+" secondes "
    }
}

 if(reponse.length==3){
 	var temp=reponse[0]*60000;
    var tempsreveil=temp;//console.log(temp)
    var temp=reponse-reponse[0]*100;//console.log(temp)
    var temp=temp*1000;console.log(temp)
    var tempsreveil=tempsreveil+temp
    var tempsname=reponse[0]+" minute "+reponse[1]+""+reponse[2]+" secondes"
 } // 1 minute + 2 secondes//1h18
 
 if(reponse.length==4){
 	var temp=reponse[0]*600000+reponse[1]*60000
    var tempsreveil=temp;//console.log(temp)
    
    var temp=reponse[2]*10000+reponse[3]*1000;//console.log(temp)
    //temp1=reponse[1]*100;//console.log('rr'+temp1)
    //temp=temp-temp1;//console.log('r'+temp)
    //temp=temp*60000;//console.log(temp)
    var tempsname=reponse[0]+""+reponse[1]+" minutes "+reponse[2]+""+reponse[3]+" secondes"
    var tempsreveil=tempsreveil+temp
  }// 2 heure + 2 minutes  


var date = new Date();
var heures=date.getHours()*60*60000
var minutes=date.getMinutes()*60000
var secondes=date.getSeconds()*1000

var timedepart=heures+minutes+secondes
console.log("temps depart : "+timedepart)
var timefin=timedepart+tempsreveil

var path = require('path');
var filePath = path.resolve('%CD%', './plugins/minuteur/memoire').replace('\\%CD%', '');

 var objet=[]
 objet.push(tempsname);
 objet.push(tempsreveil)
 objet.push(timedepart)
 objet.push(timefin)  
 var new_jsonStr = JSON.stringify(objet);

  fs.writeFile(filePath+'/'+reponse1+'.json', new_jsonStr, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

JarvisIASpeech("je lance le minuteur "+reponse1+"|si j'y pense|je vais essayer de m'en souvenir|tu m'en veux pas si j'oublie")

// on fait appel à la fonction minuteur
tim=function(reponse1,tempsreveil){
  console.log("lancement minuteur")
  
    setTimeout(function() {

      JarvisIASpeech("fin du minuteur "+reponse1)
              
                var path = require('path');
                var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
                var process=JarvisIANircmd + ' filldelete "' + dir + '\\minuteur\\memoire\\'+reponse1+'.json"'﻿
                console.log(process)
                var exec = require('child_process').exec;                       
                exec(process)
       
  var sonnerie=[]
  path = require('path');
  sonnerie.push(path.resolve('%CD%', './plugins/minuteur/sample/trompette1.mp3').replace('\\%CD%', ''))
  console.log(sonnerie)
 JarvisIASound(sonnerie)  
  return 
 
}, tempsreveil);
return
 
}
tim(reponse1,tempsreveil)

};