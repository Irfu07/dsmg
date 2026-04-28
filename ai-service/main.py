from fastapi import FastAPI, File
import uvicorn
from cnn_detect import cnn_detect

app = FastAPI()

@app.post("/process")
def process(file: bytes = File(...)):
    # Save file temporarily
    with open("temp.jpg", "wb") as f:
        f.write(file)

    is_pirated = cnn_detect("temp.jpg")

    return {"status": "pirated" if is_pirated else "original"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=10000)