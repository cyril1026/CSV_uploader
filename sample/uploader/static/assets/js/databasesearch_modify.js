function modify()
{
  const title1=document.getElementById('tokenfield').value;
  sessionStorage.setItem('restokenfield',title1);
  
  const title2=document.getElementById('exclude').value;
  sessionStorage.setItem('resexclude',title2);
  
  const title3=document.getElementById('selectBox').value;
  sessionStorage.setItem('resselectBox',title3);
  
  const Location=document.getElementById('location').value;
  sessionStorage.setItem('reslocation',Location);
  
  const role=document.getElementById('jobrole').value;
  sessionStorage.setItem('resjobrole',role);
  
  const cloc=document.getElementById('exampleFormControlSelect1').value;
  sessionStorage.setItem('resexampleFormControlSelect1',cloc);
  
  const Institute=document.getElementById('Institute').value;
  sessionStorage.setItem('resInstitute',Institute);
  
  const marks=document.getElementById('exampleFormControlSelect2').value;
  sessionStorage.setItem('resexampleFormControlSelect2',marks);
  

  
  const gender=document.getElementById('exampleFormControlSelect3').value;
  sessionStorage.setItem('resexampleFormControlSelect3',gender);
  
  const exp1=document.getElementById('Experience1').value;
  sessionStorage.setItem('resExperience1',exp1);
  
  const exp2=document.getElementById('Experience2').value;
  sessionStorage.setItem('resExperience2',exp2); 
  
  const lang=document.getElementById('organizer').value;
  sessionStorage.setItem('resorganizer',lang);
  
  const active=document.getElementById('active').value;
  sessionStorage.setItem('resactive',active);
  
  const name=document.getElementById('name').value;
  sessionStorage.setItem('resname',name);
  
return 
}
