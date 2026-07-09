# AI HCP CRM

An AI-powered Healthcare Professional (HCP) Customer Relationship Management (CRM) system built using **React**, **FastAPI**, **LangGraph**, **Groq LLM**, **MySQL**, and **SQLAlchemy**.

The application helps pharmaceutical sales representatives log doctor interactions using AI, maintain HCP records, generate meeting summaries, recommend follow-up actions, and search doctor information.

---

# Features

## AI Interaction Logging

- Extracts structured interaction details from natural language.
- Automatically fills the interaction form.
- Stores interaction data into MySQL.

Example

> Today I met Dr. Rajesh Sharma at Apollo Hospital. We discussed Product X and shared brochures.

---

## Edit Interaction

Modify previously logged interactions using natural language.

Example

> Update Dr. Rajesh Sharma's interaction and change the sentiment to Positive.

---

## Search HCP

Search doctor information stored in the CRM.

Example

> Search Dr. Rajesh Sharma

---

## AI Interaction Summary

Generates a professional summary of previous doctor interactions.

Example

> Summarize interaction with Dr. Rajesh Sharma

---

## AI Follow-up Suggestion

Provides intelligent recommendations for the next visit.

Example

> Suggest follow-up for Dr. Rajesh Sharma

---

## Materials Shared

- Search and add promotional materials.
- Track brochures and literature shared.

---

## Samples Distributed

- Add medicine samples.
- Track sample quantity.

---

# Tech Stack

## Frontend

- React
- Redux Toolkit
- Tailwind CSS
- Axios
- Lucide React
- Vite

---

## Backend

- FastAPI
- LangGraph
- LangChain
- Groq LLM
- SQLAlchemy
- Pydantic
- MySQL
- PyMySQL
- Uvicorn
- faster-whisper

---

# Project Structure

```
AI_HCP_CRM
│
├── backend
│   ├── app
│   │
│   ├── api
│   ├── graph
│   ├── llm
│   ├── models
│   ├── schemas
│   ├── services
│   ├── tools
│   ├── database
│   ├── core
│   └── main.py
│
├── frontend
│   ├── src
│   ├── components
│   ├── services
│   ├── features
│   ├── api
│   └── App.jsx
│
└── README.md
```

---

# AI Tools

The application uses five LangGraph tools.

### 1. Log Interaction

Extracts interaction details from natural language and stores them in MySQL.

---

### 2. Edit Interaction

Updates previously stored interactions.

---

### 3. Search HCP

Searches doctor information from the CRM database.

---

### 4. Summarize Interaction

Summarizes previous interactions using Groq LLM.

---

### 5. Suggest Follow-up

Generates intelligent follow-up recommendations based on previous meetings.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI_HCP_CRM.git

cd AI_HCP_CRM
```

---

# Backend Setup

Move to backend

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate Virtual Environment

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

If requirements.txt is not available

```bash
pip install fastapi
pip install uvicorn
pip install sqlalchemy
pip install pymysql
pip install python-dotenv
pip install pydantic
pip install pydantic-settings
pip install langgraph
pip install langchain
pip install langchain-groq
```

---

# Environment Variables

Create a `.env` file inside backend

```
DATABASE_URL=mysql+pymysql://root:password@localhost:3306/hcp_crm

GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# MySQL Setup

Create Database

```sql
CREATE DATABASE hcp_crm;
```

Run backend

```bash
python -m uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Move to frontend

```bash
cd frontend
```

Install Packages

```bash
npm install
```

Run Project

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# React Libraries

Install all required libraries

```bash
npm install axios
```

```bash
npm install react-redux
```

```bash
npm install @reduxjs/toolkit
```

```bash
npm install react-router-dom
```

```bash
npm install lucide-react
```

```bash
npm install tailwindcss
```


```bash
npm install react-media-recorder 
```

```bash
npm install postcss
```

```bash
npm install autoprefixer
```

---

# Backend Packages

```bash
pip install fastapi
```

```bash
pip install uvicorn
```

```bash
pip install sqlalchemy
```

```bash
pip install pymysql
```

```bash
pip install pydantic
```

```bash
pip install pydantic-settings
```

```bash
pip install python-dotenv
```

```bash
pip install faster-whisper
```

```bash
pip install langgraph
```

```bash
pip install langchain
```

```bash
pip install langchain-groq
```

---

# Application Workflow

User enters interaction

↓

Groq LLM extracts structured information

↓

LangGraph identifies intent

↓

Corresponding Tool executes

↓

Data stored in MySQL

↓

Redux updates UI

↓

AI Response displayed

---


# Future Enhancements

- Voice interaction
- PDF report generation
- Email reminders
- Calendar integration
- Analytics Dashboard
- Multi-user authentication
- Role-based access control

---

# Developed By

Omkar Bhangare

AI HCP CRM Project
