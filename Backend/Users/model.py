from redis_om import HashModel, get_redis_connection
from pydantic import EmailStr

# Redis Database
redis = get_redis_connection(
    host = "redis-17245.c57.us-east-1-4.ec2.cloud.redislabs.com",
    port = "17245",
    password = "AUYQVlxUbnUXwgAHBT0366l7uFUSD0n3",
    decode_responses = True
)


# User Model
class User(HashModel):
    display_name: str
    phone_work: str
    phone_personal: str
    email: EmailStr
    first_name: str
    last_name: str
    location: str

    class Meta:
        database = redis
