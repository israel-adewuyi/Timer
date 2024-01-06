from fastapi import FastAPI, HTTPException


app = FastAPI()

@app.get("/")
async def returnMessage():
    return "I am here"


