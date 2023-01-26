from fastapi import APIRouter, HTTPException
from starlette.status import HTTP_404_NOT_FOUND
from redis_om.model import NotFoundError

from .model import User

router = APIRouter()


# Api routes

@router.get("/user/{pk}", tags=["Users"])
def getUser(pk: str):
    try:
        user = User.get(pk)
    except NotFoundError:
        # Creating custom exception
        user_notfound_error = HTTPException(
            status_code=HTTP_404_NOT_FOUND,
            detail="Invalid User",
        )
        raise user_notfound_error
    return user


@router.post("/create_user", tags=["Users"])
def createUser(user: User):
    return user.save()


@router.post("/update_user/{pk}", tags=["Users"])
def updateUser(pk: str, user: User):
    try:
        existing_user = User.get(pk)
    except NotFoundError:
        # Creating custom exception
        user_notfound_error = HTTPException(
            status_code=HTTP_400_BAD_REQUEST,
            detail="Invalid User",
        )
        raise user_notfound_error
    existing_user.update(first_name=user.first_name, last_name=user.last_name, display_name=user.display_name, phone_work=user.phone_work, phone_personal=user.phone_personal, email=user.email, location=user.location)
    return existing_user
