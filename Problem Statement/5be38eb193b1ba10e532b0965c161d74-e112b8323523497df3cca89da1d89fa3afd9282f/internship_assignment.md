# Assignment: Responsive App Landing Page Design

## Objective
Create a responsive landing page for a mobile application using HTML and CSS, with Next.js as an optional but preferred framework. The design should be visually appealing, user-friendly, and optimized for both desktop and mobile devices.

## Design Reference
- **Figma Link:** [Figma Link](https://www.figma.com/community/file/1145991068621514311)
- **Figma Dev Mode Link:** [Figma Dev Mode Link](https://www.figma.com/design/dvc71PcUEYRKrtnZOapRtI/App-Landing-Page-Finance-Bank-Money-(Community)?m=dev&node-id=0-1&t=uyErxTIHgm8nS2dC-1)
- **Video Explaination :** [Video Link](https://www.loom.com/share/1735f90b5e464089935cd1dff4fca2b8?sid=ca423c04-d553-4631-97d7-fb84aa1766b6)

## Requirements

### 1. Setup (Optional for Next.js)
- Initialize a new Next.js project if using.
- Ensure the project is set up with TypeScript (optional but preferred).

### 2. Design a Landing Page
- The landing page should include sections as per the Figma design:
  - Hero section with a catchy headline and call-to-action buttons.
  - Features section showcasing the app's main features.
  - Screenshots or gallery section displaying the app interface.
  - Testimonials section with user feedback.
  - Pricing plans or subscription details.
  - Contact or download section with a form or direct download links.

### 3. Create a Responsive Layout
- Ensure the design is responsive and looks good on both desktop and mobile devices.
- Use CSS Grid or Flexbox for the layout.

### 4. Styling
- Use CSS or a CSS-in-JS library.
- Ensure consistent styling throughout the page as per the Figma design.
- Use Google Fonts for typography as per the Figma design.

### 5. Additional Features (Optional)
- Implement hover effects on interactive elements.
- Add smooth scrolling for internal links.
- Use a lightbox effect for the app screenshots gallery.

### 6. Data Handling (Optional)
- If using Next.js, use static generation (SSG) to fetch data for features, testimonials, etc.
- Data can be stored in a local JSON file or fetched from a public API.

## Bonus Points(Optional)
- Implement a dark mode toggle.
- Add animations using CSS or libraries like Framer Motion.
- Use Tailwind CSS for styling.

## Submission
- Deploy the project on Vercel (https://vercel.com/) or any other hosting platform.
- Provide a GitHub repository link with a README.md file that includes:
  - Instructions to run the project locally.
  - A brief description of the design choices and any libraries used.
  - The Figma design link used as a reference.

## Evaluation Criteria

### 1. Code Quality
- Clean, readable, and maintainable code.
- Proper use of Next.js features if applicable.

### 2. Design
- Adherence to the provided Figma design.
- Responsiveness and usability.

### 3. Functionality
- Correct implementation of all required features.
- Proper handling of data fetching and display.

### 4. Innovation
- Implementation of bonus features.
- Unique design elements or interactions.

## Example Data Structure (data.json) (Optional)

```json
{
  "hero": {
    "headline": "Discover Our App",
    "subheadline": "The best app for all your needs.",
    "ctaButtons": [
      {
        "text": "Download Now",
        "link": "/download"
      },
      {
        "text": "Learn More",
        "link": "#features"
      }
    ]
  },
  "features": [
    {
      "title": "Feature One",
      "description": "Description of feature one.",
      "icon": "https://via.placeholder.com/100"
    },
    {
      "title": "Feature Two",
      "description": "Description of feature two.",
      "icon": "https://via.placeholder.com/100"
    }
  ],
  "testimonials": [
    {
      "name": "User One",
      "feedback": "This app is fantastic! It has changed my life.",
      "avatar": "https://via.placeholder.com/50"
    },
    {
      "name": "User Two",
      "feedback": "I can't imagine my daily routine without this app.",
      "avatar": "https://via.placeholder.com/50"
    }
  ],
  "pricing": [
    {
      "plan": "Basic",
      "price": "$9.99/month",
      "features": ["Feature A", "Feature B", "Feature C"]
    },
    {
      "plan": "Premium",
      "price": "$19.99/month",
      "features": ["Feature A", "Feature B", "Feature C", "Feature D"]
    }
  ]
}
```


### Instructions to Implement:

#### HTML and CSS (Basic Implementation):

1.  **Setup the Project Structure:**
    
    -   Create a new directory for the project.
    -   Inside the directory, create `index.html`, `styles.css`, and `data.json`.
2.  **HTML Structure:**
    
    -   Use semantic HTML to structure the landing page according to the sections outlined.
3.  **CSS Styling:**
    
    -   Use CSS Grid or Flexbox for responsive layout.
    -   Implement styles based on the Figma design.
4.  **JavaScript (for interactivity):**
    
    -   Add a `script.js` file to handle any interactivity, such as hover effects or smooth scrolling.

#### Next.js (Optional for Advanced Implementation):

1.  **Setup the Next.js Project:**
    
    -   Initialize a new Next.js project using `npx create-next-app`.
    -   Install any additional libraries as needed (e.g., styled-components, Tailwind CSS).
2.  **Page Components:**
    
    -   Create components for each section of the landing page (e.g., Hero, Features, Testimonials).
    -   Use `getStaticProps` to fetch data from `data.json`.
3.  **Styling:**
    
    -   Apply styles using CSS modules, styled-components, or Tailwind CSS.
4.  **Deployment:**
    
    -   Deploy the project to Vercel and ensure it's publicly accessible.

----------

**Expected Outputs:**

1.  **Figma Design Reference:** Ensure your implementation closely follows the design in the provided Figma link.
2.  **Vercel Deployment Link:** Share the live link where the project is deployed.
3.  **GitHub Repository Link:** Share the link to the GitHub repository containing the project code.

----------

Good luck! We look forward to seeing your creativity and technical skills in action.

----------

Please submit your completed work in the Form: [https://joinus.team/batch-2Sy/frontend-developer-intern/apply](https://joinus.team/batch-2Sy/frontend-developer-intern/apply)