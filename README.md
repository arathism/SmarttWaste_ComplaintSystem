# Smart Waste Complaint System

## Overview
This is a **mini full-stack web development project** — a Smart Waste Complaint System MVP that allows users to submit waste complaints with images. Data is stored in MongoDB.

## Features
- User complaint submission with fields: city, area, year, garbage type, description, photo upload
- Backend server using Node.js + Express
- Photo storage using Multer
- Complaint data stored in MongoDB
- Desktop-focused, user-friendly UI

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **File Uploads:** Multer

## Folder Structure
smartwaste/
├── backend/
│ ├── server.js
│ ├── models/
│ │ └── complaintModel.js
│ ├── routes/
│ │ └── complaintRoutes.js
│ └── uploads/
├── frontend/
│ └── index.html
├── package.json
└── README.md
