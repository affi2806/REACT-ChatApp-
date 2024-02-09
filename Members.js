// Import necessary React modules
import React from 'react';

// Member component to display individual member details
const Member = ({ member }) => {
  return (
    <div>
      <h3>{member.name}</h3>
      <p>Email: {member.email}</p>
      <p>Role: {member.role}</p>
      {/* Add more member details as needed */}
    </div>
  );
};

// MembersList component to display a list of members
const MembersList = ({ members }) => {
  return (
    <div>
      {members.map((member, index) => (
        <Member key={index} member={member} />
      ))}
    </div>
  );
};

// Main MembersPage component
const MembersPage = () => {
  const members = [
    { name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
    // Add more members as needed
  ];

  return (
    <div>
      <h1>Members Page</h1>
      <MembersList members={members} />
    </div>
  );
};

export default MembersPage;
