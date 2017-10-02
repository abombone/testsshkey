var http=require('http');
var fs =require('fs');
var path = require('path');
var cheerio = require('cheerio');
var request=require('request');
//var url="http://www.dy8c.com/entertainment/95306/";
var url="http://www.dy8c.com/entertainment/158624/";
var hrefs=[];
var _dirName="href";

request(url,function(err,res,body){
	if(!err && res.statusCode ==200){
		var $=cheerio.load(body);
		var tbodys=$("#content").find("tbody");
		var tbodyNums=tbodys.length;
		for(let i=0;i<tbodyNums;i++){
			jgTbody(tbodys.eq(i),i+1);
		}

		//console.log("保存结束");

		//console.log(tbodys.length);

		/*var tbody=$("#el-s-tb-2");

	
		var as=tbody.find("tr");
		var asLength=as.length;
		for(let i=0;i<asLength;i++){
			let a=as.eq(i).find("td").eq(0).find("a").attr("href");
			console.log(a);
		}*/
		
	}
});

function jgTbody(_tbody,_index){
	let aList= new Array();
	var as=_tbody.find("tr");
		var asLength=as.length;
		//aList.push();
		for(let i=0;i<asLength;i++){
			let a=as.eq(i).find("td").eq(0).find("a").attr("href");
			a=a+'\n';

			fs.appendFile(path.join(_dirName,"第"+_index+"季.txt"), a, 'utf-8',function(err){
			if(err){
				console.log("保存错误");
			}
		});

			//saveText(a);

			//console.log(typeof(a));
			/*if(i===0){
				let tempTxt="第"+_index+"季";
				saveText(tempTxt);
			}*/
			//aList.push(a);
			
		}

		//slipcDatas(_index,aList);
		//console.log("第"+_index+"季："+aList);
		
}

function slipcDatas(_index,datas){
	let dataLength=datas.length;
	for(let i=0;i<dataLength;i++){
		saveText(_index,datas[i]);
		saveText(_index,'\n\n');
	}
}

function saveText(_index,datas){
	//datas='\n'+datas+'\n'
	fs.appendFile(path.join(_dirName,"第"+_index+"季.txt"), datas, 'utf-8',function(err){
			if(err){
				console.log("保存错误");
			}
	});


	/*console.log();
		fs.writeFile(path.join(_dirName,"第"+_index+"季.txt"),datas,function(err){
			if(err){
				console.log("保存错误");
			}
		});*/
}

function xxx(data,index){
	console.log(index);
	//var tds=data.find("a");
	//console.log(typeof(tds));
	
	//console.log($data.html());
	//var $a=$data.children('a');
	//console.log($a.html());
	//var xxxxx=data.find("td");
	//console.log(xxxxx[0]);
}

//console.log(hrefs);