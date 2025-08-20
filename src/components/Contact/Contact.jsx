import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import style from './Contact.module.css';

export default function Contact() {
  return (
    <div className={`${style.contact} vh-100 container py-5 text-center`}>
      <h2 className="text-uppercase fw-bold mb-4">Contact Me</h2>

      <p><FaEnvelope className="me-2 text-primary" /> Abdalhamedfathy79@email.com</p>
      <p><FaPhone className="me-2 text-success" /> +20 1091910981</p>
      <p><FaMapMarkerAlt className="me-2 text-danger" /> Mansoura, Dakahlia, Egypt</p>
    </div>
  )
}
