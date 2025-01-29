import React, { useState } from "react";

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openToClicked, setOpenToClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // To handle dropdown visibility

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleOpenToClick = () => {
    setOpenToClicked(!openToClicked);
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    alert("Profile sections submitted!");
  };

  return (
    <div
      style={{
        background: "#fff",
        width: "500px",
        margin: "50px auto",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            margin: "0 auto",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#ccc",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                'url("https://i.pinimg.com/736x/25/53/17/255317086927f3236bbfc61e8a74d97a.jpg") no-repeat center/cover',
            }}
          ></div>
        </div>
        <h2 style={{ margin: "10px 0 5px 0", fontSize: "24px" }}>
          John Smith
          <button
            style={{
              marginLeft: "10px",
              fontSize: "18px",
              color: "#0073b1",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              width:"100%",
              height:"35px",
            }}
            onClick={() => alert("Edit Name and Profile Picture")}
          >✎
          </button>
        </h2>
        <p style={{ fontSize: "14px", color: "#666" }}>
          CEO and co-founder of Service Inc. <br /> Helping teams automate
          their sales 🚀
        </p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Washington, United States • 900+ Connections
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
          }}
        >
          <button
            onClick={handleOpenToClick}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              color: openToClicked ? "#fff" : "#0073b1",
              backgroundColor: openToClicked ? "#0073b1" : "#fff",
              border: "2px solid #0073b1",
              borderRadius: "20px",
              cursor: "pointer",
              textTransform: "uppercase",
              width:"30% 30%",
              height:"5px 30px",
            }}
          >
            Open to
          </button>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              color: "#0073b1",
              backgroundColor: "#fff",
              border: "2px solid #0073b1",
              borderRadius: "20px",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
            onClick={togglePopup}
          >
            Add 
            profile section
          </button>
          <button
            style={{
              padding: "10px",
              fontSize: "20px",
              color: "#0073b1",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={toggleMenu}
          >
            ⋮
          </button>
        </div>

        {/* Dropdown for "Hiring" and "Providing Services" */}
        {showDropdown && (
          <div
            style={{
              marginTop: "10px",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "10px",
              width: "250px",
            }}
          >
            <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              <li
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  color: "#000000",
                  fontSize: "14px",
                }}
              >
                Hiring
              </li>
              <li
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  color: "#000000c",
                  fontSize: "14px",
                }}
              >
                Providing Services
              </li>
            </ul>
          </div>
        )}
      </div>

      {showPopup && (
        <div
          style={{
            marginTop: "20px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "18px", color: "#333" }}>Add to profile</h3>
          <form>
            {["Education", "Position", "Career Break", "Skills", "Additional"].map(
              (field, index) => (
                <div style={{ margin: "10px 0" }} key={index}>
                  <label style={{ fontSize: "14px", color: "#666" }}>
                    {field}:
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginTop: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              )
            )}
            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#0073b1",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            >
              Allright!!!  Done✨
            </button>
          </form>
        </div>
      )}

      {showMenu && (
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "30px",
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "10px",
            width: "250px",
          }}
        >
          <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
            {[
              { icon: "✉", label: "Share profile via message" },
              { icon: "🔗", label: "Share profile via..." },
              { icon: "📇", label: "Contact info" },
              { icon: "👤", label: "Personal demographic information" },
              { icon: "📊", label: "Activity" },
              { icon: "📁", label: "My items" },
              { icon: "ℹ", label: "About this profile" },
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  cursor: "pointer",
                  color: "#0073b1",
                  fontSize: "14px",
                  borderBottom: index !== 6 ? "1px solid #ddd" : "none",
                }}
              >
                <span style={{ marginRight: "10px" }}>{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;