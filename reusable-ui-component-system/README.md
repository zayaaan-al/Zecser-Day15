🧩 Reusable UI Component System

A lightweight, scalable, and reusable UI component library built using React + Tailwind CSS.
Designed with atomic design principles and props-driven architecture.



This project demonstrates how to build a reusable UI system using:

Atomic Design Principles

Props-driven Components

Clean Folder Architecture

Consistent Design System

Utility-first styling (Tailwind CSS)

The goal was to create scalable components that can be reused across multiple pages or projects.

🏗 Tech Stack

⚛ React

🎨 Tailwind CSS

⚡ Vite

🧠 Functional Components + Hooks

📁 Project Structure
src/
 ├── ui/
 │    ├── Button.jsx
 │    ├── Input.jsx
 │    ├── Select.jsx
 │    ├── Modal.jsx
 │    ├── Loader.jsx
 │    ├── Toast.jsx
 │    
 │   
 ├── pages/
 │    └── UIDemo.jsx
 ├── App.jsx
 └── main.jsx
🧩 Components
🔘 Button

Reusable button with variant, size, and loading support.

Props
Prop	Type	Default	Description
variant	primary | secondary | danger	primary	Button style
size	sm | md | lg	md	Button size
loading	boolean	false	Shows loading state
onClick	function	—	Click handler
Usage
<Button>Primary</Button>
<Button variant="danger">Delete</Button>
<Button size="lg">Large Button</Button>
📝 Input

Input field with label and error support.

Props
Prop	Type	Description
label	string	Field label
error	string	Error message
type	string	Input type
value	string	Controlled value
onChange	function	Change handler
Usage
<Input label="Email" type="email" />
🔽 Select

Reusable dropdown component.

Props
Prop	Type	Description
label	string	Field label
options	array	Dropdown options
value	string	Selected value
onChange	function	Change handler
Usage
<Select
  label="Category"
  options={[
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" }
  ]}
/>
🪟 Modal

Reusable modal dialog.

Props
Prop	Type	Description
isOpen	boolean	Controls visibility
onClose	function	Close handler
title	string	Modal title
children	ReactNode	Modal content
⏳ Loader

Simple animated spinner.

<Loader />
🔔 Toast

Temporary notification component.

Props
Prop	Type	Description
message	string	Notification message
type	success | error	Toast style
onClose	function	Close handler
📦 Barrel Export (Clean Imports)
export { default as Button } from "./Button";
export { default as Input } from "./Input";
export { default as Select } from "./Select";
export { default as Modal } from "./Modal";
export { default as Loader } from "./Loader";
export { default as Toast } from "./Toast";

Usage:

import { Button, Input, Modal } from "../ui";
🎯 Design Principles

Consistent spacing and typography

Reusable and scalable components

Clear prop-based API

Separation of concerns

Clean folder architecture

🛠 Installation
git clone https://github.com/zayaaan-al/Zecser-Day15.git
cd repo-name
npm install
npm run dev
📈 Future Improvements

Add dark mode support

Add animations

Convert to TypeScript

Add global Toast Provider

Publish as NPM package

Add Storybook documentation

🧑‍💻 Author

Al Zayan P.
MERN Stack Developer

Portfolio:
https://alzayan-portfolio.vercel.app/

⭐ Show Your Support

If you like this project:

⭐ Star this repository

🍴 Fork it

📢 Share it
