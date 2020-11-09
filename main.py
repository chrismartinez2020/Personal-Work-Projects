import time 
  
# Import the webbrowser module, it is used to 
# display various HTML documents to the user. 
import webbrowser

import inspect
import os

# First Input: It is the time of the form 
# 'Hours:Minutes:Seconds' that you'll 
# use to set the alarm. 
#Set_Alarm = raw_input("Set the website alarm as H:M:S:") 
Set_Alarm = "06:30:00"
# Second Input: It is the URL that you want 
# to open on the given time. 
#url = raw_input("Enter the website you want to open:") 

dirname = os.path.dirname(os.path.abspath(inspect.stack()[0][1]))
filename = os.path.join(dirname, '.\index.html')
url = filename

# This is the actual time that we will use to print. 
Actual_Time = time.strftime("%I:%M:%S") 

# This is the while loop that'll print the time 
# until it's value will be equal to the alarm time 
while (Actual_Time != Set_Alarm): 
    print("The time is " + Actual_Time)
    Actual_Time = time.strftime("%I:%M:%S") 
    time.sleep(1)
    # This if statement plays the role when its the 
    # alarm time and executes the code within it. 
    if (Actual_Time >= Set_Alarm): 
        print("You should see your webpage now.")
        # We are calling the open() function from the webrowser module.
        webbrowser.register('chrome',None,webbrowser.BackgroundBrowser("C://Program Files (x86)//Google//Chrome//Application//chrome.exe"))
        webbrowser.get('chrome').open(url)
