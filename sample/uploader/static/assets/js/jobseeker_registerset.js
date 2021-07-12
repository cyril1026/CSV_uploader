function registerpreview()
{
  const title1=document.getElementById('firstname').value;
  sessionStorage.setItem('resfirstname',title1);
  
  const title2=document.getElementById('lastname').value;
  sessionStorage.setItem('reslastname',title2);
  
  const title3=document.getElementById('wizard-email').value;
  sessionStorage.setItem('resemail',title3);
  
  const code=document.getElementById('wizard-code').value;
  sessionStorage.setItem('rescode',code);
  
  const mobile=document.getElementById('wizard-mobile').value;
  sessionStorage.setItem('reswizard-mobile',mobile);
  
  const City=document.getElementById('City').value;
  sessionStorage.setItem('resCity',City);
  
  const sub_location=document.getElementById('sub_location').value;
  sessionStorage.setItem('ressub_location',sub_location);
  
  const selectBox=document.getElementById('selectBox').value;
  sessionStorage.setItem('resselectBox',selectBox);
  

  
  const dept=document.getElementById('dept').value;
  sessionStorage.setItem('resdept',dept);
  
  const yop=document.getElementById('yop').value;
  sessionStorage.setItem('resyop',yop);
  
  const Percentage=document.getElementById('Percentage').value;
  sessionStorage.setItem('resPercentage',Percentage); 
  
  const CGPA=document.getElementById('CGPA').value;
  sessionStorage.setItem('resCGPA',CGPA);
  
  const MarksPercentage=document.getElementById('MarksPercentage').value;
  sessionStorage.setItem('resMarksPercentage',MarksPercentage);
  
  const MarksCGPA=document.getElementById('MarksCGPA').value;
  sessionStorage.setItem('resMarksCGPA',MarksCGPA);
  
  const clg_loc=document.getElementById('clg_loc').value;
  sessionStorage.setItem('resclg_loc',clg_loc);
  
  const clg_name=document.getElementById('clg_name').value;
  sessionStorage.setItem('resclg_name',clg_name);
  
 
  
  const clg_univ=document.getElementById('clg_univ').value;
  sessionStorage.setItem('resclg_univ',clg_univ);
  
  
  const hsc=document.getElementById('hsc').value;
  sessionStorage.setItem('reshsc',hsc);
  
  const sslc=document.getElementById('sslc').value;
  sessionStorage.setItem('ressslc',sslc);
  
  const mobileno=document.getElementById('mobileno').value;
  sessionStorage.setItem('resmobileno',mobileno);
  
  const company=document.getElementById('company').value;
  sessionStorage.setItem('rescompany',company);
  
  const Industry=document.getElementById('Industry').value;
  sessionStorage.setItem('resIndustry',Industry);
  
  const Location=document.getElementById('yourLocation').value;
  sessionStorage.setItem('resyourLocation',Location);
  
  
  
  
return 
}
