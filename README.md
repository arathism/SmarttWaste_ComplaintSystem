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
![admin portal](https://github.com/arathism/SmarttWaste_ComplaintSystem/blob/565a7acf8c8f02c3fbb2fa6de8c1c4f1971cfdba/Screenshot%202026-01-28%20125834.png)
![adminDashboard_usercomplaints](https://github.com/arathism/SmarttWaste_ComplaintSystem/blob/119edefb630f722c439e1b3afd6bd651eed6941b/Screenshot%202026-01-28%20125916.png)
![statusUpdated_after admin completing](https://github.com/arathism/SmarttWaste_ComplaintSystem/blob/bc4065b2f1ec4ed2a1deaa0d2a1468830b90784b/Screenshot%202026-01-28%20125930.png)
![conneted succesffully for mongodb](https://github.com/arathism/SmarttWaste_ComplaintSystem/blob/0624df8226d62899a58d4fedd7a7b441a717f0e8/Screenshot%202026-01-28%20132606.png)
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
