//Save Data in local storage
function store()
{
    var formsData=new Array();
    var element=document.getElementsByClassName("mail")[0];
    if(element.checked)
    {
        formsData=[];
        formsData.push(document.getElementsByClassName("inputField")[0].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[1].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[2].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[3].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[4].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[5].value.trim());
        var date=new Date();
        var key =date.toString();
        localStorage.setItem(key, JSON.stringify(formsData));
        var retrievedData=localStorage.getItem(key);
        var fieldsData=JSON.parse(retrievedData);
        var mod=document.getElementById("popUp");
        mod.setAttribute("data-target","#exampleModal");
        var name=fieldsData[0];
        var mainAddress=fieldsData[1];
        var optAddress=fieldsData[2];
        var city=fieldsData[3];
        var state=fieldsData[4];
        var zip=fieldsData[5];
        document.getElementsByClassName("fieldName")[0].innerHTML="Name: ";
        document.getElementsByClassName("fieldName")[1].innerHTML="Address 1: ";
        document.getElementsByClassName("fieldName")[2].innerHTML="Address 2: ";
        document.getElementsByClassName("fieldName")[3].innerHTML="City: ";
        document.getElementsByClassName("fieldName")[4].innerHTML="State: ";
        document.getElementsByClassName("fieldName")[5].innerHTML="Zip: ";
        document.getElementsByClassName("formData")[0].innerHTML=name;
        document.getElementsByClassName("formData")[1].innerHTML=mainAddress;
        document.getElementsByClassName("formData")[2].innerHTML=optAddress;
        document.getElementsByClassName("formData")[3].innerHTML=city;
        document.getElementsByClassName("formData")[4].innerHTML=state;
        document.getElementsByClassName("formData")[5].innerHTML=zip;
        for(i=0;i<validInput.length;i++)
        {
            var validNames=document.createElement("li");
           validNames.setAttribute("class","list-group-item");
            validNames.innerHTML=validInput[i];
           
            document.getElementsByClassName("domainName")[0].appendChild(validNames);
        }
    }
   else
   {
    //var nameSuccess=userBankNameValidate(),mainAddressSuccess=mainAddressValidate(),optAddressSuccess=optAddressValidate();
   // var zipCodeSuccess=zipValidate();
    var mod=document.getElementById("popUp");
        mod.setAttribute("data-target","#exampleModal");
        formsData=[];
        formsData.push(document.getElementsByClassName("inputField")[6].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[7].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[8].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[9].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[10].value.trim());
        formsData.push(document.getElementsByClassName("inputField")[11].value.trim());
        
        var date=new Date();
        var key =date.toString();
        localStorage.setItem(key, JSON.stringify(formsData));
        var retrievedData=localStorage.getItem(key);
        var fieldsData=JSON.parse(retrievedData);
        var mod=document.getElementById("popUp");
        mod.setAttribute("data-target","#exampleModal");
        var name=fieldsData[0];
        var mainAddress=fieldsData[1];
        var optAddress=fieldsData[2];
        var city=fieldsData[3];
        var state=fieldsData[4];
        var zip=fieldsData[5];
        document.getElementsByClassName("fieldName")[0].innerHTML="Bank A/c Name: ";
        document.getElementsByClassName("fieldName")[1].innerHTML="Bank Routing Number: ";
        document.getElementsByClassName("fieldName")[2].innerHTML="Name of Bank: ";
        document.getElementsByClassName("fieldName")[3].innerHTML="Bank A/c Number: ";
        document.getElementsByClassName("fieldName")[4].innerHTML="City: ";
        document.getElementsByClassName("fieldName")[5].innerHTML="State: ";
        document.getElementsByClassName("formData")[0].innerHTML=name;
        document.getElementsByClassName("formData")[1].innerHTML=mainAddress;
        document.getElementsByClassName("formData")[2].innerHTML=optAddress;
        document.getElementsByClassName("formData")[3].innerHTML=city;
        document.getElementsByClassName("formData")[4].innerHTML=state;
        document.getElementsByClassName("formData")[5].innerHTML=zip;
        

   }
   
}
function FormEmpty()
{
  
    
    if(document.getElementById("mail").checked==false)
    {
        if(isFormEmpty)
        {
            document.getElementsByClassName("ddForm")[0].classList.add("bg-success");
            document.getElementsByClassName("ddForm")[0].classList.remove("bg-dark");
            document.getElementsByClassName("mailForm")[0].classList.add("bg-dark");
            document.getElementsByClassName("mailForm")[0].classList.remove("bg-success");
            var element= document.getElementsByClassName("inputField");
            var helpText=document.getElementsByClassName("helpText");
            for(i=0,j=7;i<7,j<14;i++,j++)
            {
                element[i].value="";
                element[i].classList.remove("border-success");
                element[i].classList.remove("border-danger");
                helpText[i].classList.remove("text-danger");
                element[i].setAttribute("disabled","disabled");
                element[j].removeAttribute("disabled");
                helpText[i].innerHTML=element[i].dataset.message;
            }
            validInput=[];
            var domainNames=document.getElementById("domainNames");
            domainNames.parentNode.removeChild(domainNames);
        }
       
    }

}
function refresh()
{
    location.reload();
}
//Common Function for validations
function validations(parent)
{
    var element=parent.getElementsByClassName("inputField")[0];
    var regex=element.dataset.regex;
    var userInput=element.value.trim();
    var helpText=parent.getElementsByClassName("helpText")[0];
    if(userInput!="")
    {
        if(userInput.match(regex))
        {
            element.className+="border border-success";
            helpText.innerHTML=element.dataset.message;
            helpText.classList.remove("text-danger");
        }
        else
        {

            element.onblur=element.focus();
            element.className+="border border-danger";
            helpText.classList.add("text-danger");
            helpText.innerHTML=element.dataset.validation;  
        }
    }
    else
    {
        element.focus();
        element.className+="border border-danger";
        helpText.classList.add("text-danger");
        helpText.innerHTML="Required";     
    }
    
}
function save()
{
   var values=document.getElementsByClassName("inputField");
    var data=true;
    if(document.getElementsByClassName("mail")[0].checked==true)
    {
        var checkbox=document.getElementsByClassName("terms");
        for(i=0;i<4;i++)
        {
            if(values[i].value=="")
            {
                data=false;
                values[i].className+="border border-danger";
                var helptext=document.getElementsByClassName("helpText")[i]
                helptext.classList.add("text-danger");
                helptext.innerHTML="Required";
            }
        }
        if(checkbox[0].checked==false)
        {
            data=false;
            document.getElementsByClassName("helpText")[6].className+="text-danger";
            document.getElementsByClassName("helpText")[6].innerHTML="Required"
        }
    }
    else
    {
        var checkbox=document.getElementsByClassName("terms");
        for(i=6;i<13;i++)
        {
            if(values[i].value=="")
            {
                data=false;
                values[i].className+="border border-danger";
            }
        }
        for(j=8;j<11;j++)
        {
            i=7;
            if(values[i].value=="")
            {
                var helptext=document.getElementsByClassName("helpText")[j]
                helptext.classList.add("text-danger");
                helptext.innerHTML="Required";
            } 
            i++;
        }
        if(checkbox[1].checked==false)
        {
            data=false;
            document.getElementsByClassName("helpText")[13].classList.add("text-danger");
            document.getElementsByClassName("helpText")[13].innerHTML="Required"
        }
    }
    if(data==true)
    {
        store();
    }
}



function closes()
{
    if(document.getElementsByClassName("mail")[0].checked==false)
    {
        var element=document.getElementById("mail");
        element.checked=true;
        var ts=document.getElementById("no");
        ts.setAttribute("data-dismiss","modal"); 
    }
    else
    {
        var element=document.getElementsByClassName("dd")[0];
        element.checked=true;
        var ts=document.getElementById("no");
        ts.setAttribute("data-dismiss","modal");
    }
}
function clr()
{
    if(document.getElementsByClassName("mail")[0].checked==false)
    {
        document.getElementsByClassName("ddForm")[0].classList.add("bg-success");
        document.getElementsByClassName("ddForm")[0].classList.remove("bg-dark");
        document.getElementsByClassName("mailForm")[0].classList.add("bg-dark");
        document.getElementsByClassName("mailForm")[0].classList.remove("bg-success");
        var element= document.getElementsByClassName("inputField");
        var helpText=document.getElementsByClassName("helpText");
        for(i=0,j=7;i<7,j<14;i++,j++)
        {
            element[i].value="";
            element[i].classList.remove("border-success");
            element[i].classList.remove("border-danger");
            helpText[i].classList.remove("text-danger");
            element[i].setAttribute("disabled","disabled");
            element[j].removeAttribute("disabled");
            helpText[i].innerHTML=element[i].dataset.message;
        }
        validInput=[];
        var domainNames=document.getElementById("domainNames");
        domainNames.parentNode.removeChild(domainNames);
    }
    else
    {
        document.getElementsByClassName("mailForm")[0].classList.add("bg-success");
        document.getElementsByClassName("mailForm")[0].classList.remove("bg-dark");
        document.getElementsByClassName("ddForm")[0].classList.add("bg-dark");
        var element= document.getElementsByClassName("inputField");
        var helpText=document.getElementsByClassName("helpText");
        for(i=7,j=0;i<12,j<7;i++,j++)
        {
            
            element[i].value="";
           
            element[i].classList.remove("border-success");
            element[i].classList.remove("border-danger");
            helpText[i+1].classList.remove("text-danger");
            element[i].setAttribute("disabled","disabled");
            element[j].removeAttribute("disabled");
            helpText[i+1].innerHTML=element[i].dataset.message;
        }
    }

}
function checkform()
    {
        var element = document.getElementsByClassName("inputField");
        var cansubmit = true;
        if(document.getElementById("mail").checked==true)
        {
            for (var i = 0; i <= 5; i++) 
            {
                if (element[i].value.length == 0) 
                {
                    cansubmit = false;
                }
                if(element[i].value.length!=0)
                {
                    return false;
                }
            }

            if (cansubmit) 
            {
                element=document.getElementsByClassName("terms")[0];
                element.removeAttribute("disabled");
                return true;
            }
           
        }
        else
        {
            for (var i = 7; i < 12; i++) 
            {
                if (element[i].value.length == 0) 
                {
                    cansubmit = false;
                   // alert(i);    
                }
                else
                {
                    cansubmit=true;
                }
            }

            if (cansubmit) 
            {
                //alert("Test")
                return false;
                element=document.getElementsByClassName("terms")[1];
                element.removeAttribute("disabled");
            }
            else
            {
                return true;
            }
           
        }
    }
   /*  function checkPayment()
    {
        //var method = document.querySelectorAll('input[name="paymentMethods"]');
        var method=document.getElementsByClassName("mail")[0];
        //alert(method.value);
       // var selectedValue=document.forms["paymentMethod"].ele;
            if (method.checked==true)
            { 
                //if(method.value=="mail")
                //{
                    for(var i=1;i<7;i++)
                    {
                        element=document.getElementsByClassName("mail")[i];
                        element.removeAttribute("disabled");
                        element=document.getElementsByClassName("dd")[i];
                        element.setAttribute("disabled","disabled");
                    }

                //}
                
            }
            else
                {
                    for(i=1;i<7;i++)
                    {
                        element=document.getElementsByClassName("mail")[i];
                        element.setAttribute("disabled","disabled");
                        element=document.getElementsByClassName("dd")[i];
                        element.removeAttribute("disabled");
                    }
                }
    } */

function stateValidate()
{
    var a=document.getElementById("stateSel").value;
    if(a==="Maharashtra")
    {
        var arr=["Mumbai","Pune","Nagpur"];
    }
    else if(a==="Rajasthan")
    {
        var arr=["Bojhyakheri","Jaipur","Mandore"];
    }
    else if(a=="Gujrat")
    {
        var arr=["Surat","Vadodara","Vapi"];
    }
 
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("citySel").innerHTML=string;
    document.getElementsByClassName("helpText")[3].innerHTML="";
    document.getElementById("citySel").className+="border border-success";
    document.getElementById("stateSel").className+="border border-success";
    return true;
}
function bankStateValidate()
{
    var a=document.getElementById("bankStateSel").value;
    if(a==="Maharashtra")
    {
        var arr=["Mumbai","Pune","Nagpur"];
    }
    else if(a==="Rajasthan")
    {
        var arr=["Bojhyakheri","Jaipur","Mandore"];
    }
    else if(a=="Gujrat")
    {
        var arr=["Surat","Vadodara","Vapi"];
    }
 
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("bankCitySel").innerHTML=string;
    return true;
}

var validInput=new Array();
//var allDomainNames=new Array();
function DomainName(element)
{
    
    var inputField=element.getElementsByClassName("inputField")[0];
    var helpText=element.getElementsByClassName("helpText")[0];
    var domainNames=document.getElementsByClassName("domainNames")[0];
    
    var regex=inputField.dataset.regex;
    var uniquevalue=true;
    var userInput=inputField.value.trim().toLowerCase();
    allDomainNames=userInput.split(','); 
    var invalidInput=new Array();
    var j=0;
    var k=0;
    domainNames.parentNode.removeChild(domainNames);
   if(userInput!="")
   {
      
        for(i=0;i<allDomainNames.length;i++)
        {
            if(allDomainNames[i].match(regex))
            {
                for(j=0;j<validInput.length;j++)
                {
                
                    if(allDomainNames[i]==validInput[j])
                    {

                        uniquevalue=false; 
                        break;
                    }
                
                }
                if(uniquevalue==true)
                {
                    validInput.push(allDomainNames[i])
                    inputField.classList.remove("border-danger");
                    inputField.classList.add("border-success");
                    inputField.classList.remove("border-danger");
                    helpText.classList.remove("text-danger");
                    helpText.innerHTML="";
                }
            }
            else
            {
                inputField.classList.add("border-danger");
                inputField.onblur=inputField.focus;
                helpText.classList.add("text-danger");
                helpText.innerHTML=inputField.dataset.validation;
                invalidInput.push(allDomainNames[i]);  
            }

        }
   
        for(i=0;i<validInput.length;i++)
        {
            var validNames=document.createElement("div");
            var dmnName=document.createElement("div");
            validNames.innerHTML=validInput[i]+"<img class='cancel ml-2 img-size' src='cancel.png' alt='cancel' onClick='cancel(this.parentElement)'>";
            validNames.setAttribute("class","p-2");
            element.appendChild(dmnName)
            dmnName.setAttribute("class","domainNames")
            var domainNames=document.getElementsByClassName("domainNames")[0];
            domainNames.appendChild(validNames);
        }
       
        inputField.value=invalidInput;
    }
    else
    {
        inputField.classList.add("border-danger");
        inputField.onblur=inputField.focus;
        helpText.classList.add("text-danger");
        helpText.innerHTML="Required";
    }
    
}

function onlyAlphabet(element) 
{
    var patt=/^[a-zA-Z]+$/;
    var inputVal=element.value;
    if(patt.test(inputVal)){
      element.value = inputVal;
    }
    else{
      var txt = inputVal.slice(0, -1);
      element.value = txt;
    }
    
  }
  function onlyNumber(element) 
  {
      var patt=/^[\d]+$/;
      var inputVal=element.value;
      if(patt.test(inputVal)){
        element.value = inputVal;
      }
      else{
        var txt = inputVal.slice(0, -1);
        element.value = txt;
      }
      
}
function DomainNameAdd(element)
{
    if(event.keyCode === 13)
    {
        element.getElementsByClassName("addBtn")[0].click();
    }
}
function cancel(element)
{
    element.style.display="none";
}