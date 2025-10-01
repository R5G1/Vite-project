import { Button } from '../button/button';
import classes from '../styles/PortfolioSection.module.css';
import Modal from '../modal/Modal';
import { useState, useEffect } from 'react';

export default function PortfolioSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function fetchPortfolioData() {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    fetchPortfolioData();
  }, []);

  return (
    <section className={classes.portfolioSection}>
      <h2>Портфолио</h2>
      <p>Информация о портфолио.</p>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}>
        {selectedUser && (
          <>
            <h3>{selectedUser.name}</h3>
            <p>
              <b>Username:</b> {selectedUser.username}
            </p>
            <p>
              <b>Email:</b> {selectedUser.email}
            </p>
            <p>
              <b>Phone:</b> {selectedUser.phone}
            </p>
            <p>
              <b>Company:</b> {selectedUser.company?.name}
            </p>
            <p>
              <b>website:</b>{' '}
              <a href={`#`} target="_blank" rel="noopener noreferrer">
                {selectedUser.website}
              </a>
            </p>
          </>
        )}
      </Modal>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          {users.map((user) => (
            <div key={user.id}>
              <Button
                onClick={() => {
                  setSelectedUser(user);
                  setIsModalOpen(true);
                }}>
                {user.name}
              </Button>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
