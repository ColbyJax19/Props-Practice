// Exercise 2: User List
// Create a component called UserList that accepts an array of user objects as a prop. Each user object should have properties like id, name, and age. Display the list of users by mapping over the array and rendering each user's name and age.

const UserList = ({ name, age }) => {
  return (
    <div className="user-container">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserList;
