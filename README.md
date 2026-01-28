# ♻️ Smart Waste Management System

A web-based application to submit and manage waste-related complaints.  
Users can report garbage issues with images, and admins can track and resolve them through a dashboard.

---

##  Features

### User
- Submit waste complaints
- Enter city, area, garbage type, description
- Upload image
- Simple and user-friendly UI

### Admin
- Admin login
- View all complaints from MongoDB
- See uploaded images
- Update complaint status:
  - Submitted
  - In Progress
  - Pending
  - Completed
- Popup message on successful update
- Logout option

---

## 🛠 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (Compass)
- Image Upload: Multer
- Version Control: Git, GitHub

---
![submit complaint](https://github.com/arathism/SmarttWaste_ComplaintSystem/blob/0ab4df360e112672474ce9e0258e635459e38238/Screenshot%202026-01-28%20125531.png)
![submit completed sucessfully](https://github.com/arathism/SmarttWaste_ComplaintSystem/blob/9391fcb0e2be4a64fa4d64ef8b3d1cf724755226/Screenshot%202026-01-28%20125821.png)
##  Project Structure

smartwaste/
├── backend/
│ ├── models/
│ │ ├── Complaint.js
│ │ └── Admin.js
│ ├── routes/
│ │ ├── complaints.js
│ │ └── admin.js
│ └── server.js
│
├── frontend/
│ ├── index.html
│ ├── admin.html
│ └── uploads/
│
└── README.md

yaml
Copy code
