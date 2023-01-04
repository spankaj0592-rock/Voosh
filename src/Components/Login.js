import "./Login.css";
import React, { useState } from "react";
// import { Waiting_list, book_now_bg } from "../../global/media";

import Input from "./Input";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "./Button";

const Login = () => {
    const user =1;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
    companyName: "",
    designation: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const joinButton = () => {
    window.open("https://calendly.com/voosh/30min");
    if (
      formData.name.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.password.trim().length > 0 &&

      formData.companyName.trim().length > 0 &&
      formData.designation.trim().length > 0
    ) {
      setFormSubmitted(true);
      window.open(
        ` mailto:kshitiz@voosh.in,priyam@voosh.in,harsh@voosh.in?subject=To%20Join%20Waitlist&body=Hey%20Team%2C%20this%20is%20${formData.name}%20from%20${formData.companyName}%20with%20a%20position%20of%20${formData.designation}%20in%20the%20company.%20We%20would%20like%20to%20join%20you%20in%20the%20amazing%20product%20lifecycle%20%26%20development.%20Hope%20to%20connect%20with%20you%20soon.%0D%0AThanks%20%26%20Regards%2C%0D%0A${formData.name}`
      );
    }
  };
  return (
    <div className="page8_container" id="Waitinglist">
      <div className="page8_container_text">
        <div className="title">Book A Demo Now</div>
      </div>

      <div className="page8_text_container">
        <div className="card_container">
          <div className="email_container">
            {formSubmitted ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <AiFillCheckCircle color="#00CF33" size={200} />
                <div
                  style={{
                    fontSize: 30,
                    color: "#ffffff",
                    textAlign: "center",
                    fontWeight: "bolder",
                    margin: "40px 0px 30px 0px",
                  }}
                >
                  Thankyou for your Response!
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Our Team will soon get back to you.
                </div>
              </div>
            ) : (
              <div>
                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Name <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="input_style"
                      name="name"
                      placeholder={"Ex. John Doe"}
                    />
                  </div>
                </div>
                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Email <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="input_style"
                      name="email"
                      placeholder={"Ex. mail@website.com"}
                    />
                  </div>
                </div>
                  {user }    
                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Password <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="input_style"
                      name="password"
                      placeholder={"Ex. *******"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Company Name <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="input_style"
                      name="company name"
                      placeholder={"Ex. XYZ PVT LTD"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 15 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Your title <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="text"
                      value={formData.designation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          designation: e.target.value,
                        })
                      }
                      className="input_style"
                      name="designation"
                      placeholder={"Ex. Operational Head"}
                    />
                  </div>
                </div>

                <a
                  href={"#Waitinglist"}
                  className="button_container_style"
                  onClick={() => joinButton()}
                >
                  <div>
                    <span className="text_button">Book Demo</span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <img src='https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp' className="waiting_list" />
    </div>
  );
};

export default Login;
