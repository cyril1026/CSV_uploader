window.addEventListener('load',()=>{
    /* const params=(new URL(document.location)).searchParams;*/
     const name1=sessionStorage.getItem('restitle');
     document.getElementById('res-title').value=name1;
     
     const name2=sessionStorage.getItem('resJobType');
     document.getElementById('res-JobType').value=name2;
     
     const name3=sessionStorage.getItem('resselectBox');
     document.getElementById('res-selectBox').value=name3;
     
     const resJobLocation=sessionStorage.getItem('resJobLocation');
     document.getElementById('res-JobLocation').value=resJobLocation;
     
     const resMonthlySalarymin=sessionStorage.getItem('resMonthlySalarymin');
     document.getElementById('res-MonthlySalarymin').value=resMonthlySalarymin;
     
     const resMonthlySalarymax=sessionStorage.getItem('resMonthlySalarymax');
     document.getElementById('res-MonthlySalarymax').value=resMonthlySalarymax;
     
     const rescustomRadioInline1=sessionStorage.getItem('rescustomRadioInline1');
     document.getElementById('res-customRadioInline1').value=rescustomRadioInline1;
     
     const rescustomRadioInline2=sessionStorage.getItem('rescustomRadioInline2');
     document.getElementById('res-customRadioInline2').value=rescustomRadioInline2;
         
     const resHiringProcess=sessionStorage.getItem('resHiringProcess');
     document.getElementById('res-HiringProcess').value=resHiringProcess;
     
     const resyearpassing1=sessionStorage.getItem('resyearpassing1');
     document.getElementById('res-yearpassing1').value=resyearpassing1;
     
     const resyearpassing2=sessionStorage.getItem('resyearpassing2');
     document.getElementById('res-yearpassing2').value=resyearpassing2;
     
     const resAcademicMarks=sessionStorage.getItem('resAcademicMarks');
     document.getElementById('res-AcademicMarks').value=resAcademicMarks;
     
     const resArrears=sessionStorage.getItem('resArrears');
     document.getElementById('res-Arrears').value=resArrears;
       
     const resskills=sessionStorage.getItem('resskills');
     document.getElementById('tokenfield').value=resskills;
     
     
     
     const resExperience1=sessionStorage.getItem('resExperience1');
     document.getElementById('res-Experience1').value=resExperience1;
     
     const resExperience2=sessionStorage.getItem('resExperience2');
     document.getElementById('res-Experience2').value=resExperience2;
     
    
     const resyourgender=sessionStorage.getItem('resyourgender');
     document.getElementById('res-yourgender').value=resyourgender;
     
     const resofficialmail=sessionStorage.getItem('resofficialmail');
     document.getElementById('res-OFFICIALEMAIL').value=resofficialmail;
     
     const resownpassword=sessionStorage.getItem('resownpassword');
     document.getElementById('res-OWNPASSWORD').value=resownpassword;
     
     const resmobileno=sessionStorage.getItem('resmobileno');
     document.getElementById('res-mobileno').value=resmobileno;
     
     const rescompany=sessionStorage.getItem('rescompany');
     document.getElementById('res-company').value=rescompany;
     
     const resIndustry=sessionStorage.getItem('resIndustry');
     document.getElementById('res-Industry').value=resIndustry;


     const resgender=sessionStorage.getItem('resyourgender');
     document.getElementById('res-yourgender').value=resgender;


     const resLocation=sessionStorage.getItem('resyourLocation');
     document.getElementById('res-Location').value=resLocation;
     

     
     


    
   
   });
