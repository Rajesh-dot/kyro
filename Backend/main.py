import uvicorn

import importlib.util

spec = importlib.util.find_spec("redis_om")
if spec is None:
    print("Module not found.")
else:
    print("Module found.")

if __name__ == "__main__":
    uvicorn.run("Users.main:app", host="0.0.0.0", port=8000, reload=True)