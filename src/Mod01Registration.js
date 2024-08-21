import React, { useState } from 'react';
import './App.css';

function Registration() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address, setAddress] = useState('');
    const [coi, setCoi] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [emergencyCN, setEmergencyCN] = useState('');
    const [emergencyCPN, setEmergencyCPN] = useState('');
    const [addcomm, setAddcomm] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", {
            fullname, email, dob, age, gender, phonenumber,
            address, coi, enrollment, emergencyCN, emergencyCPN, addcomm,
        });
        setSubmitted(true);
    };

    return (
        <div className="Registration">
            <div className="registration-container">
                <header>
                    <h1>Student Enrollment Form</h1>
                    <form onSubmit={handleSubmit} className="registration-form">
                        <div>
                            <label htmlFor="fullname">Fullname: </label>
                            <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="dob">Date of Birth: </label>
                            <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="age">Age: </label>
                            <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="gender">Gender: </label>
                            <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="phonenumber">Phone Number: </label>
                            <input type="tel" id="phonenumber" name="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="address">Address: </label>
                            <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="coi">Course of Interest: </label>
                            <select id="coi" name="coi" value={coi} onChange={(e) => setCoi(e.target.value)} required>
                                <option value="">Select a Course of Interest</option>
                                <option value="con">CON</option>
                                <option value="camp">CAMP</option>
                                <option value="CBA">CBA</option>
                                <option value="CCS">CCS</option>
                                <option value="CAS">CAS</option>
                                <option value="CEA">CEA</option>
                                <option value="CED">CED</option>
                                <option value="CCJEF">CCJEF</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="enrollment">Preferred Enrollment Term: </label>
                            <select id="enrollment" name="enrollment" value={enrollment} onChange={(e) => setEnrollment(e.target.value)} required>
                                <option value="">Select Term</option>
                                <option value="1st Semester">1st Semester</option>
                                <option value="2nd Semester">2nd Semester</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="emergencyCN">Emergency Contact Name: </label>
                            <input type="text" id="emergencyCN" name="emergencyCN" value={emergencyCN} onChange={(e) => setEmergencyCN(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="emergencyCPN">Emergency Contact Phone Number: </label>
                            <input type="tel" id="emergencyCPN" name="emergencyCPN" value={emergencyCPN} onChange={(e) => setEmergencyCPN(e.target.value)} required />
                        </div>

                        <div>
                            <label htmlFor="addcomm">Additional Comments: </label>
                            <textarea id="addcomm" name="addcomm" value={addcomm} onChange={(e) => setAddcomm(e.target.value)} required />
                        </div>
                        <button className="btn" type="submit">Register</button>
                    </form>
                    {submitted && (<p className="success-message">Registration successful!</p>)}
                </header>
            </div>
        </div>
    );
}

export default Registration;
