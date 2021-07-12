window.addEventListener('load',()=>{
    /* const params=(new URL(document.location)).searchParams;*/
     const name1=sessionStorage.getItem('restokenfield');
     document.getElementById('res-tokenfield').value=name1;
     
     const name2=sessionStorage.getItem('resexclude');
     document.getElementById('res-exclude').value=name2;
     
     const name3=sessionStorage.getItem('resselectBox');
     document.getElementById('res-selectBox').value=name3;
     
     const location=sessionStorage.getItem('reslocation');
     document.getElementById('res-location').value=location;
     
     const role=sessionStorage.getItem('resjobrole');
     document.getElementById('res-jobrole').value=role;
     
     const cloc=sessionStorage.getItem('resexampleFormControlSelect1');
     document.getElementById('res-exampleFormControlSelect1').value=cloc;
     
     const Institute=sessionStorage.getItem('resInstitute');
     document.getElementById('res-Institute').value=Institute;
     
     const marks=sessionStorage.getItem('resexampleFormControlSelect2');
     document.getElementById('res-exampleFormControlSelect2').value=marks;
         
     const gender=sessionStorage.getItem('resexampleFormControlSelect3');
     document.getElementById('res-exampleFormControlSelect3').value=gender;
     
     
     const resExperience1=sessionStorage.getItem('resExperience1');
     document.getElementById('res-Experience1').value=resExperience1;
     
     const resExperience2=sessionStorage.getItem('resExperience2');
     document.getElementById('res-Experience2').value=resExperience2;
     
     const lang=sessionStorage.getItem('resorganizer');
     document.getElementById('res-organizer').value=lang;
     
     const active=sessionStorage.getItem('resactive');
     document.getElementById('res-active').value=active;
     
 
     
     const name=sessionStorage.getItem('resname');
     document.getElementById('res-name').value=name;
     
    

    
   
   });
