function jobpreview()
{
  const title1=document.getElementById('jobtitle').value;
  sessionStorage.setItem('restitle',title1);
  
  const title2=document.getElementById('JobType').value;
  sessionStorage.setItem('resJobType',title2);
  
  const title3=document.getElementById('selectBox').value;
  sessionStorage.setItem('resselectBox',title3);
  
  const JobLocation=document.getElementById('JobLocation').value;
  sessionStorage.setItem('resJobLocation',JobLocation);
  
  const MonthlySalarymin=document.getElementById('MonthlySalarymin').value;
  sessionStorage.setItem('resMonthlySalarymin',MonthlySalarymin);
  
  const MonthlySalarymax=document.getElementById('MonthlySalarymax').value;
  sessionStorage.setItem('resMonthlySalarymax',MonthlySalarymax);
  
  const customRadioInline1=document.getElementById('customRadioInline1').value;
  sessionStorage.setItem('rescustomRadioInline1',customRadioInline1);
  
  const customRadioInline2=document.getElementById('customRadioInline2').value;
  sessionStorage.setItem('rescustomRadioInline2',customRadioInline2);
  

  
  const HiringProcess=document.getElementById('HiringProcess').value;
  sessionStorage.setItem('resHiringProcess',HiringProcess);
  
  const yearpassing1=document.getElementById('yearpassing1').value;
  sessionStorage.setItem('resyearpassing1',yearpassing1);
  
  const yearpassing2=document.getElementById('yearpassing2').value;
  sessionStorage.setItem('resyearpassing2',yearpassing2); 
  
  const AcademicMarks=document.getElementById('AcademicMarks').value;
  sessionStorage.setItem('resAcademicMarks',AcademicMarks);
  
  const Arrears=document.getElementById('Arrears').value;
  sessionStorage.setItem('resArrears',Arrears);
  
  const skills=document.getElementById('tokenfield').value;
  sessionStorage.setItem('resskills',skills);
  
  const Experience1=document.getElementById('Experience1').value;
  sessionStorage.setItem('resExperience1',Experience1);
  
  const Experience2=document.getElementById('Experience2').value;
  sessionStorage.setItem('resExperience2',Experience2);
  
 
  
  const gender=document.getElementById('yourgender').value;
  sessionStorage.setItem('resyourgender',gender);
  
  
  const officialmail=document.getElementById('OFFICIALEMAIL').value;
  sessionStorage.setItem('resofficialmail',officialmail);
  
  const ownpassword=document.getElementById('OWNPASSWORD').value;
  sessionStorage.setItem('resownpassword',ownpassword);
  
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
