from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes import router

app = FastAPI()

# config
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)


# Defalut route
@app.get("/", tags=["Root"])
async def mainPage() -> dict:
    return {
        "message": "use the /docs route to proceed"
    }


# Adding routes
app.include_router(router)
