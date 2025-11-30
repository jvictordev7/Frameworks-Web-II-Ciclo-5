import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Alert,
  Container,
  Grid,
  Snackbar,
  Typography,
} from '@mui/material';
import { API_URL } from './config';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formResetToken, setFormResetToken] = useState(0);
  const [feedback, setFeedback] = useState({
    open: false,
    message: '',
    type: 'success',
  });

  const loadUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data || []);
    } catch (error) {
      setFeedback({
        open: true,
        message: 'Erro ao carregar usuários.',
        type: 'error',
      });
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSave = async (user) => {
    const isEditing = Boolean(user.id);
    try {
      if (isEditing) {
        await axios.put(`${API_URL}/users/${user.id}`, user);
      } else {
        await axios.post(`${API_URL}/users`, user);
      }

      setFeedback({
        open: true,
        message: isEditing
          ? 'Usuário atualizado com sucesso.'
          : 'Usuário cadastrado com sucesso.',
        type: 'success',
      });

      setEditingUser(null);
      setFormResetToken((value) => value + 1);
      loadUsers();
    } catch (error) {
      setFeedback({
        open: true,
        message: 'Não foi possível salvar o usuário.',
        type: 'error',
      });
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Deseja realmente remover este usuário?');
    if (!confirmed) return;

    try {
      await axios.delete(`${API_URL}/users/${id}`);
      setFeedback({
        open: true,
        message: 'Usuário removido com sucesso.',
        type: 'success',
      });
      if (editingUser?.id === id) {
        setEditingUser(null);
        setFormResetToken((value) => value + 1);
      }
      loadUsers();
    } catch (error) {
      setFeedback({
        open: true,
        message: 'Erro ao remover usuário.',
        type: 'error',
      });
    }
  };

  const handleCloseFeedback = () => {
    setFeedback((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" className="app-shell">
      <header className="app-header">
        <div className="pill">Dashboard</div>
        <Typography variant="h4" component="h1" gutterBottom className="app-title">
          Central de Pessoas
        </Typography>
        <Typography className="app-subtitle">
          Cadastre, edite e acompanhe os membros em uma interface moderna e intuitiva.
        </Typography>
      </header>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={5}>
          <div className="app-card">
          <UserForm
            onSave={handleSave}
            editingUser={editingUser}
            onCancelEdit={() => setEditingUser(null)}
            resetToken={formResetToken}
          />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className="app-card">
            <UserList
              users={users}
              onEdit={(user) => setEditingUser(user)}
              onDelete={handleDelete}
            />
          </div>
        </Grid>
      </Grid>

      <Snackbar
        open={feedback.open}
        autoHideDuration={4000}
        onClose={handleCloseFeedback}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseFeedback}
          severity={feedback.type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
