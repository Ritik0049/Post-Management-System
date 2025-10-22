POST MANAGEMENT SYSTEM


//Description

A small React (Vite) app that allows users to create, view, edit, delete, and search posts.
All data is stored in localStorage (no backend).

//How to run locally

1.Open terminal in project folder.

2.Install dependencies:

   npm install

3.Start the development server:

   npm run dev



// Features

1.CRUD operations: create / read / update / delete posts.

2.Search by title and filter by author.

3.LocalStorage data persistence.

4.Routing with React Router.

5.Client-side validation with inline errors.
6.Clean and responsive UI.


//Project Structure

data/

 seed.js

src/

 components/

 PostCard.jsx

 PostForm.jsx

 Header.jsx

 pages/

 PostList.jsx

 PostCreate.jsx

 PostEdit.jsx

 PostView.jsx

 hooks/

 useLocalStorage.js

 utils/

 validators.js


 App.jsx

 main.jsx
