# Web Profile Dosen (Lecturer Portfolio)

A professional, dynamic web portfolio application designed for university lecturers and academics. This project features a polished public profile for showcasing academic achievements and a secure, intuitive admin dashboard for easy content management.

![Project Preview](https://via.placeholder.com/800x400?text=Web+Profile+Dosen+Preview)

## 🚀 Features

### 🌐 Public Profile

A single-page application (SPA) experience with smooth navigation:

- **Hero Section**: Professional photo, name, title, and social links (LinkedIn, Google Scholar, SINTA).
- **About**: Comprehensive professional biography.
- **Education**: Timeline of academic background.
- **Skills**: Visual representation of technical and professional skills.
- **Teaching**: List of courses taught with descriptions.
- **Publications**: Academic papers, journals, and articles.
- **Research**: Research grants, projects, and funding history.
- **Community Service**: Outreach and service activities.
- **Certifications**: Professional certifications and awards.
- **Activities**: **[NEW]** A dedicated section and detail pages for showcasing recent activities and events.
- **Gallery**: Image gallery of academic life.

### 🛡️ Admin Dashboard

A secure backend interface to manage all content without touching code:

- **Secure Authentication**: JWT-based login system.
- **Dashboard Overview**: Quick links to all management sections.
- **Profile Management**: Update personal details, photo, and bio.
- **CRUD Operations**: Full Create, Read, Update, and Delete capabilities for all sections (Education, Skills, etc.).
- **Image Upload**: Built-in image upload support (stored as Base64) for Gallery and Activities.
- **Real-time Updates**: Changes are immediately reflected on the public site.

## 🛠️ Tech Stack

### Frontend

- **React**: UI Library
- **Vite**: Build tool for lightning-fast development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **Lucide React**: Beautiful, consistent icons
- **Axios**: HTTP client
- **React Hot Toast**: Toast notifications

### Backend

- **Node.js**: Runtime environment
- **Express**: Web framework
- **JSON Database**: Lightweight, file-based persistence (no external DB required)
- **JWT**: JSON Web Tokens for secure authentication
- **Multer/Body-Parser**: Handling file uploads and large data payloads

## 📂 Project Structure

```bash
web-profile-dosen/
├── backend/                # Backend source code
│   ├── controllers/        # Logic for API endpoints
│   ├── database/           # JSON files for data storage
│   ├── middleware/         # Auth middleware
│   ├── routes/             # API route definitions
│   └── server.js           # Entry point
├── src/                    # Frontend source code
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components (Home, Login, Admin)
│   ├── services/           # API integration
│   └── App.jsx             # Main routing
├── dist/                   # Production build output
└── package.json            # Project dependencies and scripts
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/web-profile-dosen.git
cd web-profile-dosen
```

### 2. Install Dependencies

This project uses a single `package.json` to manage both frontend and backend dependencies for simplicity.

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory (or copy `.env.example`):

```bash
cp .env.example .env
```

Ensure it contains:

```env
JWT_SECRET=your_super_secret_key_change_this
PORT=5000
```

## 🏃‍♂️ Running the Application

### Development Mode

Run the frontend and backend separately for the best development experience (hot-reloading).

1. **Start Backend**:

   ```bash
   npm run server
   ```

   Runs on `http://localhost:5000`

2. **Start Frontend** (in a new terminal):
   ```bash
   npm run dev
   ```
   Runs on `http://localhost:5173`

### Production Mode

Build the frontend and serve it via the backend (how it runs in deployment).

1. **Build Frontend**:

   ```bash
   npm run build
   ```

2. **Start Server**:
   ```bash
   npm start
   ```
   Access the full application at `http://localhost:5000`

## 📡 API Reference

| Method   | Endpoint             | Description                         | Auth Required |
| :------- | :------------------- | :---------------------------------- | :------------ |
| `POST`   | `/api/auth/login`    | Admin login                         | No            |
| `GET`    | `/api/profile`       | Get profile info                    | No            |
| `PUT`    | `/api/profile`       | Update profile                      | **Yes**       |
| `GET`    | `/api/[section]`     | Get items (education, skills, etc.) | No            |
| `POST`   | `/api/[section]`     | Create item                         | **Yes**       |
| `PUT`    | `/api/[section]/:id` | Update item                         | **Yes**       |
| `DELETE` | `/api/[section]/:id` | Delete item                         | **Yes**       |

**Supported Sections**: `education`, `skills`, `courses`, `publications`, `research`, `community-service`, `certifications`, `gallery`, `activities`.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
