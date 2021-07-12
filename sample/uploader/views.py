from django.shortcuts import render,HttpResponseRedirect
from django.contrib import messages
from django.views.generic.base import TemplateView
from django.urls import reverse
from .models import Student
from django.views import View


from .forms import UploadFileForm
import smtplib, ssl
import pandas as pd

column_list = ['emailid']

class Homepage(TemplateView):
	template_name = 'Dashboard.html'

class MyFormUploderView(View):
    form_class = UploadFileForm
    template_name = 'Dashboard.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        data =  Student.objects.all()
        return render(request, 'Dashboard.html',{'form': form,'datas':data})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES["file"]
            #read the csv using pandas
            file_data = pd.read_csv(csv_file)
            #Column name is emailid
            email_ids = file_data.emailid.tolist()
            #send a email and collect the status
            delivery_status = [send_mail(email_id) for email_id in email_ids]
            if all(delivery_status):
                messages.warning(request, 'Some mail devlivery are failed..!')
            #constrcting dict for updating the datas's to the database
            keys = file_data.keys()
            values =  file_data.values
            for value in values:
                datas_list = list(zip(keys,value))
                object_dict = {key: value for key, value in zip(keys,value)}
                Student.objects.create(**object_dict)
            data =  Student.objects.all()
            messages.success(request, 'Form submission successful')
            return render(request, 'Dashboard.html',{'form': form,'datas':data})

        messages.warning(request, 'Failed to upload the data..!')
        return render(request, self.template_name, {'form': form})


def upload_file(request):
    form = UploadFileForm() 
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        csv_file = request.FILES["file"]
        file_data = pd.read_csv(csv_file)
        email_ids = file_data.emailid.tolist()
        #send mail
        delivery_status = [send_mail(email_id) for email_id in email_ids]
        keys = file_data.keys()
        values =  file_data.values
        for value in values:
            datas_list = list(zip(keys,value))
            object_dict = {key: value for key, value in zip(keys,value)}
            Student.objects.create(**object_dict)
        data =  Student.objects.all()
        if all(delivery_status):
            messages.warning(request, 'Some mail devlivery are failed..!')
        messages.success(request, 'Form submission successful')
        return render(request, 'Dashboard.html',{'form': form,'datas':data})
    else:
        data =  Student.objects.all()
        return render(request, 'Dashboard.html',{'form': form,'datas':data})


def send_mail(email_id,messages="Hi.! Testing mail.!"):
    """
    Needs to update the mail id and password's/secrte keys 
    """
    print(email_id)
    # try:
    #     s = smtplib.SMTP('smtp.gmail.com', 587)
    #     s.starttls()
    #     s.login("shan.july.1994@gmail.com", "*********")
    #     s.sendmail("shan.july.1994@gmail.com", email_id, message)
    #     s.quit()
    # except:
    #     return email_id
    # 