# 🏥 Medical Appointment Platform

![MERN](https://img.shields.io/badge/Stack-MERN-informational)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Status](https://img.shields.io/badge/Status-Active-success)

A full-stack medical appointment booking platform built with the **MERN stack**, designed to simulate real-world workflows for patients, doctors, and administrators.  
The project focuses on **role-based access**, **appointment management**, and **online payments**, following production-inspired practices.

---

## ✨ Features

### 👤 Patient
- User registration and authentication
- Browse doctors by speciality
- Book and cancel appointments
- Manage personal profile
- View appointment history

### 🧑‍⚕️ Doctor
- Secure doctor dashboard
- View and manage scheduled appointments
- Update professional profile
- Track earnings and activity

### 🛠️ Admin
- Admin authentication and dashboard
- Manage doctors (add, update, remove)
- View and manage all appointments
- Platform-level oversight

### 💳 Payments
- Online appointment payment integration
- Secure payment flow
- Appointment status tracking

---

## 🧱 Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router
- Context API

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT Authentication

---

## 🏗️ Project Structure

To be updated


---

## 🔐 Authentication & Authorization

The platform supports **three distinct roles**:

- **Patient** – Book and manage appointments
- **Doctor** – Manage availability and appointments
- **Admin** – Full system control

Access to routes and features is protected using **JWT-based authentication** and role checks.

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/davi-p-oliveira-11/carepilot-plus

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
