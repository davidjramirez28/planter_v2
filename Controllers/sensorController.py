#import libraries
import time
import datetime
import RPi.GPIO as GPIO
import requests

#GPIO setup -- Moisture sensor at GPIO16, pin 36. Relay Channel 3 at pin 29
pin = 16
GPIO.setmode(GPIO.BCM)
GPIO.setup(pin, GPIO.IN)
GPIO.setup(21, GPIO.OUT)
GPIO.output(21, True)

#Infinite loop
try:
    while True:
        #If sensor detects dry soil
        if (GPIO.input(pin))==1:
            date = datetime.datetime.now()
            dateString = date.strftime("%Y-%m-%d %I:%-M:%S")
            payload = {"lastWatered": dateString, "latinName": "Sansevieria Patens"}
            headers = {"content-type": "application/json"}
            #Sends API request to update database with latest watered time
            requests.put("http://192.168.1.253:3000/updatePlants", json=payload, headers=headers)
            #Start water pump
            GPIO.output(21, False)
            time.sleep(10)
            #Stop water pump
            GPIO.output(21, True)
            print ('Dry')
        else:
            print ('Wet')
        time.sleep(5)

#Cleanup GPIO pins before ending
finally: GPIO.cleanup()