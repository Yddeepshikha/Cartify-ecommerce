// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showSignup, setShowSignup] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Dummy login check (replace with real API later)
//     if (email === "test@example.com" && password === "123456") {
//       alert("✅ Successfully logged in!");
//       navigate("/");
//     } else {
//       alert("❌ Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2 style={{ textAlign: "center" }}>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div style={{ marginBottom: "1rem" }}>
//           <label>Email or Username</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           />
//         </div>
//         <div style={{ marginBottom: "1rem" }}>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           />
//         </div>
//         <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#000", color: "#fff" }}>
//           Login
//         </button>
//       </form>

//       <div style={{ textAlign: "center", marginTop: "1rem" }}>
//         New user?{" "}
//         <span
//           onClick={() => setShowSignup(true)}
//           style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
//         >
//           Sign Up
//         </span>
//       </div>

//       {showSignup && (
//         <div style={{ textAlign: "center", marginTop: "1rem", color: "green" }}>
//           👤 Signup form coming soon!
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check (replace with real API later)
    if (email === "test@example.com" && password === "123456") {
      alert("✅ Successfully logged in!");
      navigate("/");
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email or Username</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#000", color: "#fff" }}>
          Login
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        New user?{" "}
        <span
          onClick={() => navigate("/signup")}
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
}

export default Login;
