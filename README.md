
<br/>
<div align="center">
<img src="https://github.com/user-attachments/assets/117eff5b-98fd-4672-be52-34d7edc3b7d5" alt="Logo">

<h3 align="center">Bookstore Management Application</h3>
<p align="center">
Book Management Simplified: Your Digital Partner for an Organized Library.


  


</p>
</div>


# About The Project
![Screenshot from 2024-09-06 12-51-03](https://github.com/user-attachments/assets/cf5b53df-9d63-486f-a96a-6fce0805aaf4)
![Screenshot from 2024-09-06 12-51-17](https://github.com/user-attachments/assets/35687017-bee4-4735-a1a1-fa2dec0ca04d)
![Screenshot from 2024-09-06 12-51-33](https://github.com/user-attachments/assets/5047de85-182e-4653-8cea-a9b7a994d74d)
![Screenshot from 2024-09-06 12-52-02](https://github.com/user-attachments/assets/74f1cd83-65b4-45ba-ba33-700986bff9f2)
![Screenshot from 2024-09-06 12-52-08](https://github.com/user-attachments/assets/1e6ea26c-31c1-4915-99ab-c11e4247c014)
![Screenshot from 2024-09-06 12-52-36](https://github.com/user-attachments/assets/54e308b0-8d35-4243-806f-2825ccbb66e1)


This project is a Bookstore Management Application that demonstrates a full-stack web application integrating both back-end and front-end technologies. It is designed to manage a bookstore's inventory, allowing users to perform CRUD (Create, Read, Update, Delete) operations on books via a user-friendly interface. The application is built using a combination of modern Java-based backend frameworks and dynamic JavaScript-based front-end technologies.

--*Features*

   Book Inventory Management: Users can view, add, edit, and delete books from the inventory.

   Search Functionality: Users can search for books based on various criteria, such as title, author, year, or ISBN.

   Responsive Design: The front-end is fully responsive and works seamlessly across various devices and screen sizes, providing a consistent user experience.

   Dynamic Updates: The front-end uses JavaScript to dynamically fetch and update data without requiring full page reloads.

   RESTful API Integration: The front-end interacts with the back-end through a REST API, making the system scalable and adaptable for future integrations.
# 🤷🏼 Usage

#### 📃 Main Page

When you access the application, you are presented with a list of all books in the database.


--*Key Features:*


   View Book Details:
       Click on any book in the list to navigate to its detailed view.


  --*Search for Books:*

  
Use the search bar on the main page to filter books by:

Title, Author, Year, ISBN, Publisher

Partial information is acceptable, the search will filter books that contain the search term in any of these fields.


--*Sort and Filter Options:*

Sort by Title (A-Z): Click the "Order A-Z" button to organize the book list alphabetically by title.

Filter by Genre: Use the "Filter by Genre" dropdown to display only books that match the selected genre.

Reset to Default: Click the "Default" button to clear all filters and return to the original book list.


--*Add a New Book:*

Click on the "Add New Book" button on the bottom right.

Fill out all required fields, including:
            Title,
            Author,
            Year,
            ISBN,
            Publisher,
Year Published,
Price,
Genre,
            Image URL and
            Synopsis

Submit the form to add the new book to the database.


#### 🕵🏼‍♂️ Book Detail Page

On the book detail page, you can manage individual book records.

--*Key Features:*


   *Edit Book:*

Click the pen icon to edit the book's details. Make changes and save them to update the book information.

   *Delete Book:*
   Click the trash can icon to delete the book.
        Note: A book can only be deleted if it has 0 units in stock.

   Navigate Back: Click the arrow icon or the logo at the top left to return to the main page.


#### 🧭 Navigation

   Main Page: Displays all books and provides options to search and add new books.
   Book Detail Page: Allows you to view, edit, or delete individual book records.

--*Additional Information*

   Development Stage: The application currently uses a test database located in the resources folder. This setup is for development purposes and does not affect the production environment.
## 🪚 Built With

#### Back-End

Java: Core language for backend development.

   Spring MVC: Manages the web layer and provides RESTful APIs for CRUD operations on the book inventory.

   Hibernate: Handles database operations and maps Java objects to a MySQL relational database.

   Thymeleaf: Renders server-side HTML views when needed.

   Maven: Manages dependencies and builds the project.

   Tomcat: Serves as the web server to deploy the application.

#### Front-End

   JavaScript: Fetches data from the backend API, handles user interactions, and dynamically updates the UI.

  HTML: Defines the structure of web pages.

CSS: Styles and layouts web pages.

   FontAwesome: Provides icons for enhanced UI.

- [Java](https://developer.mozilla.org/en-US/docs/Glossary/Java)
- [Spring](https://spring.io/projects/spring-framework)
- [Hibernate](https://en.wikipedia.org/wiki/Hibernate_(framework))
- [Thymeleaf](https://www.thymeleaf.org/index.html)
- [MySQL](https://www.mysql.com/)
- [Maven](https://maven.apache.org/)
- [Tomcat](https://tomcat.apache.org/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [FontAwesome](https://fontawesome.com/)
## ✔️ Prerequisites

JDK 8 or higher: Check installation with: java -version in your terminal.

Apache Maven: Verify installation with: mvn -version also in your terminal.

MySQL: Ensure MySQL is installed and running. 

Check the version with:```mysql --version ``` 

Check the service status with:```sudo systemctl status mysql```

Apache Tomcat: Ensure Tomcat is installed and configured. 
Open a web browser and go to 
```http://localhost:8080.``` You should see the Tomcat welcome page.
## ⚙️ Installation

These installations are only for LINUX

To install JDK 8 or 11:

```sudo apt install openjdk-8-jdk  // For OpenJDK 8``` 

```sudo apt install openjdk-11-jdk  // For OpenJDK 11``` 


To install Maven:

``` sudo apt update``` 

``` sudo apt install maven``` 


To install MySQL:

``` sudo apt update``` 

``` sudo apt install mysql-server``` 


To install Tomcat: Go to the Tomcat download page ``` https://tomcat.apache.org/download-90.cgi```  and download the binary distribution (usually a .tar.gz file) for Linux. Replace 9.x.xx with the version number you downloaded. Open Terminal and navigate to the directory where you downloaded the file. Extract it: 

``` tar xzf apache-tomcat-9.x.xx.tar.gz``` 

tar: The command to extract archive files. -x: Option for extraction. -v: Option for verbose output (optional). -f: Option to specify the archive filename.

Move the extracted directory to /opt or another preferred location: 

``` sudo mv apache-tomcat-9.x.xx /opt/tomcat``` 

Navigate to the Tomcat configuration directory: 

``` cd ~/tomcat/conf``` 

Edit the tomcat-users.xml file:

Open tomcat-users.xml using a text editor (e.g., vim): ``` sudo vim tomcat-users.xml``` 

Add the following lines at the end of the file:

    <role rolename="manager-gui"/>
    <role rolename="manager-script"/>
    <user username="tomcat" password="tomcat" roles="admin-gui,manager-gui,manager-script"/>

Create the settings.xml file (if it doesn't exist): ``` touch ~/.m2/settings.xml``` 

Edit the settings.xml file: Open settings.xml using a text editor (e.g., vim): ``` vim ~/.m2/settings.xml``` 

Add the following content:

     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <servers>
    <!--INSERT SERVER AUTHENTICATION INFORMATION HERE -->
    <server>
    <id>tomcat</id>
    <username>tomcat</username>
    <password>tomcat</password>
    </server>
    </servers>
    </settings>

Change the Username and Password to what you want.


Installing DOCKER


```sudo apt update```

```sudo apt install apt-transport-https ca-certificates curl software-properties-common```

```curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -```

```sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"```

```sudo apt update```

```sudo apt install docker-ce```

```sudo systemctl status docker```

## 🧑🏼‍🔧 Getting Started
#With DOCKER

Ensure Docker Daemon is Running

```sudo systemctl status docker```

If the Docker daemon is not running, you can start it with:

```sudo systemctl start docker```

Pull the Latest Images
```docker pull simbolado/bookstore-app:latest```
```docker pull simbolado/fe-book:latest```


Run Docker Compose file that is on the root of this project

```docker-compose up -d```

Go to google and type on the url: 
```http://localhost/```
_______

#With TomCat
Clone this repository git clone 

```https://github.com/DanielFonsecaa/LibraryManager```

Start the MySQL service: 

```sudo systemctl start mysqld```

Start Tomcat: 

```sudo ./path/to/tomcat/startup.sh``` 

Or, if you are already in the Tomcat directory: 

```sudo ./startup.sh```

In your IDE terminal, inside the project directory, use: ```mvn tomcat7:deploy``` to clean: ```mvn clean``` to undeploy ```mvn tomcat7:undeploy``` to redeploy ```mvn tomcat7:redeploy```
## 🗺️ Roadmap

- [x] Setup Environment Backend
- [x] Database Schema
- [x] Develop REST APIs
- [x] Integrate Hibernate
- [x] Integration with Backend
- [x] Documentation
- [x] Setup Environment Frontend
- [x] Main Page Development
- [x] Book Detail Page Development
- [x] Implement Search Functionality
- [x] Responsive Design
- [x] Bug Fixes and Refinements  
- [x] Setup Deployment Environment
      
- [ ] Parameterized Routes
- [ ] Production Launch
- [ ] Feature Enhancements


