# ITVE Landing Page

**Live Demo:** https://itve-web-page.vercel.app/
**GitHub Repository:** https://github.com/raihanarafi/ITVE_Web_Page

## 1. Project Overview
This project is a professional, high-performance landing page for **ITVE** (Institute of Technical and Vocational Excellence). It is a dynamic web application built with **React** that displays information and educational offerings in a clean, organized gallery format. 

The main goal of this application is to provide a seamless user experience for browsing through different sections—such as courses, achievements, and institute updates—without overwhelming the user with too much information at once.

**Key sections include:**
* **About ITVE:** A clear introduction to the institute's mission and value.
* **Programs & Offerings:** A dynamic gallery of available courses.
* **Student Engagement:** A dedicated portal and contact sections for prospective students.

## 2. Tech Stack Used
* **React.js:** Core library for building the user interface.
* **Tailwind CSS:** For professional, responsive styling.
* **JavaScript (ES6+):** For state-driven logic and interactivity.
* **Vercel:** For automated deployment and hosting.
* **Utility-First Styling:** By using Tailwind CSS, I ensured that the styling is consistent across all components. This also made the website much faster to load because Tailwind removes all unused CSS before the site goes live.

## 3. How to Run Locally
To get this project running on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/raihanarafi/ITVE_Web_Page

2. **Navigate to the project folder:**
   ```bash
   cd Your-Project-Name

3. **Install the dependencies: This command downloads all the necessary libraries (like React and Tailwind) listed in the package.json file.**
   ```bash
   npm install

4. **Start the development server: This will launch the website on your local machine.**
   ```bash
   npm run dev

5. **View the site: Once the terminal says the server is running, open your browser and go to: http://localhost:5173 (or the link provided in your terminal).**

## 4. Explanation of Pagination Approach

For this project, I implemented a **Section-Based Pagination** system that is used exclusively for the Home page. Unlike standard pagination that moves between pages, this system helps users navigate between different sections of a single landing page.

### How it works:

* **Home-Page Specific:** The `PaginationDots` component is programmed to only appear when the user is on the "Home" view. If the user moves to the Portal or other pages, the dots are automatically hidden to keep the interface clean.

* **Section Tracking (Intersection Observer):** I used the **Intersection Observer API** to make the dots "smart." As the user scrolls through the Home page, the app detects which section (like About, Facilities, or FAQ) is currently in the middle of the screen. 

* **Automatic Visual Feedback:** When a section becomes active, the corresponding dot automatically fills with color (`bg-blue-600`) and scales up. This gives the user a clear visual indicator of their current location on the page without them having to click anything.

* **Smooth Navigation:** Each dot is linked to a specific **Element ID** on the Home page. When a user clicks a dot, the app uses a "Smooth Scroll" behavior to glide directly to that part of the page.


## 5. Key Design Decisions
* **Fixed Side Navigation:** I chose to use "Pagination Dots" fixed to the right side of the screen. This ensures that no matter how long the page content is, the user can always navigate to another section instantly.
* **Tailwind Utility First:** I used **Tailwind CSS** for all styling. This decision was made to keep the CSS bundle small and to ensure that the design is perfectly consistent across different components.
* **Mobile-First Responsiveness:** The layout was built to be "mobile-first," meaning it is fully optimized for small screens and expands gracefully for tablets and desktops.
* **Visual Hierarchy:** Important actions, like the "Apply" and "Student Portal" buttons, use high-contrast colors (like blue) to stand out against the clean white background, guiding students toward their goal.
* **Performance:** I served images from the `public` folder and kept component logic simple to ensure the website loads and transitions between "pages" almost instantly.