import tensorflow as tf
import numpy as np
from PIL import Image

model = tf.keras.models.load_model("model.h5")

def cnn_detect(path):
    img = Image.open(path).resize((128,128))
    arr = np.array(img)/255.0
    arr = np.expand_dims(arr,0)

    pred = model.predict(arr)[0][0]
    return pred > 0.7