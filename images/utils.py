import numpy as np
import urllib
import json
import cv2
import os
import sys



def image_to_sketch(image):
    try:
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        gray_1 = cv2.medianBlur(gray, 5)
        edges = cv2.adaptiveThreshold(gray_1, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 9, 5)
        color = cv2.bilateralFilter(image, d=9, sigmaColor=200,sigmaSpace=200)
        cartoon = cv2.bitwise_and(color, color, mask=edges)
        return cartoon

    except Exception as e:
        print(str(e))

        # convert to watercolor

        # sigma_s controls the size of the neighborhood. Range 1 - 200
        # sigma_r controls the how dissimilar colors within the neighborhood will be averaged. A larger sigma_r results in large regions of constant color. Range 0 - 1
        # res = cv2.stylization(image, sigma_s=60, sigma_r=0.6)
        # return res

         # convert to cartoon sketch

        # gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        # gray_1 = cv2.medianBlur(gray, 5)
        # edges = cv2.adaptiveThreshold(gray_1, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 9, 5)
        # color = cv2.bilateralFilter(image, d=9, sigmaColor=200,sigmaSpace=200)
        # cartoon = cv2.bitwise_and(color, color, mask=edges)
        # return cartoon

         #convert to gray scale
        
        # im_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        # thresh = 127
        # im_bw = cv2.threshold(im_gray, thresh, 255, cv2.THRESH_BINARY)[1]
        # return im_bw

      


def convert_to_sketch(stream=None):
    try:
        # taking file object and converting to opencv usable format
        data = stream.read()
        image = np.asarray(bytearray(data), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)

        # using sketch fucntion to make the sketch image
        sketch = image_to_sketch(image)

        # converting the sketch image to string to pass to cloudinary
        img_encode = cv2.imencode('.jpg', sketch)[1]
        data_encode = np.array(img_encode)
        str_encode = data_encode.tostring()

        return str_encode
    except Exception as e:
        print("error in converting file to image", str(e))

