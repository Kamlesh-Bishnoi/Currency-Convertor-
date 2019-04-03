function convert(){
   
          var from =document.getElementById("from").value;
          var to = document.getElementById("to").value;
          var xhr= new XMLHttpRequest();
          var url="https://free.currencyconverterapi.com/api/v6/convert?q="+from+"_"+to+"&compact=ultra&apiKey=44bbef74df526f28aa0a";
    
          xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange=function(){
              if(this.readyState === 4 && this.status === 200 )
              {
                  var result=this.responseText;
                  console.log(result);
                  var a=JSON.parse(result);
        var q = from+"_"+to;
        console.log(q);
        console.log(a[q]);
                     var amount = a[q] * document.getElementById('from_VAL').value;
        console.log(amount);

                  document.getElementById("to_VAL").value= amount;
              }
    }
}