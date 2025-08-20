import React from 'react';
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.footer + " py-5"}>
        <div className="container">
          <div className="row text-center text-white">
           
            <div className="col-md-4">
              <h5 className="fw-bold"></h5>
              <p>Fathy Abdalhamed</p>
              <p>Egypt.Dakahlia. Mansoura</p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">My sites</h5>
              <div className="social-icons d-flex justify-content-center gap-3 mt-2">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className='col-md-4'>
    <h5 className='fw-bold'>ABOUT FREELANCER</h5>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Fathy Abdalhamed</p>

</div>

          </div>
        </div>
      </div>




      
      <div className={`${style.footerBottom} text-white py-3 text-center`}>
        Copyright © Your Website 2025
      </div>
    </>
  );
}
