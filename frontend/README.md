
 Avani Smart Children's Clinic

Overview

Avani Smart Children's Clinic is a web-based platform aimed at improving clinic management processes while enhancing user experience for both patients and staff. The project includes functionalities for submitting feedback, and displaying testimonials via a feedback carousel.

 Table of Contents

·  Features
·  Technologies
·  Installation
·  Usage
·  API Routes
·  Contributing
·  License

 Features

Feedback Carousel: Showcase patient testimonials and satisfaction using a feedback carousel on the homepage.
Responsive UI: Built to work smoothly on mobile and desktop devices.
Admin Dashboard: Manage patient appointments and feedback in one place.

 Technologies
Frontend:
React.js
Bootstrap (for the carousel component and responsive design)
Axios (for handling API requests)

Backend:
   Node.js
  Express.js
  MongoDB with MongoDB Atlas (for data storage)

Installation
Prerequisites:
Node.js installed on your local machine.
MongoDB Atlas account for the database.

 Setup Instructions:
1. Clone the repository:
   git clone https://github.com/Ranjith-41/Avani-Smart-Clinic.git
   
2.Navigate into the project folder:
   cd Avani-Smart-Clinic
   
3. Install dependencies for both frontend and backend:
   Frontend:
     cd frontend
     npm install
   
   Backend:   
     cd backend
     npm install
    
3.Configure environment variables:
   - Create a `.env` file in the `backend` folder and add your MongoDB Atlas URI and any other necessary API keys.



4.Start the project:

   Backend:  
     cd backend
     npm start

   Frontend:
     cd frontend
     npm start
    

 Usage
1. Open your browser and visit `http://localhost:3000` to interact with the frontend.
2. Patients can book appointments and submit feedback, while administrators can manage the data through the backend.

 API Routes

 POST /feedback: Submit patient feedback.
GET /feedback: Retrieve all feedback for display on the homepage carousel.

 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.

 License
This project is licensed under the MIT License.

