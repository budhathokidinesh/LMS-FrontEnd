# LMS-FE

This is the Library Management System. This system manages user and admin accounts. It also manages books available, books borrowed and returned. In this system user can borrow books and should be returned in allocated date. User can also leave reviews in that book. Admin's responsibilities are managing user accounts, adding books, removing books, udating books. Admin also can approve the user reviews and publish in page accordingly.

### Installing all required packages cleaning the app

# Creating the folder

    1. Folder can create by `yarn create vite lms-front`. Choose javascrip as main language while creating the folder.
    2. Change directry to lms-front by `cd lms-front`
    3. Install yarn by `yarn`
    4. Run website by `yarn dev`

# Install all packages

    All packages can be installed by just `yarn add react-router-dom axios react-bootstrap bootstrap react-toastify react-icons @reduxjs/toolkit`

# Cleaning the app

    The app can be clean by deleting all non necessory code and css from all folders like Public, Main.js, App.js, App.css etc

# Testing

    Test all installed packages by importing required packages form their respected websites

### Creating folder structures

All folders for the users like signup, login, home and forgot password is created. For books folders are made like book landing page, books edit and update pages are created.

### User layout

User layout is created for the all pages. In this layout navbar is created. In navbar, On left side logo is created. Which is imported and on right side home, signup and signIn links are created. On the pages folder on file is created where we can import all private and public routers.
