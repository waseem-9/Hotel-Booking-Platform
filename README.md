# Hotel-Booking-Platform

The Hotel Booking System is a web application that allows users to search, book, and manage hotel reservations. It provides an easy-to-use interface for both customers and hotel administrators to streamline the booking process.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- User authentication and authorization
- Search hotels by location, date, and room type
- View hotel details and room availability
- Make and manage bookings
- Admin dashboard for managing hotels, rooms, and bookings
- Responsive design for mobile and desktop users

https://github.com/user-attachments/assets/28a46d67-f63a-46fe-8641-5940501e2a89

![Screenshot 2024-07-20 200553](https://github.com/user-attachments/assets/087dd32b-393e-4565-8090-0029bebc347a)


## Technologies

- *Frontend:* ReactJS, HTML, CSS, JavaScript
- *Backend:* Spring Boot
- *Database:* MySQL
- *Authentication:* JWT (JSON Web Tokens)

## Installation

To set up the project locally, follow these steps:

### Backend

1. Clone the repository:
    bash
    git clone https://github.com/waseem-9/Hotel-Booking-Platform.git
    

2. Navigate to the backend directory:
    bash
    cd hotel-booking-system/backend
    

3. Create a MySQL database:
    sql
    CREATE DATABASE hotel_booking_system;
    

4. Update the application.properties file with your MySQL database configuration:
    # MySQL Properties
    spring.datasource.url=jdbc:mysql://localhost:3306/DatabaseName?createDatabaseIfNotExist=true&useUnicode=true
    spring.datasource.username=root

    #Enter the correct MySQL Password below
    spring.datasource.password=YourDbPassword
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL57Dialect

    spring.servlet.multipart.max-file-size=10MB
    spring.servlet.multipart.max-request-size=10MB

    #give image path
    disk.upload.basepath=D:/img/urlpath

    spring.jackson.serialization.fail-on-empty-beans=false  
    

5. Install the dependencies and build the project:
    bash
    ./mvnw clean install
    

6. Start the backend server:
    bash
    ./mvnw spring-boot:run
    

### Frontend

1. Navigate to the frontend directory:
    bash
    cd ../frontend
    

2. Install the dependencies:
    bash
    npm install
    

3. Start the frontend development server:
    bash
    npm start
    

4. Open your browser and navigate to http://localhost:3000.

## Usage

### Customer

1. Sign up or log in to your account.
2. Search for hotels by entering the location, check-in, and check-out dates.
3. Browse through the list of available hotels and view their details.
4. Select a room and proceed with the booking process.
5. Manage your bookings from your account dashboard.

### Admin

1. Log in to the admin dashboard.
2. Add, edit, or delete hotels and rooms.
3. View and manage customer bookings.

## Contributing

Contributions are welcome! Feel Free to open issues or submit pull requests.


## Contact

For any inquiries or feedback, you can reach me at shaikwaseem0018@gmail.com
