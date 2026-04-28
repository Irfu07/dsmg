import tensorflow as tf
import numpy as np
from tensorflow import keras
model = None

def load_model_safe():
    global model
    if model is None:
        model = tf.keras.models.load_model("model.h5")

def cnn_detect(path):
    try:
        load_model_safe()

        img = image.load_img(path, target_size=(128, 128))
        img = image.img_to_array(img)
        img = np.expand_dims(img, axis=0) / 255.0

        pred = model.predict(img)[0][0]
        return pred > 0.6

    except Exception as e:
        print("AI ERROR:", e)
        return False  # fallback