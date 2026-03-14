# 📸 GalleryOS

GalleryOS is a simple and modern **photo gallery web application** built using **React, Vite, and Tailwind CSS**.
The application fetches images from a public API and displays them in a responsive grid where users can search and mark photos as favourites.

---

## 🚀 Features

* Fetch photos from **Picsum Photos API**
* Display images in a responsive **grid layout**
* **Search functionality** to filter photos
* **Favourite photos** using a heart icon
* **Loading indicator** while photos are being fetched
* **Error handling** for API failures
* Clean and responsive UI built with **Tailwind CSS**

---

## 🛠 Tech Stack

* **Frontend:** React (Functional Components + Hooks)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **API:** Picsum Photos API
* **State Management:** React Hooks (`useState`, `useReducer`, `useEffect`)

---

## 📂 Project Structure

```
galleryos
│
├── public
│   └── vite.svg
│
├── src
│   ├── assets
│   ├── components
│   │   ├── Gallery.jsx
│   │   ├── PhotoCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── hooks
│   │   └── useFetchPhotos.js
│   │
│   ├── reducers
│   │   └── favouritesReducer.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
└── package.json
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/YashIsTheBest247/Celebrare.git
```

Go to the project folder:

```
cd galleryos
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in your browser:

```
http://localhost:5173
```

---

## 📸 API Used

This project uses the **Picsum Photos API** to fetch random images.

```
https://picsum.photos/v2/list
```

---

## 🔮 Future Improvements

* Image preview modal
* Infinite scrolling
* Save favourites using Local Storage
* Image download option
* Category-based filtering

---

## 👨‍💻 Author

**Yash Munshi**

---

