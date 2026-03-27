from fastapi import FastAPI
from PredictRequest import PredictRequest
import pandas as pd
import joblib
app = FastAPI()

model = joblib.load("model.pkl")
@app.post("/predict")
def predict(data:PredictRequest):
    df = pd.DataFrame([data.model_dump()])
    prediction = model.predict(df)  
    score = int(prediction[0])
    finalScore = (score / 60) * 100
    return {"result": finalScore}
