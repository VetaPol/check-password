import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('Weak');

  const checkPasswordStrength = (inputPassword) => {
   
    const lengthCriteria = 8;
    const mediumCriteria = 12;

    if (inputPassword.length >= mediumCriteria) {
      setStrength('Strong');
    } else if (inputPassword.length >= lengthCriteria) {
      setStrength('Medium');
    } else {
      setStrength('Weak');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div>
        <strong>Password Strength:</strong> {strength}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
