# kyro
Source code for Kyro Assignment


## Frontend
- Frotend is hosted on vercel
- You can access it at: https://kyro-theta.vercel.app/

## Backend
- Backend is hosted on render
- You can access it at: https://kyro.onrender.com/
- You can read the API docs at https://kyro.onrender.com/docs

## Project Structure
    kyro
    ├── Backend     
    │   ├── Users
    |	|	├── __init__.py
	|	|	├── main.py					   - Configuration of the app.
	|	|	├── model.py				   - DB configuration and schema.
	|	|	└── routes.py				   - Contains the CURD APIs
    │   ├── main.py						   - Main file to be executed for running the server.
    │   └── requirements.txt			   - Contains required python packages
    └──  kyro
	    ├── Public
		|   └── avatar.jpg    			   - Profile image
    	├── src
    	|   └── components
    	|	|	├── ProfileCard.js		   - Component for preview of profile
    	|	|	├── ProfileUpdateForm.js   - Component for updating user data
    	|	|	└── TopBar.js 			   - Component for nav bar
    	|	└── App.js					   - Main page
    	└── Package.json
    	
