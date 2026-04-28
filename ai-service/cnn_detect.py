import tensorflow as tf
import numpy as np
from PIL import Image

# Load trained model
model = tf.keras.models.load_model("model.h5")

def cnn_detect(image_path):
    """
    Detect if a media file is pirated using the CNN model.
    Returns True if pirated, False if original.
    """
    img = Image.open(image_path).convert("RGB")
    img = img.resize((128, 128))

    arr = np.array(img) / 255.0
    arr = np.expand_dims(arr, axis=0)

    prediction = model.predict(arr)[0][0]

    print("Prediction Score:", prediction)

    return prediction > 0.7  # threshold